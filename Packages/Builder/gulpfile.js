#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import gulp from 'gulp';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const configDir = './gulpfile/config/';
const taskDir = './gulpfile/tasks/';

gulp.config = {};
gulp.Gulp.prototype.__runTask = gulp.Gulp.prototype._runTask;
gulp.Gulp.prototype._runTask = task => {
  this.currentTask = task;
  this.__runTask(task);
};

export default class register {
  constructor(props) {
    try {
      fs.readdirSync(configDir).forEach(file => {
        const fileLocation = `.\\${path.relative(process.cwd(), path.join('./', configDir, file))}`;
        const metadata = path.parse(fileLocation);
        const isFile = fs.lstatSync(fileLocation).isFile();

        if (isFile) {
          console.log(`Loading configs from: ${file}`);

          const newConfig = require(`${metadata.dir}/${metadata.name}`);
          gulp.config[metadata.name] = newConfig.default;
        }
      });

      fs.readdirSync(taskDir).forEach(file => {
        const fileLocation = `.\\${path.relative(process.cwd(), path.join('./', taskDir, file))}`;
        const metadata = path.parse(fileLocation);
        const isFile = fs.lstatSync(fileLocation).isFile();

        if (isFile) {
          console.log(`Loading tasks in: ${file}`);

          const newTask = require(`${metadata.dir}/${metadata.name}`);
          newTask.default(gulp);
        }
      });
    } catch (error) {
      console.error("Error loading modules:", error);
    }
  }
}
