import React from 'react';
import PropTypes from 'prop-types';

import Layer from 'components/Atoms/Layout/Layer';
import Retain from 'components/Atoms/Layout/Retain';
import Img from 'components/Atoms/Img';
import Rte from 'components/Atoms/Text/Rte';
import Theme from 'components/Atoms/Theme';
import InviewAnimation from 'components/Molecules/InviewAnimation';

import './DualPortraits.scss';

const DualPortraits = ({
  anchor,
  theme,
  collapseTop,
  collapseBottom,
  imageLeft,
  textLeft,
  imageRight,
  textRight,
}) => (
  <Theme theme={theme}>
    <section id={anchor}>
      <Layer
        size="large"
        collapseTop={collapseTop}
        collapseBottom={collapseBottom}
      >
        <Retain>
          <div className="c-portraits">
            <div className="c-portraits__placeholder--l u-mb">
              <InviewAnimation longDistance>
                <Img
                  bigImage={imageLeft}
                />
              </InviewAnimation>
            </div>
            {textLeft && textLeft.value && (
              <div className="c-portraits__description-l">
                <Rte richText={textLeft} modifier="description" className="u-mb" />
              </div>
            )}
            <div className="c-portraits__placeholder--r u-mb">
              <InviewAnimation longDistance>
                <Img
                  bigImage={imageRight}
                />
              </InviewAnimation>
            </div>
            {textRight && textRight.value && (
              <div className="c-portraits__description-r">
                <Rte richText={textRight} modifier="description" className="u-mb" />
              </div>
            )}
          </div>
        </Retain>
      </Layer>
    </section>
  </Theme>
);

DualPortraits.propTypes = {
  anchor: PropTypes.string,
  theme: PropTypes.string,
  collapseTop: PropTypes.bool,
  collapseBottom: PropTypes.bool,
  imageLeft: PropTypes.objectOf(PropTypes.any),
  textLeft: PropTypes.objectOf(PropTypes.any),
  imageRight: PropTypes.objectOf(PropTypes.any),
  textRight: PropTypes.objectOf(PropTypes.any),
};
DualPortraits.defaultProps = {
  anchor: null,
  theme: null,
  collapseTop: false,
  collapseBottom: false,
  imageLeft: null,
  textLeft: null,
  imageRight: null,
  textRight: null,
};

export default DualPortraits;
