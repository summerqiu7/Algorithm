const gulp = require('gulp');
const prettier = require('gulp-prettier');

function formatAllFiles() {
  return gulp
    .src(['./gulpfile.js', './**/*.js'])
    .pipe(
      prettier({
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
      })
    )
    .pipe(gulp.dest(file => file.base));
}

exports.default = gulp.series(formatAllFiles);
