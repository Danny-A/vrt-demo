import React from 'react';
import PropTypes from 'prop-types';
import DualPortraits from 'components/Organisms/DualPortraits';

const DualPortraitsSection = ({ fields }) => (
  <DualPortraits {...fields} />
);

DualPortraitsSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

DualPortraitsSection.defaultProps = {
  fields: {},
};

export default DualPortraitsSection;
