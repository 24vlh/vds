const fs = require("fs");
const path = require("path");
const glob = require("glob");

function read(file) {
    return fs.readFileSync(file, "utf8");
}

function extractDefinedTokens(content) {
    const regex = /(--[a-zA-Z0-9-_]+)\s*:/g;
    const tokens = new Set();
    let match;

    while ((match = regex.exec(content)) !== null) {
        tokens.add(match[1]);
    }

    return tokens;
}

function extractUsedTokens(content) {
    const regex = /var\(\s*(--[a-zA-Z0-9-_]+)/g;
    const tokens = new Set();
    let match;

    while ((match = regex.exec(content)) !== null) {
        tokens.add(match[1]);
    }

    return tokens;
}

function main() {
    const files = glob.sync("src/**/*.css").sort();

    if (files.length === 0) {
        console.log("No CSS files found under src/.");
        return;
    }

    const defined = new Set();

    for (const file of files) {
        extractDefinedTokens(read(file)).forEach(token => defined.add(token));
    }

    const missingByFile = [];

    for (const file of files) {
        const used = extractUsedTokens(read(file));
        const missing = [...used].filter(token => !defined.has(token)).sort();

        if (missing.length > 0) {
            missingByFile.push({
                file,
                missing,
            });
        }
    }

    if (missingByFile.length === 0) {
        console.log(`Token usage audit passed for ${files.length} files.`);
        return;
    }

    console.log("Tokens used via var(--...) but not defined in src/:");

    for (const entry of missingByFile) {
        console.log(`- ${path.relative(process.cwd(), entry.file)}`);

        for (const token of entry.missing) {
            console.log(`  • ${token}`);
        }
    }

    process.exitCode = 1;
}

main();
