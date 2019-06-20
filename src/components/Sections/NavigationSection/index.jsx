import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/Organisms/Navigation';

const NavigationSection = ({ fields }) => (
  <Navigation {...fields} />
);

NavigationSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

NavigationSection.defaultProps = {
  fields: {},
};

export default NavigationSection;
