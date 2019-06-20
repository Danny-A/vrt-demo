import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichText } from '@sitecore-jss/sitecore-jss-react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

// More info on the working of this component
// Routing Sitecore links with JSS
// https://kamsar.net/index.php/2018/09/Routing-Sitecore-links-with-JSS/

class RouteLinkedRichText extends Component {
  // called once when component is created
  componentDidMount() {
    this.bindRouteLinks();
  }

  // called if component data changes _after_ created
  componentDidUpdate() {
    this.bindRouteLinks();
  }

  // handler function called on click of route links
  // pushes the click into the router history thus changing the route
  // props.history comes from the react-router withRouter() higher order component.
  routeHandler = (event) => {
    const {
      history,
    } = this.props;

    event.preventDefault();

    if (typeof window !== 'undefined') {
      history.push(event.target.pathname);
    }
  }

  // rebinds event handlers to route links within this component
  // fired both on mount and update
  bindRouteLinks = () => {
    const {
      editable,
      field,
    } = this.props;

    const hasText = field && field.value;
    const isEditing = editable && field.editable;

    if (hasText && !isEditing) {
      // selects all links that start with '/' - this logic may be inappropriate for some advanced uses
      const internalLinks = this.node.querySelectorAll('a[href^="/"]');

      for (let i = 0; i < internalLinks.length; i += 1) {
        // the component can be updated multiple times during its lifespan,
        // and we don't want to bind the same event handler several times so unbind first
        internalLinks[i].removeEventListener('click', this.routeHandler, false);
        internalLinks[i].addEventListener('click', this.routeHandler, false);
      }
    }
  }

  render() {
    // strip the 'staticContext, history, location and match' props from withRouter()
    // to avoid confusing React before we pass it down
    const {
      staticContext,
      history,
      location,
      match,
      ...props
    } = this.props;

    return (
      <div ref={(node) => { this.node = node; }}>
        <RichText tag="div" {...props} />
      </div>
    );
  }
}

RouteLinkedRichText.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
  match: PropTypes.objectOf(PropTypes.any),
  field: PropTypes.objectOf(PropTypes.any),
  staticContext: PropTypes.objectOf(PropTypes.any),
  editable: PropTypes.bool,
};

RouteLinkedRichText.defaultProps = {
  history: {},
  location: {},
  match: {},
  field: {},
  staticContext: {},
  editable: false,
};

// augment the component with the react-router context using withRouter()
// this gives us props.history to push new routes
const RouteLinkedRichTextWithRouter = withRouter(RouteLinkedRichText);

export default RouteLinkedRichTextWithRouter;
