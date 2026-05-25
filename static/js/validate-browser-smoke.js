const fs = require("fs");
const http = require("http");
const path = require("path");
const {spawnSync} = require("child_process");
const {chromium} = require("playwright-core");
const axeSource = require("axe-core").source;

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const ROUTES = [
    "home",
    "buttons",
    "forms",
    "navigation",
    "overlays",
    "tables",
    "toasts",
    "progress",
    "skeleton",
    "android-shell",
    "charts",
    "identity",
    "theming",
    "recipes",
];
const VIEWPORTS = [
    {name: "desktop", width: 1280, height: 900},
    {name: "mobile", width: 390, height: 844},
];
const THEME_ROUTES = ["home", "buttons", "forms", "tables", "identity", "theming"];
const MOTION_ROUTES = ["toasts", "progress", "skeleton"];
const FORCED_COLORS_ROUTES = ["home", "buttons", "forms", "tables", "toasts", "identity"];
const AXE_ROUTES = ["home", "buttons", "forms", "overlays", "tables", "toasts", "theming", "recipes"];
const OVERFLOW_TOLERANCE_PX = 8;

function contentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const types = {
        ".css": "text/css; charset=utf-8",
        ".html": "text/html; charset=utf-8",
        ".ico": "image/x-icon",
        ".js": "text/javascript; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".png": "image/png",
        ".svg": "image/svg+xml; charset=utf-8",
        ".webp": "image/webp",
    };
    return types[ext] || "application/octet-stream";
}

function resolvePublicPath(requestUrl) {
    const url = new URL(requestUrl, "http://127.0.0.1");
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === "/favicon.ico") {
        return {status: 204};
    }

    if (pathname === "/" || !path.extname(pathname)) {
        return {filePath: path.join(PROJECT_ROOT, "index.html")};
    }

    pathname = path.normalize(pathname).replace(/^(\.\.[/\\])+/, "");
    const filePath = path.resolve(PROJECT_ROOT, pathname.replace(/^[/\\]+/, ""));

    if (!filePath.startsWith(PROJECT_ROOT + path.sep)) {
        return {status: 403};
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return {filePath};
    }

    return {status: 404};
}

function startServer() {
    const server = http.createServer((req, res) => {
        try {
            const resolved = resolvePublicPath(req.url || "/");

            if (resolved.status && !resolved.filePath) {
                res.writeHead(resolved.status);
                res.end();
                return;
            }

            const body = fs.readFileSync(resolved.filePath);
            res.writeHead(200, {"Content-Type": contentType(resolved.filePath)});
            res.end(body);
        } catch (error) {
            res.writeHead(500, {"Content-Type": "text/plain; charset=utf-8"});
            res.end(`VDS smoke server error: ${error.message}`);
        }
    });

    return new Promise((resolve, reject) => {
        server.once("error", reject);
        server.listen(0, "127.0.0.1", () => {
            const address = server.address();
            resolve({
                baseUrl: `http://127.0.0.1:${address.port}`,
                close: () => new Promise((done) => server.close(done)),
            });
        });
    });
}

function findChromiumExecutable() {
    if (process.env.VDS_CHROMIUM) {
        if (fs.existsSync(process.env.VDS_CHROMIUM)) {
            return process.env.VDS_CHROMIUM;
        }

        throw new Error(`VDS_CHROMIUM points at a missing executable: ${process.env.VDS_CHROMIUM}`);
    }

    const result = spawnSync("sh", ["-lc", "command -v chromium-browser || command -v chromium || command -v google-chrome-stable || command -v google-chrome"], {
        encoding: "utf8",
    });
    const executable = result.stdout.trim().split(/\r?\n/).filter(Boolean)[0];

    if (!executable) {
        throw new Error("Chromium was not found. Install chromium-browser or set VDS_CHROMIUM=/path/to/chrome.");
    }

    return executable;
}

function trackPageErrors(page) {
    const errors = [];

    page.on("console", (message) => {
        if (message.type() === "error") {
            errors.push(`console error: ${message.text()}`);
        }
    });

    page.on("pageerror", (error) => {
        errors.push(`page error: ${error.message}`);
    });

    return errors;
}

function assertNoPageErrors(errors, label) {
    if (errors.length > 0) {
        throw new Error(`${label} emitted browser errors:\n- ${errors.join("\n- ")}`);
    }
}

async function assertRendered(page, label) {
    await page.waitForSelector("#doc-content h1", {timeout: 10000});
    await page.waitForLoadState("networkidle", {timeout: 10000}).catch(() => {});

    const state = await page.evaluate(() => {
        const content = document.querySelector("#doc-content");
        const h1 = content ? content.querySelector("h1") : null;
        const h1Rect = h1 ? h1.getBoundingClientRect() : null;
        const root = document.documentElement;
        const body = document.body;
        const scrollWidth = Math.max(root.scrollWidth, body ? body.scrollWidth : 0);

        return {
            busy: content ? content.getAttribute("aria-busy") : null,
            contentLength: content ? content.innerText.trim().length : 0,
            h1: h1 ? h1.innerText.trim() : "",
            h1Visible: Boolean(h1Rect && h1Rect.width > 0 && h1Rect.height > 0),
            overflow: scrollWidth - window.innerWidth,
            title: document.title,
        };
    });

    if (!state.h1 || !state.h1Visible) {
        throw new Error(`${label} did not render a visible h1.`);
    }

    if (state.contentLength < 80) {
        throw new Error(`${label} rendered unexpectedly sparse doc content.`);
    }

    if (state.busy === "true") {
        throw new Error(`${label} left #doc-content aria-busy=true after load.`);
    }

    if (!state.title.endsWith(" — VDS")) {
        throw new Error(`${label} did not set a stable VDS document title. Found: ${state.title}`);
    }

    if (state.overflow > OVERFLOW_TOLERANCE_PX) {
        throw new Error(`${label} has horizontal overflow of ${state.overflow}px.`);
    }
}

async function loadRoute(page, baseUrl, route, label) {
    const errors = trackPageErrors(page);
    await page.goto(`${baseUrl}/${route}`, {waitUntil: "domcontentloaded"});
    await assertRendered(page, label);
    assertNoPageErrors(errors, label);
}

async function withPage(context, task) {
    const page = await context.newPage();
    try {
        await task(page);
    } finally {
        await page.close();
    }
}

async function runResponsiveSmoke(browser, baseUrl) {
    for (const viewport of VIEWPORTS) {
        const context = await browser.newContext({viewport});

        try {
            for (const route of ROUTES) {
                await withPage(context, async (page) => {
                    await loadRoute(page, baseUrl, route, `${viewport.name}/${route}`);
                });
            }
        } finally {
            await context.close();
        }
    }
}

async function getThemeValues(page, baseUrl) {
    await page.goto(`${baseUrl}/home`, {waitUntil: "domcontentloaded"});
    await assertRendered(page, "theme discovery/home");
    return page.evaluate(() => {
        return Array.from(document.querySelectorAll('input[name="vg-theme"]'))
            .map((input) => input.value)
            .filter(Boolean);
    });
}

async function runThemeSmoke(browser, baseUrl) {
    const context = await browser.newContext({viewport: VIEWPORTS[0]});
    let themeValues = [];

    try {
        await withPage(context, async (page) => {
            themeValues = await getThemeValues(page, baseUrl);
        });
    } finally {
        await context.close();
    }

    if (themeValues.length === 0) {
        throw new Error("No docs theme values were found in the theme switcher.");
    }

    for (const route of THEME_ROUTES) {
        const routeContext = await browser.newContext({viewport: VIEWPORTS[0]});

        try {
            await withPage(routeContext, async (page) => {
                for (const theme of themeValues) {
                    await page.goto(`${baseUrl}/${route}`, {waitUntil: "domcontentloaded"});
                    await page.evaluate((value) => {
                        document.documentElement.setAttribute("data-theme", value);
                        localStorage.setItem("vg-theme", value);
                    }, theme);
                    await assertRendered(page, `theme/${theme}/${route}`);

                    const resolved = await page.evaluate(() => {
                        const rootStyle = getComputedStyle(document.documentElement);
                        const bodyStyle = getComputedStyle(document.body);
                        return {
                            background: rootStyle.getPropertyValue("--color-bg").trim(),
                            surface: rootStyle.getPropertyValue("--color-surface").trim(),
                            text: rootStyle.getPropertyValue("--color-text").trim(),
                            bodyBackground: bodyStyle.backgroundColor,
                            bodyColor: bodyStyle.color,
                            theme: document.documentElement.getAttribute("data-theme"),
                        };
                    });

                    if (resolved.theme !== theme) {
                        throw new Error(`Theme ${theme} did not remain active on ${route}.`);
                    }

                    for (const key of ["background", "surface", "text", "bodyColor"]) {
                        if (!resolved[key]) {
                            throw new Error(`Theme ${theme} on ${route} did not resolve ${key}.`);
                        }
                    }
                }
            });
        } finally {
            await routeContext.close();
        }
    }
}

async function runReducedMotionSmoke(browser, baseUrl) {
    const context = await browser.newContext({
        reducedMotion: "reduce",
        viewport: VIEWPORTS[0],
    });

    try {
        for (const route of MOTION_ROUTES) {
            await withPage(context, async (page) => {
                await loadRoute(page, baseUrl, route, `reduced-motion/${route}`);
            });
        }
    } finally {
        await context.close();
    }
}

async function runForcedColorsSmoke(browser, baseUrl) {
    const context = await browser.newContext({viewport: VIEWPORTS[0]});

    try {
        for (const route of FORCED_COLORS_ROUTES) {
            await withPage(context, async (page) => {
                await page.emulateMedia({forcedColors: "active"});
                await loadRoute(page, baseUrl, route, `forced-colors/${route}`);
            });
        }
    } catch (error) {
        if (/forcedColors|emulateMedia/i.test(error.message)) {
            console.warn(`Forced-colors smoke skipped: ${error.message}`);
            return;
        }

        throw error;
    } finally {
        await context.close();
    }
}

async function runAxeSmoke(browser, baseUrl) {
    const context = await browser.newContext({viewport: VIEWPORTS[0]});
    const seriousCritical = [];
    const moderateMinor = [];

    try {
        for (const route of AXE_ROUTES) {
            await withPage(context, async (page) => {
                await page.goto(`${baseUrl}/${route}`, {waitUntil: "domcontentloaded"});
                await assertRendered(page, `axe/${route}`);
                await page.addScriptTag({content: axeSource});

                const results = await page.evaluate(async () => {
                    return window.axe.run(document, {
                        runOnly: {
                            type: "tag",
                            values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
                        },
                    });
                });

                const blockers = results.violations.filter((violation) => {
                    return violation.impact === "serious" || violation.impact === "critical";
                });

                if (blockers.length > 0) {
                    seriousCritical.push(...blockers.flatMap((violation) => {
                        return violation.nodes.slice(0, 5).map((node) => {
                            return `${violation.id} (${violation.impact}) on ${route}: ${node.target.join(", ")}`;
                        });
                    }));
                }

                const informational = results.violations.filter((violation) => {
                    return violation.impact === "moderate" || violation.impact === "minor";
                });

                if (informational.length > 0) {
                    moderateMinor.push(`${route}: ${informational.length} moderate/minor finding group(s)`);
                }
            });
        }
    } finally {
        await context.close();
    }

    if (moderateMinor.length > 0) {
        console.warn(`Axe moderate/minor findings reported without failing:\n- ${moderateMinor.join("\n- ")}`);
    }

    if (seriousCritical.length > 0) {
        throw new Error(`Axe serious/critical findings:\n- ${seriousCritical.join("\n- ")}`);
    }
}

async function main() {
    const executablePath = findChromiumExecutable();
    const server = await startServer();
    let browser;

    try {
        browser = await chromium.launch({
            executablePath,
            headless: true,
            args: ["--disable-dev-shm-usage", "--no-sandbox"],
        });

        await runResponsiveSmoke(browser, server.baseUrl);
        await runThemeSmoke(browser, server.baseUrl);
        await runReducedMotionSmoke(browser, server.baseUrl);
        await runForcedColorsSmoke(browser, server.baseUrl);
        await runAxeSmoke(browser, server.baseUrl);

        console.log(`Browser smoke passed: ${ROUTES.length} routes across ${VIEWPORTS.length} viewports, theme, reduced-motion, forced-colors, and axe checks.`);
    } finally {
        if (browser) {
            await browser.close();
        }
        await server.close();
    }
}

main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});
