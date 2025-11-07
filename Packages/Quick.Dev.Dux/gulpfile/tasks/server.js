'use strict';

const nodemon = require('gulp-nodemon');

module.exports = function (gulp) {
    gulp.task('server', function () {
        nodemon({
            script: './server',
            watch: ['dev.server.js', './server', './local_modules', './gulpfile']
        }).on('restart');
    });
}
