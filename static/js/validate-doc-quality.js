const fs = require("fs");
const glob = require("glob");

const REQUIRED_DOC_COUNT = 42;

const WARNING_PATTERNS = [
    {
        label: "live button without explicit type",
        pattern: /<button\b(?![^>]*\btype=)[^>]*>/gi,
    },
    {
        label: "escaped copyable button without explicit type",
        pattern: /&lt;button\b(?!(?:(?!&gt;).)*\btype=)(?:(?!&gt;).)*&gt;/gi,
    },
    {
        label: "copyable href=\"#\" placeholder",
        pattern: /href=["']#["']|href=&quot;#&quot;|href=&#34;#&#34;|href=&#39;#&#39;/gi,
    },
    {
        label: "live image without alt",
        pattern: /<img\b(?![^>]*\balt=)[^>]*>/gi,
    },
];

function countMatches(content, pattern) {
    return (content.match(pattern) || []).length;
}

function hasHeading(content) {
    return /<h[1-3]\b/i.test(content);
}

function hasExample(content) {
    return /\b(?:doc-block|example|demo|specimen|preview|showcase|sample)\b/i.test(content);
}

function hasSnippet(content) {
    return /<pre\b|<code\b|&lt;[a-z][^&]*&gt;/i.test(content);
}

function hasGuidance(content) {
    return /accessib|aria-|keyboard|focus|responsive|theme|motion|runtime|consumer|validation|source|dist/i.test(content);
}

function checkFile(file, content) {
    const failures = [];
    const warnings = [];
    const lineCount = content.split(/\r?\n/).length;

    if (lineCount < 40) {
        failures.push("doc is too small to be a useful component reference");
    }

    if (!hasHeading(content)) {
        failures.push("missing visible heading");
    }

    if (!hasExample(content)) {
        failures.push("missing visible example/demo/specimen language");
    }

    if (!hasSnippet(content)) {
        failures.push("missing copyable snippet/code evidence");
    }

    if (!hasGuidance(content)) {
        failures.push("missing practical guidance language");
    }

    for (const {label, pattern} of WARNING_PATTERNS) {
        const count = countMatches(content, pattern);
        if (count > 0) {
            warnings.push(`${label} (${count})`);
        }
    }

    return {file, failures, warnings};
}

function main() {
    const files = glob.sync("doc-raw/vds-*.doc.html").sort();
    const results = files.map((file) => checkFile(file, fs.readFileSync(file, "utf8")));
    const failures = results.flatMap((result) => result.failures.map((reason) => ({file: result.file, reason})));
    const warnings = results.flatMap((result) => result.warnings.map((reason) => ({file: result.file, reason})));

    if (files.length !== REQUIRED_DOC_COUNT) {
        failures.push({
            file: "doc-raw",
            reason: `expected ${REQUIRED_DOC_COUNT} VDS docs, found ${files.length}`,
        });
    }

    if (warnings.length > 0) {
        console.log("Doc quality warnings for rich docs:");
        for (const warning of warnings.slice(0, 80)) {
            console.log(`- ${warning.file}: ${warning.reason}`);
        }
        if (warnings.length > 80) {
            console.log(`- ... ${warnings.length - 80} additional warning(s) omitted`);
        }
    }

    if (failures.length === 0) {
        console.log(`Doc quality audit passed for ${files.length} rich docs.`);
        return;
    }

    console.log("Doc quality audit failures:");
    for (const failure of failures) {
        console.log(`- ${failure.file}: ${failure.reason}`);
    }
    process.exitCode = 1;
}

main();
