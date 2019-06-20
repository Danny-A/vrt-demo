import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Heading from 'components/Atoms/Heading';
import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';
import Img from 'components/Atoms/Img';
import Rte from 'components/Atoms/Text/Rte';
import Button from 'components/Atoms/Button';

import './Card.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { isFiltered: false };
  }

  componentDidMount() {
    this.setState({
      isFiltered: true,
    });
  }

  render() {
    const {
      title,
      date,
      cardType,
      link,
      image,
      showMoreLabel,
      displayType,
    } = this.props;

    const {
      isFiltered,
    } = this.state;

    return (
      <RoutableSitecoreLink
        field={link}
        className={classNames('c-card u-mb', {
          'is-filtered': isFiltered,
          'c-card--header': displayType === 'header',
        })}
      >
        <div className="c-card__content">
          <div className="o-layout u-mb">
            <div className="o-layout__cell o-layout__cell--fit">
              {cardType && (
                <span className="c-card__type u-nano">{`${cardType}`}</span>
              )}
            </div>
            <div className="o-layout__cell o-layout__cell--fit u-ml">
              {date && date.value && (
                <Rte richText={date} modifier="description" className="c-card__date" />
              )}
            </div>
          </div>
          {title && title.value && (
            <Heading
              text={title}
              level={2}
              isSecondary
              className={classNames('u-mb c-card__title', {
                'u-milli': displayType === 'regular',
                'u-gamma u-fraction--6of12@desk': displayType === 'header',
                'u-gamma': displayType === 'highlighted',
              })}
            />
          )}
          {cardType && displayType !== 'header' && (
            <Fragment>
              <Button
                tag="span"
                modifier="clean"
                icon="icon-arrow-right"
                hideLabel
                text={showMoreLabel}
              />
            </Fragment>
          )}
        </div>
        { displayType !== 'highlighted' && (
          <div className="c-card__img-wrap o-flexembed o-flexembed--16by9 u-mb">
            {image && (
              <Fragment>
                <Img
                  className="o-flexembed__item c-card__img"
                  bigImage={image}
                />
                { displayType === 'header' && (
                  <div className="c-card__wrap-icon">
                    <Button
                      tag="span"
                      modifier="tertiary"
                      hideLabel
                      icon="icon-arrow-right"
                    />
                  </div>
                )}
              </Fragment>
            )}
          </div>
        )}
      </RoutableSitecoreLink>
    );
  }
}

Card.propTypes = {
  title: PropTypes.objectOf(PropTypes.any),
  date: PropTypes.objectOf(PropTypes.any),
  cardType: PropTypes.string,
  link: PropTypes.objectOf(PropTypes.any),
  image: PropTypes.objectOf(PropTypes.any),
  showMoreLabel: PropTypes.string,
  displayType: PropTypes.string,
};

Card.defaultProps = {
  title: null,
  date: null,
  cardType: null,
  link: {},
  image: {},
  showMoreLabel: null,
  displayType: 'regular',
};

export default Card;
