const { resolve } = require("path");

const unnecessary = require("./unnecessary.config");

module.exports = ({ merge } = {} /* --env */) => ({
  ...unnecessary, // Make dist/main.js easy to read, you can remove this line
  resolve: {
    alias: { qs: "qss" } // root alias setting
  },
  module: {
    rules: [
      {
        // use `resolve` in config.module.rule[], then it works.
        test: /\.js$/,
        loader: "babel-loader",
        include: resolve("src"),
        resolve: {
          alias: {
            // this options will override root alias setting
            // can be anything or just empty
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: resolve("src")
      }
    ]
  }
});
