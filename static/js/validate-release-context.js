const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..", "..");
const EXPECTED_PACKAGE_NAME = "@24vlh/vds";
const EXPECTED_REPOSITORY_URL = "https://github.com/24vlh/vds.git";
const EXPECTED_REGISTRY = "https://registry.npmjs.org/";
const TOKEN_ENV_NAMES = ["NPM_TOKEN", "NODE_AUTH_TOKEN"];

function argValue(name) {
    const index = process.argv.indexOf(name);
    if (index !== -1) return process.argv[index + 1];
    const prefixed = process.argv.find((arg) => arg.startsWith(`${name}=`));
    return prefixed ? prefixed.slice(name.length + 1) : "";
}

function readJson(relPath) {
    return JSON.parse(fs.readFileSync(path.join(PROJECT_ROOT, relPath), "utf8"));
}

function listFiles(dir, prefix = "") {
    if (!fs.existsSync(dir)) return [];

    return fs.readdirSync(dir, {withFileTypes: true}).flatMap((entry) => {
        const relPath = path.posix.join(prefix, entry.name);
        const absPath = path.join(dir, entry.name);
        return entry.isDirectory() ? listFiles(absPath, relPath) : [relPath];
    });
}

function readRegistry() {
    const npmrcPath = path.join(PROJECT_ROOT, ".npmrc");
    if (!fs.existsSync(npmrcPath)) return "";

    const registryLine = fs.readFileSync(npmrcPath, "utf8")
        .split(/\r?\n/)
        .map((line) => line.trim())
        .find((line) => line.startsWith("registry="));

    return registryLine ? registryLine.replace(/^registry=/, "") : "";
}

function resolveTag(packageJson) {
    return argValue("--tag")
        || process.env.VDS_RELEASE_TAG
        || process.env.GITHUB_REF_NAME
        || `v${packageJson.version}`;
}

function main() {
    const packageJson = readJson("package.json");
    const tag = resolveTag(packageJson);
    const findings = [];

    if (!/^v\d+\.\d+\.\d+$/.test(tag)) {
        findings.push(`release tag must match vX.Y.Z, found ${tag}`);
    }

    if (tag !== `v${packageJson.version}`) {
        findings.push(`release tag ${tag} does not match package version ${packageJson.version}`);
    }

    if (packageJson.name !== EXPECTED_PACKAGE_NAME) {
        findings.push(`package name must be ${EXPECTED_PACKAGE_NAME}, found ${packageJson.name}`);
    }

    if (packageJson.repository?.url !== EXPECTED_REPOSITORY_URL) {
        findings.push(`repository URL must be ${EXPECTED_REPOSITORY_URL}, found ${packageJson.repository?.url || "missing"}`);
    }

    const registry = readRegistry();
    if (registry !== EXPECTED_REGISTRY) {
        findings.push(`npm registry must be ${EXPECTED_REGISTRY}, found ${registry || "missing"}`);
    }

    for (const envName of TOKEN_ENV_NAMES) {
        if (process.env[envName]) {
            findings.push(`${envName} must not be set; VDS uses npm trusted publishing/OIDC`);
        }
    }

    const sourceMaps = listFiles(path.join(PROJECT_ROOT, "dist"))
        .filter((relPath) => relPath.endsWith(".map"));
    for (const relPath of sourceMaps) {
        findings.push(`source maps are not part of the publish surface: dist/${relPath}`);
    }

    if (findings.length > 0) {
        console.log("Release context findings:");
        for (const finding of findings) {
            console.log(`- ${finding}`);
        }
        process.exitCode = 1;
        return;
    }

    console.log(`Release context passed for ${packageJson.name}@${packageJson.version} (${tag}).`);
}

main();
