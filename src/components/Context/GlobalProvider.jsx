/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  state = {
    isNavigationOpen: false,
    pageIsTransitioning: false,
    onClickNavigation: () => {
      this.setState(prevState => ({
        isNavigationOpen: !prevState.isNavigationOpen,
      }));
    },
    startPageTransition: () => {
      this.setState({
        pageIsTransitioning: true,
      });
    },
    finishPageTransition: () => {
      this.setState({
        pageIsTransitioning: false,
      });
    },
    toggleInViewClasses: () => {
      let i = 0;
      const inviews = document.querySelectorAll('.c-inview');

      for (i = 0; i < inviews.length; i += 1) {
        inviews[i].classList.toggle('no-transform');
      }
    },
  };

  render() {
    const contextProvider = {
      state: this.state,
    };

    const {
      children,
    } = this.props;

    return (
      <GlobalContext.Provider value={contextProvider}>
        {children}
      </GlobalContext.Provider>
    );
  }
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
};

GlobalProvider.defaultProps = {
  children: {},
};

export default GlobalProvider;
