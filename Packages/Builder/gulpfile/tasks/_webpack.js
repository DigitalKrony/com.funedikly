import path from 'node:path';
import { glob } from 'glob';
import dotenv from 'dotenv';
import * as wp_config from './../../webpack.config.cjs';

const env = dotenv.config().parsed;
const config = wp_config;

const _webpack = (gulp) => {
  gulp.task('webpack', (done) => {
    const { webpack } = gulp.config;
    const buildDirectory = env.BUILD_DIR || 'dist';
    const siteDestination = env.SITE_DEST || '_site';

    if (webpack !== undefined) {
      console.log('Running Webpack...');

      Object.keys(webpack).forEach((key) => {
        const lookDirectoryGlob = path.join(__dirname, `${buildDirectory}/${webpack[key].src}`);
        console.log(lookDirectoryGlob);

        const entries = glob.sync([...lookDirectoryGlob]);
        console.log(entries);

        entries.forEach((entry) => {
          const thisFile = path.join(buildDirectory, entry);
          // console.log(thisFile)
        });
      });
    } else {
      console.error('No webpack configuration found.');
      done(new Error('Webpack configuration is missing.'));
    }

    done();
  });
};

export default _webpack;
