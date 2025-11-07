const build = (gulp) => {
  gulp.task('build', done => {
    gulp.series(
      'clean:local',
      'clean:build',
      'copy:community',
      'copy:statics',
      'typescript:modules',
      'copy:distribution',
    )();

    done();
  });
};

export default build;
