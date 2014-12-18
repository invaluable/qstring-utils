var gulp        = require('gulp');

module.exports = function(){
  
  gulp.src('public/src/qstring.js')
      .pipe(gulp.dest('public/dist/'));

};
