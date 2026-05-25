const fs = require("fs");
const path = require("path");
const glob = require("glob");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");

function extractClassesFromHtml(html) {
    const classes = new Set();
    const classRegex = /class\s*=\s*"([^"]+)"/g;
    let match;

    while ((match = classRegex.exec(html)) !== null) {
        for (const className of match[1].split(/\s+/).filter(Boolean)) {
            classes.add(className);
        }
    }

    return classes;
}

function extractClassesFromCss(css) {
    const classes = new Set();
    const classRegex = /\.([a-zA-Z_][a-zA-Z0-9_-]*)(?=[\s.#,:{\[])/g;
    let match;

    while ((match = classRegex.exec(css)) !== null) {
        classes.add(match[1]);
    }

    return classes;
}

function loadClasses(files, extractor) {
    const classes = new Set();

    for (const relPath of files) {
        const content = fs.readFileSync(path.join(PROJECT_ROOT, relPath), "utf8");
        for (const className of extractor(content)) {
            classes.add(className);
        }
    }

    return classes;
}

function difference(a, b) {
    return [...a].filter((value) => !b.has(value)).sort();
}

function intersection(a, b) {
    return [...a].filter((value) => b.has(value)).sort();
}

function main() {
    const cssFiles = glob.sync("src/**/*.css", {cwd: PROJECT_ROOT, nodir: true}).sort();
    const rawDocs = glob.sync("doc-raw/**/*.html", {cwd: PROJECT_ROOT, nodir: true}).sort();
    const definedClasses = loadClasses(cssFiles, extractClassesFromCss);
    const documentedClasses = loadClasses(rawDocs, extractClassesFromHtml);

    const publicClasses = intersection(definedClasses, documentedClasses);
    const candidatePublicClasses = difference(definedClasses, documentedClasses);
    const docsOnlyClasses = difference(documentedClasses, definedClasses);

    if (docsOnlyClasses.length === 0) {
        console.log(`Selector contract audit passed: ${definedClasses.size} CSS-defined, ${documentedClasses.size} documented, ${publicClasses.length} public, ${candidatePublicClasses.length} candidate-public, 0 docs-only.`);
        return;
    }

    console.log("Selector contract audit findings:");
    console.log(`- Docs-only classes (${docsOnlyClasses.length}): ${docsOnlyClasses.slice(0, 80).join(", ")}`);
    if (docsOnlyClasses.length > 80) {
        console.log(`  ...and ${docsOnlyClasses.length - 80} more.`);
    }
    process.exitCode = 1;
}

main();
