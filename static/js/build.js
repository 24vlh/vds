// static/js/build.js
const {execSync} = require("child_process");
const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const DIST_DIR = path.join(PROJECT_ROOT, "dist");
const TEMP_DIR = path.join(PROJECT_ROOT, ".tmp_batch");
const IS_PROD = process.env.NODE_ENV === "production";

const PLUGINS = [
    "--use postcss-import",
    "--use postcss-preset-env",
    "--use autoprefixer"
];

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
function runPostCSS(inputRel, outputRel, minify = false) {
    const env = {...process.env};
    if (minify) env.NODE_ENV = "production";
    else if (env.NODE_ENV === "production") delete env.NODE_ENV;

    const mapFlag = minify || IS_PROD ? "--no-map" : "--map";
    const plugins = [
        ...PLUGINS,
        ...(minify || IS_PROD ? ["--use cssnano"] : [])
    ];

    const cmd = [
        "postcss",
        `"${inputRel}"`,
        mapFlag,
        ...plugins,
        "-o",
        `"${outputRel}"`
    ].join(" ");

    const t0 = process.hrtime.bigint();
    execSync(cmd, {cwd: PROJECT_ROOT, stdio: "inherit", env});
    const t1 = process.hrtime.bigint();

    const outAbs = path.join(PROJECT_ROOT, outputRel);
    const size = fs.statSync(outAbs).size;

    metrics.files.push({
        file: outputRel,
        time: t1 - t0,
        size
    });

    console.log(`✔ ${outputRel} (${minify ? "min" : "std"}) — ${fmt(t1 - t0)}, ${fmtBytes(size)}`);
}

// ---------------------------------------------------------------------------
// Batch PostCSS builder — now produces .css + .min.css WITHOUT overwriting
// ---------------------------------------------------------------------------
function runPostCSSBatch(patternRel, outDirRel, minify = false) {
    // Clean temp folder on each batch minify pass
    if (minify) {
        if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, {recursive: true, force: true});
        fs.mkdirSync(TEMP_DIR);
    }

    const targetDir = minify ? TEMP_DIR : path.join(PROJECT_ROOT, outDirRel);

    const env = {...process.env};
    if (minify) env.NODE_ENV = "production";
    else if (env.NODE_ENV === "production") delete env.NODE_ENV;

    const mapFlag = minify || IS_PROD ? "--no-map" : "--map";
    const plugins = [
        ...PLUGINS,
        ...(minify || IS_PROD ? ["--use cssnano"] : [])
    ];

    const cmd = [
        "postcss",
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
        const folderAbs = path.join(PROJECT_ROOT, outDirRel);
        const allFiles = collectCSSFiles(folderAbs, outDirRel);
        allFiles.forEach(f => {
            metrics.files.push({
                file: f.rel,
                time: t1 - t0,
                size: f.size
            });
        });
        console.log(`✔ ${outDirRel} (batch std) — ${fmt(t1 - t0)}`);
        return;
    }

    // -------------------------------
    // MINIFY PATH: rename → *.min.css
    // -------------------------------
    const outAbsFinal = path.join(PROJECT_ROOT, outDirRel);

    const entries = collectCSSFiles(TEMP_DIR, "");
    entries.forEach(f => {
        const srcAbs = path.join(TEMP_DIR, f.rel);
        const base = path.basename(f.rel);

        const minName = base.replace(/\.css$/, ".min.css");
        const destAbs = path.join(outAbsFinal, minName);

        fs.copyFileSync(srcAbs, destAbs);

        const finalRel = path.join(outDirRel, minName);
        const size = fs.statSync(destAbs).size;

        metrics.files.push({
            file: finalRel,
            time: t1 - t0,
            size
        });
    });

    console.log(`✔ ${outDirRel} (batch min) — ${fmt(t1 - t0)}`);

    // cleanup temp
    fs.rmSync(TEMP_DIR, {recursive: true, force: true});
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
if (fs.existsSync(DIST_DIR)) fs.rmSync(DIST_DIR, {recursive: true, force: true});
fs.mkdirSync(DIST_DIR);

// ---------------------------------------------------------------------------
// Build top-level bundles
// ---------------------------------------------------------------------------
const topLevel = [
    {in: "src/index.css", out: "dist/vds.css"},
    {in: "src/core.css", out: "dist/core.css"},
    {in: "src/identity.css", out: "dist/identity.css"}
];

topLevel.forEach(({in: input, out}) => {
    runPostCSS(input, out, false);
    runPostCSS(input, out.replace(".css", ".min.css"), true);
});

// ---------------------------------------------------------------------------
// Build components + themes (batch)
// This now correctly outputs: file.css AND file.min.css
// ---------------------------------------------------------------------------
fs.mkdirSync(path.join(PROJECT_ROOT, "dist/components"), {recursive: true});
fs.mkdirSync(path.join(PROJECT_ROOT, "dist/themes"), {recursive: true});

runPostCSSBatch("src/components/**/*.css", "dist/components", false);
runPostCSSBatch("src/components/**/*.css", "dist/components", true);

runPostCSSBatch("src/themes/**/*.css", "dist/themes", false);
runPostCSSBatch("src/themes/**/*.css", "dist/themes", true);

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
