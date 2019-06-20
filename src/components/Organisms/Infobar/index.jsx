import React from 'react';
import PropTypes from 'prop-types';

import Theme from 'components/Atoms/Theme';
import Retain from 'components/Atoms/Layout/Retain';
import Heading from 'components/Atoms/Heading';
import Rte from 'components/Atoms/Text/Rte';
import Layer from 'components/Atoms/Layout/Layer';
import InviewAnimation from 'components/Molecules/InviewAnimation';

const Infobar = ({
  anchor,
  strokeTop,
  strokeBottom,
  heading1,
  text1,
  heading2,
  text2,
  heading3,
  text3,
  theme,
}) => (
  <Theme theme={theme}>
    <section id={anchor}>
      <Retain>
        {strokeTop && (
          <div className="o-layout  o-layout--gutter">
            <div className="o-layout__cell  u-fraction--2of12@desk" />
            <div className="o-layout__cell  u-fraction--8of12@desk">
              <hr className="u-mb-flatten" />
            </div>
          </div>
        )}
        <Layer size="medium">
          <div className="o-layout  o-layout--gutter">
            <div className="o-layout__cell  u-fraction--2of12@desk" />
            <div className="o-layout__cell  u-fraction--9of12@desk">
              <div className="o-layout  o-layout--gutter  u-mb--negative">
                {(heading1 || text1) && (heading1.value || text1.value) && (
                  <div className="o-layout__cell  u-fraction--4of12@lap  u-mb">
                    {heading1 && heading1.value && (
                      <InviewAnimation>
                        <Heading
                          text={heading1}
                          isSecondary
                          level={3}
                          stylingLevel={5}
                          className="u-mb--small@palm  u-mb"
                        />
                      </InviewAnimation>
                    )}
                    {text1 && text1.value && (
                      <InviewAnimation>
                        <Rte richText={text1} className="u-mb" />
                      </InviewAnimation>
                    )}
                  </div>
                )}
                {(heading2 || text2) && (heading2.value || text2.value) && (
                  <div className="o-layout__cell  u-fraction--4of12@lap  u-mb">
                    {heading2 && heading2.value && (
                      <InviewAnimation>
                        <Heading
                          text={heading2}
                          isSecondary
                          level={3}
                          stylingLevel={5}
                          className="u-mb--small@palm  u-mb"
                        />
                      </InviewAnimation>
                    )}
                    {text2 && text2.value && (
                      <InviewAnimation>
                        <Rte richText={text2} className="u-mb" />
                      </InviewAnimation>
                    )}
                  </div>
                )}
                {(heading3 || text3) && (heading3.value || text3.value) && (
                  <div className="o-layout__cell  u-fraction--4of12@lap  u-mb">
                    {heading3 && heading3.value && (
                      <InviewAnimation>
                        <Heading
                          text={heading3}
                          isSecondary
                          level={3}
                          stylingLevel={5}
                          className="u-mb--small@palm  u-mb"
                        />
                      </InviewAnimation>
                    )}
                    {text3 && text3.value && (
                      <InviewAnimation>
                        <Rte richText={text3} className="u-mb" />
                      </InviewAnimation>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Layer>
        {strokeBottom && (
          <div className="o-layout  o-layout--gutter">
            <div className="o-layout__cell  u-fraction--2of12@desk" />
            <div className="o-layout__cell  u-fraction--8of12@desk">
              <hr className="u-mb-flatten" />
            </div>
          </div>
        )}
      </Retain>
    </section>
  </Theme>
);

Infobar.propTypes = {
  anchor: PropTypes.string,
  strokeTop: PropTypes.bool,
  strokeBottom: PropTypes.bool,
  heading1: PropTypes.objectOf(PropTypes.any),
  text1: PropTypes.objectOf(PropTypes.any),
  heading2: PropTypes.objectOf(PropTypes.any),
  text2: PropTypes.objectOf(PropTypes.any),
  heading3: PropTypes.objectOf(PropTypes.any),
  text3: PropTypes.objectOf(PropTypes.any),
  theme: PropTypes.string,
};
Infobar.defaultProps = {
  anchor: null,
  strokeTop: false,
  strokeBottom: false,
  heading1: null,
  text1: null,
  heading2: null,
  text2: null,
  heading3: null,
  text3: null,
  theme: 'black',
};

export default Infobar;
