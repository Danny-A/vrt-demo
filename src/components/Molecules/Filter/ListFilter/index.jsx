import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ListFilter.scss';

class ListFilter extends Component {
  handleOnChange = (name, value) => {
    const { handleClickFilter } = this.props;
    handleClickFilter(name, value);
  }

  render() {
    const {
      allFilterText,
      filters,
      name,
    } = this.props;

    return (
      <div
        className="c-list-filter"
        ref={(node) => {
          this.filter = node;
        }}
      >
        <ul className="o-list-clean">
          <li><span className="c-list-filter__title">{allFilterText}</span></li>
          {filters.map((filter, idx) => (
            <li
              key={filter.id}
            >
              <label
                className="c-list-filter__html-label"
                htmlFor={filter.id === false ? `${filter.name}${idx}` : filter.id}
              >
                <input
                  className="c-list-filter__input u-visually-hidden"
                  id={filter.id === false ? `${filter.name}${idx}` : filter.id}
                  name={name}
                  onChange={() => {
                    this.handleOnChange(name, filter.id);
                  }}
                  type="checkbox"
                />
                <span className="c-list-filter__label">{`${filter.name} (${filter.count})`}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ListFilter.propTypes = {
  allFilterText: PropTypes.string,
  name: PropTypes.string,
  filters: PropTypes.arrayOf(PropTypes.any),
  handleClickFilter: PropTypes.func,
};

ListFilter.defaultProps = {
  allFilterText: null,
  name: null,
  filters: null,
  handleClickFilter: () => {},
};

export default ListFilter;
