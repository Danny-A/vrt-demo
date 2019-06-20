import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import classNames from 'classnames';

import { GlobalContext } from 'components/Context/GlobalProvider';
import { pageTransitionTimeout, pageTransitionDoneTimeout } from 'components/Utils/OnRouteChange/pageTransitionSettings';


import './Page.scss';

class OnRouteChange extends Component {
  static contextType = GlobalContext;

  componentDidUpdate(prevProps) {
    const {
      location,
    } = this.props;

    const {
      state,
    } = this.context;

    if (location !== prevProps.location) {
      // scroll to top on page change
      // except for and anchor link is clicked
      if (!location.hash) {
        state.startPageTransition();

        if (typeof window !== 'undefined') {
          window.setTimeout(() => {
            // track new routes
            // trackVirtualPageView(location.pathname, document.title);

            window.scrollTo({
              top: 0,
            });
          }, pageTransitionTimeout);

          // Set page transition to done
          window.setTimeout(() => {
            state.finishPageTransition();
          }, pageTransitionDoneTimeout);
        }
      }
    }
  }

  render() {
    const {
      children,
      sitecoreContext,
    } = this.props;

    return (
      <div
        className={classNames('o-page', {
          'is-editmode': sitecoreContext.pageEditing,
        })}
      >
        <div className="o-page__inner">
          {children}
        </div>
      </div>
    );
  }
}

OnRouteChange.propTypes = {
  location: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  sitecoreContext: PropTypes.objectOf(PropTypes.any),
};

OnRouteChange.defaultProps = {
  location: {},
  children: null,
  sitecoreContext: {},
};

const OnRouteChangeWithRouter = withRouter(withSitecoreContext()(OnRouteChange));
delete OnRouteChangeWithRouter.contextType;
export default OnRouteChangeWithRouter;
