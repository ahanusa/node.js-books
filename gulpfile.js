var gulp = require('gulp');
var jsFiles = ['*.js', 'src/**/*.js'];
var jsHint = require('gulp-jshint');
var jscs = require('gulp-jscs');

gulp.task('style', function() {
  return gulp.src(jsFiles)
             .pipe(jsHint())
             .pipe(jsHint.reporter('jshint-stylish', {
               verbose: true
             }))
             .pipe(jscs());
});
