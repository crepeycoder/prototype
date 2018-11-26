var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'resources',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('./resources/index.html')
  .pipe(gulp.dest('resources'))
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./resources/index.html'], ['html']);
});

gulp.task('default', ['connect', 'watch']);

gulp.task('jenkins-tests', function() {
  connect.server({
    port: 8080
  });
  // run some headless tests with phantomjs
  // when process exits:
  connect.serverClose();
});
