Front-end boilerplate
=====================

A yarn and gulp boilerplate for projects requiring task running

## Requirements
* [yarn](https://yarnpkg.com/)
* [gulp](http://gulpjs.com/)

## Quick Start
* `git clone https://github.com/peefeeyatko/frontend-boilerplate.git`
* run `yarn install` or `yarn` this will install all required plugins and dependencies defined in package.json
* Update config object in gulpfile.js
```js
// Define the in and out paths to your project's assets (sass, js)
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
```
* run `gulp` while developing
* run `gulp --build` for production ready assets

### Gulp tasks
Short description of each gulp task defined in gulpfile.js
* `gulp sass` - Compiles, minifies and concatenates all sass files in src directory
* `gulp js` - Minifies and concatenates all js files in src directory
* `gulp lint` - Pipes all js files in src directory through the jshint reporter. Rules are configured in the .jshintrc file
* `gulp build` - Strips console and debugger statements from js files before minifying and concatenation

### License
[ISC](https://opensource.org/licenses/ISC)
