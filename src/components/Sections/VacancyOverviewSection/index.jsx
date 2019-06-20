import React from 'react';
import PropTypes from 'prop-types';
import VacancyFilter from 'components/Organisms/VacancyFilter';

const VacancyOverviewSection = ({ fields }) => (
  <VacancyFilter {...fields} />
);

VacancyOverviewSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

VacancyOverviewSection.defaultProps = {
  fields: {},
};

export default VacancyOverviewSection;
