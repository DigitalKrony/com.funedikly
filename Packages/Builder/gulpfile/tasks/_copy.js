import dotenv from 'dotenv';
const env = dotenv.config().parsed;

const copy = (gulp) => {
  const { copy } = gulp.config;

  const parseAndCopy = (blob, done) => {
    const { base, dest, src } = blob;

    src.forEach((pattern) => {
      gulp.src(pattern, { base: base || './' })
        .on('error', (err) => {
          console.error(`Error in copy task`);
        })
        .pipe(gulp.dest(dest))
        .on('end', () => {
          done();
        });
    });
  };

  Object.keys(copy).forEach((key) => {
    const { src } = copy[key];

    console.log(`Copying ${key}...`);

    gulp.task(`copy:${key}`, (done) => {
      if (src !== undefined) {
        parseAndCopy(copy[key], done);
      } else {
        console.log(`Copy config not found.`);
      }

    });
  });
};

export default copy;
