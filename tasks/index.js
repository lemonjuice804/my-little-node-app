'use strict';

const concat = require('gulp-concat');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const paths = {
    scripts: [
        '../frontend/scripts/**.js'
    ],
};

gulp.task('scripts1', () => {
    return gulp.src(paths.scripts)
      .pipe(sourcemaps.init())
      .pipe(uglify())
      // .pipe(concat('all.min.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('../public/assets'));

});

require('./scripts');
gulp.task('default', ['scripts']);
