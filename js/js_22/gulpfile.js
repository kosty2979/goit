var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require("gulp-rename");




gulp.task('script',  function () {
	return gulp.src('es6.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(rename("script.js"))
		.pipe(gulp.dest('js'));
});

gulp.task('default', ['script']);
