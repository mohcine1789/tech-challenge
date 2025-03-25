const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 6000,

  e2e: {
    baseUrl: "https://www.demoblaze.com",
    setupNodeEvents(on, config) {
    },
  },
});
