import React from 'react';
import PropTypes from 'prop-types';

import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';
import Heading from 'components/Atoms/Heading';
import Rte from 'components/Atoms/Text/Rte';
import Icon from 'components/Atoms/Icon';

import isset from 'components/Utils/Isset';

import './VacancySummary.scss';

const VacancySummary = ({
  title,
  subtitle,
  link,
}) => (
  <article className="c-vacancy-summary">
    {isset(() => link) && (
      <RoutableSitecoreLink
        field={link}
        className="c-vacancy-summary__inner u-pt u-pb"
      >
        <div className="c-vacancy-summary__inner">
          <div className="o-layout o-layout--align-middle">
            <div className="o-layout__cell o-layout__cell--fill">
              {title && (
                <div className="c-vacancy-summary__title">
                  <div className="c-vacancy-summary__icon-left">
                    <Icon
                      icon="icon-arrow-right"
                      size="alpha"
                    />
                  </div>
                  <Heading
                    level={2}
                    text={{
                      value: title,
                    }}
                    isSecondary
                  />
                </div>
              )}
            </div>
            <div className="o-layout__cell o-layout__cell--fit u-pl">
              <div className="c-vacancy-summary__icon-right">
                <Icon
                  icon="icon-arrow-right"
                  size="alpha"
                />
              </div>
            </div>
          </div>
          <div className="u-mb--tiny">
            {subtitle && (
              <Rte
                richText={{
                  value: subtitle,
                }}
                modifier="vacancySummary"
              />
            )}
          </div>
        </div>
      </RoutableSitecoreLink>
    )}
  </article>
);

VacancySummary.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.objectOf(PropTypes.any),
};
VacancySummary.defaultProps = {
  title: null,
  subtitle: null,
  link: null,
};

export default VacancySummary;
