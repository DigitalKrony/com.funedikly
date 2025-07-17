#!/usr/bin/env node

const dfbuild = require('./../gulpfile.js');

const [, , ...args] = process.argv;

new dfbuild.default(args);
