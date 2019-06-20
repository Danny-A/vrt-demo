import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from 'components/Organisms/ContactForm';

const ContactFormSection = ({ fields }) => (
  <ContactForm {...fields} />
);

ContactFormSection.propTypes = {
  fields: PropTypes.objectOf(PropTypes.any),
};

ContactFormSection.defaultProps = {
  fields: {},
};

export default ContactFormSection;
