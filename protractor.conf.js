// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  chromeOnly: false,
  seleniumServerJar: require('selenium-server-standalone-jar').path,

  // base application url
  baseUrl: 'http://localhost:8000',

  rootElement: '#myApp',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: [
    'test/e2e/*.js'
  ],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
