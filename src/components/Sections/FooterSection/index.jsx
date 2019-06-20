import React from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/Organisms/Footer';

const FooterSection = ({ fields }) => (
  <Footer {...fields} />
);

FooterSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

FooterSection.defaultProps = {
  fields: {},
};

export default FooterSection;
