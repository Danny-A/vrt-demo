import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';

import Retain from 'components/Atoms/Layout/Retain';
import Layer from 'components/Atoms/Layout/Layer';
import Rte from 'components/Atoms/Text/Rte';
import ListIcons from 'components/Molecules/List/ListIcons';
import Button from 'components/Atoms/Button';
import Theme from 'components/Atoms/Theme';

import './Footer.scss';

const Footer = ({
  heading,
  linkLocations,
  metaNavigationLeft,
  metaNavigationRight,
  socialItems,
}) => (
  <Theme theme="black">
    <footer className="c-footer">
      <Retain>
        {heading && (
          <Fragment>
            <Layer size="huge">
              <div className="o-layout">
                <div className="o-layout__cell u-fraction--11of12@lap">
                  <Rte
                    modifier="payoff"
                    richText={heading}
                    className="c-footer__text"
                  />
                </div>
              </div>
            </Layer>
            <hr className="u-mb-flatten" />
          </Fragment>
        )}
        <div className="o-layout  o-layout--align-middle">
          <div className="o-layout__cell  o-layout__cell--fill@lap">
            <Layer size="small">
              <p>
                {linkLocations.field && (
                  <Button
                    field={linkLocations.field}
                    icon="icon-arrow-right"
                    modifier="clean"
                    size="epsilon"
                    animateIconOnHover
                  />
                )}
              </p>
            </Layer>
            <hr className="u-visually-hidden@lap  u-mb-flatten" />
          </div>
          {socialItems && (
            <div className="o-layout__cell  o-layout__cell--fit">
              <Layer size="small">
                <div className="c-footer__social-icons">
                  <ListIcons icons={socialItems} />
                </div>
              </Layer>
            </div>
          )}
        </div>
        <hr className="u-mb-flatten" />
        <Layer size="small">
          <div className="o-layout  o-layout--gutter">
            <div className="o-layout__cell  o-layout__cell--fill">
              {metaNavigationLeft && (
                <div className="c-footer__links">
                  <nav className="u-mb">
                    {metaNavigationLeft.map(item => (
                      <RoutableSitecoreLink
                        key={item.guid}
                        field={item.field}
                        className="c-footer__link"
                      />
                    ))}
                  </nav>
                </div>
              )}
            </div>
            <div className="o-layout__cell  o-layout__cell--fit">
              {metaNavigationRight && (
                <div className="c-footer__links">
                  <nav className="u-mb">
                    {metaNavigationRight.map(item => (
                      <RoutableSitecoreLink
                        key={item.guid}
                        field={item.field}
                        className="c-footer__link"
                      />
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </Layer>
      </Retain>
    </footer>
  </Theme>

);

Footer.propTypes = {
  linkLocations: PropTypes.objectOf(PropTypes.any),
  heading: PropTypes.objectOf(PropTypes.string),
  metaNavigationLeft: PropTypes.arrayOf(PropTypes.object),
  metaNavigationRight: PropTypes.arrayOf(PropTypes.object),
  socialItems: PropTypes.arrayOf(PropTypes.object),
};

Footer.defaultProps = {
  linkLocations: {},
  heading: {},
  metaNavigationLeft: [],
  metaNavigationRight: [],
  socialItems: [],
};

export default Footer;
