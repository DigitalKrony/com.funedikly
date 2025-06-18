import livereload from 'gulp-livereload';
import dotenv from 'dotenv';
import gmq from 'gulp-css-mqpacker';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const sass = gulpSass(dartSass);
const env = dotenv.config().parsed;

let built = false;

const scss = (gulp) => {
  gulp.task('scss', (callback) => {
    const { scss } = gulp.config.dest;
    const buildDirectory = env.BUILD_DIR || 'dest';

    if (built) {
      scss.src.push('!./**/snorkel.scss');
    }

    gulp
      .src(scss.src)
      .pipe(sourcemaps.init())
      .pipe(
        sass({
          outputStyle: gulp.config.isDev ? 'expanded' : 'compressed',
          indentType: 'spaces',
          indentWidth: 2,
          quietDeps: true,
          sassOptions: { quietDeps: true }
        }).on('error', sass.logError)
      )
      .pipe(gmq())
      .pipe(sourcemaps.write('./maps'))
      .pipe(gulp.dest(`${buildDirectory}${scss.dest}`))
      .pipe(livereload());
    built = true;

    callback();
  });
};

export default scss;
