var gulp = require('gulp');
var jsFiles = ['*.js', 'src/**/*.js'];
var jsHint = require('gulp-jshint');

gulp.task('style', function() {
  gulp.src(jsFiles)
      .pipe(jsHint())
      .pipe(jsHint.reporter('jshint-stylish', {
        verbose: true
      }));
});
