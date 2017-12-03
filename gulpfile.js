var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var paths = {
	// css: [
 //    'assets/css/*.css',
 //    'app/components/**/*.css'
 //  ],
  html: [
    '*.html'
  ],
	js: [
    'assets/js/*.js',
    '*.js'
  ],
  sass: [
    'assets/scss/*.scss'
  ]	
};
//Gulp Sass
gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream: true}));
});
// //Gulp browerSync
gulp.task('server',function(){
	browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
 	gulp.watch(paths.html, reload);
	gulp.watch(paths.js, reload);
	gulp.watch(paths.sass, ['sass']);
	
});

//Task default
gulp.task('default',[
  'sass',
	'server'
]);

