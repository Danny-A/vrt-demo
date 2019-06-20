import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Retain from 'components/Atoms/Layout/Retain';
import Layer from 'components/Atoms/Layout/Layer';
import Theme from 'components/Atoms/Theme';
import BranchSelector from 'components/Atoms/BranchSelector';
import Rte from 'components/Atoms/Text/Rte';
import InviewAnimation from 'components/Molecules/InviewAnimation';

const BranchHeader = ({
  title,
  content,
  items,
}) => (
  <Theme theme="black">
    <Layer size="huge-header">
      <Retain>
        <div className="o-layout o-layout--gutter">
          <div className="o-layout__cell u-fraction--5of12@desk">
            {title && items && (
              <div className="u-mb--large">
                <InviewAnimation>
                  <BranchSelector
                    title={title}
                    branches={items}
                  />
                </InviewAnimation>
              </div>
            )}
          </div>
          {content && content.value && (
            <Fragment>
              <div className="o-layout__cell u-fraction--1of12@desk" />
              <div className="o-layout__cell u-fraction--6of12@desk">
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

BranchHeader.propTypes = {
  title: PropTypes.objectOf(PropTypes.any),
  content: PropTypes.objectOf(PropTypes.any),
  items: PropTypes.arrayOf(PropTypes.object),
};

BranchHeader.defaultProps = {
  title: {},
  content: {},
  items: [],
};

export default BranchHeader;
