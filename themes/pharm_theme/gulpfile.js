var gulp        = require('gulp')
var babel       = require('gulp-babel')
var sass        = require('gulp-sass')
var concat      = require('gulp-concat')
var uglify      = require('gulp-uglify')

var sass_dir  = './scss/**/*.scss'
var js_dir    = './js/**/*.js'
var fonts_dir = './fonts/**/*.*'

gulp.task('js', () => {
  return gulp.src(js_dir)
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    // .pipe(concat('app.mijs'))
    .pipe(gulp.dest('./dist/js/'))
})



gulp.task('sass', function () {
  return gulp.src(sass_dir)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('copy-font', function() {
  return gulp.src(fonts_dir)
        .pipe(gulp.dest('./dist/fonts'))
})


gulp.task('default', gulp.series('js', 'copy-font', 'sass', (done) => {
  // Sass changes
  gulp.watch([sass_dir], gulp.series('sass'));
  // Js changes
  gulp.watch([js_dir], gulp.series('js'));
  // Js changes
  gulp.watch([fonts_dir], gulp.series('copy-font'));

  done();
}));