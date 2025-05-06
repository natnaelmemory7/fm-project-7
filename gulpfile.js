const { src, dest, series, watch } = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create(); 
const sass = require('gulp-sass')(require('sass'));



// Watch Task (optional)


async function clean(cb){
    await del('build');
    cb();
}
function img() {
    return src('src/img/**/*')
     
      .pipe(dest('build/img'))
      .pipe(browserSync.stream());
  }

function html() {
  return src("src/**/*.html")
    .pipe(dest('build'))
   .pipe(browserSync.stream());
   
 }

 function js() {
  return src("src/js/**/*.js")
    .pipe(dest('build/js'))
   .pipe(browserSync.stream());
   
 }

// SCSS Task
function scss() {
  return src('src/scss/**/*.scss')  // Path to your SCSS files
    .pipe(sass().on('error', sass.logError))  // Compile SCSS to CSS and log errors
    .pipe(dest('build/css'))
    .pipe(browserSync.stream()); // Output the compiled CSS to the 'build/css' directory
}


function server(cb) {
  browserSync.init({
    server: {
      baseDir: 'build',  // Serve files from the 'build' folder
    },
    notify: false,  // Disable BrowserSync's on-screen notifications
    open: false,  // Don't automatically open the browser
  });

  cb();
}



function watcher(cb) {
  watch('src/**/*.scss', scss)
  watch('src/**/*.html', html)
  watch('src/**/*.js', js)
  // Watch SCSS files for changes

  cb();
}

  exports.default = series(clean,html,js,img,scss,server,watcher);
