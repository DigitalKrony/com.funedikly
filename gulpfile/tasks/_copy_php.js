/* jshint esversion: 6 */
/* jshint node: true */

'use strict';

const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const copy_php = (gulp) => {
  gulp.task('copy_php', (cb) => {
    gulp.src(['./src/wp-content/**/*[.php,.html]']).pipe(gulp.dest(`${env.SITE_DEST}/wp-content/`));
    cb();
  });
};

module.exports = copy_php;
