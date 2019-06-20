import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { GlobalContext } from 'components/Context/GlobalProvider';

import './InviewAnimation.scss';

class InviewAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inView: false,
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('intersection-observer');
    }

    const options = {
      root: null,
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          this.setState({ inView: true });
        }
      });
    }, options);

    observer.observe(this.myRef);
  }

  render() {
    const {
      children,
      delay,
      longDistance,
      horizontal,
    } = this.props;

    const {
      inView,
    } = this.state;

    return (
      <GlobalContext.Consumer>
        {context => (
          <div
            ref={(e) => {
              this.myRef = e;
            }}
            className={classNames('c-inview', {
              'was-inview': inView,
              'is-out': context.state.pageIsTransitioning,
              'c-inview--delay': delay,
              'c-inview--long-distance': longDistance,
              'c-inview--horizontal': horizontal,
            })}
          >
            {children}
          </div>
        )}
      </GlobalContext.Consumer>
    );
  }
}

InviewAnimation.propTypes = {
  children: PropTypes.node,
  delay: PropTypes.bool,
  longDistance: PropTypes.bool,
  horizontal: PropTypes.bool,
};
InviewAnimation.defaultProps = {
  children: null,
  delay: false,
  longDistance: false,
  horizontal: false,
};

export default InviewAnimation;
