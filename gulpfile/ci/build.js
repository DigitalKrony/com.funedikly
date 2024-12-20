const ci_build = (gulp) => {
  gulp.task('build', (cb) => {
    gulp.series('clean', 'ci_webpack')();
    cb();
  });
};

module.exports = ci_build;
