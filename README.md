# Introduction
Playwright test automation project for VoucherCodes 

# Getting started
1. Run 'node -v' to see if NodeJS is installed on your computer. If not, follow the instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npms
2. Run 'npm install -g npm' to install the latest version of npm
3. Run 'npm init playwright@latest'. Select 'JavaScript', 'tests', 'no' and 'true' (Full installation instructions: https://playwright.dev/docs/intro#installing-playwright)
4. When you see 'playwright.config.js already exists. Override it?' message, select false
5. After the installation, run 'npm run test' to run all tests

# Useful commands/info
1. Command 'npm run test:headed' will run tests in headed mode, which will enable you to see the test running in the browser
2. Adding '.only' tag to the test (example: 'test.only') will allow you to run one (or more test with this tag) test at a time
3. Command 'npx playwright show-report' will show you the latest run report

