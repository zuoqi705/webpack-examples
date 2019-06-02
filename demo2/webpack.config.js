"use strict";

const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    // search: "./src/index.js",
    // es6: "./src/es6.js",
    // jsx: "./src/react.js",
    app: "./src/check-hmr.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8000
    // progress: true
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
          // options: {
          //   presets: ["@babel/preset-env"]
          // }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|gif|jpeg)/,
        // use: "file-loader"
        use: {
          loader: "url-loader",
          options: {
            limit: 10240
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   title: "CNM",
    //   template: "./src/index.html"
    // })
  ],
  mode: "development",
  watchOptions: {
    aggregateTimeout: 300, // 单位毫秒
    ignored: /node_modules/, // 忽略掉那些文件夹
    poll: 1000 //每秒内检查变动的次数
  }
};
