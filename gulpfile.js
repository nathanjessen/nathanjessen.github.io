var gulp = require('gulp'),
  gutil = require('gulp-util'),
  sass = require('gulp-ruby-sass'),
  prefix = require('gulp-autoprefixer'),
  minifyCSS = require('gulp-minify-css'),
  uncss = require('gulp-uncss'),
  livereload = require('gulp-livereload'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify')
  imagemin = require('gulp-imagemin'),
  glob = require('glob'),
  rename = require('gulp-rename'),
  notify = require("gulp-notify");

gulp.task('styles', function () {
  gulp.src('_site/css/main.css')
    .pipe(prefix("> 5%"))
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(notify("css minified"))
    .pipe(gulp.dest('css'));

  gulp.src([
      '_assets/vendors/reveal/css/reveal.css',
      '_assets/vendors/reveal/css/theme/beige.css'
    ])
    .pipe(minifyCSS())
    .pipe(gulp.dest('assets/css'));
});


gulp.task('scripts', function () {
  gulp.src([
      '_assets/js/main.js'
    ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));

  gulp.src([
      '_assets/vendors/reveal/js/reveal.js'
    ])
    .pipe(concat("reveal.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));

});

// Images
gulp.task('imagemin', function () {
  gulp.src('_assets/img/**/*.{jpg,png,gif}')
  .pipe(imagemin({
    optimizationLevel: 7
  }))
  .pipe(gulp.dest('assets/img'));
});

gulp.task('watch', function () {
  var server = livereload();
  gulp.watch('_site/css/main.css', ['styles']);
  gulp.watch('_assets/js/*.js', ['scripts']);
  gulp.watch('_assets/img/**', ['imagemin']);
  // gulp.watch('_assets/css/**').on('change', function(file) {
  // 	server.changed(file.path);
  // });
});


gulp.task('default', ['watch']);
