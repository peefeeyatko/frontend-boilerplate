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


// Define the paths to the project's assets
var config = {
    js: {
        in: 'public/js/src/**/*.js',
        out: 'public/js/dist/'
    },

    sass: {
        in: 'public/css/src/**/*.scss',
        out: 'public/css/dist/'
    }
};

// Capture arguments passed to the gulp command
const ARGS = argv;

// Define Gulp tasks
gulp.task('sass', function() {
    return gulp.src(config.sass.in)
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest(config.sass.out));
});

gulp.task('js', function() {
	return gulp.src(config.js.in)
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
    // Strip any debug code from JS
    return gulp.src(config.js.in)
      .pipe(strip())
      .pipe(uglify())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest(config.js.out));
});

gulp.task('default', ['sass', 'js'], function() {
    if (ARGS.build === true) {
        gulp.start('build');
    } else {
        // Watch JS for changes
    	gulp.watch(config.js.in, function() {
            gulp.start('lint', 'js');
    	});

    	// Watch SASS for changes
    	gulp.watch(config.sass.in, function() {
    		gulp.start('sass');
    	});
    }
});
