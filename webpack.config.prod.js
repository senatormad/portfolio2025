const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      '...', // Extend existing minimizers (like `terser-webpack-plugin`)
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      scriptLoading: 'defer',  // Ensures proper script loading
      cdnScripts: [            // Custom field to inject external scripts
        {
          type: 'module',
          src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js',
        },
        {
          nomodule: true,
          src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js',
        },
      ],
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'css', to: 'css' },
        { from: 'js/vendor', to: 'js/vendor' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
        { from: 'UrosVulovicCV2025.pdf', to: 'UrosVulovicCV2025.pdf' },
      ],
    }),
  ],
});
