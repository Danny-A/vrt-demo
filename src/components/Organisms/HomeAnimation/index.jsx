import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';

import Layer from 'components/Atoms/Layout/Layer';
import Retain from 'components/Atoms/Layout/Retain';
import Theme from 'components/Atoms/Theme';
import Rte from 'components/Atoms/Text/Rte';
import { GlobalContext } from 'components/Context/GlobalProvider';

import animationMobile from './animationData/full-mobile.json';
import animationDesktop from './animationData/full-desktop.json';

import './HomeAnimation.scss';

const animations = {
  mobileData: animationMobile,
  desktopData: animationDesktop,
};

class HomeAnimation extends Component {
  static contextType = GlobalContext;

  constructor() {
    super();

    if (typeof window !== 'undefined') {
      this.state = {
        height: window.innerHeight,
        width: window.innerWidth,
      };
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.init();
    }

    if (this.animation) {
      this.animation.addEventListener('complete', this.animateContent);
    }
  }

  componentWillUnmount() {
    if (this.animation) {
      this.animation.removeEventListener('complete', this.animateContent);
      this.animation.destroy();
    }
  }

  /**
   * Initializes the animation etc
   */
  init = () => {
    const {
      height,
      width,
    } = this.state;

    setTimeout(() => {
      this.progressBar.classList.add('is-active');
    }, 50);

    if (width > 768 && (width > height)) {
      this.initAnimation(animations.desktopData);
    } else {
      this.initAnimation(animations.mobileData);
    }
  }

  /**
   * creates new lottie instance on it
   */
  initAnimation = (data) => {
    this.animation = lottie.loadAnimation({
      container: this.homepage,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: data,
      rendererSettings: {
        preserveAspectRatio: 'xMinYMid slice',
      },
    });
  }

  animateContent = () => {
    this.container.classList.add('is-active');

    // remove active state skip button
    this.skipContainer.classList.remove('is-active');
  }

  skipAnimation = () => {
    if (this.animation) {
      const duration = this.animation.getDuration(true);
      this.animation.goToAndStop(duration, true);

      // remove active state skip button
      this.skipContainer.classList.remove('is-active');

      this.animateContent();
    }
  }

  render() {
    const {
      content,
    } = this.props;

    return (
      <section className="c-homepage">
        <Theme theme="white">
          <div
            ref={(c) => { this.homepage = c; }}
            className="c-homepage__step"
          >
            <Retain modifier="relative">
              <div ref={(c) => { this.skipContainer = c; }} className="c-homepage__skip is-active">
                <div className="c-homepage__skip-container">
                  <button
                    type="button"
                    className="o-button-clean c-homepage__skip-button"
                    onClick={() => { this.skipAnimation(); }}
                  >
                    <span className="c-homepage__skip-title">Skip animation</span>
                    <span className="c-homepage__progress">
                      <span
                        ref={(c) => { this.progressBar = c; }}
                        className="c-homepage__progress-bar"
                      />
                    </span>
                  </button>
                </div>
              </div>
            </Retain>
          </div>
          <Layer size="huge-header">
            <Retain>
              <div className="o-layout">
                <div className="o-layout__cell u-fraction--11of12">
                  <div
                    ref={(c) => { this.container = c; }}
                    className="c-homepage__container"
                  >
                    <Rte
                      modifier="payoff"
                      richText={content}
                      className="c-homepage__text"
                    />
                  </div>
                </div>
              </div>
            </Retain>
          </Layer>
        </Theme>
      </section>
    );
  }
}

HomeAnimation.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
};

HomeAnimation.defaultProps = {
  content: [],
};

export default HomeAnimation;
