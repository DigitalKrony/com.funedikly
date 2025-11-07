'use strict';

const fs = require('node:fs');
const util = require('node:util');
const path = require('node:path');

const emitter = require('node:events').EventEmitter;

const sass = require('sass-embedded');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const mqpacker = require("css-mqpacker");

const utils = require('../utils');
const jsonToSass = require('../jsonToSass');
class sassRenderer {
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
            const theCSS = sass.renderSync({ data: scssTemplate, outputStyle: config.outputStyle });
            compiled += `/* DUX CSS - Generated on ${new Date().toISOString()} */\n\n`;
            compiled += theCSS.css.toString();

            if (process.env.NODE_ENV != 'production') {
                utils.save('.tmp/scss/scss.scss', scssTemplate);
                utils.save('.tmp/css/scss.css', compiled);
            }
        } catch (err) {
            process.stdout.write(`${err.formatted}\n`);
            compiled += `SASS ERROR:\n${err}`;
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

util.inherits(sassRenderer, emitter);
module.exports = new sassRenderer();
