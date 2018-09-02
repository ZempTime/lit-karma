module.exports = function(config) {
  config.set({
    singleRun: true,
    frameworks: ["browserify", "mocha", "chai"],
    preprocessors: {
      "test/**/*.js": ["browserify"],
      "src/**/*.js": ["browserify"]
    },
    files: [
      { pattern: "test/index.html", type: "html" },
      { pattern: "test/**/*.js", included: false },
      { pattern: "src/**/*.js", included: false },
      "node_modules/@babel/polyfill/dist/polyfill.js"
    ],
    reporters: ["progress"],
    browsers: ["ChromeHeadless"],
    browserify: {
      debug: true,
      transform: ["brfs"]
    }
  });
};
