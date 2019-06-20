import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

import Retain from 'components/Atoms/Layout/Retain';
import Rte from 'components/Atoms/Text/Rte';

import './PhilosophySection.scss';
import Layer from 'components/Atoms/Layout/Layer';
import Theme from 'components/Atoms/Theme';

class PhilosophySection extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line global-require
      const Stickyfill = require('stickyfilljs/dist/stickyfill');
      const elements = document.querySelectorAll('.c-philosophy__chapter');
      Stickyfill.add(elements);
    }
  }

  render() {
    const {
      anchor,
      theme,
      collapseTop,
      chapter,
      children,
      route,
    } = this.props;

    return (
      <section id={anchor}>
        <Theme theme={theme}>
          <Layer size="large" collapseTop={collapseTop} collapseBottom>
            <div className="c-philosophy">
              <div className="c-philosophy__wrap-chapter">
                <div className="c-philosophy__stickler">
                  <Retain>
                    <div className="o-layout  o-layout--gutter">
                      <div className="o-layout__cell  u-fraction--4of12@desk">
                        <Rte
                          richText={chapter}
                          className="c-philosophy__chapter  u-mb--large"
                        />
                      </div>
                    </div>
                  </Retain>
                </div>
              </div>
              <div className="c-philosophy__wrap-children">
                {children ? (
                  <Fragment>
                    {children}
                  </Fragment>
                ) : (
                  <Placeholder name="jss-philosophy-components" rendering={route} />
                )}
              </div>
            </div>
          </Layer>
        </Theme>
      </section>
    );
  }
}

PhilosophySection.propTypes = {
  anchor: PropTypes.string,
  theme: PropTypes.string,
  collapseTop: PropTypes.bool,
  chapter: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  route: PropTypes.node,
};
PhilosophySection.defaultProps = {
  anchor: null,
  theme: null,
  collapseTop: false,
  chapter: null,
  children: null,
  route: null,
};

export default PhilosophySection;
