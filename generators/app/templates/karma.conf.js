// Karma configuration

var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    // Base path, that will be used to resolve files and exclude
    basePath: '',
    // Frameworks to use
    frameworks: ['jasmine'],

    // List of files / patterns to load in the browser
    files: ['./karma-shim.js'],

    // List of preprocessors
    preprocessors: {
      './karma-shim.js': ['webpack'],
      './src/**/*.ts': ['webpack'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: {
        colors: true,
      },
    },

    // Test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['spec', 'junit'],

    junitReporter: {
      outputDir: 'results', // Results will be saved as $outputDir/$browserName.xml
      outputFile: undefined, // If included, results will be saved as $outputDir/$browserName/$outputFile
      suite: '<%= appname %>', // Suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // Add browser name to report and classes names
      nameFormatter: undefined, // Function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // Function (browser, result) to customize the classname attribute in xml testcase element
      properties: {
        funLevel: 'maximum',
      }, // Key value pair of properties to add to the <properties> section of the report
    },

    // Web server port
    port: 9876,

    // Enable / disable colors in the output (reporters and logs)
    colors: true,

    // Level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    // List plugins explicitly, since autoloading karma-webpack
    // won't work here
    plugins: [
      require('karma-jasmine'),
      require('karma-spec-reporter'),
      require('karma-junit-reporter'),
      require('karma-chrome-launcher'),
      require('karma-webpack'),
    ],
  });
};
