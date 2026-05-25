// static/js/build.js
const {execSync} = require("child_process");
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const CACHE_DIR = path.join(PROJECT_ROOT, "node_modules", ".cache");
const TEMP_DIR = path.join(CACHE_DIR, `vds_tmp_batch_${process.pid}`);
const POSTCSS_BIN = path.join(PROJECT_ROOT, "node_modules", ".bin", "postcss");
const IS_PROD = process.env.NODE_ENV === "production";
// Source maps are expensive on mounted filesystems. Opt-in explicitly.
const EMIT_MAPS = process.env.VDS_BUILD_MAPS === "1";

const BASE_PLUGINS = [
    "--use postcss-preset-env",
    "--use autoprefixer"
];
const IMPORT_PLUGIN = "--use postcss-import";

function parseArgs(argv) {
    const options = {
        out: "dist",
    };

    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];

        if (arg === "--out" || arg === "-o") {
            options.out = argv[++i];
            continue;
        }

        if (arg === "--help" || arg === "-h") {
            console.log(`Usage:
  node static/js/build.js [--out dist]

Writes the VDS package CSS output to the target directory. Use
\`pnpm run dist:refresh\` for checked-in dist and \`pnpm run dist:check\`
for read-only freshness validation.
`);
            process.exit(0);
        }

        throw new Error(`Unknown option: ${arg}`);
    }

    return options;
}

const options = parseArgs(process.argv.slice(2));
const OUT_DIR = path.resolve(PROJECT_ROOT, options.out);

if (OUT_DIR === PROJECT_ROOT) {
    throw new Error("Refusing to write build output to the project root.");
}

fs.mkdirSync(CACHE_DIR, {recursive: true});

// METRICS ---------------------------------------------------
const metrics = {
    files: [],
    start: process.hrtime.bigint()
};

const fmt = (ns) => `${Number(ns) / 1e6 | 0} ms`;
const fmtBytes = (b) =>
    b < 1024 ? `${b} B`
        : b < 1024 * 1024 ? `${(b / 1024).toFixed(1)} KB`
            : `${(b / 1024 / 1024).toFixed(2)} MB`;

// ---------------------------------------------------------------------------
// Single-file PostCSS wrapper
// ---------------------------------------------------------------------------
function toPosix(value) {
    return value.split(path.sep).join("/");
}

function displayPath(absPath) {
    const rel = path.relative(PROJECT_ROOT, absPath);
    return rel && !rel.startsWith("..") ? toPosix(rel) : absPath;
}

function runPostCSS(inputRel, outputSubPath, minify = false) {
    const env = {...process.env};
    if (minify) env.NODE_ENV = "production";
    else if (env.NODE_ENV === "production") delete env.NODE_ENV;

    const outputAbs = path.join(OUT_DIR, outputSubPath);
    fs.mkdirSync(path.dirname(outputAbs), {recursive: true});

    const mapFlag = minify || IS_PROD || !EMIT_MAPS ? "--no-map" : "--map";
    const plugins = [
        IMPORT_PLUGIN,
        ...BASE_PLUGINS,
        ...(minify ? ["--use cssnano"] : [])
    ];

    const cmd = [
        `"${POSTCSS_BIN}"`,
        `"${inputRel}"`,
        mapFlag,
        ...plugins,
        "-o",
        `"${outputAbs}"`
    ].join(" ");

    const t0 = process.hrtime.bigint();
    execSync(cmd, {cwd: PROJECT_ROOT, stdio: "inherit", env});
    const t1 = process.hrtime.bigint();

    const size = fs.statSync(outputAbs).size;

    metrics.files.push({
        file: displayPath(outputAbs),
        time: t1 - t0,
        size
    });

    console.log(`✔ ${displayPath(outputAbs)} (${minify ? "min" : "std"}) — ${fmt(t1 - t0)}, ${fmtBytes(size)}`);
}

// ---------------------------------------------------------------------------
// Batch PostCSS builder — now produces .css + .min.css WITHOUT overwriting
// ---------------------------------------------------------------------------
function runPostCSSBatch(patternRel, outSubDir, minify = false) {
    // Clean temp folder on each batch minify pass
    if (minify) {
        if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, {recursive: true, force: true});
        fs.mkdirSync(TEMP_DIR);
    }

    const targetDir = minify ? TEMP_DIR : path.join(OUT_DIR, outSubDir);

    const env = {...process.env};
    if (minify) env.NODE_ENV = "production";
    else if (env.NODE_ENV === "production") delete env.NODE_ENV;

    const mapFlag = minify || IS_PROD || !EMIT_MAPS ? "--no-map" : "--map";
    const plugins = [
        ...(patternHasImports(patternRel) ? [IMPORT_PLUGIN] : []),
        ...BASE_PLUGINS,
        ...(minify ? ["--use cssnano"] : [])
    ];

    const cmd = [
        `"${POSTCSS_BIN}"`,
        `"${patternRel}"`,
        mapFlag,
        ...plugins,
        "-d",
        `"${targetDir}"`
    ].join(" ");

    const t0 = process.hrtime.bigint();
    execSync(cmd, {cwd: PROJECT_ROOT, stdio: "inherit", env});
    const t1 = process.hrtime.bigint();

    if (!minify) {
        // Record all generated standard files
        const folderAbs = path.join(OUT_DIR, outSubDir);
        const allFiles = collectCSSFiles(folderAbs, outSubDir);
        allFiles.forEach(f => {
            metrics.files.push({
                file: f.rel,
                time: t1 - t0,
                size: f.size
            });
        });
        console.log(`✔ ${displayPath(folderAbs)} (batch std) — ${fmt(t1 - t0)}`);
        return;
    }

    // -------------------------------
    // MINIFY PATH: rename → *.min.css
    // -------------------------------
    const outAbsFinal = path.join(OUT_DIR, outSubDir);

    const entries = collectCSSFiles(TEMP_DIR, "");
    entries.forEach(f => {
        const srcAbs = path.join(TEMP_DIR, f.rel);
        const base = path.basename(f.rel);

        const minName = base.replace(/\.css$/, ".min.css");
        const destAbs = path.join(outAbsFinal, minName);

        fs.copyFileSync(srcAbs, destAbs);

        const finalRel = path.join(outSubDir, minName);
        const size = fs.statSync(destAbs).size;

        metrics.files.push({
            file: finalRel,
            time: t1 - t0,
            size
        });
    });

    console.log(`✔ ${displayPath(outAbsFinal)} (batch min) — ${fmt(t1 - t0)}`);

    // cleanup temp
    fs.rmSync(TEMP_DIR, {recursive: true, force: true});
}

function patternHasImports(patternRel) {
    const files = glob.sync(patternRel, {cwd: PROJECT_ROOT, nodir: true});
    for (const rel of files) {
        const abs = path.join(PROJECT_ROOT, rel);
        const content = fs.readFileSync(abs, "utf8");
        if (content.includes("@import")) return true;
    }
    return false;
}

// Recursively collect CSS files
function collectCSSFiles(abs, relBase) {
    const out = [];
    const entries = fs.readdirSync(abs, {withFileTypes: true});
    entries.forEach(e => {
        const pAbs = path.join(abs, e.name);
        const pRel = relBase ? path.join(relBase, e.name) : e.name;
        if (e.isDirectory()) {
            out.push(...collectCSSFiles(pAbs, pRel));
        } else if (e.name.endsWith(".css")) {
            const size = fs.statSync(pAbs).size;
            out.push({rel: pRel, size});
        }
    });
    return out;
}

// ---------------------------------------------------------------------------
// Clean dist
// ---------------------------------------------------------------------------
if (fs.existsSync(OUT_DIR)) fs.rmSync(OUT_DIR, {recursive: true, force: true});
fs.mkdirSync(OUT_DIR, {recursive: true});

// ---------------------------------------------------------------------------
// Build top-level bundles
// ---------------------------------------------------------------------------
const topLevel = [
    {in: "src/index.css", out: "vds.css"},
    {in: "src/core.css", out: "core.css"},
    {in: "src/identity.css", out: "identity.css"}
];

topLevel.forEach(({in: input, out}) => {
    runPostCSS(input, out, false);
    runPostCSS(input, out.replace(".css", ".min.css"), true);
});

// ---------------------------------------------------------------------------
// Build components + themes (batch)
// This now correctly outputs: file.css AND file.min.css
// ---------------------------------------------------------------------------
fs.mkdirSync(path.join(OUT_DIR, "components"), {recursive: true});
fs.mkdirSync(path.join(OUT_DIR, "themes"), {recursive: true});

runPostCSSBatch("src/components/**/*.css", "components", false);
runPostCSSBatch("src/components/**/*.css", "components", true);

runPostCSSBatch("src/themes/**/*.css", "themes", false);
runPostCSSBatch("src/themes/**/*.css", "themes", true);

// ---------------------------------------------------------------------------
// Summary
// ---------------------------------------------------------------------------
const totalNS = process.hrtime.bigint() - metrics.start;
console.log("\n=== BUILD SUMMARY ===");
console.log(`Mode: ${IS_PROD ? "production" : "development"}`);
console.log(`Total time: ${fmt(totalNS)}`);

metrics.files.forEach(f =>
    console.log(` - ${f.file}  (${fmtBytes(f.size)})`)
);

console.log("\n✔ VDS build complete\n");
