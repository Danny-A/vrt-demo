import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';

import Button from 'components/Atoms/Button';

import './ButtonsFilter.scss';

class ButtonsFilter extends Component {
  state = {
    showFilters: false,
    activeFilter: 0,
  }

  handleOnClick = ({
    name,
    filterName,
    idx,
    value,
  }) => {
    const {
      handleClickFilter,
    } = this.props;

    const {
      showFilters,
    } = this.state;

    handleClickFilter(name, value);

    this.setState({
      activeFilter: idx,
      activeFilterName: filterName,
      showFilters: !showFilters,
    });
  }

  toggleFilters = () => {
    const { showFilters } = this.state;

    this.setState({
      showFilters: !showFilters,
    });
  }


  render() {
    const {
      allFilterText,
      name,
      filters,
      useFirstAsAllFilter,
    } = this.props;

    const {
      activeFilter,
      activeFilterName,
      showFilters,
    } = this.state;

    if (filters.length) {
      // Add filter to use as first `all` filter
      if (!useFirstAsAllFilter && filters[0].id !== false) {
        filters.unshift({
          id: false,
          name: allFilterText,
        });
      // Set id of first `all` filter to false so we know we to show all items
      } else {
        filters[0].id = false;
      }
    }

    return (
      <div className={classNames('c-buttons-filter', {
        'c-buttons-filter--active': showFilters,
      })}
      >
        <div className="c-buttons-filter__wrap-toggle u-mb">
          <Button
            tag="button"
            icon="icon-dropdown"
            text={activeFilterName || allFilterText || filters[0].name}
            onClick={this.toggleFilters}
            iconRotate={showFilters ? 180 : 0}
          />
        </div>
        <ul className={classNames('o-list-clean c-buttons-filter__wrap-list u-mb--large', {
          'is-active': showFilters,
        })}
        >
          {filters.map((filter, idx) => {
            const isActive = activeFilter === idx ? 'is-active' : null;

            return (
              <li
                key={shortid.generate()}
              >
                <Button
                  tag="button"
                  modifier="secondary"
                  state={isActive}
                  text={filter.name}
                  onClick={() => {
                    const params = {
                      name,
                      value: filter.id,
                      filterName: filter.name,
                      idx,
                    };
                    this.handleOnClick(params);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ButtonsFilter.propTypes = {
  allFilterText: PropTypes.string,
  name: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.any),
  handleClickFilter: PropTypes.func,
  useFirstAsAllFilter: PropTypes.bool,
};

ButtonsFilter.defaultProps = {
  allFilterText: null,
  name: null,
  filters: null,
  handleClickFilter: () => {},
  useFirstAsAllFilter: true,
};

export default ButtonsFilter;
