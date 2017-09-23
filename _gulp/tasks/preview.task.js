var gulp = require('gulp');

/**
 * Start preview task
 */
gulp.task('preview', ['vendor-styles', 'vendor-scripts', 'scripts', 'styles', 'jekyll', 'serve']);
