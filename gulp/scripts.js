var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');

module.exports = function() {

  var browserified = transform(function(filename) {
    var b = browserify(filename, {
      standalone: 'qStringUtils'
      , bundleExternal: false
    })
    return b.bundle();
  });

  gulp.src(['./src/qstring.js'])
    .pipe(browserified)
    .pipe(uglify())
    .pipe(rename({
      extname: '.standalone.min.js'
    }))
    .pipe(gulp.dest('./'));

  gulp.src(['./src/qstring.js'])
    .pipe(gulp.dest('./'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./'));

}
