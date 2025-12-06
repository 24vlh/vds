// js/server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

// Root of the VDS site: parent of /js
const ROOT = path.resolve(__dirname, "..");

// 1) Serve all static files from ROOT
app.use(
    express.static(ROOT, {
        extensions: ["html"]
    })
);

// 2) SPA fallback: any request not handled above → index.html
app.use((req, res) => {
    res.sendFile(path.join(ROOT, "index.html"));
});

// 3) Listen on all interfaces
app.listen(PORT, "0.0.0.0", () => {
    console.log("VDS docs server running:");
    console.log(`  http://127.0.0.1:${PORT}`);
    console.log(`  http://localhost:${PORT}`);
});
