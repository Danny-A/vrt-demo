import React from 'react';
import PageNotFound from 'components/Organisms/PageNotFound';

// Renders a route-not-found message when no route is available from Sitecore
// The JSS equivalent of a 404 Not Found page.

// This is invoked from RouteHandler when Sitecore returns no valid route data.

const NotFound = () => (
  <PageNotFound />
);

export default NotFound;
