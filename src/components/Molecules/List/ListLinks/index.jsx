import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Atoms/Button';

const ListLinks = ({
  links,
}) => (
  <ul className="o-list-clean">
    {links ? links.map(link => (
      <li key={link.guid}>
        <Button
          modifier="clean"
          field={link.field}
        />
      </li>
    )) : null }
  </ul>
);

ListLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
};

ListLinks.defaultProps = {
  links: [],
};

export default ListLinks;
