const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const TsxRule = {
  test: /\.tsx?$/,
  use: {
    loader: "awesome-typescript-loader",
  },
};

const CssRule = {
  test: /\.css$/i,
  use: [
    "style-loader",
    { loader: "css-loader", options: { importLoaders: 1 } },
    "postcss-loader",
  ],
}

const rules = [TsxRule, CssRule];

module.exports = {
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      
    }),
  ],
  devServer: {
    historyApiFallback: true,
  }
};
