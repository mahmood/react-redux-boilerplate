const webpack = require('webpack'),
      path    = require('path');

const config = {
  port: 3000
}

module.exports = {
  entry: [
    'webpack/hot/dev-server', './src/app.jsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
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
  },
  devtool: 'source-map'
};
