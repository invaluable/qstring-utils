var gulp = require('gulp');

var scripts = require('./gulp/scripts');
var test = require('./gulp/test');

gulp.task('scripts', scripts);
gulp.task('test', test);

/*  Tasks
 */
gulp.task('default', [
  'scripts',
  'test'
]);

gulp.task('build', [
  'scripts'
]);