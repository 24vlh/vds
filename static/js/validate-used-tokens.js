/**
 * Find all tokens used via var(--token) in /css
 * that are NOT defined anywhere in /css or /tokens.
 *
 * Layout:
 *   ./tokens  → token definition files (primitives, themes, etc.)
 *   ./css     → component/layout/authoring/docs CSS
 */

const fs = require("fs");
const path = require("path");

// ---- CONFIG ----
const TOKENS_DIR = path.join(process.cwd(), "tokens");
const CSS_DIR = path.join(process.cwd(), "css/components");

// ----------------

function readCssFilesRecursively(dir) {
    if (!fs.existsSync(dir)) return [];
    let results = [];
    const entries = fs.readdirSync(dir);

    for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            results = results.concat(readCssFilesRecursively(fullPath));
        } else if (entry.endsWith(".css")) {
            results.push(fullPath);
        }
    }
    return results;
}

/**
 * Any `--token-name:` counts as a definition.
 */
function extractDefinedTokens(content) {
    const regex = /(--[a-zA-Z0-9-_]+)\s*:/g;
    const tokens = new Set();
    let match;
    while ((match = regex.exec(content))) {
        tokens.add(match[1]);
    }
    return tokens;
}

/**
 * Any `var(--token-name` counts as usage.
 * (We ignore anything not inside var()).
 */
function extractUsedTokens(content) {
    const regex = /var\(\s*(--[a-zA-Z0-9-_]+)/g;
    const tokens = new Set();
    let match;
    while ((match = regex.exec(content))) {
        tokens.add(match[1]);
    }
    return tokens;
}

function loadAllDefinedTokens() {
    const defined = new Set();

    const tokenFiles = readCssFilesRecursively(TOKENS_DIR);
    const cssFiles = readCssFilesRecursively(CSS_DIR);

    const allDefinitionSources = [...tokenFiles, ...cssFiles];

    for (const filePath of allDefinitionSources) {
        const content = fs.readFileSync(filePath, "utf8");
        extractDefinedTokens(content).forEach(t => defined.add(t));
    }

    return defined;
}

function loadAllUsedTokens() {
    const used = new Set();
    const cssFiles = readCssFilesRecursively(CSS_DIR);

    for (const filePath of cssFiles) {
        const content = fs.readFileSync(filePath, "utf8");
        extractUsedTokens(content).forEach(t => used.add(t));
    }

    return used;
}

(function run() {
    console.log("▶ Collecting defined tokens from /tokens and /css …");
    const definedTokens = loadAllDefinedTokens();

    console.log("▶ Collecting used tokens (var(--…)) from /css …");
    const usedTokens = loadAllUsedTokens();

    const missing = [...usedTokens].filter(t => !definedTokens.has(t)).sort();

    console.log("\n========================================");
    console.log("TOKENS USED VIA var(--…) BUT NEVER DEFINED");
    console.log("========================================\n");

    if (missing.length === 0) {
        console.log("✓ All used tokens are defined somewhere.");
    } else {
        for (const t of missing) {
            console.log("• " + t);
        }
        console.log(`\nTotal missing: ${missing.length}`);
    }
})();
