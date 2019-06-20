import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Heading from 'components/Atoms/Heading';
import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';
import Img from 'components/Atoms/Img';

import './ProjectSliderItem.scss';
import Button from 'components/Atoms/Button';

class ProjectSliderItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false };
  }

  componentDidMount() {
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    const {
      title,
      link,
      image,
    } = this.props;

    const {
      isLoaded,
    } = this.state;

    return (
      <RoutableSitecoreLink
        field={link}
        className={classNames('c-project-slider-item', {
          'is-link': isLoaded,
        })}
      >
        {title && title.value && (
          <div className="c-project-slider-item__heading">
            <Heading
              text={title}
              level={3}
              isSecondary
              className="u-micro u-mb--large"
            />
          </div>
        )}
        <div className="c-project-slider-item__img-wrap  o-flexembed  o-flexembed--16by9  u-mb">
          {image && image.src && (
            <Fragment>
              <Img
                className="o-flexembed__item  c-project-slider-item__img"
                bigImage={image}
              />
              <div className="c-project-slider-item__wrap-icon">
                <Button
                  tag="span"
                  modifier="tertiary"
                  hideLabel
                  icon="icon-arrow-right"
                />
              </div>
            </Fragment>
          )}
        </div>
      </RoutableSitecoreLink>
    );
  }
}

ProjectSliderItem.propTypes = {
  title: PropTypes.objectOf(PropTypes.string),
  link: PropTypes.objectOf(PropTypes.object),
  image: PropTypes.objectOf(PropTypes.any),
};
ProjectSliderItem.defaultProps = {
  title: null,
  link: {},
  image: {},
};

export default ProjectSliderItem;
