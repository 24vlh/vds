const {
    compareGenerated,
    ensureDir,
    listFiles,
    moduleFromCssFile,
    parseCss,
    renderMarkdownTable,
    stableJsonString,
    writeStableJson,
    writeText,
    API_DIR,
} = require("./audit-utils");

const INVENTORY_JSON = "docs/planning/api/vds-token-inventory.json";
const INVENTORY_MD = "docs/planning/api/vds-token-inventory.md";
const GENERATED_BY = "static/js/generate-token-inventory.js";
const TOKEN_PATTERN = /var\(\s*(--[a-zA-Z0-9-_]+)/g;

function increment(target, key, amount = 1) {
    target[key] = (target[key] || 0) + amount;
}

function addTokenFile(map, token, file) {
    if (!map.has(token)) map.set(token, new Set());
    map.get(token).add(file);
}

function sorted(value) {
    return [...value].sort();
}

function referencesInValue(value) {
    const refs = [];
    let match;

    while ((match = TOKEN_PATTERN.exec(value)) !== null) {
        refs.push(match[1]);
    }

    return refs;
}

function createInventory() {
    const cssFiles = listFiles("src/**/*.css");
    const definitionsByToken = new Map();
    const usagesByToken = new Map();
    const definingFilesByToken = new Map();
    const usingFilesByToken = new Map();
    const modulesByToken = new Map();

    for (const relPath of cssFiles) {
        const moduleName = moduleFromCssFile(relPath);
        const root = parseCss(relPath);

        root.walkDecls((decl) => {
            if (decl.prop.startsWith("--")) {
                const token = decl.prop;
                if (!definitionsByToken.has(token)) definitionsByToken.set(token, []);
                definitionsByToken.get(token).push({
                    file: relPath,
                    line: decl.source && decl.source.start ? decl.source.start.line : null,
                    property: decl.prop,
                    value: decl.value,
                });
                addTokenFile(definingFilesByToken, token, relPath);
                addTokenFile(modulesByToken, token, moduleName);
            }

            for (const token of referencesInValue(decl.value)) {
                if (!usagesByToken.has(token)) usagesByToken.set(token, []);
                usagesByToken.get(token).push({
                    file: relPath,
                    line: decl.source && decl.source.start ? decl.source.start.line : null,
                    property: decl.prop,
                    value: decl.value,
                });
                addTokenFile(usingFilesByToken, token, relPath);
                addTokenFile(modulesByToken, token, moduleName);
            }
        });
    }

    const allTokens = [...new Set([
        ...definitionsByToken.keys(),
        ...usagesByToken.keys(),
    ])].sort();
    const byModule = {};
    const tokens = allTokens.map((token) => {
        const definitions = definitionsByToken.get(token) || [];
        const usages = usagesByToken.get(token) || [];
        const definingFiles = sorted(definingFilesByToken.get(token) || new Set());
        const usingFiles = sorted(usingFilesByToken.get(token) || new Set());
        const modules = sorted(modulesByToken.get(token) || new Set());
        const missingReference = definitions.length === 0 && usages.length > 0;
        const unusedDefinition = definitions.length > 0 && usages.length === 0;

        for (const moduleName of modules) {
            if (!byModule[moduleName]) {
                byModule[moduleName] = {
                    tokens: 0,
                    definitions: 0,
                    references: 0,
                    missingReferences: 0,
                    unusedDefinitions: 0,
                };
            }

            byModule[moduleName].tokens += 1;
            byModule[moduleName].definitions += definitions.filter((entry) => moduleFromCssFile(entry.file) === moduleName).length;
            byModule[moduleName].references += usages.filter((entry) => moduleFromCssFile(entry.file) === moduleName).length;
            if (missingReference) byModule[moduleName].missingReferences += 1;
            if (unusedDefinition) byModule[moduleName].unusedDefinitions += 1;
        }

        return {
            token,
            defined: definitions.length > 0,
            used: usages.length > 0,
            definitionCount: definitions.length,
            referenceCount: usages.length,
            definingFiles,
            usingFiles,
            modules,
            missingReference,
            unusedDefinition,
        };
    });
    const missingReferences = tokens.filter((entry) => entry.missingReference);
    const unusedDefinitions = tokens.filter((entry) => entry.unusedDefinition);
    const byStatus = {};

    for (const entry of tokens) {
        increment(byStatus, entry.missingReference ? "missing-reference" : entry.unusedDefinition ? "unused-definition" : "active");
    }

    return {
        schemaVersion: 1,
        generatedBy: GENERATED_BY,
        scope: {
            sourceCss: "src/**/*.css",
            inventory: "CSS custom property definitions and var(...) references",
        },
        summary: {
            cssFiles: cssFiles.length,
            totalTokens: tokens.length,
            definedTokens: tokens.filter((entry) => entry.defined).length,
            usedTokens: tokens.filter((entry) => entry.used).length,
            missingReferences: missingReferences.length,
            unusedDefinedTokens: unusedDefinitions.length,
            byStatus,
            byModule,
        },
        files: {
            css: cssFiles,
        },
        missingReferences: missingReferences.map((entry) => entry.token),
        unusedDefinedTokens: unusedDefinitions.map((entry) => entry.token),
        tokens,
    };
}

function renderMarkdown(inventory) {
    const moduleRows = Object.entries(inventory.summary.byModule)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([moduleName, counts]) => [
            moduleName,
            counts.tokens,
            counts.definitions,
            counts.references,
            counts.missingReferences,
            counts.unusedDefinitions,
        ]);
    const missingRows = inventory.missingReferences.map((token) => {
        const entry = inventory.tokens.find((item) => item.token === token);
        return [token, entry.usingFiles.join("<br>")];
    });
    const unusedRows = inventory.unusedDefinedTokens.slice(0, 60).map((token) => {
        const entry = inventory.tokens.find((item) => item.token === token);
        return [token, entry.definingFiles.join("<br>")];
    });

    return `# VDS Token Inventory

Generated by \`${GENERATED_BY}\`.

## Contract

- Scope: CSS custom property declarations and \`var(...)\` references from \`src/**/*.css\`.
- Missing references fail \`pnpm run audit:tokens\`.
- Unused definitions are tracked as release-cleanup evidence, not immediate failures.
- Regenerate this file with \`pnpm run inventory:tokens\`.

## Totals

- CSS source files: \`${inventory.summary.cssFiles}\`
- Total tokens: \`${inventory.summary.totalTokens}\`
- Defined tokens: \`${inventory.summary.definedTokens}\`
- Used tokens: \`${inventory.summary.usedTokens}\`
- Missing references: \`${inventory.summary.missingReferences}\`
- Unused defined tokens: \`${inventory.summary.unusedDefinedTokens}\`

## Module Totals

${renderMarkdownTable(["Module", "Tokens", "Definitions", "References", "Missing References", "Unused Definitions"], moduleRows)}

## Missing References

${missingRows.length > 0 ? renderMarkdownTable(["Token", "Using Files"], missingRows) : "None."}

## Unused Defined Tokens

${unusedRows.length > 0 ? renderMarkdownTable(["Token", "Defining Files"], unusedRows) : "None."}

## Notes

- Check freshness with \`pnpm run audit:tokens\`.
- This inventory is generated evidence for planning, cleanup, and release review.
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
        writeStableJson(INVENTORY_JSON, inventory);
        writeText(INVENTORY_MD, markdown);
    }

    if (inventory.summary.missingReferences > 0) {
        findings.push(`${inventory.summary.missingReferences} missing token references found.`);
    }

    if (findings.length > 0) {
        console.log("Token inventory findings:");
        for (const finding of findings) {
            console.log(`- ${finding}`);
        }
        process.exitCode = 1;
        return;
    }

    console.log(`Token inventory ${check ? "audit" : "generation"} passed: ${inventory.summary.totalTokens} tokens, ${inventory.summary.missingReferences} missing references.`);
}

if (require.main === module) {
    run({check: process.argv.includes("--check")});
}

module.exports = {
    createInventory,
    renderMarkdown,
    run,
};
