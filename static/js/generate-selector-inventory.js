const path = require("path");
const {
    addToFileMap,
    compareGenerated,
    ensureDir,
    extractClassesFromHtml,
    extractClassSelectors,
    listFiles,
    moduleFromCssFile,
    readJsonIfExists,
    readText,
    renderMarkdownTable,
    sortedSet,
    stableJsonString,
    writeStableJson,
    writeText,
    API_DIR,
} = require("./audit-utils");

const INVENTORY_JSON = "docs/planning/api/vds-selector-inventory.json";
const INVENTORY_MD = "docs/planning/api/vds-selector-inventory.md";
const OVERRIDES_JSON = "docs/planning/api/vds-selector-classification-overrides.json";
const GENERATED_BY = "static/js/generate-selector-inventory.js";
const ALLOWED_OVERRIDE_CLASSIFICATIONS = new Set(["internal", "legacy-compatible", "deprecated", "public", "candidate-public"]);

function defaultOverrides() {
    return {
        schemaVersion: 1,
        description: "Manual selector classification overrides. Use only for intentional internal, legacy-compatible, deprecated, public, or candidate-public classification changes.",
        classes: {},
    };
}

function normalizeOverrides(raw) {
    const overrides = raw || defaultOverrides();
    const normalized = {};

    for (const [className, value] of Object.entries(overrides.classes || {})) {
        const override = typeof value === "string" ? {classification: value} : value;

        if (!override || !ALLOWED_OVERRIDE_CLASSIFICATIONS.has(override.classification)) {
            throw new Error(`${OVERRIDES_JSON}: invalid classification override for ${className}`);
        }

        normalized[className] = {
            classification: override.classification,
            reason: override.reason || "",
        };
    }

    return {
        file: {
            schemaVersion: overrides.schemaVersion || 1,
            description: overrides.description || defaultOverrides().description,
            classes: normalized,
        },
        classes: normalized,
    };
}

function increment(target, key, amount = 1) {
    target[key] = (target[key] || 0) + amount;
}

function createInventory() {
    const cssFiles = listFiles("src/**/*.css");
    const htmlFiles = listFiles("doc-raw/**/*.html");
    const sourceFilesByClass = new Map();
    const docsFilesByClass = new Map();
    const selectorsByClass = new Map();
    const modulesByClass = new Map();

    for (const relPath of cssFiles) {
        const moduleName = moduleFromCssFile(relPath);
        const classSelectors = extractClassSelectors(relPath);

        for (const [className, selectors] of classSelectors.entries()) {
            addToFileMap(sourceFilesByClass, className, relPath);
            addToFileMap(modulesByClass, className, moduleName);
            if (!selectorsByClass.has(className)) selectorsByClass.set(className, new Set());
            for (const selector of selectors) {
                selectorsByClass.get(className).add(selector);
            }
        }
    }

    for (const relPath of htmlFiles) {
        for (const className of extractClassesFromHtml(readText(relPath))) {
            addToFileMap(docsFilesByClass, className, relPath);
        }
    }

    const overrides = normalizeOverrides(readJsonIfExists(OVERRIDES_JSON));
    const allClasses = [...new Set([
        ...sourceFilesByClass.keys(),
        ...docsFilesByClass.keys(),
        ...Object.keys(overrides.classes),
    ])].sort();

    const byClassification = {};
    const byModule = {};
    const classes = allClasses.map((className) => {
        const sourceFiles = sortedSet(sourceFilesByClass.get(className) || new Set());
        const docsFiles = sortedSet(docsFilesByClass.get(className) || new Set());
        const modules = sortedSet(modulesByClass.get(className) || new Set());
        const selectorSamples = sortedSet(selectorsByClass.get(className) || new Set()).slice(0, 8);
        const defined = sourceFiles.length > 0;
        const documented = docsFiles.length > 0;
        const override = overrides.classes[className] || null;
        let classification = "docs-only";

        if (defined && documented) classification = "public";
        else if (defined) classification = "candidate-public";

        if (override) classification = override.classification;

        increment(byClassification, classification);

        for (const moduleName of modules.length > 0 ? modules : ["docs-only"]) {
            if (!byModule[moduleName]) {
                byModule[moduleName] = {
                    total: 0,
                    public: 0,
                    "candidate-public": 0,
                    "docs-only": 0,
                    internal: 0,
                    "legacy-compatible": 0,
                    deprecated: 0,
                };
            }

            byModule[moduleName].total += 1;
            byModule[moduleName][classification] = (byModule[moduleName][classification] || 0) + 1;
        }

        return {
            className,
            classification,
            defined,
            documented,
            sourceFiles,
            docsFiles,
            modules,
            selectorSamples,
            override,
        };
    });

    const definedClasses = classes.filter((entry) => entry.defined).length;
    const documentedClasses = classes.filter((entry) => entry.documented).length;
    const docsOnlyClasses = classes.filter((entry) => entry.classification === "docs-only").length;

    return {
        schemaVersion: 2,
        generatedBy: GENERATED_BY,
        scope: {
            sourceCss: "src/**/*.css",
            rawDocs: "doc-raw/**/*.html",
            inventory: "classes/selectors only",
        },
        classificationContract: {
            public: "Class is defined in source CSS and used in raw docs.",
            candidatePublic: "Class is defined in source CSS but not used in raw docs.",
            docsOnly: "Class is used in raw docs but not defined in source CSS.",
            internal: "Manual override for implementation detail selectors.",
            legacyCompatible: "Manual override for selectors preserved for compatibility.",
            deprecated: "Manual override for selectors planned for removal or replacement.",
        },
        compatibilityRule: "public, candidate-public, and legacy-compatible selectors must not be removed or renamed without an approved migration/deprecation plan.",
        summary: {
            cssFiles: cssFiles.length,
            htmlFiles: htmlFiles.length,
            totalClasses: classes.length,
            definedClasses,
            documentedClasses,
            cssOnlyClasses: classes.filter((entry) => entry.defined && !entry.documented).length,
            docsOnlyClasses,
            byClassification,
            byModule,
        },
        files: {
            css: cssFiles,
            html: htmlFiles,
        },
        classes,
    };
}

function renderMarkdown(inventory) {
    const byClassificationRows = Object.entries(inventory.summary.byClassification)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([classification, count]) => [classification, count]);
    const moduleRows = Object.entries(inventory.summary.byModule)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([moduleName, counts]) => [
            moduleName,
            counts.total || 0,
            counts.public || 0,
            counts["candidate-public"] || 0,
            counts["docs-only"] || 0,
            counts.internal || 0,
            counts["legacy-compatible"] || 0,
            counts.deprecated || 0,
        ]);
    const largestCandidateRows = Object.entries(inventory.summary.byModule)
        .map(([moduleName, counts]) => [moduleName, counts["candidate-public"] || 0])
        .filter(([, count]) => count > 0)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, 20);

    return `# VDS Selector Inventory

Generated by \`${GENERATED_BY}\`.

## Contract

- Scope: classes/selectors from \`src/**/*.css\` and documented class usage from \`doc-raw/**/*.html\`.
- \`public\`: class is defined in source CSS and used in raw docs.
- \`candidate-public\`: class is defined in source CSS but not used in raw docs.
- \`docs-only\`: class is used in raw docs but not defined in source CSS.
- \`internal\`, \`legacy-compatible\`, and \`deprecated\`: manual override through \`${OVERRIDES_JSON}\`.
- Compatibility: public, candidate-public, and legacy-compatible selectors must not be removed or renamed without an approved migration/deprecation plan.

## Totals

- CSS source files: \`${inventory.summary.cssFiles}\`
- Raw docs files: \`${inventory.summary.htmlFiles}\`
- Total inventory entries: \`${inventory.summary.totalClasses}\`
- CSS-defined classes: \`${inventory.summary.definedClasses}\`
- Documented classes: \`${inventory.summary.documentedClasses}\`
- CSS-only classes: \`${inventory.summary.cssOnlyClasses}\`
- Docs-only classes: \`${inventory.summary.docsOnlyClasses}\`

## Classification Totals

${renderMarkdownTable(["Classification", "Count"], byClassificationRows)}

## Module Totals

${renderMarkdownTable(["Module", "Total", "Public", "Candidate Public", "Docs Only", "Internal", "Legacy Compatible", "Deprecated"], moduleRows)}

## Largest Candidate-Public Modules

${renderMarkdownTable(["Module", "Candidate Public"], largestCandidateRows)}

## Notes

- Regenerate with \`pnpm run inventory:selectors\`.
- Check freshness with \`pnpm run audit:selectors\`.
- This inventory is generated evidence for planning and compatibility review.
`;
}

function run({check = false} = {}) {
    const inventory = createInventory();
    const json = stableJsonString(inventory);
    const markdown = renderMarkdown(inventory);
    const findings = [];

    if (check) {
        const jsonFinding = compareGenerated(INVENTORY_JSON, json);
        const mdFinding = compareGenerated(INVENTORY_MD, markdown);
        if (jsonFinding) findings.push(jsonFinding);
        if (mdFinding) findings.push(mdFinding);
    } else {
        ensureDir(API_DIR);
        if (!readJsonIfExists(OVERRIDES_JSON)) {
            writeStableJson(OVERRIDES_JSON, defaultOverrides());
        }
        writeStableJson(INVENTORY_JSON, inventory);
        writeText(INVENTORY_MD, markdown);
    }

    if (inventory.summary.docsOnlyClasses > 0) {
        findings.push(`${inventory.summary.docsOnlyClasses} docs-only selectors found; raw docs reference classes not defined in source CSS.`);
    }

    if (findings.length > 0) {
        console.log("Selector inventory findings:");
        for (const finding of findings) {
            console.log(`- ${finding}`);
        }
        process.exitCode = 1;
        return;
    }

    console.log(`Selector inventory ${check ? "audit" : "generation"} passed: ${inventory.summary.totalClasses} classes, ${inventory.summary.docsOnlyClasses} docs-only.`);
}

if (require.main === module) {
    run({check: process.argv.includes("--check")});
}

module.exports = {
    createInventory,
    renderMarkdown,
    run,
};
