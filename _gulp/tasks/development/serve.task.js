const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// Serve
gulp.task('serve', function (settings) {
  var settings = {
    source: ['_site/**'],
    port: 4000,
    baseDir: '/_site',
    styles: '_assets/css/**/*.css',
    scripts: '_assets/js/*.js',
    images: '_assets/img/**/*.{jpg,png,gif}'
  };

  browserSync.init({
    files: settings.source,
    port: settings.port,
    server: {
      baseDir: settings.baseDir
    }
  });

  // Watch
  gulp.watch(settings.styles, ['styles']);
  gulp.watch(settings.scripts, ['scripts']);
  gulp.watch(settings.images, ['imagemin']);
});
