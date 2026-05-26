const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.VDS_DOC_PORT || 8000);
const HOST = process.env.VDS_DOC_HOST || "0.0.0.0";

const ROOT = path.resolve(__dirname, "../..");

app.use(
    express.static(ROOT, {
        extensions: ["html"]
    })
);

app.use((req, res) => {
    res.sendFile(path.join(ROOT, "index.html"));
});

const server = app.listen(PORT, HOST, () => {
    console.log("VDS docs server running:");
    console.log(`  http://${HOST === "0.0.0.0" ? "127.0.0.1" : HOST}:${PORT}`);
    console.log(`  Root: ${ROOT}`);
});

server.on("error", (error) => {
    console.error(`VDS docs server failed to start on ${HOST}:${PORT}`);
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
});
