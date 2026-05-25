const fs = require("fs");
const glob = require("glob");

const REQUIRED_LANGUAGE = [
    {
        label: "source truth",
        pattern: /source truth/i,
    },
    {
        label: "package-facing dist",
        pattern: /\bdist\b/i,
    },
    {
        label: "validation",
        pattern: /validation/i,
    },
    {
        label: "accessibility evidence",
        pattern: /accessib|aria-|aria\s|focus|keyboard|label|alt|semantic/i,
    },
    {
        label: "runtime ownership",
        pattern: /runtime|consumer-owned|consumer owns|application code owns|application owns/i,
    },
    {
        label: "responsive",
        pattern: /responsive/i,
    },
    {
        label: "theme",
        pattern: /theme/i,
    },
    {
        label: "motion",
        pattern: /motion|reduced-motion/i,
    },
    {
        label: "migration",
        pattern: /migration/i,
    },
    {
        label: "release",
        pattern: /release/i,
    },
];

const BUTTON_NAME_CANDIDATE = /icon-only|copy|remove|close|dismiss|action|nav-toggle|toggle|calendar|stepper|collapse|expand|icon--/i;

function stripTags(value) {
    return value
        .replace(/<[^>]*>/g, " ")
        .replace(/&lt;[^&]*?&gt;/g, " ")
        .replace(/&[a-z0-9#]+;/gi, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function hasAccessibleName(attrs, body) {
    return /\b(?:aria-label|aria-labelledby|title)\s*=/.test(attrs) || stripTags(body).length > 0;
}

function checkButtonNames(file, content, findings) {
    const liveButtonPattern = /<button\b([^>]*)>([\s\S]*?)<\/button>/gi;
    let liveMatch;

    while ((liveMatch = liveButtonPattern.exec(content)) !== null) {
        const [, attrs, body] = liveMatch;
        const candidateText = `${attrs} ${body}`;

        if ((BUTTON_NAME_CANDIDATE.test(candidateText) || stripTags(body).length === 0) && !hasAccessibleName(attrs, body)) {
            findings.push({
                file,
                reason: "button candidate lacks text, aria-label, aria-labelledby, or title",
            });
        }
    }

    const escapedButtonPattern = /&lt;button\b((?:(?!&gt;).)*)&gt;((?:(?!&lt;\/button&gt;).)*)&lt;\/button&gt;/gis;
    let escapedMatch;

    while ((escapedMatch = escapedButtonPattern.exec(content)) !== null) {
        const [, attrs, body] = escapedMatch;
        const candidateText = `${attrs} ${body}`;

        if ((BUTTON_NAME_CANDIDATE.test(candidateText) || stripTags(body).length === 0) && !hasAccessibleName(attrs, body)) {
            findings.push({
                file,
                reason: "escaped button candidate lacks text, aria-label, aria-labelledby, or title",
            });
        }
    }
}

function checkFile(file, content) {
    const findings = [];
    const h1Count = (content.match(/<h1\b/gi) || []).length;
    const qualityBlockCount = (content.match(/\bdata-doc-quality-checks\b/gi) || []).length;
    const liveButtonsWithoutType = content.match(/<button\b(?![^>]*\btype=)[^>]*>/gi) || [];
    const escapedButtonsWithoutType = content.match(/&lt;button\b(?!(?:(?!&gt;).)*\btype=)(?:(?!&gt;).)*&gt;/gi) || [];
    const imagesWithoutAlt = content.match(/<img\b(?![^>]*\balt=)[^>]*>/gi) || [];
    const copyableHashLinks = content.match(/href=["']#["']|href=&quot;#&quot;|href=&#34;#&#34;|href=&#39;#&#39;/gi) || [];

    if (h1Count !== 1) {
        findings.push({
            file,
            reason: `expected exactly one live h1, found ${h1Count}`,
        });
    }

    if (qualityBlockCount < 1) {
        findings.push({
            file,
            reason: "missing data-doc-quality-checks block",
        });
    }

    for (const {label, pattern} of REQUIRED_LANGUAGE) {
        if (!pattern.test(content)) {
            findings.push({
                file,
                reason: `missing required ${label} language`,
            });
        }
    }

    if (liveButtonsWithoutType.length > 0) {
        findings.push({
            file,
            reason: `live button without explicit type (${liveButtonsWithoutType.length})`,
        });
    }

    if (escapedButtonsWithoutType.length > 0) {
        findings.push({
            file,
            reason: `escaped copyable button without explicit type (${escapedButtonsWithoutType.length})`,
        });
    }

    if (copyableHashLinks.length > 0) {
        findings.push({
            file,
            reason: `copyable href="#" placeholder remains (${copyableHashLinks.length})`,
        });
    }

    if (imagesWithoutAlt.length > 0) {
        findings.push({
            file,
            reason: `live image without alt (${imagesWithoutAlt.length})`,
        });
    }

    checkButtonNames(file, content, findings);

    return findings;
}

function main() {
    const files = glob.sync("doc-raw/vds-*.doc.html").sort();
    const findings = [];

    for (const file of files) {
        const content = fs.readFileSync(file, "utf8");
        findings.push(...checkFile(file, content));
    }

    if (findings.length === 0) {
        console.log(`Doc quality audit passed for ${files.length} files.`);
        return;
    }

    console.log("Doc quality audit findings:");

    for (const finding of findings) {
        console.log(`- ${finding.file}: ${finding.reason}`);
    }

    process.exitCode = 1;
}

main();
