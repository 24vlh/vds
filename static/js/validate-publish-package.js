const {spawnSync} = require("child_process");
const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const DEFAULT_DIR = path.join(PROJECT_ROOT, "node_modules", ".cache", "vds-publish", "package");

function argValue(name) {
    const index = process.argv.indexOf(name);
    if (index !== -1) return process.argv[index + 1];
    const prefixed = process.argv.find((arg) => arg.startsWith(`${name}=`));
    return prefixed ? prefixed.slice(name.length + 1) : "";
}

function listCssFiles(relDir) {
    return fs.readdirSync(path.join(PROJECT_ROOT, relDir))
        .filter((file) => file.endsWith(".css") && !file.endsWith(".min.css"))
        .sort();
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

function runPackCommand(command, packageDir) {
    return spawnSync(command, ["pack", "--dry-run", "--json"], {
        cwd: packageDir,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
    });
}

function parsePackOutput(output) {
    const trimmed = output.trim();
    const jsonStart = trimmed.search(/[\[{]/);
    if (jsonStart === -1) {
        throw new Error("package pack dry run did not emit JSON output");
    }

    const parsed = JSON.parse(trimmed.slice(jsonStart));
    return Array.isArray(parsed) ? parsed[0] : parsed;
}

function runPackDryRun(packageDir) {
    const preferredCommand = process.env.VDS_PACK_COMMAND || "npm";
    let result = runPackCommand(preferredCommand, packageDir);

    if (result.status !== 0 && preferredCommand === "npm" && /npm, npx, and yarn are restricted|Use pnpm instead/i.test(`${result.stdout}\n${result.stderr}`)) {
        console.warn("npm is restricted in this local WSL environment; falling back to pnpm pack for dry-run validation.");
        result = runPackCommand("pnpm", packageDir);
    }

    if (result.status !== 0) {
        if (result.stdout) process.stdout.write(result.stdout);
        if (result.stderr) process.stderr.write(result.stderr);
        throw new Error(`package pack dry run failed with exit code ${result.status}`);
    }

    return parsePackOutput(result.stdout);
}

function validateMetadata(packageJson, findings) {
    if (packageJson.name !== "@24vlh/vds") {
        findings.push(`expected package name @24vlh/vds, found ${packageJson.name}`);
    }
    if (packageJson.main !== "dist/vds.css") {
        findings.push(`expected package main dist/vds.css, found ${packageJson.main}`);
    }
    if (packageJson.style !== "dist/vds.css") {
        findings.push(`expected package style dist/vds.css, found ${packageJson.style}`);
    }
    if (packageJson.files?.length !== 1 || packageJson.files[0] !== "dist") {
        findings.push(`expected files policy ["dist"], found ${JSON.stringify(packageJson.files)}`);
    }
    if (packageJson.scripts) {
        findings.push("sanitized publish package must not include lifecycle scripts");
    }
    if (packageJson.devDependencies) {
        findings.push("sanitized publish package must not include devDependencies");
    }
    if (packageJson["lint-staged"]) {
        findings.push("sanitized publish package must not include lint-staged config");
    }
}

function validatePackFiles(packInfo, findings) {
    const expected = expectedPackageFiles();
    const files = (packInfo.files || []).map((entry) => entry.path).sort();
    const fileSet = new Set(files);

    for (const relPath of expected) {
        if (!fileSet.has(relPath)) {
            findings.push(`missing expected publish file: ${relPath}`);
        }
    }

    for (const relPath of files) {
        if (!expected.has(relPath)) {
            findings.push(`unexpected publish file: ${relPath}`);
        }
        if (/^(?:src|doc-raw|docs|\.github|static|css|js)\//.test(relPath)) {
            findings.push(`forbidden publish file: ${relPath}`);
        }
        if (relPath.endsWith(".map")) {
            findings.push(`source map should not be published: ${relPath}`);
        }
    }

    return files;
}

function main() {
    const packageDir = path.resolve(PROJECT_ROOT, argValue("--dir") || process.env.VDS_PUBLISH_DIR || DEFAULT_DIR);
    const packageJsonPath = path.join(packageDir, "package.json");

    if (!fs.existsSync(packageJsonPath)) {
        throw new Error(`Prepared publish package is missing: ${packageDir}`);
    }

    const findings = [];
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    const packInfo = runPackDryRun(packageDir);

    validateMetadata(packageJson, findings);
    const files = validatePackFiles(packInfo, findings);

    if (findings.length > 0) {
        console.log("Publish package findings:");
        for (const finding of findings) {
            console.log(`- ${finding}`);
        }
        process.exitCode = 1;
        return;
    }

    console.log(`Publish package audit passed: ${files.length} files from ${packageDir}.`);
}

main();
