const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  // context: `${__dirname}/client`,
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[path][name]-[hash:8].[ext]',
      //       },
      //     },
      //   ],
      // },
    ],
  },
  output: {
    path: DIST_DIR,
    filename: 'app.js',
  },
};
