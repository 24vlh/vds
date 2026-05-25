const {spawnSync} = require("child_process");
const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const postcssImport = require("postcss-import");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const CACHE_DIR = path.join(PROJECT_ROOT, "node_modules", ".cache");
const FIXTURE_ROOT = path.join(CACHE_DIR, "vds-package-smoke");
const PACKAGE_ROOT = path.join(FIXTURE_ROOT, "node_modules", "@24vlh", "vds");
const CONSUMER_ROOT = path.join(FIXTURE_ROOT, "consumer");

function toPosix(value) {
    return value.split(path.sep).join("/");
}

function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, relPath), "utf8"));
}

function listCssFiles(relDir) {
    return fs.readdirSync(path.join(PROJECT_ROOT, relDir))
        .filter((file) => file.endsWith(".css") && !file.endsWith(".min.css"))
        .sort();
}

function runPnpmPackDryRun() {
    const result = spawnSync(
        "pnpm",
        ["pack", "--dry-run", "--json"],
        {
            cwd: PROJECT_ROOT,
            encoding: "utf8",
            maxBuffer: 1024 * 1024 * 10,
        },
    );

    if (result.status !== 0) {
        if (result.stdout) process.stdout.write(result.stdout);
        if (result.stderr) process.stderr.write(result.stderr);
        throw new Error(`pnpm pack --dry-run --json failed with exit code ${result.status}`);
    }

    const output = result.stdout.trim();
    const jsonStart = output.search(/[\[{]/);
    if (jsonStart === -1) {
        throw new Error("pnpm pack --dry-run --json did not emit JSON output");
    }

    const parsed = JSON.parse(output.slice(jsonStart));
    return Array.isArray(parsed) ? parsed[0] : parsed;
}

function expectedPackageFiles() {
    const expected = new Set(["package.json", "README.md", "LICENSE"]);

    for (const file of ["vds.css", "vds.min.css", "core.css", "core.min.css", "identity.css", "identity.min.css"]) {
        expected.add(`dist/${file}`);
    }

    for (const file of listCssFiles("dist/components")) {
        expected.add(`dist/components/${file}`);
        expected.add(`dist/components/${file.replace(/\.css$/, ".min.css")}`);
    }

    for (const file of listCssFiles("dist/themes")) {
        expected.add(`dist/themes/${file}`);
        expected.add(`dist/themes/${file.replace(/\.css$/, ".min.css")}`);
    }

    return expected;
}

function validatePackFiles(packInfo, packageJson) {
    const findings = [];
    const files = (packInfo.files || []).map((entry) => entry.path).sort();
    const fileSet = new Set(files);
    const expected = expectedPackageFiles();

    for (const relPath of expected) {
        if (!fileSet.has(relPath)) {
            findings.push(`missing expected package file: ${relPath}`);
        }
    }

    for (const relPath of files) {
        if (/^(?:src|doc-raw|docs\/planning|docs_vds|\.github)\//.test(relPath)) {
            findings.push(`forbidden package file: ${relPath}`);
        }
        if (relPath.endsWith(".map")) {
            findings.push(`source map should not be published: ${relPath}`);
        }
    }

    if (packageJson.files?.length !== 1 || packageJson.files[0] !== "dist") {
        findings.push(`expected package files policy ["dist"], found ${JSON.stringify(packageJson.files)}`);
    }

    if (packageJson.main !== "dist/vds.css") {
        findings.push(`expected package main dist/vds.css, found ${packageJson.main}`);
    }

    if (packageJson.style !== "dist/vds.css") {
        findings.push(`expected package style dist/vds.css, found ${packageJson.style}`);
    }

    return {files, findings};
}

function copyPackageFixture(files) {
    fs.rmSync(FIXTURE_ROOT, {recursive: true, force: true});
    fs.mkdirSync(PACKAGE_ROOT, {recursive: true});
    fs.mkdirSync(CONSUMER_ROOT, {recursive: true});

    for (const relPath of files) {
        const from = path.join(PROJECT_ROOT, relPath);
        const to = path.join(PACKAGE_ROOT, relPath);
        fs.mkdirSync(path.dirname(to), {recursive: true});
        fs.copyFileSync(from, to);
    }
}

async function smokeImport(name, css) {
    const inputPath = path.join(CONSUMER_ROOT, `${name}.css`);
    fs.writeFileSync(inputPath, css);

    const result = await postcss([postcssImport()])
        .process(css, {from: inputPath});

    const output = result.css.trim();
    if (!output) {
        throw new Error(`${name} produced empty CSS output`);
    }

    if (/@import\b/.test(output)) {
        throw new Error(`${name} left unresolved @import statements`);
    }
}

async function runImportSmokes() {
    const componentImports = listCssFiles("dist/components")
        .map((file) => `@import "@24vlh/vds/dist/components/${file}";`)
        .join("\n");
    const themeImports = listCssFiles("dist/themes")
        .map((file) => `@import "@24vlh/vds/dist/themes/${file}";`)
        .join("\n");

    const cases = [
        {
            name: "package-root",
            css: '@import "@24vlh/vds";',
        },
        {
            name: "full-bundle",
            css: '@import "@24vlh/vds/dist/vds.css";',
        },
        {
            name: "core-and-components",
            css: ['@import "@24vlh/vds/dist/core.css";', componentImports].join("\n"),
        },
        {
            name: "themes",
            css: themeImports,
        },
        {
            name: "identity",
            css: '@import "@24vlh/vds/dist/identity.css";',
        },
    ];

    for (const testCase of cases) {
        // eslint-disable-next-line no-await-in-loop
        await smokeImport(testCase.name, testCase.css);
    }

    return cases.map((testCase) => testCase.name);
}

async function main() {
    const packageJson = readJson("package.json");
    const packInfo = runPnpmPackDryRun();
    const {files, findings} = validatePackFiles(packInfo, packageJson);

    if (findings.length > 0) {
        console.log("Package smoke audit findings:");
        for (const finding of findings) {
            console.log(`- ${finding}`);
        }
        process.exitCode = 1;
        return;
    }

    try {
        copyPackageFixture(files);
        const cases = await runImportSmokes();
        console.log(`Package smoke audit passed: ${files.length} published files, ${cases.length} import cases, ${listCssFiles("dist/components").length} components, ${listCssFiles("dist/themes").length} themes.`);
    } finally {
        fs.rmSync(FIXTURE_ROOT, {recursive: true, force: true});
    }
}

main().catch((error) => {
    console.error(error.message || error);
    fs.rmSync(FIXTURE_ROOT, {recursive: true, force: true});
    process.exit(1);
});
