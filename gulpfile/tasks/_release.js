const release = (gulp) => {
  gulp.task('release:local', (callback) => {
    const { local } = gulp.config.release;
    callback();
  });

  gulp.task('release:remote', (callback) => {
    const { local } = gulp.config.release;
    callback();
  });
}

export default release;
