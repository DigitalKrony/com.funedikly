import dotenv from 'dotenv';
import { globSync } from 'glob';
import { deleteSync } from 'del';

const env = dotenv.config().parsed;

const clean = (gulp) => {
  const { clean } = gulp.config;

  const parseAndClean = (src, done) => {
    src.forEach((pattern) => {
      const toDelete = globSync(pattern, { dot: true, onlyFiles: true, unique: false, absolute: true });
      console.log(`Deleting: ${toDelete.length} file(s)...`);
      deleteSync(toDelete, { force: true });
      done();
    });
  }

  Object.keys(clean).forEach((key) => {
    gulp.task(`clean:${key}`, (done) => {
      const { src } = clean[key];

      console.log(`Cleaning ${key}...`);

      if (src !== undefined) {
        parseAndClean(src instanceof Array ? src : [src], done);
      } else {
        console.log('Clean config not found.');
      }
    });
  });
};

export default clean;
