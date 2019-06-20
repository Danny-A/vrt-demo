import React from 'react';
import PropTypes from 'prop-types';
import Atmosphere from 'components/Molecules/Atmosphere';

const AtmosphereSection = ({ fields }) => (
  <Atmosphere {...fields} />
);

AtmosphereSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

AtmosphereSection.defaultProps = {
  fields: {},
};

export default AtmosphereSection;
