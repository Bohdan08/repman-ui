const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            name: "static/media/[name].[hash:8].[ext]",
          },
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        loader: require.resolve("file-loader"),
        options: {
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    // path: path.resolve(__dirname, "./dist"),
    // filename: "bundle.js",
    // publicPath: "/",
    publicPath: "/",
    path: path.join(__dirname, "./dist"),
    filename: "bundle-[hash].js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      inject: true,
    }),
  ],
  devServer: {
    // port: process.env.PORT || 3000,
    // contentBase: path.resolve(__dirname, "./dist"),
    // hot: true,
    // historyApiFallback: {
    //   index: "index.html",
    // },
    historyApiFallback: true,
    // stack overflow

    https: true,
    port: 123,
    hot: true,
    contentBase: path.resolve(__dirname, "./dist"),
    // contentBase: "./public",
    inline: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },
};
