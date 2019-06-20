import React from 'react';
import PropTypes from 'prop-types';
import Media from 'components/Organisms/Media';

const MediaSection = ({ fields }) => (
  <Media {...fields} />
);

MediaSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

MediaSection.defaultProps = {
  fields: {},
};

export default MediaSection;
