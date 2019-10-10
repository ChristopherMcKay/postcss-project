var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var cssModules   = require('postcss-modules-scope');


function createCSSModules() {
  return gulp.src('./src/App.css')
    .pipe(postcss([
      cssModules(),
    ]))
    .pipe(gulp.dest('./src/build'));
};


exports.build = createCSSModules;
