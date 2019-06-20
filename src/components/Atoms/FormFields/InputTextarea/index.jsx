import React from 'react';
import PropTypes from 'prop-types';

import './InputTextarea.scss';

const InputTextarea = ({
  type,
  name,
  placeholder,
  required,
  readonly,
  value,
  onChange,
}) => (
  <div className="c-input-textarea u-mb--large">
    <textarea
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      readOnly={readonly}
      defaultValue={value}
      onChange={onChange}
    />
  </div>
);

InputTextarea.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  readonly: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputTextarea.defaultProps = {
  type: 'text',
  name: 'input-text',
  placeholder: null,
  required: false,
  readonly: false,
  value: '',
  onChange: null,
};

export default InputTextarea;
