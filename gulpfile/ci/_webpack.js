const ci_webpack = (gulp) => {
  gulp.task('webpack', () => {
    return gulp.src('./src/index.js') // Entry point
      .pipe(webpack(require('./webpack.config.js'))) // Use your existing webpack config
      .pipe(gulp.dest('./build/')); // Output directory
  });
};

module.exports = ci_webpack;