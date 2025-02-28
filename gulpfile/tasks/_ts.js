/* jshint esversion: 6 */
/* jshint node: true */

'use strict';

const livereload = require('gulp-livereload');
const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const TS = require('gulp-typescript');
const uglify = require('gulp-uglify');

const devOptions = {
  noEmit: false,
  removeComments: false
};

const ts = (gulp) => {
  gulp.task('ts', (cb) => {
    const { ts } = gulp.config.dest;
    const tsP = TS.createProject('tsconfig.json', gulp.config.isDev ? devOptions : {});
    const tsR = gulp.src(ts.src).pipe(tsP());
    !gulp.config.isDev && tsR.js.pipe(uglify()); // jshint ignore:line
    tsR.js.pipe(gulp.dest(`${env.SITE_DEST}${ts.dest}`));
    cb();
  });
};

module.exports = ts;
