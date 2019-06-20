import React from 'react';
import PropTypes from 'prop-types';

import Retain from 'components/Atoms/Layout/Retain';
import Layer from 'components/Atoms/Layout/Layer';
import Theme from 'components/Atoms/Theme';
import Heading from 'components/Atoms/Heading';
import Rte from 'components/Atoms/Text/Rte';
import Button from 'components/Atoms/Button';
import InviewAnimation from 'components/Molecules/InviewAnimation';
import Img from 'components/Atoms/Img';
import isset from 'components/Utils/Isset';

import './FeaturedText.scss';

const FeaturedText = ({
  theme,
  collapseTop,
  collapseBottom,
  heading,
  content,
  link,
  authorName,
  authorTitle,
  authorPhoto,
}) => (
  <Theme theme={theme}>
    <Layer
      size="large"
      collapseTop={collapseTop}
      collapseBottom={collapseBottom}
    >
      <Retain>
        <div className="o-layout  o-layout--gutter o-layout--align-center">
          <div className="o-layout__cell u-fraction--6of12@desk">
            <div />
          </div>
          <div className="o-layout__cell u-fraction--6of12@desk">
            <div className="u-mb">
              {heading && heading.value && authorName.value && (
                <InviewAnimation>
                  <Heading
                    level={2}
                    stylingLevel={2}
                    text={heading}
                    className="u-mb--large u-cropped-heading"
                  />
                </InviewAnimation>
              )}
            </div>
          </div>
          <div className="o-layout__cell u-fraction--6of12@desk">
            {heading && heading.value && !authorName.value && (
              <div className="u-mb">
                <InviewAnimation>
                  <Heading
                    level={2}
                    stylingLevel={2}
                    text={heading}
                    className="u-mb--large u-cropped-heading"
                  />
                </InviewAnimation>
              </div>
            )}
            <div className="c-author-image-details">
              {authorName.value && authorPhoto && (
                <Img
                  className="c-img--circle o-flexembed__item c-author-image"
                  bigImage={authorPhoto}
                />
              )}
              <div className="c-author-description">
                {authorName.value && authorTitle.value && (
                  <InviewAnimation>
                    <Rte richText={authorName} modifier="description" />
                  </InviewAnimation>
                )}
                {authorName.value && authorTitle.value && (
                  <InviewAnimation>
                    <Rte richText={authorTitle} modifier="description" />
                  </InviewAnimation>
                )}
              </div>
            </div>
          </div>
          <div className="o-layout__cell  u-fraction--6of12@desk">
            <InviewAnimation horizontal>
              <Rte richText={content} modifier="intro" className="u-mb" />
            </InviewAnimation>
            {isset(() => link.value.text) && isset(() => link.value.href) && (
              <InviewAnimation>
                <div className="u-mb">
                  <Button
                    field={link}
                  />
                </div>
              </InviewAnimation>
            )}
          </div>
        </div>
      </Retain>
    </Layer>
  </Theme>
);

FeaturedText.propTypes = {
  theme: PropTypes.string,
  collapseTop: PropTypes.bool,
  collapseBottom: PropTypes.bool,
  heading: PropTypes.objectOf(PropTypes.any),
  content: PropTypes.objectOf(PropTypes.any),
  link: PropTypes.objectOf(PropTypes.any),
  authorName: PropTypes.string,
  authorTitle: PropTypes.string,
  authorPhoto: PropTypes.string,
};

FeaturedText.defaultProps = {
  theme: null,
  collapseTop: null,
  collapseBottom: null,
  heading: {},
  content: {},
  link: {},
  authorName: null,
  authorTitle: null,
  authorPhoto: null,
};

export default FeaturedText;
