import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { pageTransitionDuration, pageTransitionTimeout } from 'components/Utils/OnRouteChange/pageTransitionSettings';

import Retain from 'components/Atoms/Layout/Retain';
import Theme from 'components/Atoms/Theme';
import Hamburger from 'components/Atoms/Hamburger';
import Button from 'components/Atoms/Button';
import Icon from 'components/Atoms/Icon';
import { GlobalContext } from 'components/Context/GlobalProvider';

import './Navigation.scss';

class Navigation extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);
    this.state = {
      theme: '',
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('intersection-observer');
    }

    // Initialize observer
    setTimeout(() => {
      this.observeSections();
    }, pageTransitionTimeout);

    document.addEventListener('keydown', this.escFunction, false);
    document.addEventListener('scroll', this.onScroll, false);
  }

  componentDidUpdate(prevProps) {
    const {
      location,
    } = this.props;

    if (location !== prevProps.location) {
      if (this.observer) {
        this.observer.disconnect();
      }

      // After a route change we need to wait for the new page/components to render
      // If we would fire this instantly the elements on the previous page would be observered
      // This solution might need some refactoring
      setTimeout(() => {
        this.observeSections();
      }, pageTransitionDuration);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
    document.removeEventListener('scroll', this.onScroll, false);
  }

  // Add sections to the observer
  observeSections = () => {
    this.$sections = document.querySelectorAll('.t-section');
    this.$navigation = document.querySelector('.c-navigation');
    this.navHeight = this.$navigation.getBoundingClientRect().height;

    // When in Chrome resonsive mode:
    // window.innerHeight now returns the layout viewport height.
    // To get the visual viewport height, use window.visualViewport.height. See article for more details.
    // https://developers.google.com/web/updates/2017/09/visual-viewport-api
    const rootMarginBottom = ((window.visualViewport && window.visualViewport.height) || window.innerHeight) - this.navHeight / 2;

    const observerOptions = {
      rootMargin: `0px 0px -${rootMarginBottom}px 0px`,
      treshold: 0,
    };

    this.observer = new IntersectionObserver(this.observerCallback, observerOptions);

    for (let i = 0; i < this.$sections.length; i += 1) {
      this.observer.observe(this.$sections[i]);
    }
  }

  // Handling intersection callback
  observerCallback = (sections) => {
    for (let i = 0; i < sections.length; i += 1) {
      const $target = sections[i].target;

      // Label all section
      if (sections[i].isIntersecting) {
        $target.dataset.isIntersecting = true;
      } else {
        $target.dataset.isIntersecting = false;
      }
    }

    // Find the intersecting elements and set theme
    for (let i = 0; i < this.$sections.length; i += 1) {
      if (this.$sections[i].dataset.isIntersecting === 'true') {
        if (this.$sections[i].classList.contains('t-bg--black')) {
          this.setState({
            theme: 'transparent-light',
          });
        } else {
          this.setState({
            theme: 'transparent-dark',
          });
        }
      }
    }
  };

  escFunction = (event) => {
    const {
      state,
    } = this.context;

    if (event.keyCode === 27) {
      if (state.isNavigationOpen) {
        state.onClickNavigation();
      }
    }
  };

  onScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > 60) {
        this.navigationBarItems.classList.add('is-scrolled');
        this.navigationBarButton.classList.add('is-scrolled');
      } else {
        this.navigationBarItems.classList.remove('is-scrolled');
        this.navigationBarButton.classList.remove('is-scrolled');
      }
    }
  };

  handleOnClickNavigationItem = (e) => {
    const {
      state,
    } = this.context;

    // Ignore link if page transitioning is happening
    if (state.pageIsTransitioning) {
      e.preventDefault();
    }
  }

  render() {
    const {
      backButton,
      location,
      navigationBarItems,
      navigationItems,
      languageSelector,
      menuOpenLabel,
      menuCloseLabel,
    } = this.props;

    const {
      theme,
    } = this.state;

    const {
      pathname,
    } = location;

    const splitSegments = pathname.split('/');
    const isHomepage = (splitSegments[2] === undefined || splitSegments[2] === '');

    return (
      <GlobalContext.Consumer>
        {context => (
          <header className="c-navigation" ref={(e) => { this.navigation = e; }}>
            <Theme theme={theme}>
              <Retain>
                <nav
                  role="navigation"
                  className={classNames('c-navigation__bar', {
                    'is-active': context.state.isNavigationOpen,
                  })}
                >
                  <div className="o-layout">
                    <div className="o-layout__cell o-layout__cell--fill">
                      {/* If navigation is open, show language selector instead of back button */}
                      {context.state.isNavigationOpen ? (
                        <div className="c-navigation-language">
                          {languageSelector ? languageSelector.map(item => (
                            <RoutableSitecoreLink
                              key={item.guid}
                              field={item.field}
                              className="c-navigation-language__item"
                              onClick={context.state.onClickNavigation}
                            />
                          )) : null}
                        </div>
                      ) : (
                        <div
                          ref={(e) => {
                            this.navigationBarButton = e;
                          }}
                          className="c-navigation__back"
                        >
                          {isHomepage ? (
                            <Icon icon="logo" size="logo" />
                          ) : (
                            <Button
                              modifier="clean"
                              icon="icon-arrow-right"
                              iconRotate={180}
                              field={backButton.field}
                              reversed
                              animateIconOnHover
                            />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="o-layout__cell o-layout__cell--fit">
                      <div
                        ref={(e) => {
                          this.navigationBarItems = e;
                        }}
                        className="c-navigation__container"
                      >
                        <nav className="o-list-clean">
                          {navigationBarItems ? navigationBarItems.map(item => (
                            <RoutableSitecoreLink
                              key={item.guid}
                              field={item.field}
                              className="c-navigation__link"
                              onClick={this.handleOnClickNavigationItem}
                              role="menuitem"
                            />
                          )) : null}
                        </nav>
                        <Hamburger
                          openWord={menuOpenLabel}
                          closeWord={menuCloseLabel}
                          state={context.state.isNavigationOpen}
                          onClickHamburger={context.state.onClickNavigation}
                        />
                      </div>
                    </div>
                  </div>
                </nav>
              </Retain>
            </Theme>
            <CSSTransition
              in={context.state.isNavigationOpen}
              timeout={300}
              classNames="c-navigation-modal"
            >
              <nav className="c-navigation-modal" aria-hidden={!context.state.isNavigationOpen}>
                <Retain>
                  <div className="c-navigation-modal__container">
                    <div className="c-navigation-modal__links o-list-clean u-mb-flatten">
                      {navigationItems ? navigationItems.map(item => (
                        <RoutableSitecoreLink
                          key={item.guid}
                          field={item.field}
                          className={classNames('c-navigation-modal__link', {
                            'is-page-transitioning': context.state.pageIsTransitioning,
                          })}
                          onClick={context.state.onClickNavigation}
                          role="menuitem"
                        />
                      )) : null}
                    </div>
                  </div>
                  <div className="c-navigation-modal__shape" />
                </Retain>
              </nav>
            </CSSTransition>
          </header>
        )}
      </GlobalContext.Consumer>
    );
  }
}

Navigation.propTypes = {
  backButton: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
  navigationBarItems: PropTypes.arrayOf(PropTypes.object),
  navigationItems: PropTypes.arrayOf(PropTypes.object),
  languageSelector: PropTypes.arrayOf(PropTypes.object),
  menuOpenLabel: PropTypes.string,
  menuCloseLabel: PropTypes.string,
};

Navigation.defaultProps = {
  backButton: {},
  location: {},
  navigationBarItems: [],
  navigationItems: [],
  languageSelector: [],
  menuOpenLabel: null,
  menuCloseLabel: null,
};

const NavigationWithRouter = withRouter(Navigation);

// `Function components do not support contextType` bug
// More info: https://github.com/facebook/react/issues/14061
delete NavigationWithRouter.contextType;
export default NavigationWithRouter;
