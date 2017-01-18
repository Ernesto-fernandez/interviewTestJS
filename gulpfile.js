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

    gulp.src(['./e2e-tests/testCases/review.spec.js'])  // Location of where your tests are
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







gulp.task('MARKETING - HOLLAND AMERICA SMOKE  - QA', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'HalMarketingTeamsSmokeQA',
                //'--suite', 'PlanTripCruise',T
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('QA MARKETING HOLLAND AMERICA FULL SMOKE TEST COMPLETE - BOOM');
            //press.exit();
        });
});






//************************ GULP TASK TO USE FOR DEBUGGING ***********************************
gulp.task('Sample Gulp Task- For Use ',  function(callback) {

    gulp.src(['./e2e-tests/testCases/*.spec.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'gallopTests'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});



//************************ SECONDARY FLOW  ***********************************
gulp.task('SECONDARY FLOW - QA - HOLLAND - Smoke Tests', function(callback) {
    gulp
        .src(['./e2e-tests/testCases/secondary/*.smoke.js'])
        .pipe(gulpProtractorAngular({
            configFile: 'protractor.conf.js',
            debug: false,
            autoStartStopServer: true,
            keepAlive: false,
            args: [
                '--baseUrl', 'https://qabook.hollandamerica.com/secondaryFlow/',
                '--capabilities.browserName', 'chrome',
                '--params.brand', 'hal'
            ]
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});
gulp.task('SECONDARY FLOW - QA - SEABOURN - Smoke Tests', function(callback) {
    gulp
        .src(['./e2e-tests/testCases/secondary/!(dining.*)*.smoke.js'])
        .pipe(gulpProtractorAngular({
            configFile: 'protractor.conf.js',
            debug: false,
            autoStartStopServer: true,
            keepAlive: false,
            args: [
                '--baseUrl', 'https://qabook.seabourn.com/secondaryFlow/',
                '--capabilities.browserName', 'chrome',
                '--params.brand', 'sbn'
            ]
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});
gulp.task('SECONDARY FLOW - QA - HOLLAND - Full Tests', function(callback) {
    gulp
        .src(['./e2e-tests/testCases/secondary/!(*.smoke).js'])
        .pipe(gulpProtractorAngular({
            configFile: 'protractor.conf.js',
            debug: false,
            autoStartStopServer: true,
            keepAlive: false,
            args: [
                '--baseUrl', 'https://qabook.hollandamerica.com/secondaryFlow/',
                '--capabilities.browserName', 'chrome',
                '--params.brand', 'hal'
            ]
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});
gulp.task('SECONDARY FLOW - QA - SEABOURN - Full Tests', function(callback) {
    gulp
        .src(['./e2e-tests/testCases/secondary/!(*.smoke).js'])
        .pipe(gulpProtractorAngular({
            configFile: 'protractor.conf.js',
            debug: false,
            autoStartStopServer: true,
            keepAlive: false,
            args: [
                '--baseUrl', 'https://qabook.seabourn.com/secondaryFlow/',
                '--capabilities.browserName', 'chrome',
                '--params.brand', 'sbn'
            ]
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});
//*********JIMS MARKETING GULP TASKS****************************************
gulp.task('MARKETING - HAL QA Smoke Tests - Team One',  function () {
    executeMarketingTeamOneHalQaSmoke();
});

function executeMarketingTeamOneHalQaSmoke() {
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'http://qa.hollandamerica.com/',
                '--suite', 'MarketingTeamOneHalQaSmoke',
                '--capabilities.browserName', 'chrome',
                //  '--capabilities.setCapability', 'chrome.switches',
                '--incognito', true, // Have not gotten this to work yet
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Windows'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('  Team Kraken HAL QA Smoke complete - wOOt!  ');
            //press.exit();
        });
}

gulp.task('MARKETING - SBN QA Smoke Tests - Team One',  function () {
    executeMarketingTeamOneSbnQaSmoke();
});

function executeMarketingTeamOneSbnQaSmoke() {
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'http://qa.hollandamerica.com',
                '--suite', 'MarketingTeamOneSbnQaSmoke',//'NiccySearchTests',
                '--capabilities.browserName', 'chrome',
                //  '--capabilities.setCapability', 'chrome.switches',
                '--incognito', true, // Have not gotten this to work yet
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Windows'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('  Team Kraken SBN QA Smoke complete - wOOt!  ');
            //press.exit();
        });
}

gulp.task('JimTest',  function(callback) {

    gulp.src(['./e2e-tests/testCases/marketing/siteWideNavigation/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'qa.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'JimTest'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});  //


gulp.task('MARKETING  - SBN Cruise Details',  function(callback) {

    gulp.src(['./e2e-tests/testCases/marketing/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'qa.seabourn.com',  // Not used yet- but would be Base Url
                '--suite', 'SbnCruiseDetails'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});  //

gulp.task('MARKETING  - SBN Prod Home Page',  function(callback) {

    gulp.src(['./e2e-tests/testCases/marketing/siteWideNavigation/*.js'])  // Location of tests
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'www.seabourn.com',  // Not used yet- but would be Base Url
                '--suite', 'JimTest'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});  //

gulp.task('MARKETING  - SBN Verify Currency on Cruise Details',  function(callback) {

    gulp.src(['./e2e-tests/testCases/marketing/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'qa.seabourn.com',  // Not used yet- but would be Base Url
                '--suite', 'SbnCruiseDetailsCurrency'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});  //

gulp.task('MARKETING  - CDR Gulp Task',  function(callback) {

    gulp.src(['./e2e-tests/specs/*.spec.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'CdrTests'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});  //

gulp.task('MARKETING - PNAV Gulp Task',  function(callback) {

    gulp.src(['./e2e-tests/specs/*.spec.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'PnavTests'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - SBN Footer Gulp Task',  function(callback) {

    gulp.src(['./e2e-tests/testCases/marketing/*.spec.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'SbnFooterTest'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Search Gulp Task',  function(callback) {

    gulp.src(['./e2e-tests/specs/*.spec.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'PnavTests'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});

//****************************** Johnny's Gulp Tasks QA*******************************
gulp.task('JohnnyTest',  function(callback) {

    gulp.src(['./e2e-tests/testCases/marketing/siteWideNavigation/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'qa.hollandamerica.com',  // Not used yet- but would be Base Url
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--suite', 'JohnnyTest'],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error',function(e) {
            throw e
        })
        .on('end', callback);
});  //

//****************************** Niccy's Gulp Tasks QA*******************************

gulp.task('NICCYS SEARCH SBN QA TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.seabourn.com',
                '--suite', 'NiccySearchSBNTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SPECIAL OFFERS QA SBN TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.seabourn.com',
                '--suite', 'NiccySpecialOffersSBNTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS ONE FILE RUN QA SBN', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.seabourn.com',
                '--suite', 'oneFileSbnRun',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SEARCH HAL QA TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com',
                '--suite', 'NiccySearchHalTests',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SPECIAL OFFERS QA HAL TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com',
                '--suite', 'NiccySpecialOffersHalTests',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS ONE FILE RUN QA HAL', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com',
                '--suite', 'oneFileHalRun',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

//****************************** Niccy's Gulp Tasks Stage*******************************

gulp.task('NICCYS SEARCH SBN STAGE TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.seabourn.com',
                '--suite', 'NiccySearchSBNTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SPECIAL OFFERS STAGE SBN TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.seabourn.com',
                '--suite', 'NiccySpecialOffersSBNTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS ONE FILE RUN STAGE SBN', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.seabourn.com',
                '--suite', 'oneFileSbnRun',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SEARCH HAL STAGE TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com',
                '--suite', 'NiccySearchHalTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SPECIAL OFFERS STAGE HAL TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com',
                '--suite', 'NiccySpecialOffersHalTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS ONE FILE RUN STAGE HAL', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com',
                '--suite', 'oneFileHalRun',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

//****************************** Niccy's Gulp Tasks Prod*******************************

gulp.task('NICCYS SEARCH SBN PROD TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.seabourn.com',
                '--suite', 'NiccySearchSBNTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SPECIAL OFFERS PROD SBN TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.seabourn.com',
                '--suite', 'NiccySpecialOffersSBNTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS ONE FILE RUN PROD SBN', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.seabourn.com',
                '--suite', 'oneFileSbnRun',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SEARCH HAL PROD TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.hollandamerica.com',
                '--suite', 'NiccySearchHalTests',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS SPECIAL OFFERS PROD HAL TESTS', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.hollandamerica.com',
                '--suite', 'NiccySpecialOffersHalTests',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});

gulp.task('NICCYS ONE FILE RUN PROD HAL', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.hollandamerica.com',
                '--suite', 'oneFileHalRun',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});


//****************************** End Niccy's Gulp Tasks *******************************

function executeGallopTestQA() {
    //console.log("Browser Web Tests  is **************", argv.browsers);
    // console.log(argv.browsers);
    //return gulp.src(['./Specs_Web/verifyPlanTripSpec.js'])
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'http://qa.seabourn.com/',
                '--suite', 'gallopTests',
                '--capabilities.browserName', 'chrome',
                //  '--capabilities.setCapability', 'chrome.switches',
                '--incognito', true, // Have not gotten this to work yet
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Windows'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('****E2E Smoke Testing for SBN only complete - WOOT !!!! ******');
            //press.exit();
        });
}

//******************* MANUEL'S MARKETING GULP TASKS ************************

gulp.task('SBN MARKETING - Onboard and Deck Plans verification',  function () {
    executeSBNOnboardDeckPlansLinks();
});
function executeSBNOnboardDeckPlansLinks() {
    //console.log(argv.browsers);
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'http://qa.seabourn.com',
                '--suite','OnboardDeckPlansTest',
                '--capabilities.browserName', 'chrome',
                '--capabilities.name', 'SBN_Automation_Tests',
                //'--capabilities.platform', 'Mac',
                '--capabilities.screenResolution', '1280x1024'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('SBN Onboard and Deck Plans Links verification');
            //press.exit();
        });
}

gulp.task('MARKETING - Onboard Links verification',  function () {
    executeHALOnboardLinks();
});
function executeHALOnboardLinks() {
    //console.log(argv.browsers);
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'http://qa.hollandamerica.com',
                '--suite','OnboardTest',
                '--capabilities.browserName', 'chrome',
                '--capabilities.name', 'HAL_Automation_Tests',
                '--capabilities.platform', 'Mac',
                '--capabilities.screenResolution', '1280x1024'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('Onboard Links verification');
            //press.exit();
        });
}

gulp.task('Destionations Alaska Link Test',  function () {
    executeHALAlaskaDest();
});

function executeHALAlaskaDest() {
    //console.log(argv.browsers);
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'http://qa.hollandamerica.com',
                '--suite','destAlaska',
                '--capabilities.browserName', 'chrome',
                '--capabilities.name', 'HAL_Automation_Tests',
                //'--capabilities.platform', 'Mac',
                '--capabilities.screenResolution', '1280x1024'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('Alaska Destination Page verification Test');
            //press.exit();
        });
}

gulp.task('Destionations Full Regression Test',  function () {
    executeHALDestRegression();
});

function executeHALDestRegression() {
    //console.log(argv.browsers);
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'http://qa.hollandamerica.com',
                '--suite','destTest',
                '--capabilities.browserName', 'chrome',
                '--capabilities.name', 'HAL_Automation_Tests',
                '--capabilities.platform', 'Mac',
                '--capabilities.screenResolution', '1280x1024'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('Destination Regression Test');
            //press.exit();
        });
}

//******************* CJ'S HOLLAND AMERICA FULL SITE SWEEP GULP TASKS ************************

gulp.task('HOLLAND AMERICA SMOKE TEST - FULL SITE SWEEP - QA', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qabook.hollandamerica.com/secondaryFlow/',
                '--suite', 'HollandAmericaSmokeQA',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('QA HOLLAND AMERICA FULL SMOKE TEST COMPLETE - BOOM');
            //press.exit();
        });
});




gulp.task('HOLLAND AMERICA SMOKE TEST - FULL SITE SWEEP - STAGE ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stagebook.hollandamerica.com/secondaryFlow/',
                '--suite', 'HollandAmericaSmokeSTAGE',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('STAGE HOLLAND AMERICA FULL SMOKE TEST COMPLETE - BOOM');
            //press.exit();
        });
});



//******************* BOOKING FLOW GULP TASKS    ************************


gulp.task('BOOKING FLOW - Smoke Tests - HAL and SBN - QA ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'BfSmokeTestsHalAndSbnQA',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});



gulp.task('BOOKING FLOW - Smoke Tests - Only HAL - QA ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'BfHalSmokeTestQA',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
             //   '--capabilities.screenResolution', '1280x1024', // If needed to change
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            //process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});


gulp.task('BOOKING FLOW - Smoke Tests - Only HAL  - STAGE ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com/',
                '--suite', 'BfHalSmokeTestStage',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
        })
        .on('end', function () {
            console.log('E2E Testing complete- STAGE - HOLLAND AMERICA');
        });
});





gulp.task('BOOKING FLOW - Smoke Tests - Only SBN - QA ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.seabourn.com/', // Need to have the Backslash at the end or its not a valid URL
                '--suite', 'Bf_Sbn_SmokeTestQA',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});





gulp.task('BOOKING FLOW - Functional Tests - HAL  - QA ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'BfFunctionalTestsHalQa',
                '--params.SUITENAME', [currentStartTaskName],
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
        })
        .on('end', function () {
            console.log('***** Booking Flow Functional Tests Complete - Holland America - QA***');
            //press.exit();
        });
});



gulp.task('BOOKING FLOW - Functional Tests - HAL  - STAGE ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com/',
                '--suite', 'BfFunctionalTestsHalStage',
                '--params.SUITENAME', [currentStartTaskName],
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
        })
        .on('end', function () {
            console.log('***** Booking Flow Functional Tests Complete - Holland America - STAGE ****');
            //press.exit();
        });
});





gulp.task('BOOKING FLOW - Functional Tests - SBN  - QA ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
         //   'webDriverUpdate': true,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.seabourn.com/',
                '--suite', 'BfFunctionalTestsSbnQa',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
        })
        .on('end', function () {
            console.log('******Functional Testing For SBN on QA Complete ****************');
            //press.exit();
        });
});



gulp.task('BOOKING FLOW - Smoke Tests - All Ships - HAL and SBN - QA', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com',
                '--suite', 'BfSmokeTestsAllShipsHalAndSbnQA',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            //press.exit();
        });
});





gulp.task('BOOKING FLOW - Smoke Tests - Only SBN  - STAGE ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.seabourn.com/',
                '--suite', 'BfSbnSmokeTestStage',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete - STAGE  - SBN');
            //press.exit();
        });
});



gulp.task('BOOKING FLOW - Smoke Tests - HAL and SBN - STAGE', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com',
                '--suite', 'BfSmokeTestsHalAndSbnStage',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            //press.exit();
        });
});


gulp.task('BOOKING FLOW - Smoke Tests - Only HAL - PROD ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.hollandamerica.com/',
                '--suite', 'BfHalSmokeTestProd',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});



gulp.task('BOOKING FLOW - Smoke Tests - Only SBN - PROD ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.seabourn.com/',
                '--suite', 'Bf_Sbn_SmokeTestProd',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E SMOKE Testing complete');
            //press.exit();
        });
});




gulp.task('BOOKING FLOW - Smoke Tests - HAL and SBN - PRODUCTION', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://www.hollandamerica.com',
                '--suite', 'BfSmokeTestsHalAndSbnProd',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            //press.exit();
        });
});

//**********************************************     CJ"S OLCI GULP TASKS     **************************************




gulp.task('OLCI - TESTING LANGUAGE - HOLLAND AMERICA  - QA', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'OlciTestInLanguage',
                '--capabilities.browserName', 'chrome',
                '--capabilities.shardTestFiles', true,
                '--capabilities.platformName', 'Mac'
            ],
        }))
        .on('error', function (e) { //
            console.log(e);
        })
        .on('end', function () {
            console.log('TESTING OLCI IN ALL LANGUAGES  - BOOM');
            //press.exit();
        });
});



gulp.task('OLCI - TESTING NETHERLANDS LANGUAGE - HOLLAND AMERICA  - QA', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'OlciTestInNL_Language',
                '--capabilities.browserName', 'chrome',
                '--capabilities.shardTestFiles', true,
                '--capabilities.platformName', 'Mac'
            ],
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', function () {
            console.log('TESTING OLCI IN NETHERLANDS LANGUAGE  - BOOM');
        });
});


gulp.task('OLCI - TESTING SPANISH LANGUAGE - HOLLAND AMERICA  - QA', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'OlciTestInES_Language',
                '--capabilities.browserName', 'chrome',
                '--capabilities.shardTestFiles', true,
                '--capabilities.platformName', 'Mac'
            ],
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', function () {
            console.log('TESTING OLCI IN SPANISH LANGUAGE  - BOOM');
        });
});



gulp.task('OLCI - TESTING DUTCH LANGUAGE - HOLLAND AMERICA  - QA', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'OlciTestInDE_Language',
                '--capabilities.browserName', 'chrome',
                '--capabilities.shardTestFiles', true,
                '--capabilities.platformName', 'Mac'
            ],
        }))
        .on('error', function (e) {
            console.log(e);
        })
        .on('end', function () {
            console.log('TESTING OLCI IN DUTCH LANGUAGE  - BOOM');
        });
});










gulp.task('OLCI-HAL and SBN - Smoke and Functional Tests on QA ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'qa.hollandamerica.com',
                '--suite', 'OLCI_FullTest_SmokeFunc_Qa',
                '--params.SUITENAME', currentStartTaskName],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            console.log('*******OLCI  HAL/SBN  - E2E Smoke and Functional Testing complete - QA Only*******');
            //press.exit();
        });
});


gulp.task('OLCI- HAL and SBN Functional tests on QA ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'OLCI_Hal_Sbn_Functional_Qa',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  HAL/SBN  - E2E FUNCTIONAL  Testing complete - QA Only*******');
            //press.exit();
        });
});


gulp.task('OLCI-HAL and SBN Smoke tests on QA ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'www.hollandamerica.com',
                '--suite', 'Olci_SmokeTest_Hal_Sbn_Qa',
                '--params.SUITENAME', currentStartTaskName],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  HAL/SBN  - E2E Smoke Testing complete - QA Only*******');
            //press.exit();
        });
});


gulp.task('OLCI-HAL and SBN Smoke tests on Stage ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'OLCI_StageSmokeTest_HAL_SBN',
                '--params.SUITENAME', currentStartTaskName],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  HAL/SBN  - E2E Smoke  Testing complete - Stage Only*******');
            //press.exit();
        });
});



gulp.task('OLCI-HAL - Smoke tests on QA ', function (callback) {

    gulp.src([])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args':['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'OlciSmokeTest_Hal_QA',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI HAL - E2E Smoke Testing complete*******');
            //press.exit();
        });
});



gulp.task('OLCI-HAL - Smoke tests on Stage  ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'https://stage.hollandamerica.com/',
                '--suite', 'Olci_HalSmokeTestStage',
                '--params.SUITENAME', currentStartTaskName],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  HAL  - E2E Smoke  Testing complete - Stage Only*******');
            //press.exit();
        });
});



gulp.task('OLCI- HAL - functional tests- QA', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'OLCIFunctionTest_Hal_Qa',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            console.log('*******OLCI  HAL  - COMPLETED - FUNCTIONAL TESTS ON QA ONLY *******');
            //press.exit();
        });
});


gulp.task('OLCI-HAL - Functional tests on Stage  ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com/',
                '--suite', 'Olci_Hal_FunctionalStage',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'mac'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('************** STAGE HOLLAND AMERICA FUNCTIONAL TESTS COMPLETE **************');
            //press.exit();
        });
});



gulp.task('OLCI-Complete OLCI for any booking on HAL - QA', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'https://qa.hollandamerica.com/',
                '--suite', 'CompleteAnyOLCI_QA_Hal',
                '--params.SUITENAME', currentStartTaskName],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  HAL  - COMPLETED OLCI FOR GUEST ON QA*******');
            //press.exit();
        });
});


gulp.task('OLCI - Complete Any Booking - HAL - PRODUCTION ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            args: ['--baseUrl', 'https://www.hollandamerica.com/',
                '--suite', 'CompleteAnyProdOLCI',
                '--params.SUITENAME', [currentStartTaskName],
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
            ],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  HAL  - COMPLETED OLCI IN PRODUCTION FOR GUEST *******');
            //press.exit();
        });
});



gulp.task('OLCI - Complete Any Booking - SBN - PRODUCTION ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            args: ['--baseUrl', 'https://www.seabourn.com/',
                '--suite', 'CompleteAnySbnProdOLCI',
                '--params.SUITENAME', [currentStartTaskName],
                '--capabilities.browserName', 'firefox',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
            ],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  HAL  - COMPLETED OLCI IN PRODUCTION FOR GUEST *******');
            //press.exit();
        });
});





gulp.task('OLCI-SBN Smoke tests on QA ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'https://qa.seabourn.com/',
                '--suite', 'Olci_SbnSmokeTest_QA',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  SBN  - COMPLETED SMOKE TESTS - QA ONLY *******');
            //press.exit();
        });
});



gulp.task('OLCI-SBN -Smoke tests on Stage ', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'https://stage.seabourn.com/',
                '--suite', 'Olci_SbnSmokeTestStage',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Mac'
            ],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  SBN  - E2E Smoke  Testing complete - Stage Only*******');
            //press.exit();
        });
});





gulp.task('OLCI-Complete OLCI for any booking on SBN - QA', function (callback) {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'args': ['--baseUrl', 'qa.hollandamerica.com',
                '--suite', 'OLCI_CompleteAnyOlci_Sbn_Qa',
                '--params.SUITENAME', currentStartTaskName],
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end',function () {
            callback
            console.log('*******OLCI  SBN  - COMPLETED OLCI FOR GUEST ON QA*******');
            //press.exit();
        });
});



gulp.task('OLCI - SBN - functional tests - QA ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com',
                '--suite', 'OLCI_SBN_FunctionTest_Qa',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Windows'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            //press.exit();
        });
});





gulp.task('OLCI- HAL and SBN Functional tests on Stage ', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.hollandamerica.com',
                '--suite', 'OLCI_HalAndSbnFunctionalStage',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Windows'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            //press.exit();
        });
});

gulp.task('OLCI-SBN - functional tests- Stage', function () {
    gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'https://stage.seabourn.com/',
                '--suite', 'OLCI_Sbn_FunctionalStage',
                //'--suite', 'PlanTripCruise',
                '--capabilities.browserName', 'chrome',
                '--capabilities.seleniumAddress', 'http://localhost:4444/wd/hub',
                '--capabilities.shardTestFiles', true,
                //'--capabilities.maxInstances', 30,
                '--capabilities.platformName', 'Windows'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            //press.exit();
        });
});


function executeWebTestsOnSauceLabs() {
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: ['--baseUrl', 'http://qa.hollandamerica.com',
                '--suite', argv.suites,
                '--capabilities.browserName', 'chrome',
                '--capabilities.name', 'HAL_Automation_Tests',
                '--capabilities.platform', 'Windows 7',
                '--capabilities.screenResolution', '1280x1024'
            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            //press.exit();
        });
}


function executeMobileTests() {
    //global.platform = 'Android';
    //var $platform = 'Android';
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './protractor.conf.js',
            'debug': false,
            'autoStartStopServer': true,
            args: [//'--seleniumAddress', 'http://localhost:4723/wd/hub',
                '--baseUrl', 'http://qa.hollandamerica.com',
                '--suite', 'OLCISmokeTest',
                '--capabilities.browserName', 'chrome',
                '--capabilities.appium-version', '1.4.6',
                '--capabilities.platformName', 'Android',
                '--capabilities.platformVersion', '4.4.2',
                '--capabilities.deviceName', 'Galaxy S5',
                '--capabilities.chromeOptions.args', '[\'disable-popup-blocking\']'

            ],
            keepAlive: false
        }))
        .on('error', function (e) { //
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            //press.exit();
        });
}



//**********************Gallops tests*********************************************


gulp.task('linkChecker', function (cb) {
    exec('node ./utils/verifyLinks.js', {maxBuffer: 1024 * 1000}, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});


gulp.task('JShint', function () {
    gulp.src(['**!/!*.json', '!node_modules/!**!/!*.*', '!JasmineResults/!**!/!*.*', 'conf.js', 'gulpfile.js', 'library/actionLibrary.js', 'utils/logger.js', 'package.json'])
        .pipe(jshint());
});


// --------------[ Gallop HAL Marketing Tests ]--------------




gulp.task('MARKETING - Full Gallop Smoke', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/advanceSearch/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'fullGallopSuite',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});


gulp.task('MARKETING - Advanced Search', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/advanceSearch/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'AdvancedSearch',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Alaska Functionality', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/alaskaFunctionality/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'AlaskaFunctionality',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Cruise Details', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/cruiseDetails/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'cruiseDetails',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Shop For Cruise', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/ShopForCruise/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'ShopForCruise',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Cruise Search Results', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/CruiseSearchResults/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'CruiseSearchResults',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Deck Plan', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/deckPlan/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'DeckPlan',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Email Functionality', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/emailFunctionality/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'EmailFunctionality',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Login And Register', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/loginAndRegister/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'LoginAndRegister',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Special Offers', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/specialOffers/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'SpecialOffers',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Site Wide Navigation - Others', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/siteWideNavigation/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'SiteWideNav_Others',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Site Wide Navigation - Footer', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/siteWideNavigation/footer/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'SiteWideNav_Footer',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Site Wide Navigation - Help', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/siteWideNavigation/help/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'SiteWideNav_Help',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Site Wide Navigation - Language & Search', function (callback) {

    gulp.src(['e2e-tests/testCases/marketing/siteWideNavigation/languageAndSearch/*.js'])  // Location of where your tests are
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',     // Location of your Conf file
            'args': ['--baseUrl', 'www.hollandamerica.com',  // Not used yet- but would be Base Url
                '--suite', 'SiteWideNav_LangnSearch',
                '--params.SUITENAME', currentStartTaskName],  // Adding the --suite arg will allow us to pull suites from the conf file.
            'autoStartStopServer': true,                       // You want this to be able to start and stop Webdriver
            'debug': false
        }))
        .on('error', function (e) {
            throw e
        })
        .on('end', callback);
});

gulp.task('MARKETING - Seabourn Redesign - Home Page', function(callback) {
    gulp.src(['e2e-tests/testCases/marketing/sbnHomePage/*spec.js'])
        .pipe(gulpProtractorAngular({
            'configFile': 'protractor.conf.js',
            'autoStartStopServer': true,
            'debug': false
        }))
        .on('error',function(e){
            throw e
        })
        .on('end',callback);
});




//*********************************** Plato code complexity  ****************************************
// Uses this to test the complexity of your code. Update the below areas, and run gulp task

gulp.task('PLATO - Get Code Complexity from your Source', function () {
    return gulp.src('./e2e-tests/testCases/marketing/*/*.js')      // Here is the location of what to analyze
        .pipe(plato('marketingTestsPlato', {    // Here is the Folder the results will get saved to
            jshint: {
                options: {
                    strict: true
                }
            },
            complexity: {
                trycatch: true
            }
        }));
});


//**********************Gallops Template Function for Use Below*********************************************


function executeTests(specNames) {
    return gulp.src([])
        .pipe(gulpProtractorAngular({
            'configFile': './conf.js',
            'debug': true,
            'autoStartStopServer': true,
            args: ['--specs', specNames,
                '--capabilities.browserName', 'chrome',
                '--params.SUITENAME', currentStartTaskName,
                '--capabilities.platformName', 'Windows'],
            keepAlive: false
        }))
        .on('error', function (e) {
            console.log(e);
            process.exit(1);
        })
        .on('end', function () {
            console.log('E2E Testing complete');
            process.exit();
        });
}

//**********************END Gallops tests*********************************************

