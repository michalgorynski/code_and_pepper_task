/// <reference types='cypress' />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
/* for Cucumber Integration */
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import browserify from '@badeball/cypress-cucumber-preprocessor/browserify';

const os = require('os');
const mochawesomeLib = require('cypress-mochawesome-reporter/lib');
const mochawesomePlugin = require('cypress-mochawesome-reporter/plugin');
const exec = require('child_process').execSync;

const cache: any = {
  text: {},
};

// const customCommands = require('../support/commands/commands');

// module.exports = {
//   commands: customCommands,
// };

export default async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> => {
  /* set shared default settings */
  config.browsers.filter((browser) => browser.name === 'edge');

  await addCucumberPreprocessorPlugin(on, config);

  mochawesomePlugin(on);

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on(
    'file:preprocessor',
    browserify(config, {
      typescript: require.resolve('typescript'),
    }),
  );

  on('before:run', async (details) => {
    await mochawesomeLib.beforeRunHook(details);
    if (os.platform() === 'win32') {
      await exec(
        'IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots',
      );
      await exec('IF EXIST cypress\\reports rmdir /Q /S cypress\\reports');
    }
  });

  on('after:run', async () => {
    await exec(
      'npx jrm ./cypress/reports/junitreport.xml ./cypress/reports/junit/*.xml',
    );
    await mochawesomeLib.afterRunHook();
  });
  on('task', {
    log(message) {
      console.log(message);

      return null;
    },
    putInCache: ({ key, data }) => (cache[key] = data),
    getFromCache: (key) => cache[key],
  });

  return config;
};
