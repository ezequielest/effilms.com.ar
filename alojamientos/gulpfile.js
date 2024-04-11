const del = require('del');
const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const browsersync = require("browser-sync").create();

// BrowserSync
function browserSync(done) {
    browsersync.init({
      server: {
        baseDir: "./"
      },
      port: 3030,
      browser: "chrome"
    });
    done();
}

// BrowserSync reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function css(){
    return gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browsersync.stream())
}

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});
  
function watchFiles() {
    gulp.watch("./sass/**/*", css);
}

const watch = gulp.parallel(css, watchFiles, browserSync);

exports.css = css;
exports.watch = watch;
exports.default = watch;