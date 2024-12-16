const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Match font files
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]', // Output to 'fonts' directory
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      '...', // Extend existing minimizers
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css', // Hash for CSS files
    }),
    new CopyPlugin({
      patterns: [
        { from: 'img', to: 'img' },
        { from: 'robots.txt', to: 'robots.txt' },
        { from: '404.html', to: '404.html' },
        { from: 'site.webmanifest', to: 'site.webmanifest' },
        { from: 'UrosVulovicCV2025.pdf', to: 'UrosVulovicCV2025.pdf' },
      ],
    }),
  ],
});
