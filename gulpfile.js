"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');//Local dev server
var open = require('gulp-open');//open a URL in a web-browser
var browserify = require('browserify');//Bundle JS
var reactify = require('reactify');//Transforms ReactJS to JS
var source = require('vinyl-source-stream');//Conventional text streams with Gulp.
var concat = require('gulp-concat');//concatenates file
var lint = require('gulp-eslint');//lint our Js file and jsx.

var config = {
  port:3023,
  devBaseUrl:'http://127.0.0.1',
  paths:{
    html:'./src/*.html',
    js:'./src/**/*.js',
    css:[
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/toastr.css'
    ],
    dist:'./dist',
    mainJs: './src/main.js'
  }
}



//Start a local development server.
gulp.task('connect', function(){
 connect.server({
   root:['dist'],
   port:config.port,
   base:config.devBaseUrl,
   livereload:true
 });
});

gulp.task('css', function(){
  gulp.src(config.paths.css)
      .pipe(concat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist+ '/css'))
});

//gulp.task('lint', function(){
  //return gulp.src(config.paths.js)
        //.pipe(eslint({config: 'eslint.config.json'}))
        //.pipe(eslint.format());
//});


gulp.task('open',['connect'],function(){
  gulp.src('dist/index.html')
   .pipe(open({uri:config.devBaseUrl + ':'+config.port+'/'}));
});

gulp.task('html',function(){
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dist))
  .pipe(connect.reload());
});

gulp.task('js', function(){
  browserify(config.paths.mainJs)
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(source('bundle.js'))
      .pipe(gulp.dest(config.paths.dist+ '/scripts'))
      .pipe(connect.reload());
})

gulp.task('watch',function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('default',['html','js', 'css', 'open', 'watch']);
