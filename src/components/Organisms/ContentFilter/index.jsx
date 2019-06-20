/* eslint-disable */
import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Retain from 'components/Atoms/Layout/Retain';
import Layer from 'components/Atoms/Layout/Layer';
import Theme from 'components/Atoms/Theme';
import Heading from 'components/Atoms/Heading';
import Button from 'components/Atoms/Button';
import Card from 'components/Molecules/Card';
import ButtonsFilter from 'components/Molecules/Filter/ButtonsFilter'

import createFilter from 'components/Utils/Filter';

import './ContentFilter.scss';

class ContentFilter extends Component {
  constructor(props) {
    super(props);

    const {
      cardUrl,
      showMore,
      noMoreCards,
    } = this.props;

    this.state = {
      cards: [],
      dataUrl: cardUrl,
      showMoreLabel: showMore,
      noMoreCardsLabel: noMoreCards,
      filters: null,
    };
  }

  componentDidMount() {
    const {
      cards,
    } = this.props;

    // on pageload pass props to state
    this.onLoad(cards);
  }

  // Fetch new data object and apply to state
  getData = () => {
    const {
      dataUrl,
    } = this.state;

    fetch(dataUrl)
      .then(response => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return {
            cards: [...prevState.cards, ...data.cards],
            dataUrl: data.cardUrl,
          };
        });
      }, (error) => {
        this.renderState(error.message);
      });
  }

  // Pass data to fill cards state
  onLoad = (data) => {
    this.setState({
      cards: data,
    });
  }

  // Apply filter type and set to state
  updateFilter = (name, type, index) => {
    if (type !== false) {
      this.setState({
        filters: [{
          property: 'cardType',
          value: type,
        }],
        activeFilter: index,
        activeFilterTitle: name,
      });
    } else {
      this.setState({
        filters: null,
      });
    }
  }

  /*
   * Return render state
   */
  renderState = message => (
    <Theme theme="black">
      <section className="c-content-filter">
        <Retain>
          <div>{message}</div>
        </Retain>
      </section>
    </Theme>
  );

  renderData(cards) {
    const {
      typeFilters,
      heading,
    } = this.props;

    if (cards && cards.length > 0) {
      const {
        filters,
        dataUrl,
        showMoreLabel,
        noMoreCardsLabel,
      } = this.state;

      /*
       * Render filtered cards based on passed filters
       */
      if (Array.isArray(filters) && filters.length) {
        cards = cards.filter(createFilter(...filters));
      }

      // Rewrite typeFilters object to we can pass it on
      // to the ButtonsFilter component as facets object
      const facets = typeFilters.map((typeFilter) => {
        return {
          id: typeFilter.filterType,
          name: typeFilter.filterTitle,
          count: typeFilter.count || null,
        };
      });

      return (
        <Theme theme="black">
          <section className="c-content-filter">
            <Retain>
              <Layer>
                <div className="o-layout o-layout--align-bottom">
                  <div className="o-layout__cell o-layout__cell--fill  u-mb--xl">
                    {heading && heading.value && (
                      <Heading
                        text={heading}
                        level={1}
                      />
                    )}
                  </div>
                  <div className="o-layout__cell o-layout__cell--fit  u-mb--huge">
                    <ButtonsFilter
                      name="content"
                      filters={facets}
                      handleClickFilter={this.updateFilter}
                    />
                  </div>
                </div>
              </Layer>
              <Layer>
                <TransitionGroup className="o-layout o-layout--gutter o-layout--equalheight">
                  {cards.map(card => (
                    <CSSTransition
                      timeout={250}
                      classNames="c-content-filter--move"
                      key={card.guid}
                    >
                    <Fragment>
                      {card.displayType === 'header' && (
                        <div
                          data-type={card.cardType}
                          className="o-layout__cell"
                        >
                          <Card {...card} />
                        </div>
                      )}
                    </Fragment>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </Layer>
              <Layer>
                <TransitionGroup className="o-layout o-layout--gutter o-layout--equalheight">
                  {cards.map(card => (
                      <CSSTransition
                        timeout={250}
                        classNames="c-content-filter--move"
                        key={card.guid}
                      >
                      <Fragment>
                        {(card.displayType === 'regular' || card.displayType === 'highlighted') && (
                          <div
                            data-type={card.cardType}
                            className="o-layout__cell  u-fraction--6of12@lap  u-fraction--4of12@desk"
                          >
                            <Card {...card} />
                          </div>
                        )}
                      </Fragment>
                    </CSSTransition>
                  ))}
                </TransitionGroup>
              </Layer>
              <Layer size="small" collapseBottom>
                <div className="o-layout o-layout--align-center">
                  {dataUrl ? (
                    <Button
                      tag="button"
                      modifier="secondary"
                      text={showMoreLabel}
                      onClick={() => this.getData()}
                    />
                  ) : (
                    <span>
                      {noMoreCardsLabel}
                    </span>
                  )}
                </div>
              </Layer>
            </Retain>
          </section>
        </Theme>
      );
    } else {
      return (
        this.renderState('Geen items gevonden...')
      );
    }
  }

  render() {
    const { cards } = this.state;

    return cards ? this.renderData(cards) : this.renderState('Laden...');
  }
}

ContentFilter.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.any),
  typeFilters: PropTypes.arrayOf(PropTypes.any),
  filters: PropTypes.arrayOf(PropTypes.any),
  heading: PropTypes.objectOf(PropTypes.any),
};

ContentFilter.defaultProps = {
  cards: [],
  typeFilters: [],
  filters: [],
  heading: null,
};

export default ContentFilter;
