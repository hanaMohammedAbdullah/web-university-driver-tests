const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // - Default command timeout: is 4000 by default, used to set the default command timeout
  defaultCommandTimeout: 20000,
  // - Request timeout: is 5000 by default, used to set the request timeout
  requestTimeout: 10000,
  // - Response timeout: is 30000 by default, used to set the response timeout
  responseTimeout: 10000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      // this is a plugin that generates mochawesome reports
      require("cypress-mochawesome-reporter/plugin")(on);

      // this is a plugin that generates HAR files help to show the network requests and responses to kno wif it is ui problme of backend problem
      // install(on);
      // // this is a plugin that allows to use grep to filter tests
      // require("@cypress/grep/src/plugin")(on);
    },

    // - Base url: is used to set the base url for all the urls in the tests
    // baseUrl: "http://localhost:8080/",
    baseUrl: "https://webdriveruniversity.com/",
    // - Video: is true by default, used to record videos of tests
    // video: true,
    // - Test isolation: is true by default, used to isolate tests but we need it to be false
    testIsolation: false,
    // - Screenshots: is true by default, used to take screenshots of failed tests
    screenshotOnRunFailure: true,
    // - Spec pattern: specifies the pattern to use when searching for tests.
    specPattern: "cypress/{e2e,tests}/**/*.{spec,cy}.{js,ts}",
    // - Watch for file changes: is true by default, used to watch for file changes and rerun tests
    watchForFileChanges: false,
    // - Trash assets before runs: is true by default, used to delete assets before running tests
    trashAssetsBeforeRuns: true,
    // - Chrome Web Security: is false by default, used to disable web security in chrome
    chromeWebSecurity: false,
    // - Num tests kept in memory: is 1 by default, used to set the number of tests kept in memory
    numTestsKeptInMemory: 25,
    // - Experimental memory management: is true by default, used to enable experimental memory management
    experimentalMemoryManagement: true,
    // - Video compression: is 32 by default, used to set the video compression
    videoCompression: 32,
    // - Experimental interactive run events: is true by default, used to enable experimental interactive run events
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    experimentalInteractiveRunEvents: true,
    // add an envfile here please
    env: {
      // Add any environment variables you need here
      // For example, if you have an env file, you can load it here
      webdriveruni_homepage: "https://webdriveruniversity.com/",
      // MY_ENV_VAR: process.env.MY_ENV_VAR || 'default_value',
    },
  },
});
