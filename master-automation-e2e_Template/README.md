# Master Automation Template

This is the template for building Protractor tests with GULP


## Getting Started

NPM Install - Will install all items in Package.json
Once NPM Install is complete
There are 2 files to update The page Object and the Test Spec


### Your TEST
Use the page object in your spec for all test related elements
You will use the page object to document all Elements you will verify
You will use the listed method in the page object to navigate to page

Test Steps:
Navigate to page from page object
Verify some Info on page you are on
Click Button to continue to next page
verify next page has some unique content


For extra credit - Get the Gulp task to run the URL without the need for a DOMAIN.


Below is info on NPM and Gulp and Protractor

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

Need the following Dependecies for this project

Screenshot Reporter - npm install protractor-html-screenshot-reporter --save-dev
Gulp Angular Protractor  = npm install gulp-angular-protractor -g
Jasmine-spec-reporter = npm install jasmine-spec-reporter -g


* We get the tools we depend upon via `npm`, the [node package manager][npm].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files




## Directory Layout

```
       --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
 Page Objects     --> Page Objects used inside of the test
  protractor-conf.js    --> Protractor config file
  *.spec.js          --> end-to-end scenarios to be run by Protractor
```

## Testing

This project is a template for E2E testing 




### End to end testing

The angular-seed app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner.  It uses native events and has
special features for Angular applications.

* the configuration is found at `e2e-tests/protractor-conf.js`
* the end-to-end tests are found in `e2e-tests/scenarios.js`

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor
can interact with it.

```
npm start
```

In addition, since Protractor is built upon WebDriver we need to install this.  The angular-seed
project comes with a predefined script to do this:

```
npm run update-webdriver
```

This will download and install the latest version of the stand-alone WebDriver tool.

Once you have ensured that the development web server hosting our application is up and running
and WebDriver is updated, you can run the end-to-end tests using the supplied npm script:

```
npm run protractor
```

This script will execute the end-to-end tests against the application being hosted on the
development server.


## Updating Angular

Previously we recommended that you merge in changes to angular-seed into your own fork of the project.
Now that the angular framework library code and tools are acquired through package managers (npm and
bower) you can use these tools instead to update the dependencies.

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update
```

This will find the latest versions that match the version ranges specified in the `bower.json` file.


## Loading Angular Asynchronously

The angular-seed project supports loading the framework and application scripts asynchronously.  The
special `index-async.html` is designed to support this style of loading.  For it to work you must
inject a piece of Angular JavaScript into the HTML page.  The project has a predefined script to help
do this.

```
npm run update-index-async
```

This will copy the contents of the `angular-loader.js` library file into the `index-async.html` page.
You can run this every time you update the version of Angular that you are using.



## Continuous Integration

### JENKINS

Using Jenkins for CI



## Contact

For more information on AngularJS please check out http://angularjs.org/

[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
