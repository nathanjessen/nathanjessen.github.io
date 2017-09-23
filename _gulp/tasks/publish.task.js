var gulp = require('gulp');

/**
 * Start publish task
 */
gulp.task('publish', ['vendor-styles', 'vendor-scripts', 'scripts', 'styles', 'jekyll']);
