const fs = require("fs");
const path = require("path");
const glob = require("glob");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const ARCHIVE_INVENTORY = path.join(PROJECT_ROOT, "docs/planning/_archive/2026-05-planning-ledger/api/vds-selector-inventory.json");

const TARGETS = [
    {
        id: "keep-exec",
        label: "@24vlh/keep-exec",
        root: path.resolve(PROJECT_ROOT, "..", "keep-exec"),
    },
    {
        id: "vlah.io",
        label: "@24vlh/vlah.io",
        root: path.resolve(PROJECT_ROOT, "..", "vlah.io"),
    },
];

const INCLUDE_GLOBS = [
    "**/*.html",
    "**/*.css",
    "**/*.scss",
    "**/*.ts",
    "**/*.tsx",
    "**/*.js",
    "**/*.jsx",
    "**/*.md",
];

const IGNORE_GLOBS = [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/coverage/**",
    "**/.git/**",
    "**/.angular/**",
    "**/.cache/**",
    "**/android/app/src/main/assets/**",
    "**/src/assets/css/vds.css",
    "**/src/assets/css/vds.min.css",
    "**/src/assets/css/identity.css",
    "**/src/assets/css/identity.min.css",
    "**/src/assets/css/graphite.css",
    "**/src/assets/css/graphite.min.css",
];

const VDS_LIKE_CLASS = /^(vds-|button|form|modal|toast|table|tab|tabs|nav|footer|header|hero|icon|avatar|badge|tag|state|skeleton|progress|feedback|alert|drawer|overlay|popover|tooltip|command|inbox|android|section|content|guidance|flow|chart|accordion|authoring|doc-block|logo|container|stack|safe-area|max-content|card|text-|bg-|border-|mt-|mr-|mb-|ml-|mx-|my-|p-|px-|py-)/;

function extractClassesFromCss(css) {
    const classes = new Set();
    const classRegex = /\.([a-zA-Z_][a-zA-Z0-9_-]*)(?=[\s.#,:{\[])/g;
    let match;

    while ((match = classRegex.exec(css)) !== null) {
        classes.add(match[1]);
    }

    return classes;
}

function extractConsumerClasses(content) {
    const classes = new Set();
    const attrRegex = /\b(?:class|className)\s*=\s*["'`]([^"'`]+)["'`]/g;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(content)) !== null) {
        for (const className of attrMatch[1].split(/\s+/).filter(Boolean)) {
            if (!/[{}()[\]$]/.test(className)) {
                classes.add(className);
            }
        }
    }

    for (const className of extractClassesFromCss(content)) {
        classes.add(className);
    }

    return classes;
}

function currentDefinedClasses() {
    const classes = new Set();
    const cssFiles = glob.sync("src/**/*.css", {cwd: PROJECT_ROOT, nodir: true}).sort();

    for (const relPath of cssFiles) {
        const content = fs.readFileSync(path.join(PROJECT_ROOT, relPath), "utf8");
        for (const className of extractClassesFromCss(content)) {
            classes.add(className);
        }
    }

    return classes;
}

function currentDocumentedClasses() {
    const classes = new Set();
    const rawDocs = glob.sync("doc-raw/**/*.html", {cwd: PROJECT_ROOT, nodir: true}).sort();
    const attrRegex = /class\s*=\s*"([^"]+)"/g;

    for (const relPath of rawDocs) {
        const content = fs.readFileSync(path.join(PROJECT_ROOT, relPath), "utf8");
        let match;

        while ((match = attrRegex.exec(content)) !== null) {
            for (const className of match[1].split(/\s+/).filter(Boolean)) {
                classes.add(className);
            }
        }
    }

    return classes;
}

function archivedCompatibilityClasses() {
    const archived = {
        public: new Set(),
        legacyCompatible: new Set(),
        deprecated: new Set(),
    };

    if (!fs.existsSync(ARCHIVE_INVENTORY)) {
        return archived;
    }

    const inventory = JSON.parse(fs.readFileSync(ARCHIVE_INVENTORY, "utf8"));
    const classes = inventory.classes || [];
    const entries = Array.isArray(classes)
        ? classes.map((entry) => [entry.className, entry])
        : Object.entries(classes);

    for (const [className, entry] of entries) {
        if (!className) continue;

        const classification = entry.classification;
        if (classification === "public") archived.public.add(className);
        if (classification === "legacy-compatible") archived.legacyCompatible.add(className);
        if (classification === "deprecated") archived.deprecated.add(className);
    }

    return archived;
}

function filesForTarget(root) {
    return INCLUDE_GLOBS.flatMap((pattern) => glob.sync(pattern, {
        cwd: root,
        nodir: true,
        ignore: IGNORE_GLOBS,
        absolute: false,
    })).sort();
}

function main() {
    const definedClasses = currentDefinedClasses();
    const documentedClasses = currentDocumentedClasses();
    const archived = archivedCompatibilityClasses();
    const warnings = [];
    const failures = [];
    let scannedTargets = 0;
    let scannedFiles = 0;
    let matchedClasses = 0;
    let candidatePublicUsages = 0;
    let unknownUsages = 0;

    for (const target of TARGETS) {
        if (!fs.existsSync(target.root)) {
            warnings.push(`${target.label}: skipped missing sibling repo at ${target.root}`);
            continue;
        }

        scannedTargets += 1;
        const files = filesForTarget(target.root);
        scannedFiles += files.length;

        for (const relPath of files) {
            const content = fs.readFileSync(path.join(target.root, relPath), "utf8");
            for (const className of extractConsumerClasses(content)) {
                const defined = definedClasses.has(className);
                const documented = documentedClasses.has(className);
                const wasPublic = archived.public.has(className) || archived.legacyCompatible.has(className);
                const deprecated = archived.deprecated.has(className);

                if (defined) {
                    matchedClasses += 1;
                    if (!documented) {
                        candidatePublicUsages += 1;
                    }
                    continue;
                }

                if (deprecated) {
                    failures.push(`${target.label}: ${className} in ${relPath} is marked deprecated in archived VDS inventory`);
                } else if (wasPublic) {
                    failures.push(`${target.label}: ${className} in ${relPath} was public/legacy-compatible in archived VDS inventory but is missing from current source`);
                } else if (VDS_LIKE_CLASS.test(className)) {
                    unknownUsages += 1;
                }
            }
        }
    }

    if (candidatePublicUsages > 0) {
        warnings.push(`${candidatePublicUsages} candidate-public class usages found in present consumer targets; treat these as compatibility-sensitive.`);
    }

    if (unknownUsages > 0) {
        warnings.push(`${unknownUsages} unknown VDS-like class usages found in present consumer targets; review before removing related surfaces.`);
    }

    for (const warning of warnings) {
        console.log(`Consumer compatibility warning: ${warning}`);
    }

    if (failures.length > 0) {
        console.log("Consumer compatibility audit findings:");
        for (const failure of failures) {
            console.log(`- ${failure}`);
        }
        process.exitCode = 1;
        return;
    }

    console.log(`Consumer compatibility audit passed: ${scannedTargets} targets scanned, ${scannedFiles} files, ${matchedClasses} current VDS class matches.`);
}

main();
