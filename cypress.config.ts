import { defineConfig } from 'cypress';
import setupNodeEvents from './cypress/plugins/index';

export default defineConfig({
  e2e: {
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
      cypressMochawesomeReporterReporterOptions: {
        reportDir: 'cypress/reports',
        charts: true,
        reportPageTitle: 'Swag Labs Test Suite',
        embeddedScreenshots: true,
        inlineAssets: true,
      },
      mochaJunitReporterReporterOptions: {
        mochaFile: 'cypress/reports/junit/results-[hash].xml',
      },
    },
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: ['cypress/e2e/**/*.feature', 'cypress/e2e/**/*.cy.ts'],
    defaultCommandTimeout: 6000,
    watchForFileChanges: true,
    setupNodeEvents,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    supportFile: 'cypress/support/e2e.ts',
  },
});
