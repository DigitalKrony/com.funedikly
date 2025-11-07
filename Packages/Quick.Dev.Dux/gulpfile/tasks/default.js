'use strict';

const util = require('gulp-util');

module.exports = function (gulp) {
    gulp.task('default', function () {
        let taskList = [];

        taskList.push('server');

        gulp.start(taskList);
    });
}