//jshint strict: false


var HtmlReporter = require('protractor-html-screenshot-reporter'); //Trying to get this reporter to work
var newReporter = new HtmlReporter({
    baseDirectory: './protractor-result',
    //metaDataBuilder: function metaDataBuilder(spec,descriptions,results,capabilities){
    //    return {
    //        description: descriptions.join(' '),
    //        passed: results.passed()
    //    };
    //},
    docTitle: 'Booking Flow Tests',
    docName: 'protractor-tests-report.html',
    takeScreenShotsOnlyForFailedSpecs: true
});


exports.config = {
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 11000,

    suites: {
        //HAL
        AllTests: './e2e-tests/*.spec.js'
    },

  capabilities: {
    'browserName': 'chrome'
  },
    
    onPrepare: function() {
        /**
         * global parameter declarations
         */
        var specReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new specReporter({displayStacktrace: true}));
        jasmine.getEnv().addReporter(newReporter);
        browser.driver.manage().window().setSize(1600, 800);   // Setting window size
    },

//  baseUrl: 'http://localhost:8000/',    // Dont need this yet 

  framework: 'jasmine',

  jasmineNodeOpts: {
      showColors: true,
    defaultTimeoutInterval: 30000,
      includeStackTrace: true
  }

};
