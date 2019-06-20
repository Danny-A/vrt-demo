import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'svgxuse';

// Import all the svg's
import './svgs/logo.svg';
import './svgs/icon-arrow-right.svg';
import './svgs/icon-checkmark.svg';
import './svgs/icon-dropdown.svg';
import './svgs/icon-twitter.svg';
import './svgs/icon-facebook.svg';
import './svgs/icon-linkedin.svg';
import './svgs/icon-instagram.svg';
import './svgs/icon-notification.svg';


// Styles
import './Icon.scss';

const Icon = ({
  icon,
  modifier,
  size,
  inline,
  iconRotate,
}) => (
  <svg
    className={classNames('c-icon', {
      'c-icon--alpha': size === 'alpha',
      'c-icon--beta': size === 'beta',
      'c-icon--gamma': size === 'gamma',
      'c-icon--delta': size === 'delta',
      'c-icon--epsilon': size === 'epsilon',
      'c-icon--zeta': size === 'zeta',
      'c-icon--logo': size === 'logo',
      'c-icon--inline': inline,
      'c-icon--rotate-180': iconRotate === 180,
    }, modifier)}
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <use xlinkHref={`#${icon}`} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string,
  modifier: PropTypes.string,
  size: PropTypes.string,
  inline: PropTypes.bool,
  iconRotate: PropTypes.number,
};

Icon.defaultProps = {
  icon: 'icon-arrow-right',
  modifier: '',
  size: '',
  inline: false,
  iconRotate: null,
};

export default Icon;
