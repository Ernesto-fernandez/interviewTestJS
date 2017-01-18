/**
 * Template for GULP -
 */
var gulp = require('gulp');
var angularProtractor = require('gulp-angular-protractor');  // need gulp-angular to be able to use autoStartServer



gulp.task('Sample Gulp Task', function(callback) {
    
gulp.src(['./e2e-tests/*.spec.js'])  // Location of where your tests are
.pipe(angularProtractor({
    'configFile': 'protractor.conf.js',     // Location of your Conf file
    'args': ['--baseUrl', 'www.hollandamerica.com',
    '--suite', 'AllTests'],  // Suites to use
    'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
    'debug': true
}))
.on('error',function(e) {
    throw e
})
    .on('end', callback);
});