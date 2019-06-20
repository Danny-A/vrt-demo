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
        <img
          data-sizes="auto"
          className={`c-img  lazyload  ${className}`}
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          alt={smallImage.alt}
        />
      </picture>
    );
  }
}

Img.propTypes = {
  bigImage: PropTypes.objectOf(PropTypes.any),
  smallImage: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
};
Img.defaultProps = {
  bigImage: null,
  smallImage: null,
  className: '',
};

export default Img;
