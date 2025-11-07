'use strict';

const fs = require('node:fs');
const path = require('node:path');
const gulp = require('gulp');
const taskDir = './gulpfile/tasks/';

let msft = {};
let config = {};

fs.readdirSync(taskDir).forEach(function (file) {
    let fileLocation = `${taskDir}${file}`;
    let requireString = fileLocation.replace('.js', '');
    let isFile = fs.lstatSync(fileLocation).isFile();

    if (isFile) {
        require(requireString)(gulp);
    }
});