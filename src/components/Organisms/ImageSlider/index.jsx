import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Swiper from 'swiper/dist/js/swiper.min';
import { GlobalContext } from 'components/Context/GlobalProvider';

import Retain from 'components/Atoms/Layout/Retain';
import Button from 'components/Atoms/Button';
import Layer from 'components/Atoms/Layout/Layer';
import Img from 'components/Atoms/Img';
import Theme from 'components/Atoms/Theme';
import InviewAnimation from 'components/Molecules/InviewAnimation';

import 'swiper/dist/css/swiper.css';
import './ImageSlider.scss';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInitialised: false,
    };
  }

  componentDidMount() {
    this.slider = this.createSlider();
  }

  componentWillUnmount() {
    this.slider.destroy();
  }

  createSlider() {
    return new Swiper('.swiper-container', {
      slidesPerView: 1, // on large screens
      spaceBetween: 0,
      watchOverflow: true,
      breakpoints: {
        1024: { // means 1024 and lower
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
      on: {
        init: () => {
          this.setState({ isInitialised: true });
        },
      },
      navigation: {
        nextEl: this.nextButton,
        prevEl: this.prevButton,
        disabledClass: 'is-disabled',
      },
      rebuildOnUpdate: true,
    });
  }

  render() {
    const {
      anchor,
      items,
      bottomBackground,
      topBackground,
    } = this.props;

    const {
      isInitialised,
    } = this.state;

    return (
      <Theme theme={topBackground}>
        <section id={anchor} className="c-image-slider__background">
          <div className="c-image-slider__background-top">
            <Layer size="small">
              <InviewAnimation delay>
                <div className="c-image-slider">
                  <Retain modifier="no-overflow">
                    <div
                      className="swiper-container  c-image-slider__swiper-container"
                      ref={(e) => {
                        this.caseSlider = e;
                      }}
                    >
                      <ul
                        className={classNames('c-image-slider__swiper-wrapper  swiper-wrapper', {
                          'o-layout  o-layout--gutter  o-layout--nowrap': !isInitialised,
                          'is-initialised': isInitialised,
                        })}
                      >
                        {items.map(item => (
                          <li
                            key={item.guid}
                            className={classNames('swiper-slide', {
                              'o-layout__cell  u-fraction--6of12@lap  u-fraction--4of12@desk': !isInitialised,
                            })}
                          >
                            <div className="o-flexembed  o-flexembed--16by9  u-mb--large u-mt">
                              {item && item.src && (
                                <Img
                                  className="o-flexembed__item"
                                  bigImage={item}
                                />
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Retain>
                </div>
              </InviewAnimation>
            </Layer>
          </div>
          <Theme theme={bottomBackground} className="c-image-slider__background-bottom o-layout o-layout--align-bottom">
            <Retain>
              <div className="o-layout o-layout--align-right">
                <div className="o-layout__cell  o-layout__cell--fit">
                  <div className="o-layout  o-layout--gutter-small">
                    <div className="o-layout__cell  o-layout__cell--fit">
                      <InviewAnimation delay>
                        <Button
                          tag="button"
                          modifier="clean"
                          iconSize="delta"
                          position="prev-button"
                          icon="icon-arrow-right"
                          iconRotate={180}
                          hideLabel
                          buttonRef={(e) => {
                            this.prevButton = e;
                          }}
                        />
                      </InviewAnimation>
                    </div>
                    <div className="o-layout__cell  o-layout__cell--fit">
                      <InviewAnimation delay>
                        <Button
                          tag="button"
                          modifier="clean"
                          iconSize="delta"
                          position="next-button"
                          icon="icon-arrow-right"
                          hideLabel
                          buttonRef={(e) => {
                            this.nextButton = e;
                          }}
                        />
                      </InviewAnimation>
                    </div>
                  </div>
                </div>
              </div>
            </Retain>
          </Theme>
        </section>
      </Theme>
    );
  }
}

ImageSlider.propTypes = {
  anchor: PropTypes.string,
  topBackground: PropTypes.string,
  bottomBackground: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.any),
};
ImageSlider.defaultProps = {
  anchor: null,
  topBackground: 'black',
  bottomBackground: 'white',
  items: [],
};

const ImageSliderWrapper = props => (
  <GlobalContext.Consumer>
    {context => (
      <ImageSlider
        {...props}
        context={context}
      />
    )}
  </GlobalContext.Consumer>
);

export default ImageSliderWrapper;
