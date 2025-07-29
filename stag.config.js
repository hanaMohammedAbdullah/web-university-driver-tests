const { defineConfig } = require("cypress");
const stagingConfig = require("./config/staging.json");
module.exports = defineConfig({
  e2e: {
    baseUrl: stagingConfig.baseUrl,
    env: stagingConfig.env,
  },
  video: false,
  screenshotOnRunFailure: false,
});
