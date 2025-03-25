const { defineConfig } = require("cypress");

module.exports = defineConfig({

  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 2,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 2,
  },

  defaultCommandTimeout: 6000,

  e2e: {
    baseUrl: "https://www.demoblaze.com",
    setupNodeEvents(on, config) {
    },
  },
});
