import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'components/Atoms/Icon';
import RoutableSitecoreLink from 'components/Atoms/RoutableSitecoreLink';
import { GlobalContext } from 'components/Context/GlobalProvider';
import isset from 'components/Utils/Isset';

import { Text } from '@sitecore-jss/sitecore-jss-react';

import './BranchSelector.scss';

class BranchSelector extends Component {
  static contextType = GlobalContext;

  state = {
    selectedBranchName: null,
    showFoldout: false,
  }

  toggleFoldout = () => {
    this.setState(prevState => ({
      showFoldout: !prevState.showFoldout,
    }));

    const {
      state,
    } = this.context;

    state.toggleInViewClasses();
  }

  render() {
    const {
      selectedBranchName,
      showFoldout,
    } = this.state;

    const {
      title,
    } = this.props;

    let {
      branches,
    } = this.props;

    const activeBranch = branches.filter(branch => branch.value.text === selectedBranchName || branch.active === true)[0] || branches[0];

    // remove active branch from dropdown list
    branches = branches.filter(branch => branch.id !== activeBranch.id);

    return (
      <div className={classNames('c-branch-selector', {
        'c-branch-selector--active': showFoldout,
      })}
      >
        <h1 className="c-branch-selector__title u-cropped-heading u-alpha">
          <Text encode={false} field={title} />
          <div>
            <button
              className="c-branch-selector__button c-branch-selector__toggle"
              onClick={this.toggleFoldout}
              type="button"
            >
              <span className="c-branch-selector__button__text">
                {selectedBranchName || (isset(() => activeBranch.value.text) && activeBranch.value.text) || ''}
              </span>
              <span className="c-branch-selector__button__icon">
                <Icon
                  icon="icon-dropdown"
                  modifier="c-icon--inherit"
                  size="gamma"
                />
              </span>
            </button>
          </div>
        </h1>
        <ul className={classNames('c-branch-selector__foldout o-list-clean', {
          'c-branch-selector__foldout--active': showFoldout,
        })}
        >
          {branches.map(branch => (
            <li
              key={branch.id}
              className="u-alpha"
            >
              <RoutableSitecoreLink
                field={branch}
              >
                <button
                  type="button"
                  className="c-branch-selector__button c-branch-selector__branch"
                >
                  <span className="c-branch-selector__button__text">
                    {branch.value.text}
                  </span>
                  <span className="c-branch-selector__button__icon c-branch-selector__branch__icon">
                    <Icon
                      icon="icon-dropdown"
                      modifier="c-icon--inherit"
                      size="gamma"
                    />
                  </span>
                </button>
              </RoutableSitecoreLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

BranchSelector.propTypes = {
  title: PropTypes.objectOf(PropTypes.string),
  branches: PropTypes.arrayOf(PropTypes.object),
};

BranchSelector.defaultProps = {
  title: {},
  branches: [],
};

export default BranchSelector;
