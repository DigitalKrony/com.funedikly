const release = (gulp) => {
  gulp.task('release:local', (done) => {
    const { local } = gulp.config.release;
    done();
  });

  gulp.task('release:remote', (done) => {
    const { local } = gulp.config.release;
    done();
  });
}

export default release;
