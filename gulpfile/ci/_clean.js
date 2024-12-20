const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const del = require('del');
// import {del} from 'del';
// const del = (...args) => import('del').then(({default: del}) => del(...args));


const clean = (gulp) => {
  gulp.task('clean', (cb) => {
    del([`${env.SITE_DEST}/wp-content/themes/df-site`, `${env.SITE_DEST}/wp-content/themes/df-site-two`], {
      force: true
    });
    cb();
  });
};

module.exports = clean;
