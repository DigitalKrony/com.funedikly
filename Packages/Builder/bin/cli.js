#!/usr/bin/env node

import dfb from './../gulpfile.js';

const [, , ...args] = process.argv;

new dfb(args);
