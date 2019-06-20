import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hamburger.scss';

const Hamburger = ({
  openWord,
  closeWord,
  state,
  onClickHamburger,
}) => (
  <button
    type="button"
    className="c-hamburger o-button-clean"
    onClick={e => onClickHamburger(e)}
    aria-label="Navigation"
    aria-expanded={state}

  >
    <span className="c-hamburger__word">
      { state ? closeWord : openWord }
    </span>
    <span
      className={classNames('c-hamburger__button', {
        'is-active': state,
      })}
    >
      <span />
      <span />
      <span />
    </span>
  </button>
);

Hamburger.propTypes = {
  openWord: PropTypes.string,
  closeWord: PropTypes.string,
  onClickHamburger: PropTypes.func,
  state: PropTypes.bool,
};

Hamburger.defaultProps = {
  openWord: '',
  closeWord: '',
  onClickHamburger: null,
  state: false,
};

export default Hamburger;
