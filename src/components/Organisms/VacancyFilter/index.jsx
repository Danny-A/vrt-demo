import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Layer from 'components/Atoms/Layout/Layer';
import Retain from 'components/Atoms/Layout/Retain';
import Theme from 'components/Atoms/Theme';
import Heading from 'components/Atoms/Heading';
import ListFilter from 'components/Molecules/Filter/ListFilter';
import ButtonsFilter from 'components/Molecules/Filter/ButtonsFilter';
import VacancySummary from 'components/Molecules/VacancySummary';
import Button from 'components/Atoms/Button';

import './VacancyFilter.scss';

class VacancyFilter extends Component {
  constructor(props) {
    super(props);

    // these values should the same as the keys in the filters object in the json data
    this.filterKeys = {
      types: 'types',
      locations: 'locations',
    };

    this.vacanciesPerPage = props.vacanciesPerPage || 5;

    this.state = {
      types: [],
      locations: [],
      showVacanciesTo: this.vacanciesPerPage,
    };
  }

  handleClickFilter = (name, value, multiple = true) => {
    const {
      locations,
      types,
    } = this.state;

    const typeExists = types.filter(type => type === value);
    const locationExists = locations.filter(type => type === value);

    if (multiple) {
      if (typeExists.length || locationExists.length) {
        this.setState(prevState => ({
          [name]: prevState[name].filter(val => val !== value),
        }));
      } else {
        this.setState(prevState => ({
          [name]: [...prevState[name], value],
        }));
      }
    } else {
      this.setState({
        [name]: value === false ? [] : [value],
      });
    }
  }

  handleLoadMore = () => {
    const { showVacanciesTo } = this.state;

    this.setState({
      showVacanciesTo: showVacanciesTo + this.vacanciesPerPage,
    });
  }

  render() {
    const {
      anchor,
      collapseTop,
      collapseBottom,
      heading,
      filters,
      loadMoreButtonText,
      noResultsText,
      vacancies,
    } = this.props;

    const {
      types,
      locations,
      showVacanciesTo,
    } = this.state;

    let filteredVacancies = vacancies;

    // Deep copy facet objects
    // This way of deep copying does not copy functions
    let typesFacets = JSON.parse(JSON.stringify(filters.types.facets));
    let locationsFacets = JSON.parse(JSON.stringify(filters.locations.facets));

    // Filter out the facets that don't have an item linked to them and count is therefor empty
    typesFacets = typesFacets.filter(type => type.count !== undefined);
    locationsFacets = locationsFacets.filter(location => location.count !== undefined);

    if (types.length) {
      filteredVacancies = filteredVacancies.filter(vacancy => types.filter(type => type === vacancy.typeId).length > 0);

      locationsFacets = locationsFacets.filter((facet) => {
        const newFacet = facet;
        newFacet.count = filteredVacancies.filter(vacancy => vacancy.locationId === facet.id).length;
        return newFacet;
      });
    }

    if (locations.length) {
      filteredVacancies = filteredVacancies.filter(vacancy => locations.filter(type => type === vacancy.locationId).length > 0);

      typesFacets = typesFacets.filter((facet) => {
        const newFacet = facet;
        newFacet.count = filteredVacancies.filter(vacancy => vacancy.typeId === facet.id).length;
        return newFacet;
      });
    }

    return (
      <Theme theme="black">
        <section id={anchor}>
          <Layer
            size="large"
            collapseTop={collapseTop}
            collapseBottom={collapseBottom}
          >
            <Retain>
              <div className="o-layout o-layout--gutter">
                <div className="o-layout__cell u-fraction--4of12@desk" />
                <div className="o-layout__cell u-fraction--8of12@desk">
                  <div className="o-layout o-layout--gutter-small">
                    <div className="o-layout__cell  o-layout__cell--fit">
                      {heading && (
                        <Heading
                          text={heading}
                          subtext={vacancies.length}
                          level={2}
                          stylingLevel={1}
                          className="u-mb--large"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="o-layout__cell u-fraction--1of12@desk" />
                <div className="o-layout__cell u-fraction--3of12@desk">
                  {!!filters.types.facets.length && !!filters.locations.facets.length && (
                    <Fragment>
                      <hr className="u-visually-hidden@palm" />
                      <ul className="o-list-clean">
                        <li className="u-mb">
                          <div className="c-vacancy-filter--list">
                            <ListFilter
                              name={this.filterKeys.types}
                              filters={typesFacets}
                              allFilterText={filters.types.allLabel}
                              handleClickFilter={this.handleClickFilter}
                            />
                          </div>
                          <div className="c-vacancy-filter--buttons">
                            <ButtonsFilter
                              name={this.filterKeys.types}
                              filters={typesFacets}
                              useFirstAsAllFilter={false}
                              allFilterText={filters.types.allLabel}
                              handleClickFilter={this.handleClickFilter}
                            />
                          </div>
                        </li>
                        <li className="u-mb">
                          <div className="c-vacancy-filter--list">
                            <ListFilter
                              name={this.filterKeys.locations}
                              filters={locationsFacets}
                              allFilterText={filters.locations.allLabel}
                              handleClickFilter={this.handleClickFilter}
                            />
                          </div>
                          <div className="c-vacancy-filter--buttons">
                            <ButtonsFilter
                              name={this.filterKeys.locations}
                              filters={locationsFacets}
                              useFirstAsAllFilter={false}
                              allFilterText={filters.locations.allLabel}
                              handleClickFilter={this.handleClickFilter}
                            />
                          </div>
                        </li>
                      </ul>
                    </Fragment>
                  )}
                </div>
                <div className="o-layout__cell u-fraction--7of12@desk">
                  {!filteredVacancies.length && (
                    <p>{noResultsText}</p>
                  )}
                  {filteredVacancies.length > 0 && (
                    <TransitionGroup>
                      {filteredVacancies.map((vacancy, idx) => {
                        if (idx + 1 <= showVacanciesTo) {
                          return (
                            <CSSTransition
                              timeout={500}
                              classNames="c-vacancy-filter__summary"
                              key={vacancy.id}
                            >
                              <VacancySummary
                                {...vacancy}
                              />
                            </CSSTransition>
                          );
                        }
                        return false;
                      })}
                    </TransitionGroup>
                  )}
                  {showVacanciesTo < filteredVacancies.length && (
                    <Layer size="medium" collapseBottom>
                      <div className="o-layout o-layout--align-center">
                        <Button
                          tag="button"
                          modifier="secondary"
                          text={loadMoreButtonText.value}
                          onClick={this.handleLoadMore}
                        />
                      </div>
                    </Layer>
                  )}
                </div>
              </div>
            </Retain>
          </Layer>
        </section>
      </Theme>
    );
  }
}

VacancyFilter.propTypes = {
  anchor: PropTypes.string,
  collapseTop: PropTypes.bool,
  collapseBottom: PropTypes.bool,
  heading: PropTypes.objectOf(PropTypes.any),
  filters: PropTypes.objectOf(PropTypes.any),
  loadMoreButtonText: PropTypes.objectOf(PropTypes.any),
  noResultsText: PropTypes.string,
  vacancies: PropTypes.arrayOf(PropTypes.any),
  vacanciesPerPage: PropTypes.number,
};

VacancyFilter.defaultProps = {
  anchor: null,
  collapseTop: false,
  collapseBottom: false,
  heading: null,
  filters: {},
  loadMoreButtonText: {
    value: 'Meer tonen',
  },
  noResultsText: 'Sorry, geen resultaten.',
  vacancies: [],
  vacanciesPerPage: 5,
};

export default VacancyFilter;
