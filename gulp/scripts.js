var gulp = require('gulp');
var browserify = require('browserify');
var exposify = require('exposify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglifyjs');
var rename = require('gulp-rename');

module.exports = function() {

  exposify.config = {
      underscore: '_'
  }

  var browserified = transform(function(filename) {
    var b = browserify(filename)
      .transform(exposify);
    return b.bundle();
  });
  
  return gulp.src(['./public/src/qstring.js'])
    .pipe(browserified)
    .pipe(gulp.dest('./public/dist'))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./public/dist'));

}
