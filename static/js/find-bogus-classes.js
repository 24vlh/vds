// audit-missing-classes.js
// ---------------------------------------------
// Extracts:
//  - All classes used in /doc-raw/**/*.html
//  - All classes defined in /css/**/*.css
//  - Reports missing classes grouped per HTML file
// ---------------------------------------------

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// ========================
// 1. Extract classes from HTML
// ========================
function extractClassesFromHTML(html) {
    const classRegex = /class\s*=\s*"([^"]+)"/g;
    const classes = new Set();
    let match;

    while ((match = classRegex.exec(html)) !== null) {
        match[1]
            .split(/\s+/)
            .filter(Boolean)
            .forEach(cls => classes.add(cls));
    }

    return classes;
}

// ========================
// 2. Extract class definitions from CSS
// ========================
//
// We capture CSS “class selectors” only where they appear in selector context:
//
//   .button
//   .button:hover
//   .button__label
//   .button--primary
//   .alert[data-x]
//   .modal__header::before
//
// Avoids false hits like:
//   .875em
//   .5rem
//   "layout.css"
//   url("icons.svg#id")
//
function extractClassesFromCSS(css) {
    const classRegex = /\.([a-zA-Z_][a-zA-Z0-9_-]*)(?=[\s\.\#,:{\[])/g;
    const classes = new Set();
    let match;

    while ((match = classRegex.exec(css)) !== null) {
        classes.add(match[1]);
    }

    return classes;
}

// ========================
// 3. Load files
// ========================
function loadFiles(pattern) {
    return glob.sync(pattern).map(file => ({
        file,
        content: fs.readFileSync(file, "utf8"),
    }));
}

// ========================
// 4. Main
// ========================
function main() {
    const htmlFiles = loadFiles("doc-raw/**/*.html");
    const cssFiles = loadFiles("src/**/*.css");

    // Extract CSS-defined classes once
    const definedClasses = new Set();

    for (const {content} of cssFiles) {
        extractClassesFromCSS(content).forEach(c => definedClasses.add(c));
    }

    // Track missing classes per file
    const missingByFile = {};

    for (const {file, content} of htmlFiles) {
        const used = extractClassesFromHTML(content);
        const missing = [...used].filter(c => !definedClasses.has(c));

        if (missing.length > 0) {
            missingByFile[file] = missing.sort();
        }
    }

    // Output
    console.log("==============================================");
    console.log(" MISSING CSS CLASSES GROUPED BY HTML FILE");
    console.log("==============================================");

    const files = Object.keys(missingByFile);

    if (files.length === 0) {
        console.log("No missing classes. All HTML classes exist in CSS.");
        return;
    }

    for (const file of files) {
        console.log(`\n--- ${file} ---`);
        console.log(missingByFile[file]);
    }

    console.log("\n==============================================");
    console.log(" Missing classes count:", files.length);
    console.log("==============================================");
}

main();
