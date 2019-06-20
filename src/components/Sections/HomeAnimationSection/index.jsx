import React from 'react';
import PropTypes from 'prop-types';
import HomeAnimation from 'components/Organisms/HomeAnimation';

const HomeAnimationSection = ({ fields }) => (
  <HomeAnimation {...fields} />
);

HomeAnimationSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

HomeAnimationSection.defaultProps = {
  fields: {},
};

export default HomeAnimationSection;
