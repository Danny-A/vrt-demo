import React from 'react';
import PropTypes from 'prop-types';
import ContentFilter from 'components/Organisms/ContentFilter';

const ExpertiseFilterSection = ({ fields }) => (
  <ContentFilter {...fields} />
);

ExpertiseFilterSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

ExpertiseFilterSection.defaultProps = {
  fields: {},
};

export default ExpertiseFilterSection;
