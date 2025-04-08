#!/usr/bin/env node

const scaffold = require('./../lib/index.js');

const [, , ...args] = process.argv;

new scaffold(args);
