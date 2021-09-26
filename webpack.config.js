const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./source/script/exam.js",
    //about: "./source//javascript/about.js",
  },
  output: {
    path: path.resolve("./public"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.svg/,
        type: "asset/inline",
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "./",
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./source/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    // new HtmlWebpackPlugin({
    //   template: "./source/about.html",
    //   filename: "./about.html",
    //   chunks: ["about"],
    // }),
  ],
};