import React from 'react';
import { SitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
/* eslint-disable */
import { Route, Switch } from 'react-router-dom';
import componentFactory from './temp/componentFactory';
import SitecoreContextFactory from './lib/SitecoreContextFactory';
import RouteHandler from './RouteHandler';
import GlobalProvider from 'components/Context/GlobalProvider';
import OnRouteChange from 'components/Utils/OnRouteChange';
import { pageTransitionTimeout } from 'components/Utils/OnRouteChange/pageTransitionSettings';
import { initializeTracking } from 'components/Utils/Analytics';

// This is the main JSX entry point of the app invoked by the renderer (server or client rendering).
// By default the app's normal rendering is delegated to <RouteHandler> that handles the loading of JSS route data.

// support languages in the URL prefix
// e.g. /da-DK/path, or /en/path, or /path
export const routePatterns = [
  '/:lang([a-z]{2}-[A-Z]{2})/:sitecoreRoute*',
  '/:lang([a-z]{2})/:sitecoreRoute*',
  '/:sitecoreRoute*',
  '/',
];

// wrap the app with:
// ApolloProvider: provides an instance of Apollo GraphQL client to the app to make Connected GraphQL queries.
//    Not needed if not using connected GraphQL.
// SitecoreContext: provides component resolution and context services via withSitecoreContext
// Router: provides a basic routing setup that will resolve Sitecore item routes and allow for language URL prefixes.
const AppRoot = ({ path, Router }) => {
  const routeRenderFunction = (props) => <RouteHandler route={props} />;

  // initialize dataLayer
  initializeTracking();

  // Experimental feature to fix the jumping around of the browser when traversing the history
  // More info: https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
  if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
    // Back off, browser, I got this...
    history.scrollRestoration = 'manual';
  }

  return (
    <SitecoreContext componentFactory={componentFactory} contextFactory={SitecoreContextFactory}>
      <GlobalProvider>
        <Router location={path} context={{}}>
          <Route render={({location}) => (
            <TransitionGroup>
              <CSSTransition
                classNames="page"
                key={location.key}
                timeout={pageTransitionTimeout}
              >
                <OnRouteChange>
                  <Switch location={location}>
                    {routePatterns.map((routePattern) => (
                      <Route key={routePattern} path={routePattern} render={routeRenderFunction} />
                    ))}
                  </Switch>
                </OnRouteChange>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </Router>
      </GlobalProvider>
    </SitecoreContext>
  );
};

export default AppRoot;
