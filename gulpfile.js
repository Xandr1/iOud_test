var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

function style() {
    return (
        gulp
            .src("src/styles/style.scss")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest("src/styles"))
            .pipe(browserSync.stream())
    );
}
exports.style = style;

function watch() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }

    });
    gulp.watch("src/styles/style.scss", style());
}
exports.watch = watch
