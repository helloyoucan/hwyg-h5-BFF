// import path from 'path';
const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
// import webpack from 'webpack';
// const config: webpack.Configuration = {
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
module.exports = {
  cache: true,
  mode: 'development',//development  production
  node: {
    __filename: false,
    __dirname: false
  },
  target: 'node',
  // devtool: 'inline-source-map',
  externals: nodeModules,
  context: path.resolve(__dirname, '../'),
  entry: [
    // 'webpack/hot/poll?1000',
    path.resolve(__dirname, '../', 'src/server.ts')],
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'server.js'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts"],
    alias:{
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0'],
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins:[
    // new webpack.HotModuleReplacementPlugin()
  ]
};
// export default config;