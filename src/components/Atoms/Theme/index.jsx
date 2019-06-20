
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Theme.scss';

const Theme = ({
  children,
  theme,
  className,
}) => (
  <div
    className={classNames({
      't-color--dark': theme === 'transparent-dark',
      't-color--light': theme === 'transparent-light',
      't-section t-bg--black  t-color--light': theme === 'black',
      't-section t-bg--white  t-color--dark': theme === 'white',
      't-section t-bg--gray-b  t-color--dark': theme === 'gray-b',
      't-section t-bg--gray-e  t-color--light': theme === 'gray-e',
      't-section t-bg--brand-a': theme === 'brand-a',
    }, className)}
  >
    {children}
  </div>
);

Theme.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string,
  className: PropTypes.string,
};
Theme.defaultProps = {
  children: [],
  theme: null,
  className: null,
};

export default Theme;
