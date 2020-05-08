/* eslint-disable import/no-extraneous-dependencies */
const { override } = require("customize-cra");
const path = require("path");
const webpack = require("webpack");
module.exports = {
  // eslint-disable-next-line no-unused-vars
  webpack: override((config, _) => {
    console.log(config);
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/react", "@babel/env"],
        plugins: [
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }]
        ]
      }
    });

    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    return config;
  }),
  jest(config) {
    config.testResultsProcessor = "jest-sonar-reporter";
    config.transformIgnorePatterns = [
      "[/\\\\]node_modules[/\\\\](?!@cdl).+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ];
    if (!config.testPathIgnorePatterns) {
      config.testPathIgnorePatterns = [];
    }
    return config;
  }
};
