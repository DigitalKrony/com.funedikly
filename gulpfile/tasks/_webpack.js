import path from 'node:path';
import fs from 'node:fs';
import { glob } from 'glob';
import * as wp_s from 'webpack-stream';
import dotenv from 'dotenv';
import * as wp_config from './../../webpack.config.js';

const env = dotenv.config().parsed;
const config = wp_config;

const _webpack = (gulp) => {
  gulp.task('webpack', (callback) => {
    const { webpack } = gulp.config;
    const buildDirectory = env.BUILD_DIR || 'dest';
    const siteDestination = env.SITE_DEST || '_site';

    if (!!webpack) {
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
      callback(new Error('Webpack configuration is missing.'));
    }

    callback();
  });
};

export default _webpack;
