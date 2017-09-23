const prefix = require('autoprefixer');
const glob = require('glob');
const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const postcss = require('gulp-postcss');
const uncss = require('gulp-uncss');
const atImport = require('postcss-import');
const importUrl = require('postcss-import-url');
const nested = require('postcss-nested');

// Styles
gulp.task('styles', function (settings) {
  var settings = {
    source: ['_assets/css/*.css'],
    destination: 'assets/css',
    html: '_site/**/*.html'
  };

  var processors = [
    atImport(),
    importUrl({
      modernBrowser: true
    }),
    nested(),
    prefix('> 5%')
  ];
  return gulp.src(settings.source)
    .pipe(postcss(processors))
    // .pipe(uncss({
    //   html: glob.sync(settings.html),
    //   ignore: [
    //       /(#|\.)(highlight)/,
    //       /(#|\.)(is-)/,
    //       /(#|\.)(has-)/,
    //       /(#|\.)(js-)/
    //  ]
    // }))
    .pipe(cssnano())
    .pipe(gulp.dest(settings.destination));
});
