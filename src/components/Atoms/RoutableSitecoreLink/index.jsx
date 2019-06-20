import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@sitecore-jss/sitecore-jss-react';
// note we're aliasing the router's link component name, since it conflicts with JSS' link component
import { NavLink as RouterLink } from 'react-router-dom';

/** React component that turns Sitecore link values that start with / into react-router route links */
const RoutableSitecoreLink = (props) => {
  const {
    field,
    editable,
    children,
    className,
    onClick,
  } = props;

  const hasValidHref = field && field.value && field.value.href;
  const isEditing = editable && field.editable;

  // only want to apply the routing link if not editing (if editing, need to render editable link value)
  if (hasValidHref && !isEditing) {
    const {
      value,
    } = field;
    const linkContent = children.length === 0 ? (value.text || value.href) : children;
    // determine if a link is a route or not. This logic may not be appropriate for all usages.
    if (value.href.startsWith('/')) {
      return (
        <RouterLink
          to={value.href}
          title={value.text}
          target={value.target}
          className={className}
          activeClassName="is-active"
          onClick={onClick}
        >
          {linkContent}
        </RouterLink>
      );
    }
  }

  return <Link {...props} />;
};

RoutableSitecoreLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  editable: PropTypes.bool,
  field: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
};

RoutableSitecoreLink.defaultProps = {
  children: [],
  className: '',
  editable: false,
  field: {},
  onClick: () => {},
};

export default RoutableSitecoreLink;
