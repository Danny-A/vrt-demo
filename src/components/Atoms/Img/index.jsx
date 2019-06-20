import React, { Component } from 'react';
import PropTypes from 'prop-types';
import objectFitImages from 'object-fit-images';

import './Img.scss';

class Img extends Component {
  componentDidMount() {
    objectFitImages();

    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      require('lazysizes');
    }
  }

  render() {
    const {
      lazyload,
      className,
    } = this.props;

    let {
      smallImage,
      bigImage,
    } = this.props;

    if (!bigImage) {
      return null;
    }

    if (!smallImage) {
      smallImage = bigImage;
      bigImage = null;
    }

    return (
      <picture>
        {bigImage && bigImage.srcSet ? (
          <source
            data-srcset={
              bigImage.srcSet.map(item => (
                `${item.src} ${item.width}w`
              ))
            }
            srcSet={!lazyload ? (
              bigImage.srcSet.map(item => (
                `${item.src} ${item.width}w`
              ))
            ) : ''}
            media="(min-width: 61.25em)"
          />
        ) : null}

        {smallImage && smallImage.srcSet ? (
          <source
            data-srcset={
              smallImage.srcSet.map(item => (
                `${item.src} ${item.width}w`
              ))
            }
            srcSet={!lazyload ? (
              smallImage.srcSet.map(item => (
                `${item.src} ${item.width}w`
              ))
            ) : null}
          />
        ) : null}

        <img
          data-sizes="auto"
          className={`c-img  lazyload  ${className}`}
          data-src={lazyload && bigImage ? bigImage.src : smallImage.src}
          src={lazyload ? 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==' : smallImage.src}
          alt={smallImage.alt}
        />
      </picture>
    );
  }
}

Img.propTypes = {
  bigImage: PropTypes.objectOf(PropTypes.any),
  smallImage: PropTypes.objectOf(PropTypes.any),
  lazyload: PropTypes.bool,
  className: PropTypes.string,
};
Img.defaultProps = {
  bigImage: null,
  smallImage: null,
  lazyload: true,
  className: '',
};

export default Img;
