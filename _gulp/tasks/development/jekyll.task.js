const child = require('child_process');
const gulp = require('gulp');
const gutil = require('gulp-util');

// Jekyll
gulp.task('jekyll', function () {
  var jekyllCmd = (process.platform === "win32" ? "jekyll.bat" : "jekyll");

  const jekyll = child.spawn(jekyllCmd, ['build',
    '--watch'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});
