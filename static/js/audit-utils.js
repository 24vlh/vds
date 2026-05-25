const fs = require("fs");
const path = require("path");
const glob = require("glob");
const postcss = require("postcss");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const API_DIR = path.join(PROJECT_ROOT, "docs/planning/api");

function toPosix(value) {
    return value.split(path.sep).join("/");
}

function readText(relPath) {
    return fs.readFileSync(path.join(PROJECT_ROOT, relPath), "utf8");
}

function listFiles(pattern) {
    return glob.sync(pattern, {cwd: PROJECT_ROOT, nodir: true}).map(toPosix).sort();
}

function ensureDir(dir) {
    fs.mkdirSync(dir, {recursive: true});
}

function sortObject(value) {
    if (Array.isArray(value)) {
        return value.map(sortObject);
    }

    if (value && typeof value === "object") {
        return Object.keys(value).sort().reduce((next, key) => {
            next[key] = sortObject(value[key]);
            return next;
        }, {});
    }

    return value;
}

function stableJsonString(value) {
    return `${JSON.stringify(sortObject(value), null, 2)}\n`;
}

function writeStableJson(relPath, value) {
    const absPath = path.join(PROJECT_ROOT, relPath);
    ensureDir(path.dirname(absPath));
    fs.writeFileSync(absPath, stableJsonString(value));
}

function readJsonIfExists(relPath) {
    const absPath = path.join(PROJECT_ROOT, relPath);
    if (!fs.existsSync(absPath)) return null;
    return JSON.parse(fs.readFileSync(absPath, "utf8"));
}

function writeText(relPath, value) {
    const absPath = path.join(PROJECT_ROOT, relPath);
    ensureDir(path.dirname(absPath));
    fs.writeFileSync(absPath, value.endsWith("\n") ? value : `${value}\n`);
}

function moduleFromCssFile(relPath) {
    return relPath.replace(/^src\//, "").replace(/\.css$/, "");
}

function escapeMarkdown(value) {
    return String(value).replace(/\|/g, "\\|");
}

function renderMarkdownTable(headers, rows) {
    if (rows.length === 0) {
        return "";
    }

    const header = `| ${headers.map(escapeMarkdown).join(" | ")} |`;
    const divider = `| ${headers.map(() => "---").join(" | ")} |`;
    const body = rows.map((row) => `| ${row.map(escapeMarkdown).join(" | ")} |`);
    return [header, divider, ...body].join("\n");
}

function parseCss(relPath) {
    return postcss.parse(readText(relPath), {from: relPath});
}

function extractClassesFromHtml(html) {
    const classes = new Set();
    const classRegex = /\b(?:class|className)\s*=\s*["']([^"']+)["']/g;
    let match;

    while ((match = classRegex.exec(html)) !== null) {
        for (const className of match[1].split(/\s+/).filter(Boolean)) {
            classes.add(className);
        }
    }

    return classes;
}

function extractClassSelectors(relPath) {
    const root = parseCss(relPath);
    const classes = new Map();
    const classRegex = /\.(-?[_a-zA-Z][-_a-zA-Z0-9]*)(?=[\s.#,:>{~+\[\]()]|$)/g;

    root.walkRules((rule) => {
        const selectors = rule.selector.split(",").map((selector) => selector.trim()).filter(Boolean);

        for (const selector of selectors) {
            let match;

            while ((match = classRegex.exec(selector)) !== null) {
                const className = match[1];
                if (!classes.has(className)) classes.set(className, new Set());
                classes.get(className).add(selector);
            }
        }
    });

    return classes;
}

function addToFileMap(map, key, file) {
    if (!map.has(key)) map.set(key, new Set());
    map.get(key).add(file);
}

function sortedSet(value) {
    return [...value].sort();
}

function compareGenerated(relPath, expected) {
    const absPath = path.join(PROJECT_ROOT, relPath);
    if (!fs.existsSync(absPath)) {
        return `${relPath} is missing; run the matching inventory command.`;
    }

    const current = fs.readFileSync(absPath, "utf8");
    if (current !== expected) {
        return `${relPath} is stale; run the matching inventory command.`;
    }

    return null;
}

module.exports = {
    API_DIR,
    PROJECT_ROOT,
    addToFileMap,
    compareGenerated,
    ensureDir,
    extractClassesFromHtml,
    extractClassSelectors,
    listFiles,
    moduleFromCssFile,
    parseCss,
    readJsonIfExists,
    readText,
    renderMarkdownTable,
    sortedSet,
    stableJsonString,
    toPosix,
    writeStableJson,
    writeText,
};
