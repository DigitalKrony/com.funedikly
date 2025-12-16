'use strict';

const fs = require('node:fs');
const path = require('node:path');
const typescript = require('typescript');
const webpack = require('webpack');
const utils = require('../../../local_modules/utils');

const router = require('express').Router();

const tsConfig = JSON.parse(fs.readFileSync(`tsconfig.json`));

router.get('/js/:version/:file*', (req, res, next) => {
  const qsp = req.query;
  const params = req.params;
  const minify = params.file.indexOf('min') === -1 ? false : true;

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

  const renderer = webpack({
    mode: 'none',
    entry: config.index,
    target: ['web', 'es6'],
    output: {
      path: path.resolve(process.cwd(), '.tmp/js'),
      filename: `${config.name}.js`,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
            },
          },
          exclude: /node_modules/,
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  });
  renderer.run();
  renderer.hooks.done.tap('done', (stats) => {
    res.header('Content-Type', 'application/javascript');
    res.sendFile(`${process.cwd()}/.tmp/js/${config.name}.js`);
  });
});

module.exports = router;
