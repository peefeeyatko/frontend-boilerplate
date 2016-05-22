Front-end boilerplate
=====================

A bower, npm and gulp boilerplate for projects requiring task running

## Requirements
* [node](http://nodejs.org/) >= 0.10.29
* [gulp](http://gulpjs.com/)
    * CLI version >= 3.9.0
    * Local version >= 3.9.1
* [bower](http://bower.io/)
    * bower version >= 1.7.7

## Prerequisite
 * `npm install -g gulp`
 * `npm install -g bower`

## Quick Start
* From your project's root directory run `git clone https://github.com/peefeeyatko/frontend-boilerplate.git`
* run `npm install` (you may need to do `sudo npm install`). This will install all required plugins defined in package.json
* run `bower install` to pull in all 3rd party packages for application e.g. Bootstrap, jQuery. These application dependencies will be defined in bower.json
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
* `gulp lint` - Pipes all js files in src directory through the jshint reporter. jshint rules are configured in .jshintrc file

### License
[GNU General Public License Version 3](http://www.gnu.org/licenses/gpl.html)
