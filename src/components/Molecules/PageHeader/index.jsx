import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Retain from 'components/Atoms/Layout/Retain';
import Layer from 'components/Atoms/Layout/Layer';
import Theme from 'components/Atoms/Theme';
import Heading from 'components/Atoms/Heading';
import Rte from 'components/Atoms/Text/Rte';
import InviewAnimation from 'components/Molecules/InviewAnimation';

const PageHeader = ({
  theme,
  heading,
  size,
  content,
}) => {
  const headingSize = size ? 1 : 0;

  return (
    <Theme theme={theme}>
      <Layer size="huge-header">
        <Retain>
          <div className="o-layout  o-layout--gutter">
            <div className="o-layout__cell  u-fraction--5of12@lap">
              {heading && heading.value && (
                <InviewAnimation>
                  <Heading
                    level={1}
                    stylingLevel={headingSize}
                    text={heading}
                    className="u-mb--large u-cropped-heading"
                  />
                </InviewAnimation>
              )}
            </div>
            {content && content.value && (
              <Fragment>
                <div className="o-layout__cell  u-fraction--1of12@lap" />
                <div className="o-layout__cell  u-fraction--6of12@lap">
                  <InviewAnimation delay>
                    <Rte richText={content} modifier="intro" className="u-mb" />
                  </InviewAnimation>
                </div>
              </Fragment>
            )}
          </div>
        </Retain>
      </Layer>
    </Theme>
  );
};

PageHeader.propTypes = {
  theme: PropTypes.string,
  heading: PropTypes.objectOf(PropTypes.any),
  size: PropTypes.bool,
  content: PropTypes.objectOf(PropTypes.any),
};

PageHeader.defaultProps = {
  theme: 'black',
  heading: {},
  size: false,
  content: {},
};

export default PageHeader;
