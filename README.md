Front-end boilerplate
=====================

A bower, npm and gulp boilerplate for projects requiring task running.

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
* run `gulp` while developing
* run `gulp --build` for production ready assets

### Gulp tasks
Short description of each gulp task defined in gulpfile.js
* `gulp sass` - Compiles, minifies and concatenates all sass files in src directory
* `gulp js` - Minifies and concatenates all js files in src directory
* `gulp lint` - Pipes all js files in src directory through jshint reporter the jshint rules are configured in .jshintrc files

### License
[GNU General Public License Version 3](http://www.gnu.org/licenses/gpl.html)
