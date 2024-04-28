const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    blockHosts: ['*google-analytics.com', '*brilliantcollector.com', '*doubleclick.net']
  },
});
