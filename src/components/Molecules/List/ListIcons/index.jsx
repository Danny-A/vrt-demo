import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Atoms/Icon';

const ListIcons = ({
  icons,
}) => (
  <ul className="o-list-clean">
    {icons ? icons.map(item => (
      <li key={item.guid}>
        <a
          href={item.field.value.href}
          target={item.field.value.target}
          className="o-button--clean"
          rel="noopener noreferrer"
        >
          <Icon size="delta" icon={item.icon} />
        </a>
      </li>
    )) : null }
  </ul>
);

ListIcons.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.object),
};

ListIcons.defaultProps = {
  icons: [],
};

export default ListIcons;
