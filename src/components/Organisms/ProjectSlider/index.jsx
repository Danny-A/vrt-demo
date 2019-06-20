import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Swiper from 'swiper/dist/js/swiper.min';
import { GlobalContext } from 'components/Context/GlobalProvider';

import Retain from 'components/Atoms/Layout/Retain';
import Button from 'components/Atoms/Button';
import Heading from 'components/Atoms/Heading';
import Layer from 'components/Atoms/Layout/Layer';
import ProjectSliderItem from 'components/Molecules/ProjectSliderItem';
import Theme from 'components/Atoms/Theme';
import InviewAnimation from 'components/Molecules/InviewAnimation';

import 'swiper/dist/css/swiper.css';
import './ProjectSlider.scss';

class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInitialised: false,
    };

    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickNext = this.handleClickNext.bind(this);
  }

  componentDidMount() {
    this.slider = this.createSlider();
  }

  componentWillUnmount() {
    this.slider.destroy();
  }

  createSlider() {
    return new Swiper(this.caseSlider, {
      slidesPerView: 3, // on large screens
      spaceBetween: 30,
      watchOverflow: true,
      breakpoints: {
        1024: { // means 1024 and lower
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
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
    });
  }

  handleClickPrevious() {
    this.slider.slidePrev();
  }

  handleClickNext() {
    this.slider.slideNext();
  }

  render() {
    const {
      anchor,
      heading,
      items,
      collapseTop,
      collapseBottom,
    } = this.props;

    const {
      isInitialised,
    } = this.state;

    return (
      <Theme theme="black">
        <section id={anchor}>
          <Layer
            size="small"
            collapseTop={collapseTop}
            collapseBottom={collapseBottom}
          >
            <Retain>
              <div className="o-layout  o-layout--gutter">
                <div className="o-layout__cell  o-layout__cell--fill">
                  <div className="o-layout  o-layout--gutter-small">
                    <div className="o-layout__cell  o-layout__cell--fit">
                      {heading && heading.value && (
                        <InviewAnimation>
                          <Heading
                            text={heading}
                            subtext={items.length}
                            level={2}
                            stylingLevel={2}
                            className="u-mb"
                            isSecondary
                          />
                        </InviewAnimation>
                      )}
                    </div>
                  </div>
                </div>
                <div className="o-layout__cell  o-layout__cell--fit">
                  <div className="o-layout  o-layout--gutter-small">
                    <div className="o-layout__cell  o-layout__cell--fit">
                      <InviewAnimation delay>
                        <Button
                          tag="button"
                          modifier="clean"
                          iconSize="delta"
                          icon="icon-arrow-right"
                          iconRotate={180}
                          hideLabel
                          text="vorige"
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
                          icon="icon-arrow-right"
                          hideLabel
                          text="volgende"
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
            <InviewAnimation delay>
              <div className="c-project-slider">
                <Retain modifier="no-overflow">
                  <div
                    className="swiper-container  c-project-slider__swiper-container"
                    ref={(e) => {
                      this.caseSlider = e;
                    }}
                  >
                    <ul
                      className={classNames('c-project-slider__swiper-wrapper  swiper-wrapper', {
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
                          <ProjectSliderItem
                            {...item}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </Retain>
              </div>
            </InviewAnimation>
          </Layer>
        </section>
      </Theme>
    );
  }
}

ProjectSlider.propTypes = {
  anchor: PropTypes.string,
  collapseTop: PropTypes.bool,
  collapseBottom: PropTypes.bool,
  heading: PropTypes.objectOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.any),
};
ProjectSlider.defaultProps = {
  anchor: null,
  collapseTop: null,
  collapseBottom: null,
  heading: null,
  items: [],
};

const ProjectSliderWrapper = props => (
  <GlobalContext.Consumer>
    {context => (
      <ProjectSlider
        {...props}
        context={context}
      />
    )}
  </GlobalContext.Consumer>
);

export default ProjectSliderWrapper;
