const fs = require("fs");
const path = require("path");
const glob = require("glob");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");

function exists(relPath) {
    return fs.existsSync(path.join(PROJECT_ROOT, relPath));
}

function pushMissing(findings, relPath, reason = "missing expected package-facing file") {
    if (!exists(relPath)) {
        findings.push({relPath, reason});
    }
}

function main() {
    const packageJson = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, "package.json"), "utf8"));
    const findings = [];
    const expected = [];

    for (const relPath of ["dist/vds.css", "dist/vds.min.css", "dist/core.css", "dist/core.min.css", "dist/identity.css", "dist/identity.min.css"]) {
        expected.push(relPath);
    }

    const componentFiles = glob.sync("src/components/*.css", {cwd: PROJECT_ROOT}).sort();
    for (const source of componentFiles) {
        const name = path.basename(source, ".css");
        expected.push(`dist/components/${name}.css`);
        expected.push(`dist/components/${name}.min.css`);
    }

    const themeFiles = glob.sync("src/themes/*.css", {cwd: PROJECT_ROOT}).sort();
    for (const source of themeFiles) {
        const name = path.basename(source, ".css");
        expected.push(`dist/themes/${name}.css`);
        expected.push(`dist/themes/${name}.min.css`);
    }

    for (const relPath of expected) {
        pushMissing(findings, relPath);
    }

    for (const field of ["main", "style"]) {
        const relPath = packageJson[field];
        if (!relPath) {
            findings.push({relPath: `package.json#${field}`, reason: "missing package CSS entry field"});
        } else if (!exists(relPath)) {
            findings.push({relPath, reason: `package ${field} points at a missing file`});
        }
    }

    if (packageJson.main !== "dist/vds.css") {
        findings.push({relPath: "package.json#main", reason: `expected dist/vds.css, found ${packageJson.main}`});
    }

    if (packageJson.style !== "dist/vds.css") {
        findings.push({relPath: "package.json#style", reason: `expected dist/vds.css, found ${packageJson.style}`});
    }

    const sourceMaps = glob.sync("dist/**/*.map", {cwd: PROJECT_ROOT, nodir: true}).sort();
    for (const relPath of sourceMaps) {
        findings.push({relPath, reason: "source maps are not part of the current checked-in dist contract"});
    }

    if (findings.length === 0) {
        console.log(`Dist presence audit passed: ${expected.length} expected files, ${componentFiles.length} components, ${themeFiles.length} themes.`);
        return;
    }

    console.log("Dist presence audit findings:");
    for (const finding of findings) {
        console.log(`- ${finding.relPath}: ${finding.reason}`);
    }
    process.exitCode = 1;
}

main();
