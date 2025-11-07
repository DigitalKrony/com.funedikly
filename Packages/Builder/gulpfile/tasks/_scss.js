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
  const { scss } = gulp.config;

  const compileAndSave = (blob, done) => {
    const { dest, src } = blob;

    gulp
      .src(src)
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
      .pipe(gulp.dest(`${dest}`))
      .pipe(livereload());
    built = true;

    done();
  };

  Object.keys(scss).forEach((key) => {
    const { src } = scss[key];

    console.log(`S(A|C)SSing ${key}...`);

    gulp.task(`scss:${key}`, (done) => {
      if (src !== undefined) {
        compileAndSave(scss[key], done);
      } else {
        console.log(`SCSS config not found.`);
      }
    });
  });
};

export default scss;
