const path = require("path");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: path.resolve("./src/index.js"),
  output: {
    path: path.resolve("./"),
    filename: "test/bundle.js"
  }
};