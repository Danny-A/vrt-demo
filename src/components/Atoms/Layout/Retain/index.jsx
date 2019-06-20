import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Retain.scss';

const Retain = ({
  children,
  size,
  modifier,
}) => (
  <div className={classNames('o-retain', {
    'o-retain--wide@palm': size === 'wide@palm',
    'o-retain--no-overflow': modifier === 'no-overflow',
    'o-retain--relative': modifier === 'relative',
  })}
  >
    {children}
  </div>
);

Retain.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['wide@palm']),
  modifier: PropTypes.string,
};
Retain.defaultProps = {
  children: [],
  size: null,
  modifier: null,
};

export default Retain;
