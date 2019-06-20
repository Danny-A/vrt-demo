import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Heading.scss';

const Heading = ({
  text,
  subtext,
  level,
  stylingLevel,
  className,
  isSecondary,
}) => {
  // if the text is empty do not render this thang
  if (!text) {
    return null;
  }

  const HeadingTag = `h${level}`;

  return (
    <HeadingTag
      className={classNames('', {
        'u-mega': stylingLevel === 0,
        'u-alpha': stylingLevel === 1,
        'u-beta': stylingLevel === 2,
        'u-gamma': stylingLevel === 3,
        'u-delta': stylingLevel === 4,
        'u-epsilon': stylingLevel === 5,
        'u-mili': stylingLevel === 6,
        'u-heading--secondary': isSecondary,
      }, className)}
    >
      <Text encode={false} field={text} />
      {subtext && (
        <span className="c-heading__subtext u-nano">
          {subtext}
        </span>
      )}
    </HeadingTag>
  );
};

Heading.propTypes = {
  level: PropTypes.number,
  stylingLevel: PropTypes.number,
  text: PropTypes.objectOf(PropTypes.string),
  subtext: PropTypes.number,
  className: PropTypes.string,
  isSecondary: PropTypes.bool,
};

Heading.defaultProps = {
  level: 2,
  stylingLevel: null,
  text: '',
  subtext: null,
  className: '',
  isSecondary: false,
};

export default Heading;
