/**
 * Template for GULP -
 * Also includes JSLINT
 * @About: To change the browser update gulp task.browserName
 * Update Capabilities to desired option
 * Current Default is Firefox
 */
var gulp = require('gulp');
var plato = require('gulp-plato');
var gulpProtractorAngular = require('gulp-angular-protractor');
var jshint = require('gulp-jshint');
var currentStartTaskName;
// need gulp-angular to be able to use autoStartServer
//var jslint = require('gulp-jslint');




gulp.task('review',  function(callback) {

    gulp.src(['./review.spec.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com'  // Not used yet- but would be Base Url
                ],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});



