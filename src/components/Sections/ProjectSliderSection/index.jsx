import React from 'react';
import PropTypes from 'prop-types';
import ProjectSlider from 'components/Organisms/ProjectSlider';

const ProjectSliderSection = ({ fields, params }) => (
  <ProjectSlider {...fields} {...params} />
);

ProjectSliderSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
  params: PropTypes.objectOf(PropTypes.any),
};

ProjectSliderSection.defaultProps = {
  fields: {},
  params: {},
};

export default ProjectSliderSection;
