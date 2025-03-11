'use strict';

const emitter = require('events').EventEmitter;
const fs = require('fs');
const path = require('path');
const util = require('util');
const utils = require('../utils');

const varReg = /\$[\S\s]*?\;[(\n| \n)]/g;

String.prototype.stripComments = function() {
    return this
        .replace(new RegExp(/(\/\*[\S\s]*?\*\/)/ig), `\n`)
        .replace(new RegExp(/(\/\/ .*)|(\/\/\n)/ig), `\n`);
}

const defaults = {
    src: `./node_modules/bootstrap/scss/_variables.scss`,
    dest: `./.tmp/data/defaults.json`,
    saveFile: true
};

class sassToJson {
    constructor (...props) {
        this.config = {
            ...defaults,
            ...props[0]
        }

        this.variables = {};

        this.sassVariableString = this.config.string ? this.config.string : fs.readFileSync(path.resolve(this.config.src), `utf8`)
        this.sassVariableString = this.sassVariableString.stripComments();

        this.convertSass();

        if (this.config.saveFile) {
            utils.save(this.config.dest, JSON.stringify(this.variables));
        } else {
            return this.variables;
        }
    }

    complete () { this.emit('complete'); }

    convertSass () {
        let varArray = this.sassVariableString.match(varReg);

        for (let variable of varArray) {
            let newVariable = variable;

            let newKey = newVariable.split(/\:[\S\s]*/)[0];
            let newValue = newVariable
                .replace(`${newKey}:`,'')
                .replace(' !default', '')
                .trim();
            
            this.variables[newKey] = newValue;
        }

        this.complete();
    }
}

util.inherits(sassToJson, emitter);
module.exports = sassToJson;