import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Retain from 'components/Atoms/Layout/Retain';
import Layer from 'components/Atoms/Layout/Layer';
import Theme from 'components/Atoms/Theme';
import Heading from 'components/Atoms/Heading';
import Rte from 'components/Atoms/Text/Rte';
import Button from 'components/Atoms/Button';
import InviewAnimation from 'components/Molecules/InviewAnimation';

import isset from '../../Utils/Isset';

const BodyText = ({
  theme,
  collapseTop,
  collapseBottom,
  heading,
  content,
  description,
  link,
}) => (
  <Theme theme={theme}>
    <Layer
      size="large"
      collapseTop={collapseTop}
      collapseBottom={collapseBottom}
    >
      <Retain>
        {heading && heading.value && (
          <div className="o-layout o-layout--gutter">
            <Fragment>
              <div className="o-layout__cell u-fraction--5of12@desk" />
              <div className="o-layout__cell u-fraction--5of12@desk">
                <InviewAnimation>
                  <Heading
                    level={2}
                    stylingLevel={2}
                    text={heading}
                    className="u-mb--large"
                  />
                </InviewAnimation>
              </div>
            </Fragment>
          </div>
        )}
        <div className="o-layout o-layout--gutter  o-layout--reverse@desk">
          <div className="o-layout__cell u-fraction--2of12@desk" />
          <div className="o-layout__cell u-fraction--5of12@desk">
            {content && content.value && (
              <InviewAnimation>
                <Rte richText={content} className="u-mb" />
              </InviewAnimation>
            )}
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
          <div className="o-layout__cell u-fraction--1of12@desk" />
          <div className="o-layout__cell u-fraction--6of12  u-fraction--2of12@desk">
            {description && description.value && (
              <InviewAnimation delay>
                <Rte richText={description} modifier="description" className="u-mb" />
              </InviewAnimation>
            )}
          </div>
          <div className="o-layout__cell u-fraction--2of12@desk" />
        </div>
      </Retain>
    </Layer>
  </Theme>
);

BodyText.propTypes = {
  theme: PropTypes.string,
  collapseTop: PropTypes.bool,
  collapseBottom: PropTypes.bool,
  heading: PropTypes.objectOf(PropTypes.any),
  content: PropTypes.objectOf(PropTypes.any),
  description: PropTypes.objectOf(PropTypes.any),
  link: PropTypes.objectOf(PropTypes.any),
};

BodyText.defaultProps = {
  theme: 'white',
  collapseTop: null,
  collapseBottom: null,
  heading: {},
  content: {},
  description: {},
  link: {},
};

export default BodyText;
