var gulp = require('gulp');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')
var notify = require( 'gulp-notify' );

var config = {
    server: {
        baseDir: "."
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};



gulp.task('css', function () {   
gulp.src('css/*.css')
    .pipe(concatCss("main.css"))
    .pipe(autoprefixer('last 20 versions','> 1%', 'IE 7'))
    .pipe(gulp.dest('build/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("min.main.css"))
    .pipe(gulp.dest('build/css'))
    .pipe(reload({stream: true}))
});

gulp.task('js', function () {  
gulp.src(['js/jquery-2.2.2.js', 'js/jquery.jcarousel.js', 'js/script.js'])
    .pipe(concat("main.js"))
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())
    .pipe(rename("min.main.js"))
    .pipe(gulp.dest('build/js'))
    .pipe(reload({stream: true}))
});

gulp.task('img', function () {  
gulp.src('image/*')
    .pipe(imagemin(""))
    .pipe(gulp.dest('build/image'))
    .pipe(reload({stream: true}))
});

gulp.task('sass', function () {
     gulp.src('css/*.scss')
    .pipe(sass().on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Sass Error!"
      } )
 ))
    .pipe(gulp.dest('css'))
    /*.pipe(reload({stream: true}))*/
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('reload', function() {
   gulp.src('index.html')  
.pipe(reload({stream: true}))
        
});
gulp.task('watch', function(){
    gulp.watch('index.html',['reload'])
    gulp.watch('css/*.scss',['sass'])
     gulp.watch('css/*.css', ['css'])
     gulp.watch('js/*.js', ['js'])
     gulp.watch('image/*',['img'])
 });




gulp.task('default', ['webserver','sass','css', 'js', "img", "watch"])

