const webpack   = require('webpack');
const path      = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  port: 3000
}

module.exports = {
  entry: [
    'webpack/hot/dev-server', './src/app.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
   new HtmlWebpackPlugin({
     title: 'React, Redux',
     filename: 'index.html'
   })
 ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.(scss|css)$/,
        include: path.join(__dirname, 'src', 'styles'),
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    hot: true,
		inline: true,
		historyApiFallback: true,
    port: config.port,
		progress: true,
  }
};
