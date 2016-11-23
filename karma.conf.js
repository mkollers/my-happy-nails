// Karma configuration
// Generated on Mon Nov 21 2016 15:21:26 GMT+0100 (Mitteleuropäische Zeit)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // bower:js
            "bower_components/angular/angular.js",
            "bower_components/angular-animate/angular-animate.js",
            "bower_components/angular-aria/angular-aria.js",
            "bower_components/angular-messages/angular-messages.js",
            "bower_components/angular-material/angular-material.js",
            "bower_components/angular-sanitize/angular-sanitize.js",
            "bower_components/angular-ui-router/release/angular-ui-router.js",
            "bower_components/SHA-1/sha1.js",
            "bower_components/angulartics/src/angulartics.js",
            "bower_components/angulartics-google-analytics/lib/angulartics-ga.js",
            // endbower
            'node_modules/angular-mocks/angular-mocks.js',
            // inject:js
                                  ".tmp/tests/sidenav-item/sidenav-item.controller.spec.js",
                                  ".tmp/tests/sidenav/sidenav.controller.spec.js",
                                  ".tmp/tests/config/routes.spec.js",
                                  ".tmp/tests/config/config.spec.js",
                                  ".tmp/tests/config/angulartics.spec.js",
                                  ".tmp/tests/main.controller.spec.js",
                                  ".tmp/scripts/sidenav-item/sidenav-item.module.js",
                                  ".tmp/scripts/sidenav-item/sidenav-item.controller.js",
                                  ".tmp/scripts/sidenav-item/sidenav-item.component.js",
                                  ".tmp/scripts/sidenav/sidenav.module.js",
                                  ".tmp/scripts/sidenav/sidenav.controller.js",
                                  ".tmp/scripts/sidenav/sidenav.component.js",
                                  ".tmp/scripts/app.js",
                                  ".tmp/scripts/config/routes.js",
                                  ".tmp/scripts/config/config.js",
                                  ".tmp/scripts/config/angulartics.js",
                                  ".tmp/scripts/templates.js",
                                  ".tmp/scripts/main.controller.js"
                                // endbower
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './.tmp/scripts/**/!(templates)+(.js)': ['coverage']
        },

        // the default configuration
        junitReporter: {
            outputDir: '.tmp', // results will be saved as $outputDir/$browserName.xml
            outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: false, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the <properties> section of the report
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage', 'karma-remap-istanbul'],

        remapIstanbulReporter: {
            reports: {
                lcovonly: '.tmp/coverage/lcov.info',
                html: '.tmp/coverage/html',
                cobertura: '.tmp/coverage/summary.xml'
            }
        },

        plugins: [
            'karma-junit-reporter',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-remap-istanbul'
        ],

        coverageReporter: {
            type: 'json',
            dir: '.tmp/coverage',
            file: 'coverage-final.json'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
