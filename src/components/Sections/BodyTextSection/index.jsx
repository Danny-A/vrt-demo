import React from 'react';
import PropTypes from 'prop-types';
import BodyText from 'components/Molecules/BodyText';

const BodyTextSection = ({ fields }) => (
  <BodyText {...fields} />
);

BodyTextSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

BodyTextSection.defaultProps = {
  fields: {},
};

export default BodyTextSection;
