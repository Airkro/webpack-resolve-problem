const { resolve } = require("path");

const unnecessary = {
  target: "node",
  devtool: false,
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          enforce: true
        }
      }
    }
  }
};

module.exports = ({ merge } = {} /* --env */) => ({
  ...unnecessary, // Make main.js easy to read
  resolve: {
    alias: { qs: "qss" }
  },
  module: {
    rules: [
      {
        // use `resolve` in config.module.rule[], then it works.
        include: resolve("src"),
        resolve: {
          alias: {
            "@": resolve("src"),
            // form --env.merge
            ...(merge ? { qs: "qss" } : undefined)
          }
        }
      }
    ]
  }
});
