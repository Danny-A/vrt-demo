import React from 'react';
import PropTypes from 'prop-types';
import Infobar from 'components/Organisms/Infobar';

const InfobarSection = ({ fields }) => (
  <Infobar {...fields} />
);

InfobarSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

InfobarSection.defaultProps = {
  fields: {},
};

export default InfobarSection;
