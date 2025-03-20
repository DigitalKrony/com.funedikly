import fs from 'fs';
import path from 'path';
import js_beautify from 'js-beautify';

import { save } from '@df/utilities';
import { defaults } from './';

const configSrc = path.join(__dirname, `database.config.json`);

const config = fs.existsSync(path.resolve(configSrc)) ? JSON.parse(fs.readFileSync(path.resolve(configSrc), 'utf-8')) : {};
const fileDest = config.dest ? config.dest : `./lib/data/db.json`;

console.log(configSrc);

let schemaLibrary = {
    ...defaults
}

let data = {
    ...config.static
};

let schemasToBuild = {};

save(fileDest, js_beautify(JSON.stringify(data)));
