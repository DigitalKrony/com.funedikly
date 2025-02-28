/* jshint esversion: 6 */
/* jshint node: true */

'use strict';

const fs = require('fs');
const gulp = require('gulp');
const ciDir = `./gulpfile/ci`;
const taskDir = './gulpfile/tasks/';
const configDir = './gulpfile/config/';

gulp.config = {};
gulp.Gulp.prototype.__runTask = gulp.Gulp.prototype._runTask;
gulp.Gulp.prototype._runTask = task => {
  this.currentTask = task;
  this.__runTask(task);
};

fs.readdirSync(configDir).forEach(file => {
  let fileName = file.replace('.js', '');
  let fileLocation = `${configDir}${file}`;
  let requireString = fileLocation.replace('.js', '');
  let isFile = fs.lstatSync(fileLocation).isFile();

  if (isFile) {
    gulp.config[fileName] = require(requireString);
  }
});

fs.readdirSync(taskDir).forEach(file => {
  let fileLocation = `${taskDir}${file}`;
  let requireString = fileLocation.replace('.js', '');
  let isFile = fs.lstatSync(fileLocation).isFile();

  if (isFile) {
    require(requireString)(gulp);
  }
});
