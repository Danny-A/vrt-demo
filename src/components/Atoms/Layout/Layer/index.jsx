import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Layer.scss';

const Layer = ({
  children,
  size,
  collapseTop,
  collapseBottom,
}) => (
  <div
    className={classNames('o-layer', {
      'o-layer--small': size === 'small',
      'o-layer--medium': size === 'medium',
      'o-layer--large': size === 'large',
      'o-layer--huge': size === 'huge',
      'o-layer--huge-header': size === 'huge-header',
      'o-layer--huge-footer': size === 'huge-footer',
      'o-layer--collapse-top': collapseTop,
      'o-layer--collapse-bottom': collapseBottom,
    })}
  >
    {children}
  </div>
);

Layer.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  collapseTop: PropTypes.bool,
  collapseBottom: PropTypes.bool,
};
Layer.defaultProps = {
  children: [],
  size: '',
  collapseTop: false,
  collapseBottom: false,
};

export default Layer;
