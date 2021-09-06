import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";

export const entry = "./source/index.js";
export const output = {
  mode: "development",
  path: resolve(__dirname, "dist"),
  filename: "index_bundle.js",
};

module.exports = {
  mode: "development",
  entry: "./source/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "index_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins:[
      new HtmlWebpackPlugin()
  ]
};
