import React from 'react';
import PropTypes from 'prop-types';
import BranchHeader from 'components/Molecules/BranchHeader';

const BranchSelectorSection = ({ fields }) => (
  <BranchHeader {...fields} />
);

BranchSelectorSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

BranchSelectorSection.defaultProps = {
  fields: {},
};

export default BranchSelectorSection;
