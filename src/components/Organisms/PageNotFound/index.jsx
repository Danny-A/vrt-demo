/* eslint-disable */
import React, { Fragment, Component } from 'react';

import Helmet from 'react-helmet';
import Retain from 'components/Atoms/Layout/Retain';
import Layer from 'components/Atoms/Layout/Layer';
import Theme from 'components/Atoms/Theme';
import Rte from 'components/Atoms/Text/Rte';
import InviewAnimation from 'components/Molecules/InviewAnimation';
import { trackVirtualPageView } from 'components/Utils/Analytics';

import data from './data.json';

class PageNotFound extends Component {
  componentDidMount() {
    if (!window.location.hash) {
      trackVirtualPageView(window.location.pathname, '404 page not found - we are you');
    }
  }

  render() {
    return (
      <section>
        <Helmet>
          <html className="is-black" />
          <title>404 page not found - we are you</title>
        </Helmet>
        <Theme theme="black">
          <Layer size="huge-header">
            <Retain>
              <div className="o-layout  o-layout--gutter">
                <div className="o-layout__cell  u-fraction--2of12@lap" />
                <div className="o-layout__cell  u-fraction--1of12@lap">
                  {data.status && (
                    <InviewAnimation>
                      <Rte richText={data.status} modifier="description" className="u-mb" />
                    </InviewAnimation>
                  )}
                </div>
                {data.content && (
                  <Fragment>
                    <div className="o-layout__cell  u-fraction--2of12@lap" />
                    <div className="o-layout__cell  u-fraction--6of12@lap">
                      <InviewAnimation delay>
                        <Rte richText={data.content} modifier="payoff" className="u-mb" />
                      </InviewAnimation>
                    </div>
                  </Fragment>
                )}
              </div>
            </Retain>
          </Layer>
        </Theme>
      </section>
    );
  }
}

export default PageNotFound;
