const StyleLintPlugin = require('stylelint-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

// const config = require('../config/config');
const paths = require('../config/paths');

module.exports = ({ config }) => {
  // Storybook has a default rule for svg's and other statics. Remove it from the list
  const removedRules = config.module.rules.filter(rule => {
    if ('.svg'.match(rule.test)) {
      return false;
    }

    return true;
  });

  const newConfig = {
    ...config,
    mode: "development",
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        sass: `${paths.appSrc}/sass`,
        components: `${paths.appSrc}/components/`,
      },
    },
    module: {
      ...config.module,
      rules: [
        ...removedRules,
        // Add back the removed rule without for all the others.
        {
          test: /\.(scss)$/,
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
      ...config.plugins,
      // Stylelint check before parsing of the scss files
      new StyleLintPlugin({
        syntax: 'scss',
      }),

      new OpenBrowserPlugin({ url: 'http://localhost:9001' }),
    ],
  };

  return newConfig;
};
