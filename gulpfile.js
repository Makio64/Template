/**
 * @author David Ronai / @makio64 / makiopolis.com
 * @commands :
 * - 'gulp' for testing your webapp
 * - 'gulp compile' for compiling only
 * - 'gulp build' for building final minified files
 */

//------------------------------------------------------------------------------ Imports
var gulp 		= require('gulp'),
	jade 		= require('gulp-jade'),
	coffee 		= require('gulp-coffee'),
	stylus 		= require('gulp-stylus'),
	nib 		= require('nib'),
	sourcemaps 	= require('gulp-sourcemaps'),
	
	plumber 	= require('gulp-plumber'),
	
	browserSync = require('browser-sync'),
	
	imagemin 	= require('gulp-imagemin'),
	uglify 		= require('gulp-uglify'),
	minifyHtml 	= require('gulp-minify-html'),
	minifyCss 	= require('gulp-minify-css'),
	usemin		= require('gulp-usemin'),

	gutil 		= require('gulp-util'),
	notify 		= require('gulp-notify'),
	changed 	= require('gulp-changed'),
	runSequence = require('run-sequence'),
	del 		= require('del'),
	rev 		= require('gulp-rev'),
	wiredep 	= require('wiredep').stream,
	gulpIgnore 	= require('gulp-ignore');


//------------------------------------------------------------------------------ s

var app = 'app/',
	dist = 'dist/',
	src = {
		main:'src/',
		jade:'src/jade/',
		coffee:'src/coffee/',
		stylus:'src/stylus/'
	};


//------------------------------------------------------------------------------ Server + Livereload

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: app
		},
		port: 9000
	});
});

// gulp.watch bug on new files/deleted files.
gulp.task( 'watch', function() {
	var coffee = src.coffee+'**/*.coffee'
	var jade = src.jade+'**/*.jade'
	var stylus = src.stylus+'**/*.styl'

	gulp.watch( stylus, ['stylus', browserSync.reload]);
	gulp.watch( jade,   ['jade', browserSync.reload]);
	gulp.watch( coffee, ['coffee', browserSync.reload]);

	gulp.watch( [src.main+'**', src.main+'**/*', '!'+coffee, '!'+jade, '!'+stylus], ['copySrc', browserSync.reload]);
});


//------------------------------------------------------------------------------ Utils

gulp.task('clean', function(cb) {
	del(['output'], cb);
});

gulp.task('cleanDist', function(cb) {
	del([dist], cb);
});

gulp.task('copySrc', function() {
	return gulp.src([src.main+'**', '!'+src.coffee, '!'+src.stylus, '!'+src.jade,'!'+src.coffee+'**', '!'+src.stylus+'**', '!'+src.jade+'**'])
		.pipe(plumber())
		.pipe(gulp.dest(app));
});

gulp.task('copy', function() {
	return gulp.src([app+'**', '!'+app+'/js', '!'+app+'/js/**', '!'+app+'/css','!'+app+'/css/**', '!'+app+'/img', '!'+app+'/img/**','!'+app+'*.html'])
		.pipe(plumber())
		.pipe(gulp.dest(dist));
});


//------------------------------------------------------------------------------ Compilations


gulp.task( 'stylus', ['clean'], function() {
	return gulp.src( src.stylus+'main.styl' )
		.pipe(plumber())
		.pipe(stylus( { use: [ nib() ], sourcemap: {inline: true} } ) )
			.on( 'error', gutil.log )
			.on( 'error', gutil.beep )
			.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe(gulp.dest( app+'/css/' ) )    
		.pipe(notify({ onLast: true, message:'Stylus compile with success!'}));
});


gulp.task( 'coffee', ['clean'], function() {
	return gulp.src( src.coffee+'**/*.coffee' )
		.pipe(plumber())
		.pipe(changed(app+'/js/' , {extension: '.js'}))
		.pipe(sourcemaps.init())
		.pipe(coffee( {bare: true, sourcemap: {inline: true}} ) )
		.pipe(sourcemaps.write() )
		.pipe(gulp.dest( app+'/js/' ) )    
		.pipe(notify({ onLast: true, message:'Coffee compile with success!' }));
});


gulp.task( 'jade', ['clean'], function() {
	return gulp.src( src.jade+'**/*.jade' )
		.pipe(plumber())
		.pipe(changed(app, {extension: '.html'}))
		.pipe(jade( {pretty: true} ) )
			.on( 'error', gutil.log )
			.on( 'error', gutil.beep )
			.on( 'error', notify.onError('Error: <%= error.message %>') )
		.pipe(notify({ onLast: true, message:'Jade compile with success!' }) )
		.pipe(gulp.dest( app ));
});


//------------------------------------------------------------------------------ Minifications

gulp.task('imagemin', function(){
	return gulp.src( app+'img/**/*.*' )
		.pipe(plumber())
		.pipe(imagemin({optimizationLevel: 5}))
		.pipe(gulp.dest(dist+'img/'));
});

gulp.task('usemin', function() {
	return gulp.src(app+'*.html')
   		.pipe(plumber())
		.pipe(usemin({
        css: [minifyCss(), 'concat', rev()],
        html: [minifyHtml({empty: true})],
        js: [uglify(), rev()]
      }))
      .pipe(gulp.dest(dist));
});

//------------------------------------------------------------------------------ Main tasks

gulp.task( 'compile', function(callback){
	runSequence([ 'stylus', 'coffee', 'jade' ],callback); 
});


gulp.task( 'build', function(callback) { 
	runSequence(['cleanDist','compile','copySrc'], ['usemin','copy'],['imagemin'], callback) 
});


gulp.task( 'default', function(callback) {
	runSequence(['compile'], ['browser-sync'], ['watch'], callback)
});
