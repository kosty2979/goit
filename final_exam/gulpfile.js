var gulp = require('gulp');
var browserSync = require("browser-sync");
var reload = browserSync.reload;

var spritesmith = require("gulp.spritesmith");
var imagemin = require('gulp-imagemin');

var rename = require("gulp-rename");
var notify = require( 'gulp-notify' );

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var csso = require('gulp-csso');

var uglify = require('gulp-uglify');

var config = {
    server: {
        baseDir: "build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

var config2 = {
    server: {
        baseDir: "build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function () {
    browserSync(config);
});
gulp.task('tunnel', function () {
    browserSync(config2);
});


gulp.task('html', function() {
    gulp.src('./src/*.html')
  .pipe(rename("index.html"))
  .pipe(gulp.dest("./build"));         
});


gulp.task('reload', function() {
   gulp.src('build/index.html')
 .pipe(reload({stream: true}))        
});

gulp.task('css', ['sass'], function () {   
 gulp.src('src/css/style*.css')
    .pipe(autoprefixer('last 20 versions','> 1%', 'IE 8'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(csso())
    .pipe(gulp.dest('build/css'))
    .pipe(reload({stream: true}))

});

gulp.task('sass', function () {
   return  gulp.src('src/scss/*.scss')
    .pipe(sass().on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Sass Error!"
      } )
 ))
    .pipe(gulp.dest('src/css'))   
});

gulp.task('js', function () {  
gulp.src('src/js/*.js')
    .pipe(uglify().on( 'error', notify.onError(
      {
        message: "<%= error.message %>",
        title  : "Sript Error!"
      } )
 ))
    .pipe(gulp.dest('build/js'))
    .pipe(reload({stream: true}))
});


gulp.task('img', function () {  
gulp.src('src/image/*.*')
    .pipe(imagemin(""))
    .pipe(gulp.dest('build/image'))
    .pipe(reload({stream: true}))
});

gulp.task('watch', function(){
    gulp.watch('src/scss/*.scss',['css'])
    gulp.watch('src/*.html',['html'])
    gulp.watch('build/*.html',['reload'])
    gulp.watch('src/js/*.js',['js'])
     gulp.watch('src/image/*.*',['img'])
 });

gulp.task('sprite', function() {
    var spriteData = 
        gulp.src('src/image/sprite/*.*')
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                algorithm: 'binary-tree',
                padding : 4
            }));

    spriteData.img.pipe(gulp.dest('build/image/')); 
    spriteData.css.pipe(gulp.dest('src/scss/'));
});


gulp.task('server', ['webserver', "watch"])
gulp.task('default', ['html', 'css',"img","js",'sprite'])

