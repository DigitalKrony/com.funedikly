const livereload = require('gulp-livereload');

module.exports = (gulp) => {
  gulp.task('watch', (cb) => {
    const { copy, dest } = gulp.config;
    gulp.config.isDev = true;

    gulp.series('build')();

    gulp.watch([...copy.images.src, ...copy.txt.src, ...copy.statics.src], gulp.series('copy'));
    gulp.watch('./src/**/*[.php,.html]', gulp.series('copy_php'));
    gulp.watch(dest.ts.src, gulp.series('ts'));
    // gulp.watch(dest.wp.src, gulp.series('webpack'));
    // gulp.watch(dest.scss.src, gulp.series('scss'));

    livereload.listen(35729);

    cb();
  });

  gulp.task(
    'default',
    gulp.series('watch', (cb) => cb())
  );
};
