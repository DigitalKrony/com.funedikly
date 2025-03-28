import fs from 'fs';
import path from 'path';
import js_beautify from 'js-beautify';
import { faker } from '@faker-js/faker';

import pPackage from './../../package.json';
import type { BuildConfig, RandomProps } from './Builder.types';
import { defaults } from './Builder.defaults';
import { Save, CreateHexKey, RandomInt } from '@df/utilities';

const CWD = process.cwd();

const configSrc: string = path.join(CWD, `database.config.json`);

const config: BuildConfig = fs.existsSync(path.resolve(configSrc))
  ? JSON.parse(fs.readFileSync(path.resolve(configSrc), 'utf-8'))
  : {};
const fileDest = config.destination ? config.destination : `./lib/data/db.json`;
const BuiltDatabase: any = {};
let DataToConvert: any = {};

const helpText = `------ Static Database Server v${pPackage.version} ------`;

console.log(helpText);

const convertStringToObject = (str: string) => {
  var properties = str.split(', ');
  var obj: Record<string, string> = {};
  properties.forEach(function (property) {
    var tup = property.split(':');

    if (!!tup[0] && !!tup[1]) {
      obj[tup[0].trim()] = tup[1].trim();
    }
  });

  return obj;
};

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
  !!config.extends &&
    Object.assign(DataToConvert, { ...DataToConvert, ...getExtensionFiles(config.extends) });
};

const fakeValue = (item: object | string | any, iteration?: number) => {
  const fakedBlock: any = {};

  for (const key in item) {
    const value = item[key];

    if (typeof value === 'object') {
      fakedBlock[key] = fakeValue(value, iteration);
    } else if (typeof value === 'string') {
      const internalValue = value.indexOf('$') === 0;
      const fakerValue = /(?<={{)(.*?)(?=}})/g.exec(value);

      if (!!internalValue) {
        if (value === '$i') {
          fakedBlock[key] = iteration;
        } else {
          let internalFn = /(?<=\$)(.*?)(?=\()/g.exec(value)![1];
          let fnVar: any = convertStringToObject(/(?<=\()(.*?)(?=\))/g.exec(value)![1]);

          fakedBlock[key] = eval(`${internalFn}`)(fnVar);
        }
      } else if (!!fakerValue) {
        fakedBlock[key] = faker.helpers.fake(value);
      } else {
        fakedBlock[key] = value;
      }
    }
  }

  return fakedBlock;
};

const fakeSchemas = () => {
  for (const schema in DataToConvert) {
    const thisSchema = DataToConvert[schema];
    BuiltDatabase[schema] = [];

    if (!!thisSchema.schema || !!thisSchema.count) {
      for (let i = 0; i < thisSchema.count; i++) {
        const thisVal = thisSchema.schema;
        const newFakeBlock = fakeValue(thisVal, i);
        BuiltDatabase[schema].push(newFakeBlock);
      }
    }
  }
};

// @ts-ignore-next-line
const random = (args: RandomProps): any => {
  const id: string = CreateHexKey({ lengths: [5, 4, 5, 8] });
  console.log(RandomInt({ length: 10 }));
  switch (args.type) {
    case 'connection':
      const thisObj = DataToConvert[args.object!];
      const connectId = Math.floor(Math.random() * thisObj.count);
      return connectId;
    case 'hex-key':
      return '';
  }
};

(() => {
  buildSchemaObject();

  fakeSchemas();

  // console.log(BuiltDatabase);

  Save(
    fileDest,
    js_beautify(JSON.stringify(BuiltDatabase), {
      end_with_newline: true,
      brace_style: 'expand',
      indent_size: 2,
    })
  );
})();
