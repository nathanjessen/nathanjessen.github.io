const child = require('child_process');
const browserSync = require('browser-sync').create();

const gulp = require('gulp');
const prefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const cleanCSS = require('gulp-clean-css');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const gutil = require('gulp-util');

const siteRoot = '_site';
const sassFiles = '_assets/scss/**/*.scss';
const jsFiles = '_assets/js/*.js';
const imageFiles = '_assets/img/**/*.{jpg,png,gif}';

// Sass
gulp.task('sass', function () {
  gulp.src(sassFiles)
    .pipe(sass())
    .pipe(prefix('> 5%'))
    .pipe(cleanCSS())
    .pipe(rename('main.min.css'))
    .pipe(notify('css optimized'))
    .pipe(gulp.dest('assets/css'));
});

// JavaScript
gulp.task('scripts', function () {
  gulp.src(jsFiles)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

// Vendor JS
gulp.task('vendor-js', function () {
  gulp.src([
      '_assets/vendors/reveal/js/reveal.js'
    ])
    .pipe(concat('reveal.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

// Vendor CSS
gulp.task('vendor-css', function () {
  gulp.src([
    '_assets/vendors/reveal/css/reveal.css',
    '_assets/vendors/reveal/css/theme/beige.css'
  ])
  .pipe(concat('reveal.beige.css'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('assets/css'));
});

// Images
gulp.task('imagemin', function () {
  gulp.src(imageFiles)
  .pipe(imagemin({
    optimizationLevel: 7
  }))
  .pipe(gulp.dest('assets/img'));
});

// Jekyll
gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// BrowserSync
gulp.task('serve', () => {
  browserSync.init({
    files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });

  // Watch
  gulp.watch(sassFiles, ['sass']);
  gulp.watch(jsFiles, ['scripts']);
  gulp.watch(imageFiles, ['imagemin']);
});

// Default
gulp.task('default', ['vendor-css', 'vendor-js', 'scripts', 'sass', 'jekyll', 'serve']);
