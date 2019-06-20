import React from 'react';
import PropTypes from 'prop-types';
import Layer from 'components/Atoms/Layout/Layer';
import Retain from 'components/Atoms/Layout/Retain';
import Heading from 'components/Atoms/Heading';
import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';
import Theme from 'components/Atoms/Theme';
import InviewAnimation from 'components/Molecules/InviewAnimation';

import './Highlight.scss';
import Icon from 'components/Atoms/Icon';

const LinkHighlight = ({
  anchor,
  title,
  linkLeft,
  textLeft,
  linkRight,
  textRight,
  bottomBackground,
  topBackground,
}) => (
  <Theme theme={topBackground}>
    <section id={anchor} className="c-highlight">
      <div className="c-highlight__top">
        <Layer size="large">
          <Retain>
            <div className="o-layout  o-layout--gutter">
              <div className="o-layout__cell  u-fraction--1of12@lap  u-fraction--2of12@desk" />
              <div className="o-layout__cell  u-fraction--10of12@lap  u-fraction--8of12@desk">
                {title && title.value && (
                  <InviewAnimation>
                    <Heading
                      text={title}
                      level={3}
                      stylingLevel={2}
                      className="u-mb--large"
                    />
                  </InviewAnimation>
                )}
              </div>
            </div>
          </Retain>

          <Retain size="wide@palm">
            <div className="o-layout  o-layout--gutter  o-layout--equalheight">
              <div className="o-layout__cell  u-fraction--1of12@desk" />
              <div className="o-layout__cell  u-fraction--6of12@lap  u-fraction--5of12@desk">
                <InviewAnimation>
                  <Theme theme="gray-e" className="u-mb--small">
                    <RoutableSitecoreLink field={linkLeft} className="c-highlight__item">
                      <article>
                        {textLeft && (
                          <Heading
                            text={textLeft}
                            stylingLevel={4}
                            className="c-highlight__heading u-mb--large"
                          />
                        )}
                        <Icon icon="icon-arrow-right" modifier="u-mb" size="gamma" />
                      </article>
                    </RoutableSitecoreLink>
                  </Theme>
                </InviewAnimation>
              </div>

              <div className="o-layout__cell  u-fraction--6of12@lap  u-fraction--5of12@desk">
                <InviewAnimation delay>
                  <Theme theme="brand-a" className="u-mb--small">
                    <RoutableSitecoreLink field={linkRight} className="c-highlight__item">
                      <article>
                        {textRight && (
                          <Heading
                            text={textRight}
                            stylingLevel={4}
                            className="c-highlight__heading u-mb--large"
                          />
                        )}
                        <Icon icon="icon-arrow-right" modifier="u-mb" size="gamma" />
                      </article>
                    </RoutableSitecoreLink>
                  </Theme>
                </InviewAnimation>
              </div>
            </div>
          </Retain>
        </Layer>
      </div>
      <Theme theme={bottomBackground} className="c-highlight__bottom" />
    </section>
  </Theme>
);

LinkHighlight.propTypes = {
  anchor: PropTypes.string,
  title: PropTypes.objectOf(PropTypes.any),
  linkLeft: PropTypes.objectOf(PropTypes.any),
  textLeft: PropTypes.objectOf(PropTypes.any),
  linkRight: PropTypes.objectOf(PropTypes.any),
  textRight: PropTypes.objectOf(PropTypes.any),
  bottomBackground: PropTypes.string,
  topBackground: PropTypes.string,
};
LinkHighlight.defaultProps = {
  anchor: null,
  title: null,
  linkLeft: null,
  textLeft: null,
  linkRight: null,
  textRight: null,
  bottomBackground: null,
  topBackground: null,
};

export default LinkHighlight;
