/// <reference path="./typings/tsd.d.ts"/>

import gulp = require('gulp');
import browserSync = require('browser-sync');

var reload = browserSync.reload;

gulp.task('html-watch', reload);
gulp.task('serve', () => {
    browserSync({
        server: 'app'
    });
    gulp.watch('app/**/*.html', [ 'html-watch' ])
});

gulp.task('default', ['serve']);

