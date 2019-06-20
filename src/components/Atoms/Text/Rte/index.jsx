import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RouteLinkedRichTextWithRouter from './RouteLinkedRichTextWithRouter';

import './Rte.scss';

const Rte = ({
  richText,
  modifier,
  className,
}) => {
  if (!richText) {
    return null;
  }

  return (
    <div
      className={classNames('c-rte  u-module', className, {
        'u-micro': modifier === 'vacancySummary',
        'c-rte--intro  u-epsilon': modifier === 'intro',
        'c-rte--description': modifier === 'description',
        'c-rte--payoff': modifier === 'payoff',
      })}
    >
      {/* usage - drop-in replacement for JSS' RichText component */}
      <RouteLinkedRichTextWithRouter field={richText} />
    </div>
  );
};

Rte.propTypes = {
  richText: PropTypes.objectOf(PropTypes.string),
  modifier: PropTypes.string,
  className: PropTypes.string,
};

Rte.defaultProps = {
  richText: null,
  modifier: null,
  className: null,
};

export default Rte;
