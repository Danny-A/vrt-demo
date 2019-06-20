import React from 'react';
import PropTypes from 'prop-types';
import LinkHighlight from 'components/Organisms/LinkHighlight';

const LinkHighlightSection = ({ fields }) => (
  <LinkHighlight {...fields} />
);

LinkHighlightSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

LinkHighlightSection.defaultProps = {
  fields: {},
};

export default LinkHighlightSection;
