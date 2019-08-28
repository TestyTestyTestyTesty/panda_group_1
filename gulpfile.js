const gulp = require('gulp');
const sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

function scss() {
    return gulp.src('src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/css/'))
      .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: "./"
    });
    gulp.watch("src/scss/*.scss", scss);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("src/js/**/*.js").on('change', browserSync.reload);
}

function defaultTask(cb) {
  watch();
}
exports.scss = scss;
exports.watch = watch;
exports.default = defaultTask