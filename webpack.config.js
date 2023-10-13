const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ mode } = { mode: "production" }) => { 
  console.log(`mode is: ${mode}`);
  return {
    mode,
    entry: "./src/index.js",
    output: {
      publicPath: "/",
      path: path.join(__dirname, "public"),
      filename: "main.js",
    },
    target: "web",
    devServer: {
      port: 3000,
      static: ["./public"],
      open: true,
      liveReload: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    module:{
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s[a|c]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader",
          ]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: 'assets'
              }
            }
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  }
}