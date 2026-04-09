const fs = require("fs");
const path = require("path");
const glob = require("glob");
const postcss = require("postcss");

function main() {
    const files = glob.sync("src/**/*.css").sort();

    if (files.length === 0) {
        console.log("No CSS files found under src/.");
        return;
    }

    const failures = [];

    for (const file of files) {
        const css = fs.readFileSync(file, "utf8");

        try {
            postcss.parse(css, {from: file});
        } catch (error) {
            failures.push({
                file,
                reason: error.message,
            });
        }
    }

    if (failures.length === 0) {
        console.log(`CSS parse check passed for ${files.length} files.`);
        return;
    }

    console.log("CSS parse failures:");

    for (const failure of failures) {
        console.log(`- ${failure.file}`);
        console.log(`  ${failure.reason}`);
    }

    process.exitCode = 1;
}

main();
