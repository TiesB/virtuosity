var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var folders = {
    jquery: './node_modules/jquery/dist/',
    bootstrap: './node_modules/bootstrap-sass/assets/',
};

gulp.task('sass', function() {
  return sass('scss/main.scss')
    .pipe(gulp.dest('app/css'))
    .pipe(reload({ stream:true }));
});

gulp.task('reload', function() {
    reload({ stream:true });
});
// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass'], function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch("app/*.html").on("change", reload);
});
