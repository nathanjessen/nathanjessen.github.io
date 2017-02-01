// Config
const siteRoot = '_site';
const cssFiles = '_assets/css/*.css';
const cssSourceFiles = '_assets/css/**/*.css';
const jsFiles = '_assets/js/*.js';
const imageFiles = '_assets/img/**/*.{jpg,png,gif}';

// Plugins
const prefix = require('autoprefixer');
const browserSync = require('browser-sync').create();
const child = require('child_process');
const glob = require('glob');
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const uncss = require('gulp-uncss');
const gutil = require('gulp-util');
const atImport = require('postcss-import');
const importUrl = require('postcss-import-url');
const nested = require('postcss-nested');

// CSS
gulp.task('css', function () {
  var processors = [
    atImport(),
    importUrl({
      modernBrowser: true
    }),
    nested(),
    prefix('> 5%')
  ];
  return gulp.src(cssFiles)
    .pipe(postcss(processors))
    .pipe(uncss({
      html: glob.sync('_site/**/*.html'),
      ignore: [
          /(#|\.)(is-)/,
          /(#|\.)(has-)/,
          /(#|\.)(js-)/
     ]
    }))
    .pipe(cssnano())
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
      '_assets/vendors/webslides/js/webslides-lite.js'
    ])
    .pipe(concat('webslides-lite.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js'));
});

// Vendor CSS
gulp.task('vendor-css', function () {
  gulp.src([
    '_assets/vendors/webslides/css/base.css',
    '_assets/vendors/webslides/css/colors.css',
    '_assets/vendors/webslides/css/svg-icons.css'
  ])
  .pipe(concat('webslides.css'))
  .pipe(cssnano())
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
  var jekyllCmd = (process.platform === "win32" ? "jekyll.bat" : "jekyll");

  const jekyll = child.spawn(jekyllCmd, ['build',
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
  gulp.watch(cssSourceFiles, ['css']);
  gulp.watch(jsFiles, ['scripts']);
  gulp.watch(imageFiles, ['imagemin']);
});

// Default
gulp.task('default', ['vendor-css', 'vendor-js', 'scripts', 'css', 'jekyll', 'serve']);
