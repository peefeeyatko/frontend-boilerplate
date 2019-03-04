/**
* @desc
* This is a Gulpfile for task running.
* For development tasks run command 'gulp'
* For staging or production builds run 'gulp --build'
*
* Include all required plugins at the top of this file.
*/

var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    argv      = require('yargs').argv,
    concat    = require('gulp-concat'),
    jshint    = require('gulp-jshint'),
    uglify    = require('gulp-uglify'),
    strip     = require('gulp-strip-debug');


// capture arguments passed to the gulp command
const ARGS = argv;

// define the paths to the project's assets
var config = {
    js: {
        in: 'src/js/*.js',
        out: 'public/js/'
    },

    sass: {
        in: 'src/sass/**/*.scss',
        out: 'public/css/'
    }
};

// define gulp tasks
gulp.task('sass', function() {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        config.sass.in
    ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest(config.sass.out));
});

gulp.task('js', function() {
	return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        config.js.in
    ])
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(config.js.out));
});

gulp.task('lint', function() {
	return gulp.src(config.js.in)
	    .pipe(jshint())
	    .pipe(jshint.reporter('default', {verbose: true}));
});

gulp.task('build', function() {
    gulp.start('sass');
    
    // strip any debug code from JS
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        config.js.in
    ])
    .pipe(strip())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(config.js.out));
});

gulp.task('default', ['sass', 'js'], function() {
    if (ARGS.build === true) {
        gulp.start('build');
    } else {
        // watch JS for changes
    	gulp.watch(config.js.in, function() {
            gulp.start('lint', 'js');
    	});

    	// watch SASS for changes
    	gulp.watch(config.sass.in, function() {
    		gulp.start('sass');
    	});
    }
});
