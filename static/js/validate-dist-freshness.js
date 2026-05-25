const {spawnSync} = require("child_process");
const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const DIST_DIR = path.join(PROJECT_ROOT, "dist");
const BUILD_SCRIPT = path.join(PROJECT_ROOT, "static/js/build.js");
const CACHE_DIR = path.join(PROJECT_ROOT, "node_modules", ".cache");

function toPosix(value) {
    return value.split(path.sep).join("/");
}

function listFiles(root) {
    if (!fs.existsSync(root)) return [];

    const out = [];

    function walk(current) {
        const entries = fs.readdirSync(current, {withFileTypes: true})
            .sort((a, b) => a.name.localeCompare(b.name));

        for (const entry of entries) {
            const fullPath = path.join(current, entry.name);

            if (entry.isDirectory()) {
                walk(fullPath);
                continue;
            }

            out.push(toPosix(path.relative(root, fullPath)));
        }
    }

    walk(root);
    return out.sort();
}

function compareFiles(expectedRoot, actualRoot) {
    const expectedFiles = listFiles(expectedRoot);
    const actualFiles = listFiles(actualRoot);
    const expectedSet = new Set(expectedFiles);
    const actualSet = new Set(actualFiles);
    const findings = [];

    for (const file of expectedFiles) {
        if (!actualSet.has(file)) {
            findings.push({file, reason: "missing from checked-in dist"});
        }
    }

    for (const file of actualFiles) {
        if (!expectedSet.has(file)) {
            findings.push({file, reason: "stale or unexpected file in checked-in dist"});
        }
    }

    for (const file of expectedFiles) {
        if (!actualSet.has(file)) continue;

        const expected = fs.readFileSync(path.join(expectedRoot, file));
        const actual = fs.readFileSync(path.join(actualRoot, file));

        if (!expected.equals(actual)) {
            findings.push({file, reason: "content differs from freshly generated output"});
        }
    }

    return {
        expectedCount: expectedFiles.length,
        actualCount: actualFiles.length,
        findings,
    };
}

function runFreshBuild(outDir) {
    const result = spawnSync(
        process.execPath,
        [BUILD_SCRIPT, "--out", outDir],
        {
            cwd: PROJECT_ROOT,
            env: {
                ...process.env,
                NODE_ENV: "development",
            },
            encoding: "utf8",
            maxBuffer: 1024 * 1024 * 20,
        },
    );

    if (result.status !== 0) {
        if (result.stdout) process.stdout.write(result.stdout);
        if (result.stderr) process.stderr.write(result.stderr);
        throw new Error(`temporary dist build failed with exit code ${result.status}`);
    }
}

function main() {
    fs.mkdirSync(CACHE_DIR, {recursive: true});
    const tempRoot = fs.mkdtempSync(path.join(CACHE_DIR, "vds-dist-check-"));
    const tempDist = path.join(tempRoot, "dist");

    try {
        runFreshBuild(tempDist);

        const {expectedCount, actualCount, findings} = compareFiles(tempDist, DIST_DIR);

        if (findings.length === 0) {
            console.log(`Dist freshness audit passed: ${actualCount} checked-in files match freshly generated output.`);
            return;
        }

        console.log(`Dist freshness audit findings: ${findings.length} issue(s), ${actualCount} checked-in files, ${expectedCount} freshly generated files.`);
        for (const finding of findings.slice(0, 80)) {
            console.log(`- ${finding.file}: ${finding.reason}`);
        }
        if (findings.length > 80) {
            console.log(`- ... ${findings.length - 80} more finding(s)`);
        }

        process.exitCode = 1;
    } finally {
        fs.rmSync(tempRoot, {recursive: true, force: true});
    }
}

main();
