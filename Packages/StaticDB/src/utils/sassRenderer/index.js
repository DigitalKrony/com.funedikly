'use strict';

const autoprefixer = require('autoprefixer');
const emitter = require('events').EventEmitter;
const fs = require('fs');
const jsonToSass = require('../jsonToSass');
const path = require('path');
const postcss = require('postcss');
const mqpacker = require("css-mqpacker");
const sass = require('node-sass');
const util = require('util');
const utils = require('../utils');

export class sassRenderer {
    compile(config = utils.required('config'), next = null) {
        let compiled = '';
        let scssTemplate = jsonToSass.map(config.variables);

        for (let port of config.imports) {
            let lowDashName = port.split(`/`);
            lowDashName.push(`_${lowDashName.pop()}`);

            if (fs.existsSync(path.resolve(`${port}.scss`)) || fs.existsSync(path.resolve(`${lowDashName.join('/')}.scss`))) {
                scssTemplate += `/* ${port} */\n@import '${port}';\n`;
            } else {
                let errorString = `Error: '${port}' does not exist. Please check your files or component's import string.`;
                scssTemplate += `\n/* ${errorString} */\n\n`;
                process.stdout.write(`${errorString}\n`);
            }
        }

        try {
            compiled = postcss([autoprefixer, mqpacker]).process(sass.renderSync({ data: scssTemplate, outputStyle: config.outputStyle }).css.toString()).css;

            if (process.env.NODE_ENV != 'production') {
                utils.save('.tmp/scss/scss.scss', scssTemplate);
                utils.save('.tmp/css/scss.css', compiled);
            }
        } catch (err) {
            process.stdout.write(`${err.formatted}\n`);
            compiled = `SASS ERROR:\n${err.formatted}`;
        }

        if (next) {
            this.complete();
            next(compiled);
        } else {
            this.complete();
            return compiled;
        }
    }

    complete() { this.emit('complete'); }
}

// util.inherits(sassRenderer, emitter);
// module.exports = new sassRenderer();
