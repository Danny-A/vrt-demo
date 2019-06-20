import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Icon from 'components/Atoms/Icon/';

import './InputText.scss';

class InputText extends Component {
  render() {
    const {
      name,
      placeholder,
      readonly,
      value,
      required,
      type,
      errorMessage,
      ...input
    } = this.props;

    return (
      <div
        className={classNames('c-input-text u-mb--large', {
          'c-input-text--has-error': errorMessage,
        })}
      >
        <input
          autoComplete="off"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          ref={(node) => { this.inputField = node; }}
          tabIndex={readonly ? '-1' : null}
          defaultValue={value}
          required={required}
          {...input}
        />
        <TransitionGroup>
          {errorMessage && (
            <CSSTransition
              timeout={250}
              classNames="c-input-text--move"
              key={errorMessage}
            >
              <div className="c-input-text__message">
                <Icon icon="icon-notification" size="epsilon" />
                <span className="c-input-text__message-label u-nano">
                  {errorMessage}
                </span>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}

InputText.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
};

InputText.defaultProps = {
  name: 'input-text',
  placeholder: null,
  readonly: false,
  required: false,
  type: 'text',
  value: '',
  errorMessage: null,
};

export default InputText;
