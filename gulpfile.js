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

gulp.task('inject', function() {
  var wiredep = require('wiredep').stream;
  var options = {
    bowerJson: require('./bower.json'),
    directory: './public/lib',
    ignorePath: '../../public'
  };

  return gulp.src('./src/views/*.html')
             .pipe(wiredep(options))
             .pipe(gulp.dest('./src/views'));
});
