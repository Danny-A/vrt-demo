import React from 'react';
import PropTypes from 'prop-types';
import ImageSlider from 'components/Organisms/ImageSlider';

const ImageSliderSection = ({ fields, params }) => (
  <ImageSlider {...fields} {...params} />
);

ImageSliderSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
  params: PropTypes.objectOf(PropTypes.any),
};

ImageSliderSection.defaultProps = {
  fields: {},
  params: {},
};

export default ImageSliderSection;
