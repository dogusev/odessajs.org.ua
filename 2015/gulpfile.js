var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');

gulp.task('less', function () {
  return gulp
    .src('./less/main.less')
    .pipe(less())
    .pipe(plumber())
    .pipe(gulp.dest('./css'))
    .pipe(livereload())
});

gulp.task('css', function () {
  return gulp
    .src('./css/main.css')
    .pipe(livereload())
});

gulp.task('html', function () {
  return gulp
    .src('./*.html')
    .pipe(livereload())
});

gulp.task('watch', function () {
  gulp.watch('./less/*.less', ['less']);
  gulp.watch('./css/*.css', ['css']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['watch', 'less']);
gulp.task('build', ['less']);
