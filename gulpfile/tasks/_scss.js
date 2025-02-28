/* jshint esversion: 6 */
/* jshint node: true */

'use strict';

const livereload = require('gulp-livereload');
const dotenv = require('dotenv');
const gmq = require('gulp-group-css-media-queries');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

const env = dotenv.config().parsed;

let built = false;

const scss = (gulp) => {
  gulp.task('scss', (cb) => {
    const { scss } = gulp.config.dest;

    if (built) {
      scss.src.push('!./**/mwf.scss');
    }

    gulp
      .src(scss.src)
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          outputStyle: gulp.config.isDev ? 'expanded' : 'compressed',
          indentType: 'spaces',
          indentWidth: 2,
          quietDeps: true,
          sassOptions: { quietDeps: true }
        }).on('error', sass.logError)
      )
      .pipe(gmq())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(`${env.SITE_DEST}${scss.dest}`))
      .pipe(livereload());
    built = true;

    cb();
  });
};

module.exports = scss;
