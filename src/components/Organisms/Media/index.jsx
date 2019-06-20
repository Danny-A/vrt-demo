import React, { Component } from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';

import Retain from 'components/Atoms/Layout/Retain';
import Img from 'components/Atoms/Img';
import Rte from 'components/Atoms/Text/Rte';
import Theme from 'components/Atoms/Theme';
import InviewAnimation from 'components/Molecules/InviewAnimation';

import './Media.scss';

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  handleClickPlay() {
    this.setState({ isPlaying: true });
  }

  render() {
    const {
      anchor,
      topBackground,
      bottomBackground,
      image,
      isNarrow,
      youtubeId,
      vimeoId,
      description,
      playVideoText,
      videoDuration,
    } = this.props;

    const {
      isPlaying,
    } = this.state;

    return (
      <Theme theme={topBackground}>
        <section id={anchor} className="c-media">
          <div className="c-media__media">
            <Retain size="wide@palm">
              <div className="o-layout  o-layout--gutter  o-layout--align-center">
                <div
                  className={classNames('o-layout__cell', {
                    'u-fraction--10of12@desk': isNarrow,
                  })}
                >
                  <div className={classNames('o-flexembed  ', {
                    'o-flexembed--16by9': youtubeId || vimeoId,
                    'o-flexembed--5by4  o-flexembed--16by9@desk': !youtubeId && !vimeoId,
                  })}
                  >
                    <Img
                      className="o-flexembed__item"
                      bigImage={image}
                    />

                    {isPlaying && youtubeId && !vimeoId && (
                      <iframe
                        title={anchor}
                        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?controls=1&autoplay=1&rel=0&&modestbranding=1&color=white`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    )}

                    {isPlaying && vimeoId && (
                      <iframe
                        title={anchor}
                        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                        frameBorder="0"
                        allowFullScreen
                      />
                    )}
                  </div>
                </div>
              </div>
            </Retain>
            {(description || vimeoId || youtubeId) && (
              <Retain>
                <div className="c-media__bottom">
                  {description && description.value && (
                    <div className="o-layout  o-layout--gutter">
                      <div className="u-fraction--2of12@desk" />
                      <div className="o-layout__cell  u-fraction--6of12  u-fraction--4of12@lap  u-fraction--2of12@desk">
                        <InviewAnimation delay>
                          <Rte className="u-mb u-mt" modifier="description" richText={description} />
                        </InviewAnimation>
                      </div>
                    </div>
                  )}
                  {(vimeoId || youtubeId) && (
                    <CSSTransition
                      in={!isPlaying}
                      timeout={300}
                      classNames="c-media__play-button-"
                      unmountOnExit
                    >
                      <button
                        className="o-button-clean  c-media__play-button u-epsilon"
                        onClick={() => this.handleClickPlay()}
                        type="button"
                      >
                        <Text encode={false} field={playVideoText} className="c-media__play-button__text" />
                        {videoDuration && videoDuration.value && (
                          <Text encode={false} className="c-media__play-button__text c-media__duration u-mili" field={videoDuration} />
                        )}
                      </button>
                    </CSSTransition>
                  )}
                </div>
              </Retain>
            )}
          </div>
          <Theme theme={bottomBackground} className="c-media__top" />
        </section>
      </Theme>
    );
  }
}

Media.propTypes = {
  anchor: PropTypes.string,
  image: PropTypes.objectOf(PropTypes.any),
  topBackground: PropTypes.string,
  bottomBackground: PropTypes.string,
  isNarrow: PropTypes.bool,
  youtubeId: PropTypes.string,
  vimeoId: PropTypes.string,
  description: PropTypes.objectOf(PropTypes.string),
  playVideoText: PropTypes.objectOf(PropTypes.any),
  videoDuration: PropTypes.objectOf(PropTypes.any),
};
Media.defaultProps = {
  anchor: null,
  image: null,
  topBackground: 'white',
  bottomBackground: 'black',
  isNarrow: false,
  youtubeId: null,
  vimeoId: null,
  description: [],
  playVideoText: 'play video',
  videoDuration: 'play video',
};

export default Media;
