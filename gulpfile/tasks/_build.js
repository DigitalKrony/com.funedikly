/* jshint esversion: 6 */
/* jshint node: true */

'use strict';

const build = (gulp) => {
  gulp.task('build', (cb) => {
    gulp.series('copy', 'copy_php', 'ts', 'webpack', 'scss')();
    cb();
  });
};

module.exports = build;
