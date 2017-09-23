const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

// Image Optimization
gulp.task('imagemin', function (settings) {
  var settings = {
    source: ['_assets/img/**/*.{jpg,png,gif}'],
    destination: 'assets/img',
    optimizationLevel: 7
  };

  gulp.src(settings.source)
  .pipe(imagemin({
    optimizationLevel: settings.optimizationLevel
  }))
  .pipe(gulp.dest(settings.destination));
});
