/* jshint esversion: 6 */
/* jshint node: true */

'use strict';

const env = require('dotenv').config().parsed;

const copy = (gulp) => {
  gulp.task('copy', (cb) => {
    const { copy } = gulp.config;

    for (let i in copy) {
      const toCopy = copy[i];
      gulp.src(toCopy.src).pipe(gulp.dest(`${env.SITE_DEST}${toCopy.dest}`));
    }

    cb();
  });
};

module.exports = copy;
