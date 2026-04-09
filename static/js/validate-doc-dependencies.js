const fs = require("fs");
const glob = require("glob");

function main() {
    const files = glob.sync("doc-raw/vds-*.doc.html").sort();
    const findings = [];

    for (const file of files) {
        const content = fs.readFileSync(file, "utf8");
        const usesIcons = /\bicon--[a-z0-9-]+/i.test(content);
        const hasIconsCss = /icons\.css/.test(content);
        const hasLegacyIconCss = /icon\.css/.test(content);

        if (hasLegacyIconCss) {
            findings.push({
                file,
                reason: "uses legacy icon.css reference; use icons.css",
            });
        }

        if (usesIcons && !hasIconsCss) {
            findings.push({
                file,
                reason: "uses VDS icon classes but does not declare icons.css",
            });
        }
    }

    if (findings.length === 0) {
        console.log(`Doc dependency audit passed for ${files.length} files.`);
        return;
    }

    console.log("Doc dependency audit findings:");

    for (const finding of findings) {
        console.log(`- ${finding.file}: ${finding.reason}`);
    }

    process.exitCode = 1;
}

main();
