import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from 'components/Atoms/Icon';

import './Button.scss';
import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';

const Button = ({
  animateIconOnHover,
  type,
  onClick,
  target,
  title,
  disabled,
  tabIndex,
  tag,
  icon,
  iconSize,
  iconRotate,
  hideLabel,
  modifier,
  state,
  reversed,
  text,
  size,
  buttonRef,
  field,
  growOnPalm,
}) => {
  // Hide the label visually when hideLabel is true
  const labelClass = (hideLabel) ? 'u-visually-hidden' : '';

  // Populate field from SiteCore or just text
  let textField = null;
  textField = field ? field.value.text : text;

  let rel = null;
  if ((target || (field && field.value && field.value.target)) === '_blank') {
    rel = 'noopener noreferrer';
  }

  return (
    React.createElement(
      tag === 'a' ? RoutableSitecoreLink : tag,
      {
        className: classNames('c-button', {
          'c-button--clean': modifier === 'clean',
          'c-button--secondary': modifier === 'secondary',
          'c-button--tertiary': modifier === 'tertiary',
          'c-button--form-sent': modifier === 'is-sent',
          'c-button--hide-label': hideLabel === true,
          'c-button--reversed': reversed === true,
          'u-epsilon': size === 'epsilon',
          'is-active': state === 'is-active',
          'c-button--wide@palm': growOnPalm,
          'c-button--animate-icon-on-hover': animateIconOnHover,
        }),
        field,
        type,
        onClick,
        rel,
        title,
        disabled,
        tabIndex,
        ref: buttonRef,
      },
      <span className="c-button__inner">
        <span className={`c-button__label ${labelClass}`}>
          {textField}
        </span>
        {/* Only render the icon when there is actually a icon needed */}
        {icon ? (
          <span className="c-button__wrap-icon">
            <Icon
              icon={icon}
              size={iconSize}
              modifier="c-icon--inherit"
              iconRotate={iconRotate}
            />
          </span>
        ) : null}
      </span>,
    )
  );
};

Button.propTypes = {
  animateIconOnHover: PropTypes.bool,
  tag: PropTypes.string,
  modifier: PropTypes.string,
  state: PropTypes.string,
  hideLabel: PropTypes.bool,
  reversed: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconRotate: PropTypes.number,
  iconSize: PropTypes.string,
  tabIndex: PropTypes.string,
  size: PropTypes.string,
  buttonRef: PropTypes.func,
  field: PropTypes.objectOf(PropTypes.any),
  growOnPalm: PropTypes.bool,
};

Button.defaultProps = {
  animateIconOnHover: false,
  tag: 'a',
  modifier: '',
  state: '',
  hideLabel: false,
  reversed: false,
  type: 'button',
  onClick: null,
  target: null,
  title: null,
  disabled: false,
  text: 'Button label',
  icon: '',
  iconSize: null,
  iconRotate: null,
  tabIndex: null,
  size: null,
  buttonRef: null,
  field: null,
  growOnPalm: false,
};

export default Button;
