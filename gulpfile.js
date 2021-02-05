// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel} = require('gulp');
// Importing all the Gulp-related packages we want to use
const cleanCSS = require('gulp-clean-css');
 
const minify_css = () => {
  return src('dist/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist'));
};

function copyLibs(){
    return src([
        'node_modules/animate.css/animate.min.css',
        'node_modules/foundation-sites/dist/js/foundation.min.js'  
    ])
    .pipe(dest('lib'))
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(minify_css), 
    copyLibs
    //watchTask
);