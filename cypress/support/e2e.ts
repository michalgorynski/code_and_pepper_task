import '@cypress/skip-test/support';
import 'cypress-mochawesome-reporter/register';

Cypress.on(
  'uncaught:exception',
  (err, runnable) =>
    // returning false here prevents Cypress from failing the test
    false,
);
