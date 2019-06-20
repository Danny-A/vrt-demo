import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Retain from 'components/Atoms/Layout/Retain';
import Theme from 'components/Atoms/Theme';
import Layer from 'components/Atoms/Layout/Layer';
import Img from 'components/Atoms/Img';
import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';

import './Atmosphere.scss';

const Atmosphere = ({
  collapseBottom,
  collapseTop,
  bottomBackground,
  images,
  topBackground,
}) => (
  <Theme theme={topBackground}>
    <Layer
      size="small"
      collapseTop={collapseTop}
      collapseBottom={collapseBottom}
    >
      <section className="c-atmosphere">
        <div className="c-atmosphere__outer">
          <Retain>
            <div className="c-atmosphere__inner">
              {images.map(image => (
                image.link ? (
                  <RoutableSitecoreLink
                    key={shortid.generate()}
                    field={image.link}
                    className="c-atmosphere__picture c-atmosphere__picture--has-link"
                  >
                    <Img
                      className="o-flexembed__item"
                      bigImage={image}
                    />
                  </RoutableSitecoreLink>
                ) : (
                  <div
                    key={shortid.generate()}
                    className="c-atmosphere__picture"
                  >
                    <Img
                      className="o-flexembed__item"
                      bigImage={image}
                    />
                  </div>
                )
              ))}
            </div>
          </Retain>
        </div>
        <Theme theme={bottomBackground} className="c-atmosphere__top" />
      </section>
    </Layer>
  </Theme>
);

Atmosphere.propTypes = {
  collapseBottom: PropTypes.bool,
  collapseTop: PropTypes.bool,
  bottomBackground: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
  topBackground: PropTypes.string,
};
Atmosphere.defaultProps = {
  collapseBottom: true,
  collapseTop: false,
  bottomBackground: 'black',
  images: [],
  topBackground: 'white',
};

export default Atmosphere;
