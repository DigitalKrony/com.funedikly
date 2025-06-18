// import livereload from 'gulp-livereload';

const _default = (gulp) => {
  gulp.task('watch', (callback) => {
    const { watch } = gulp.config;
    gulp.config.isDev = true;

    gulp.series('build')();

    gulp.watch([...watch.frontend.images.src, ...watch.frontend.txt.src, ...watch.frontend.statics.src], gulp.series('copy:statics'));
    gulp.watch([...watch.be.dom.src], gulp.series('copy:dom'));
    gulp.watch(watch.typescript.src, gulp.series('typescript'));
    gulp.watch(watch.scss.src, gulp.series('scss'));

    // livereload.listen(35729);

    callback();
  });

  gulp.task(
    'default',
    gulp.series('watch', callback => callback())
  );
};

export default _default;
