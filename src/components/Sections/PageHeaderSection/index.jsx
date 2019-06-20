import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from 'components/Molecules/PageHeader';

const PageHeaderSection = ({ fields }) => (
  <PageHeader {...fields} />
);

PageHeaderSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

PageHeaderSection.defaultProps = {
  fields: {},
};

export default PageHeaderSection;
