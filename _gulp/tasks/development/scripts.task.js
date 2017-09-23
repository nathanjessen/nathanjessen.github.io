const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Scripts
gulp.task('scripts', function (settings) {
  var settings = {
    source: ['_assets/js/*.js'],
    destination: 'assets/js',
    concatName: 'main.min.js'
  };

  var options = {
    preserveComments: 'license'
  }

  gulp.src(settings.source)
    .pipe(concat(settings.concatName))
    .pipe(uglify(options))
    .pipe(gulp.dest(settings.destination));
});
