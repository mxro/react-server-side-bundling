const path = require('path')
const Visualizer = require('webpack-visualizer-plugin2');
const { StatsWriterPlugin } = require("webpack-stats-plugin");

module.exports = {
 entry: './index.jsx',
 mode: 'production',
 output: {
   path: path.join(__dirname, '/dist'),
   filename: 'bundle.js'
 },
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader'
       }
     }
   ]
 },
 plugins: [
    new StatsWriterPlugin({
        filename: path.join('..', 'dist', 'meta.json'),
        fields: null,
        stats: { chunkModules: true },
    }),

    new Visualizer({
        filename: path.join('..', 'stats.html'),
    }),

],
}
