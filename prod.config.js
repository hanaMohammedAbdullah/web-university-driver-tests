const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automation-prod.example.com",
  },
  env: {
    name: "John Doe",
    username: "prodUser",
    password: "prodPass",
  },
});
