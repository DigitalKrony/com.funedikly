"use strict";

const fs = require("node:fs");
const path = require("node:path");
const typescript = require("typescript");
const webpack = require("webpack");
const utils = require("../../../local_modules/utils");

const router = require("express").Router();
// const router = express.Router();

const tsConfig = JSON.parse(fs.readFileSync(`tsconfig.json`));

router.get("/js/:version/:file*", (req, res, next) => {
  const qsp = req.query;
  const params = req.params;
  const minify = params.file.indexOf("min") === -1 ? false : true;

  const config = {};
  const srcPath = fs.readdirSync(`./src/js`, { withFileTypes: true });

  for (let entry of srcPath) {
    if (entry.isDirectory() && entry.name === params.file) {
      const tsPath = path.resolve(process.cwd(), entry.parentPath, entry.name);
      config.name = entry.name;
      config.directory = tsPath;
      config.index = path.resolve(tsPath, `index.ts`);
      break;
    }
  }

  webpack({
    mode: "none",
    entry: config.index,
    output: {
      path: path.resolve(process.cwd(), ".tmp/js"),
      filename: `${config.name}.js`,
    },
  }).run();

  res.header("Content-Type", "application/javascript");

  setTimeout(() => {
    res.sendFile(`${process.cwd()}/.tmp/js/${config.name}.js`);
  }, 500);
});

module.exports = router;
