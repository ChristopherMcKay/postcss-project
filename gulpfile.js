var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var cssModules   = require('postcss-modules');
var path         = require('path');
var fs           = require('fs');

// function to turn CSS Modules into JSON file

function createJSON(cssFileName, json) {
  var cssName       = path.basename(cssFileName, '.css');
  var jsonFileName  = path.resolve('./src/build', cssName + '.json');
  fs.writeFileSync(jsonFileName, JSON.stringify(json));
}


// function to generate CSS modules from CSS file

function createCSSModules() {
  return gulp.src('./src/App.css')
    .pipe(postcss([
      cssModules({ getJSON: createJSON }),
    ]))
    .pipe(gulp.dest('./src/build'));
};


exports.build = createCSSModules;
