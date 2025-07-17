const build = (gulp) => {
  gulp.task('build', (callback) => {
    gulp.series(
      'clean:build',
      'copy:statics',
      'copy:dom',
      'typescript',
      'scss'
    )();

    callback();
  });
};

export default build;
