const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const DEFAULT_OUT = path.join(PROJECT_ROOT, "node_modules", ".cache", "vds-publish", "package");

function argValue(name) {
    const index = process.argv.indexOf(name);
    if (index !== -1) return process.argv[index + 1];
    const prefixed = process.argv.find((arg) => arg.startsWith(`${name}=`));
    return prefixed ? prefixed.slice(name.length + 1) : "";
}

function copyRequiredFile(fileName, outDir) {
    const source = path.join(PROJECT_ROOT, fileName);
    if (!fs.existsSync(source)) {
        throw new Error(`Required publish file is missing: ${fileName}`);
    }
    fs.copyFileSync(source, path.join(outDir, fileName));
}

function sanitizePackageJson() {
    const packageJson = JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, "package.json"), "utf8"));

    delete packageJson.scripts;
    delete packageJson.devDependencies;
    delete packageJson["lint-staged"];

    return packageJson;
}

function main() {
    const outDir = path.resolve(PROJECT_ROOT, argValue("--out") || process.env.VDS_PUBLISH_DIR || DEFAULT_OUT);

    fs.rmSync(outDir, {recursive: true, force: true});
    fs.mkdirSync(outDir, {recursive: true});
    fs.cpSync(path.join(PROJECT_ROOT, "dist"), path.join(outDir, "dist"), {recursive: true});

    copyRequiredFile("README.md", outDir);
    copyRequiredFile("LICENSE", outDir);

    fs.writeFileSync(
        path.join(outDir, "package.json"),
        `${JSON.stringify(sanitizePackageJson(), null, 2)}\n`,
    );

    console.log(`Prepared VDS publish package at ${outDir}`);
}

main();
