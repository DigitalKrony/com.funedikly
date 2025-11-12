#!/usr/bin/env node

const dumbDB = require('./../lib/index.js');

const [, , ...args] = process.argv;

new dumbDB(args);
