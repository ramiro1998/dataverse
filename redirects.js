const fs = require("fs");
const path = require("path");
const redirectsPath = path.join(
    __dirname,
    "dist",
    "dataverse",
    "browser",
    "_redirects"
);
const redirectsContent = `/*    /index.html   200\n`;
fs.mkdirSync(path.dirname(redirectsPath), { recursive: true });
fs.writeFileSync(redirectsPath, redirectsContent, "utf8");