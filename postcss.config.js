module.exports = {
  plugins: {
    autoprefixer: {
      grid: true,
    },
    // 'postcss-object-fit-images': {},
    'postcss-normalize': {},
    'postcss-pxtorem': {
      propList: ['*'],
      minPixelValue: 4,
    },
  },
};
