import dotenv from 'dotenv';
const env = dotenv.config().parsed;

const copy = (gulp) => {
  const buildDirectory = env.BUILD_DIR || 'dest';

  const parseAndCopy = (blobs) => {
    Object.keys(blobs).forEach((key) => {
      const toCopy = blobs[key];
      console.log(`Copying ${toCopy.src} to ${buildDirectory}${toCopy.dest}`);
      gulp.src(toCopy.src)
        .pipe(gulp.dest(`${buildDirectory}${toCopy.dest}`));
    });
  };

  gulp.task('copy:statics', (callback) => {
    const { statics } = gulp.config.copy;

    if (!!statics) {
      console.log('Copying frontend assets...');
      parseAndCopy(statics);
    } else {
      console.log('No frontend assets to copy.');
    }

    callback();
  });

  gulp.task('copy:dom', (callback) => {
    const { dom } = gulp.config.copy;

    if (!!dom) {
      console.log('Copying php assets...');
      parseAndCopy(dom);
    } else {
      console.log('No php assets to copy.');
    }

    callback();
  });
};

export default copy;
