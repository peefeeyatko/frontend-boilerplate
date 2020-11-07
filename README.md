Front-end boilerplate
=====================

An npm and gulp boilerplate for projects requiring task running

## Requirements
* [npm](https://npmjs.com/)
* [gulp](http://gulpjs.com/)

## Quick Start
* `git clone https://github.com/peefeeyatko/frontend-boilerplate.git`
* run `npm install` this will install all required plugins and dependencies defined in package.json
* Update config object in gulpfile.js
```js
// Define the in and out paths to your project's assets
let config = {
    js: {
        in: 'src/js/*.js',
        out: 'dist/js'
    },

    css: {
        in:  'src/css/*.css',
        out: 'dist/css'
    }
};
```
* run `gulp` while developing

### Gulp tasks
Short description of each gulp task defined in gulpfile.js
* `gulp css` - Compiles, minifies and concatenates all css files in the src directory
* `gulp js` - Minifies and concatenates all js files in src directory
* `gulp lint` - Pipes js files in src directory through the jshint reporter all rules are defined in the .jshintrc file
