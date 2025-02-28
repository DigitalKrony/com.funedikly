/* jshint esversion: 6 */
/* jshint node: true */

'use strict';

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const webpack = require('webpack-stream');
const dotenv = require('dotenv');
const wp_config = require('./../../webpack.config');

const env = dotenv.config().parsed;
const config = wp_config;

const pack = (gulp) => {
  gulp.task('webpack', (cb) => {
    const { wp } = gulp.config.dest;

    const blocks = glob.sync(`${process.cwd()}/src/wp-content/plugins/Moray-Blocks/blocks/*`);
    for (const block of blocks) {
      const possibleFiles = glob.sync(`${block}/index.*`)[0];

      if (fs.existsSync(possibleFiles)) {
        config.entry[path.basename(block)] = possibleFiles;
      }
    }

    config.output.path = `${env.SITE_DEST}${wp.dest}`;

    gulp
      .src(wp.src)
      .pipe(webpack({ ...config }))
      .pipe(gulp.dest(`${env.SITE_DEST}${wp.dest}`));

    cb();
  });
};

module.exports = pack;
