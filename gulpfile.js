var gulp = require('gulp');

var copy = require('./gulp/copy');
var scripts = require('./gulp/scripts');
var test = require('./gulp/test');

gulp.task('copy', copy);
gulp.task('scripts', scripts);
gulp.task('test', test);

/*  Tasks
 */
gulp.task('default', [
  'scripts',
  'copy',
  'test'
]);

gulp.task('build', [
  'scripts',
  'copy'
]);