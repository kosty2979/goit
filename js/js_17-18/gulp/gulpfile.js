var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('css', function () {   
gulp.src('css/*.css')
 	.pipe(concatCss("main.css"))
 	.pipe(autoprefixer('last 20 versions','> 1%', 'IE 7'))
    .pipe(gulp.dest('build/css'))
 	.pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("min.main.css"))
    .pipe(gulp.dest('build/css'))
  
});

gulp.task('js', function () {  
gulp.src('js/*.js')
 	.pipe(concat("main.js"))
    .pipe(gulp.dest('build/js'))
 	.pipe(uglify())
    .pipe(rename("min.main.js"))
    .pipe(gulp.dest('build/js'))
   
});

gulp.task('img', function () {  
gulp.src('image/*')
 	.pipe(imagemin(""))
    .pipe(gulp.dest('build/image'))
   
});

gulp.task('sass', function () {
 	 gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('css/*.scss',['sass']);
     gulp.watch('css/*.css', ['css']);
     gulp.watch('js/*.js', ['js']);
     gulp.watch('image/*',['img']);
 });



gulp.task('default', ['sass','css', 'js', "img", "watch"])