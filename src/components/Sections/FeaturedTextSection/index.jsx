import React from 'react';
import PropTypes from 'prop-types';
import FeaturedText from 'components/Molecules/FeaturedText';

const FeaturedTextSection = ({ fields }) => (
  <FeaturedText {...fields} />
);

FeaturedTextSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

FeaturedTextSection.defaultProps = {
  fields: {},
};

export default FeaturedTextSection;
