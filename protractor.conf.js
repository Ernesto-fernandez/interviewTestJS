//jshint strict: false
var path = require('path');
var today = new Date();
var fs = require('fs');
var TIMESTAMP = ((today.getMonth() + 1) < 10 ? '0' : '') + (today.getMonth() + 1) + (today.getDate() < 10 ? '0' : '') + today.getDate() + today.getHours() + '' + today.getMinutes() + '' + today.getSeconds();


//******************** Will also need the before and after functions below as well *****************
exports.config = {
    //Selenium Address
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // The timeout in milliseconds for each script run on the browser. This should
    // be longer than the maximum time your application needs to stabilize between
    // tasks.
    allScriptsTimeout: 60000,

    //Time protractor waits for the page to be loaded
    getPageTimeout: 60000,

    specs: [
        '*.js', '*.spec.js'
    ],
    capabilities: {
       // browserName: 'chrome'       //This will run a single instance on whatever browser you want
        browserName: 'firefox'
    },
//     multiCapabilities: [
//         {'browserName': 'chrome'},   // Multi Options if you want to run in Muliple Browsers - options to use
//         {'browserName': 'firefox'},
//         {'browserName': 'safari'},
// ],
    //***************************************    SUITES SECTION ************************************
    suites: {
        //***********FULL SMOKE SUITES *************************
        HollandAmericaSmokeQA: ['./e2e-tests/testCases/bookingFlow/smoke/smoke.spec.js','./e2e-tests/testCases/verifyPnavLandingHal.spec.js' , './e2e-tests/testCases/olci/smoke/smoke.spec.js', './e2e-tests/testCases/secondary/*.spec.smoke.js'],
        HollandAmericaSmokeSTAGE: ['./e2e-tests/testCases/bookingFlow/smoke/hal_smoke_stage.spec.js','./e2e-tests/testCases/verifyPnavLandingStageHal.spec.js' , './e2e-tests/testCases/olci/smoke/stage_smoke_spec.js', './e2e-tests/testCases/secondary/*.spec.smoke.js'],
        //*********** BOOKING FLOW *************************
        AllShipTests: './e2e-tests/testCases/*.spec.js',
        BfSmokeTestsHalAndSbnQA: ['./e2e-tests/testCases/bookingFlow/smoke/sbn_qa_smoke.spec.js','./e2e-tests/testCases/bookingFlow/smoke/smoke.spec.js'],
        BfHalSmokeTestQA: './e2e-tests/testCases/bookingFlow/smoke/smoke.spec.js',
        BfHalSmokeTestStage: './e2e-tests/testCases/bookingFlow/smoke/hal_smoke_stage.spec.js',
        BfHalSmokeTestProd: './e2e-tests/testCases/bookingFlow/smoke/hal_smoke_prod.spec.js',
        BfSbnSmokeTestStage: './e2e-tests/testCases/bookingFlow/smoke/sbn_smoke_stage.spec.js',
        Bf_Sbn_SmokeTestQA: './e2e-tests/testCases/bookingFlow/smoke/sbn_qa_smoke.spec.js',
        Bf_Sbn_SmokeTestProd: './e2e-tests/testCases/bookingFlow/smoke/sbn_smoke_prod.spec.js',
        BfSmokeTestsAllShipsHalAndSbnQA: './e2e-tests/testCases/bookingFlow/shipSpecificTests/*_spec.js',
        BfSmokeTestsHalAndSbnProd: ['./e2e-tests/testCases/bookingFlow/smoke/hal_smoke_prod.spec.js', './e2e-tests/testCases/bookingFlow/smoke/sbn_smoke_prod.spec.js'],
        BfSmokeTestsHalAndSbnStage: ['./e2e-tests/testCases/bookingFlow/smoke/hal_smoke_stage.spec.js', './e2e-tests/testCases/bookingFlow/smoke/sbn_smoke_stage.spec.js'],
        BfFunctionalTestsHalQa: './e2e-tests/testCases/bookingFlow/functional/functional.spec.js',
        BfFunctionalTestsHalStage: './e2e-tests/testCases/bookingFlow/functional/hal_functional_stage.spec.js',
        BfFunctionalTestsSbnQa: './e2e-tests/testCases/bookingFlow/functional/sbn_functional.spec.js',
        //************* OLCI Test Suites *************************************
        OlciTestInLanguage: ['./e2e-tests/testCases/olci/smoke/HAL_olciLanguageNetherlands.spec.js','./e2e-tests/testCases/olci/smoke/HAL_olciLanguageSpanish.spec.js','./e2e-tests/testCases/olci/smoke/HAL_olciLanguageDutch.spec.js' ],
        OlciTestInNL_Language: './e2e-tests/testCases/olci/smoke/HAL_olciLanguageNetherlands.spec.js',
        OlciTestInES_Language: './e2e-tests/testCases/olci/smoke/HAL_olciLanguageSpanish.spec.js',
        OlciTestInDE_Language: './e2e-tests/testCases/olci/smoke/HAL_olciLanguageDutch.spec.js',
        Olci_SmokeTest_Hal_Sbn_Qa: ['./e2e-tests/testCases/olci/smoke/smoke.spec.js', './e2e-tests/testCases/olci/smoke/SBN_smoke.spec.js'],
        OlciSmokeTest_Hal_QA: './e2e-tests/testCases/olci/smoke/smoke.spec.js',
        Olci_SbnSmokeTest_QA: './e2e-tests/testCases/olci/smoke/SBN_smoke.spec.js',
        CompleteAnyOLCI_QA_Hal: './e2e-tests/testCases/olci/complete_any_olci.spec.js',
        OLCI_FullTest_SmokeFunc_Qa: ['./e2e-tests/testCases/olci/smoke/smoke.spec.js','./e2e-tests/testCases/olci/SBN_smoke.spec.js', './e2e-tests/testCases/olci/functional.spec.js', './e2e-tests/specs/olci/SBN_Functional.spec.js'],
        CompleteAnyProdOLCI: './e2e-tests/testCases/olci/Hal_Complete_Any_Olci_Prod.spec.js',
        CompleteAnySbnProdOLCI: './e2e-tests/testCases/olci/SBN_Complete_Any_Prod_OLCI.spec.js',
        OLCI_StageSmokeTest_HAL_SBN: ['./e2e-tests/testCases/olci/smoke/stage_smoke_spec.js', './e2e-tests/testCases/olci/smoke/SBN_stage_smoke.spec.js'],
        Olci_SbnSmokeTestStage: './e2e-tests/testCases/olci/smoke/SBN_stage_smoke.spec.js',
        Olci_HalSmokeTestStage: './e2e-tests/testCases/olci/smoke/stage_smoke_spec.js',
        OLCI_CompleteAnyOlci_Sbn_Qa: './e2e-tests/testCases/olci/complete_any_SBN_olci.spec.js',
        OLCIFunctionTest_Hal_Qa: './e2e-tests/testCases/olci/functional/functional.spec.js',
        OLCI_SBN_FunctionTest_Qa: './e2e-tests/testCases/olci/functional/SBN_Functional.spec.js',
        OLCI_Hal_Sbn_Functional_Qa: ['./e2e-tests/testCases/olci/functional/SBN_Functional.spec.js' , './e2e-tests/testCases/olci/functional/functional.spec.js'],
        Olci_Hal_FunctionalStage: './e2e-tests/testCases/olci/functional/HAL_stage_functional.spec.js',
        OLCI_HalAndSbnFunctionalStage: ['./e2e-tests/testCases/olci/functional/HAL_stage_functional.spec.js', './e2e-tests/testCases/olci/functional/SBN_stage_Functional.spec.js'],
        OLCI_Sbn_FunctionalStage: './e2e-tests/testCases/olci/functional/SBN_stage_Functional.spec.js',
        MyAccountVerification: './e2e-tests/testCases/web/verifyMyAccountSpec.js',
        // ********************Marketing Suites ********************************
        HalMarketingTeamsSmokeQA: ['./e2e-tests/testCases/marketing/siteWideNavigation/verifyHomePageHalQa.spec.js', './e2e-tests/testCases/marketing/siteWideNavigation/verifyRecentlyViewedOrAlsoOfInterestBar.spec.js', './e2e-tests/testCases/marketing/loginAndRegister/verifyLoginLink.spec.js', './e2e-tests/testCases/destinationsPage.spec.js'],
        PlanTripCruise: ['./e2e-tests/testCases/web/verifyPlanTripSpec.js'],
        destTest: './e2e-tests/testCases/destinationsPage.spec.js',
        destAlaska: './e2e-tests/testCases/halAlaskaDest.spec.js',
        VerifyExitBooking: './e2e-tests/testCases/mobile/verifyExitBookingSpec.js',
        SbnCruiseDetails: ['./e2e-tests/testCases/marketing/sbnCruiseDetails.js', './e2e-tests/testCases/marketing/sbnCruiseDetails-Currency.js'],
        SbnCruiseDetailsCurrency: './e2e-tests/testCases/marketing/cruiseDetails/verifySbnCurrency-cruiseDetails.spec.js',
        CdrTests: ['./e2e-tests/testCases/verifyCruiseDetailsNewHal.spec.js', './e2e-tests/testCases/verifyCruiseDetailsNewSbn.spec.js'], // Here is where will start to add our suites
        PnavTests: ['./e2e-tests/testCases/verifyPnavLandingHal.spec.js', './e2e-tests/testCases/verifyPnavLandingSbn.spec.js'], // Here is where will start to add our suites
        SbnFooterTest: ['./e2e-tests/testCases/marketing/verifyFooterSbn.spec.js'],
        NiccySearchSBNTests: './e2e-tests/testCases/marketing/sbnSearchTests/*.js',
        NiccySpecialOffersSBNTests: './e2e-tests/testCases/marketing/sbnOffersTest/*.js',
        oneFileSbnRun:'/Users/63075/IdeaProjects/master-automation-e2e/e2e-tests/testCases/marketing/sbnOffersTest/sbnSpecialOffersFilterFunc.spec.js',
        NiccySearchHalTests: './e2e-tests/testCases/marketing/halSearchTests/*.js',
        NiccySpecialOffersHalTests: './e2e-tests/testCases/marketing/halOffersTests/*.js',
        oneFileHalRun: '/Users/63075/IdeaProjects/master-automation-e2e/e2e-tests/testCases/marketing/halOffersTests/halDesktopSpecialOffersFunc.js',
        OnboardTest: './e2e-tests/testCases/onboardNav.spec.js',
        OnboardDeckPlansTest: './e2e-tests/testCases/sbnDeckPlans.spec.js',
        MarketingTeamOneHalQaSmoke: ['./e2e-tests/testCases/marketing/siteWideNavigation/verifyHomePageHalQa.spec.js', './e2e-tests/testCases/marketing/siteWideNavigation/footer/verifyFooters.spec.js'],
        MarketingTeamOneSbnQaSmoke: ['./e2e-tests/testCases/marketing/siteWideNavigation/verifyHomePageSbnQa.spec.js', './e2e-tests/testCases/marketing/verifyFooterSbn.spec.js'],
        JimTest: './e2e-tests/testCases/marketing/siteWideNavigation/footer/verifyFooters.spec.js',
        JohnnyTest: './e2e-tests/testCases/marketing/siteWideNavigation/verifyRecentlyViewedOrAlsoOfInterestBar.spec.js',
        // ********************Gallop Tests ********************************
        AdvancedSearch: ['./e2e-tests/testCases/marketing/advanceSearch/verifyAdvanceSearchForm.spec.js','./e2e-tests/testCases/marketing/advanceSearch/verifyAdvanceSearchForm_mobile.spec.js', './e2e-tests/testCases/marketing/advanceSearch/verifyAdvanceSearchForm_tablet.spec.js'],
        AlaskaFunctionality: ['./e2e-tests/testCases/marketing/alaskaFunctionality/*.js'],
        cruiseDetails: ['./e2e-tests/testCases/marketing/cruiseDetails/*.js'],
        CruiseSearchResults: ['./e2e-tests/testCases/marketing/CruiseSearchResults/*.js'],
        DeckPlan: ['e2e-tests/testCases/marketing/deckPlan/*.js'],
        EmailFunctionality: ['./e2e-tests/testCases/marketing/emailFunctionality/*.js'],
        LoginAndRegister: ['./e2e-tests/testCases/marketing/loginAndRegister/*.js'],
        ShopForCruise: ['./e2e-tests/testCases/marketing/shopForCruise/*.js'],
        SpecialOffers: ['./e2e-tests/testCases/marketing/specialOffers/*.js'],
        SiteWideNav_Others: ['./e2e-tests/testCases/marketing/siteWideNavigation/*.js'],
        SiteWideNav_Footer: ['./e2e-tests/testCases/marketing/siteWideNavigation/footer/*.js'],
        SiteWideNav_Help: ['./e2e-tests/testCases/marketing/siteWideNavigation/help/*.js'],
        SiteWideNav_LangnSearch: ['./e2e-tests/testCases/marketing/siteWideNavigation/languageAndSearch/*.js'],
        fullGallopSuite: ['./e2e-tests/testCases/marketing/alaskaFunctionality/*.js','./e2e-tests/testCases/marketing/cruiseDetails/*.js','./e2e-tests/testCases/marketing/CruiseSearchResults/*.js','./e2e-tests/testCases/marketing/shopForCruise/*.js','./e2e-tests/testCases/marketing/specialOffers/*.js']
    },

    params: {
        // SecondaryFlow
        // brand - used for secondary flow brand (use 'hal' or 'sbn')
        // will be used to drive brand specific test data, etc.
        brand: 'not_set'
    },

    //**************************  On Prepare   ********************
    onPrepare: function () {
        global.PLATFORM = browser.params.PLATFORM;

        //****************** For use on Secondary Flow  **************************
        // SecondaryFlow - protractor mocking
        require('protractor-http-mock').config = {
            rootDirectory: __dirname, // default value: process.cwd()
            protractorConfig:'protractor.conf.js'
        };
        // SecondaryFlow - display brand under test
        if(browser.params.brand != 'not_set'){
            console.log('BRAND UNDER TEST = ' + browser.params.brand.toUpperCase());
        }

        //****************** For use for MOBILE testing  **************************
        if (global.PLATFORM == 'mobile') {
            browser.driver.manage().window().setSize(550, 700);
        }
        else if (global.PLATFORM == 'tablet') {
            browser.driver.manage().window().setSize(790, 450);
        }
        else {
            browser.driver.manage().window().maximize();
        }

        //Global FUNCTIONS Available TO BE USED IN ANY TEST
        global.APPLOGGER = require('./e2e-tests/utils/logger.js').Log("./E2E-Tests-results", 'AutomationLog', TIMESTAMP);

        //FUNCTIONS TO BE USED IN ANY TEST
        global.pageRefresh = function () {
            browser.refresh();
        };

        global.POPUP_CLOSE = function () {
            global.medium_Wait();
            if (!($('#cboxClose').isPresent())) {
                browser.switchTo().frame();
            }
            global.closePopUpScript();
        };

        global.closePopUpScript = function () {
            var js_script = "var i = document.getElementsByClassName('close');" +
                "var j = document.getElementById('cboxWrapper');" +
                "var k = document.getElementById('cboxClose');" +
                "var m = document.getElementsByClassName('text-right')[1];" +
                "if(m!=null){m.click();}" +
                "if(i!=null && i.length > 0){i[0].click();}" +
                "if (j!=null) {k.click();}";
            browser.executeScript(js_script);
        };

        global.short_Wait = function () {
            var int = 3 * 1000;
            browser.sleep(int);
        };

        global.medium_Wait = function () {
            var int = 6 * 1000;
            browser.sleep(int);
        };

        //********* END GLOBAL FUNCTIONS  ***********************

        console.log('WEAPONS ARE ARMING');

        //************** REPORTING STUFF ***********************
        var reportDir = __dirname + '/E2E-Tests-results/';
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        var ScreenShotReporter = require('protractor-jasmine2-screenshot-reporter');
        var jasmineReporters = require('jasmine-reporters');
        var SpecReporter = require('jasmine-spec-reporter');


        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: reportDir,
            firePrefix: 'xmloutput'
        }));

        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: true,
            displayFailureSummary: true,
            displayPendingSummary: true,
            displaySuccessfulSpec: true,
            displayFailedSpec: true,
            displayPendingSpec: true,
            displaySpecDuration: true,
            displaySuiteNumber: true,
            colors: {
                success: 'green',
                failure: 'red',
                pending: 'yellow'
            },
            prefixes: {
                success: '✓ ',
                failure: '✗ ',
                pending: '* '
            },
            customprocessors: []
        }));

        jasmine.getEnv().addReporter(new ScreenShotReporter({
            dest: reportDir + 'Screenshots',
            reportTitle: null
        }));
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: reportDir,
            screenshotsFolder: 'Screenshots',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: false,
            filePrefix: 'E2E-Tests-AutomationReport'
        }));

        //*************Global Variables for use in OLCI and BOOKING FLOW -
        config = require('./e2e-tests/data/web/config.json');
        voyages = require('./e2e-tests/data/web/voyages.json');
        creditCards = require('./e2e-tests/data/web/credit_cards.json');
        common = require('./e2e-tests/utils/common_functions.js');
        loginData = require('./e2e-tests/data/loginData.json');
        paxInfo = require('./e2e-tests/data/passengerInfo.json');
        guest = require('./e2e-tests/data/web/guest.json');
        browser.driver.manage().window().setSize(1600, 1000);   // Setting window size - Can set any specifics
    },
    onComplete: function () {
        // At this point, tests will be done but global objects will still be
        // available.

        console.log("******AWESOME ALL TESTING IS COMPLETE*******");
    },
    onCleanUp: function () {
        console.log("********************** TIME FOR A BEER *************");    //For now not needed
    },
    afterLaunch: function (exitCode) {
        //************** NEEDED IF WE WANT TO USE SCREENSHOT REPORTER ***************
        // return new Promise(function (resolve) {
        //     newHtmlReporter.afterLaunch(resolve.bind(this, exitCode))
        //
        // });
        console.log("AFTER LAUNCH");

    },
    // framework: 'jasmine',     // Removed this as it does not appear to be needed to run
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 600000,
        includeStackTrace: true,
        isVerbose: true
    },
    allScriptsTimeout: 600000,  //duplicate declaration.  Do we want this 2nd one here?

};
