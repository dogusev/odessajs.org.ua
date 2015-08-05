var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload');

gulp.task('less', function () {
  gulp.src('./less/main.less')
    .pipe(less())
    .pipe(plumber())
    .pipe(gulp.dest('./css'))
    .pipe(livereload())
});

gulp.task('css', function () {
  gulp.src('./css/index.css')
    .pipe(livereload())
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(livereload())
});

gulp.task('watch', function() {
  gulp.watch('./less/*.less', ['less']);
  gulp.watch('./css/*.css', ['css']);
  gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['watch', 'less']);
gulp.task('build', ['less']);
