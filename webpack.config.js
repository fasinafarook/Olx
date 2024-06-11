const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust this according to your entry point
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // other rules...
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/,
      },
      // other rules...
    ],
  },
  // Ignore warnings about failing to parse source maps
  ignoreWarnings: [/Failed to parse source map/],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map', // This is optional but useful for development
};
