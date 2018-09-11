const path = require('path');
const webpack = require('webpack');

const { UglifyJsPlugin } = webpack.optimize;

const env = process.env.NODE_ENV;
const isProd = env === 'production';
const libraryName = '[name]';

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
];

let outputFile;
if (isProd) {
  plugins.push(new UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: true,
    },
  }));
  outputFile = `${libraryName}.min.js`;
} else {
  outputFile = `${libraryName}.js`;
}

module.exports = {

  entry: {
    'raf-after': [
      path.join(__dirname, '/index.js'),
    ],
  },

  devtool: !isProd && 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: outputFile,
    library: 'rafAfter',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins,
};
