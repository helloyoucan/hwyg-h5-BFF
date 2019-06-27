// import path from 'path';
const path  = require('path');
const webpack  = require('webpack');
// import webpack from 'webpack';
// const config: webpack.Configuration = {
module.exports = {
  mode: 'production',
  target:'async-node',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '../','src/server.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.bundle.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
};
// export default config;