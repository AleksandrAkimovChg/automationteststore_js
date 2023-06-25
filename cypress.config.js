const { defineConfig } = require("cypress");

module.exports = defineConfig({
viewportWidth: 1920,
viewportHeight: 1080,
chromeWebSecurity: false,
defaultCommandTimeout: 7000,
e2e: {
    setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
    },
},
video: false,
reporter: 'cypress-mochawesome-reporter',
reporterOptions: {
        embeddedScreenshots: true,
        charts: true,
        reportFilename: 'mochawesome',
        reportDir: 'mochawesomeReports',
        overwrite: true,
        mochaFile: 'reports/junit/test-results-[hash].xml'
    },
});