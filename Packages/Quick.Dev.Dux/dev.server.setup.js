'use strict';

const fs = require('node:fs');
const path = require('node:path');
const utils = require('./local_modules/utils');
const glob = require('globule');

let copyList = [
    {
        "src": "./node_modules/jquery/dist/jquery.min.js",
        "dest": "./.tmp/scripts/"
    }, {
        "src": "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "dest": "./.tmp/scripts/"
    }, {
        "src": "./node_modules/font-awesome/fonts/*.*",
        "dest": "./.tmp/fonts/"
    }, {
        "src": "./node_modules/popper.js/dist/umd/popper.min.js",
        "dest": "./.tmp/scripts/"
    }
];



for (let file of copyList) {
    let fileListing = glob.find(file.src);

    for (let oldFile of fileListing) {
        let fileName = path.basename(oldFile);

        utils.copy(oldFile,
            path.normalize(`${file.dest}/${fileName}`),
            () => {
                console.log(`${fileName} Copy complete.`);
            }
        );
    }
}