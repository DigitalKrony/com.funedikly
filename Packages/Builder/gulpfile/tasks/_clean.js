import path from 'node:path';
import dotenv from 'dotenv';
import { deleteSync } from 'del';

const env = dotenv.config().parsed;

const clean = (gulp) => {
  const buildDirectory = env.BUILD_DIR || 'dest';

  const parseAndClean = (src) => {
    if (typeof src === 'string') {
      const buildDir = path.resolve(buildDirectory, src);
      deleteSync([buildDir], { force: true });
    } else if (Array.isArray(src)) {
      src.forEach((item) => {
        parseAndClean(item);
      });
    } else {
      Object.keys(src).forEach((key) => {
        parseAndClean(src[key].src);
      });
    }
  }

  gulp.task('clean:build', (callback) => {
    const { build } = gulp.config.clean;

    if (!!build) {
      parseAndClean(build);
    } else {
      console.log('Clean config not found.');
    }

    callback();
  });

  gulp.task('clean:local', (callback) => {
    const { local } = gulp.config.clean;

    if (!!local) {
      parseAndClean(local);
    } else {
      console.log('Clean:Build config not found.');
    }

    callback();
  });
};

export default clean;
