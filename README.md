# Cypress tests for Saucedemo.com

This repository contains end-to-end tests using Cypress with TypeScript and Cucumber for https://www.saucedemo.com/

## Installation

Before running the tests, make sure you have Node.js and npm installed on your machine. Then, install the required packages by running:

```bash
npm install
```

# Running the Tests

You can run the tests in two different modes:

## 1. Headed mode (with Cypress Test Runner)

To open the Cypress Test Runner and run the tests interactively, use the following command:

```bash
npm run cypress:open
```

The Cypress Test Runner will open, and you can select individual test scenarios to run or run all tests at once.

## 2. Headless mode (in the background)

To run the tests in headless mode (in the background), use the following command:

```bash
npm run cypress:run
```

This will execute the test scenarios in the background without displaying the Cypress Test Runner

# Test Report

After running the tests in headless mode, the test report will be available in the following location: **/cypress/reports/index.html**

You can open the report in your web browser to view the test results.

# Writing Tests

The tests in this repository are written using Cucumber with Gherkin syntax. You can find the feature files in the **cypress/e2e** directory, and the corresponding step definitions in the **cypress/support/step_definitions** directory.

### Happy testing! 🚀
