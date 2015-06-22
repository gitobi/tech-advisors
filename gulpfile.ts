/// <reference path="./typings/tsd.d.ts"/>

import gulp = require('gulp');
import browserSync = require('browser-sync');
import sass = require('gulp-sass');

var reload = browserSync.reload;

gulp.task('html-watch', reload);
gulp.task('scss-watch', [ 'compile-scss' ]);

gulp.task('compile-scss', function() {
    gulp.src("app/scss/application.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('serve', () => {
    browserSync({
        server: 'app'
    });
    gulp.watch('app/**/*.html', [ 'html-watch' ]);
    gulp.watch('app/scss/**/*.scss', [ 'scss-watch' ]);
});

gulp.task('default', ['serve']);

