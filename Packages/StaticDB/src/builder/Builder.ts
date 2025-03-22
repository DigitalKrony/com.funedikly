import fs from 'fs';
import path from 'path';
import js_beautify from 'js-beautify';

import type { BuildConfig } from './Builder.types';
import { defaults } from './Builder.defaults';
import { save } from '@df/utilities';

const CWD = process.cwd();

const configSrc: string = path.join(CWD, `database.config.json`);

const config: BuildConfig = fs.existsSync(path.resolve(configSrc)) ? JSON.parse(fs.readFileSync(path.resolve(configSrc), 'utf-8')) : {};
const fileDest = config.destination ? config.destination : `./lib/data/db.json`;
const BuiltDatabase: any = {};
let DataToConvert = {};

// TODO: Set initial values determined by the Config, initialize data sets and schemas

const getExtensionFiles = (files: string[]): any => {
  const ExtensionObject = {};

  for (const file of files) {
    const filePath = path.resolve(path.join(CWD, file));
    const extensionFile = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf-8')) : {};

    Object.assign(ExtensionObject, { ...ExtensionObject, ...extensionFile });
  }

  return ExtensionObject;
};

const buildSchemaObject = () => {
  config.includeDefaults && Object.assign(DataToConvert, defaults);
  !!config.extends && Object.assign(DataToConvert, { ...DataToConvert, ...getExtensionFiles(config.extends) });
};

const fakeSchemas = () => {
  for (const schema in DataToConvert) {
    BuiltDatabase[schema] = {};
  }

  console.log(BuiltDatabase);
};

(() => {
  buildSchemaObject();

  fakeSchemas();

  save(fileDest, js_beautify(JSON.stringify(BuiltDatabase)));
})();

