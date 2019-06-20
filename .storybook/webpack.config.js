const StyleLintPlugin = require('stylelint-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// const config = require('../config/config');
const paths = require('../config/paths');

module.exports = {
  resolve: {
    alias: {
      sass: `${paths.appSrc}/sass`,
      components: `${paths.appSrc}/components/`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              // Custom include paths for sass files
              includePaths: paths.sassSrc,
              precision: 8,
            },
          },
        ],
      },
      // scripts
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
        exclude: /node_modules/,
      },

      // fonts
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader?name=.assets/fonts/[name].[ext]',
      },

      // SVG
      {
        test: /\.svg$/,
        use: [
          'svg-sprite-loader',
          'svgo-loader',
        ],
      },
    ],
  },
  plugins: [
    // Stylelint check before parsing of the scss files
    new StyleLintPlugin({
      syntax: 'scss',
    }),

    new OpenBrowserPlugin({ url: 'http://localhost:9001' }),
  ],
};
