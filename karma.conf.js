// Karma configuration
// Generated on Thu Mar 30 2017 10:13:33 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['jasmine'],
    files: [
        "bower_components/angular/angular.js",       
        "bower_components/angular-mocks/angular-mocks.js",
        "bower_components/angular-ui-router/release/angular-ui-router.min.js",
        "javascripts/**/*.js"
    ],
   // list of files to exclude
    exclude: [

    ],
    preprocessors: {
    },
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
