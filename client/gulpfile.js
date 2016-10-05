var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');
    tsProject = ts.createProject("tsconfig.json");

gulp.task('build', function() {
    gutil.log('build css...');
    gulp.src('src/css/*.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('assets/css'));
});