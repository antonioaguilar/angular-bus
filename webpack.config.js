module.exports = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    filename: './angular-bus.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'babel-preset-es2015'
          ],
          plugins: []
        }
      }
    ]
  }
};
