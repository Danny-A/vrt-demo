/* eslint-disable */
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import GlobalProvider from 'components/Context/GlobalProvider';

// Option defaults:
setOptions({
  name: 'we are you',
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
  addonPanelInRight: true,
});

// this enables the global decorator
addDecorator(withKnobs);
addDecorator(StoryRouter());

addDecorator(getStory => (
  <GlobalProvider>
    {getStory()}
  </GlobalProvider>
));

const components = require.context('../src/components/', true, /stories.jsx/);

function loadStories() {
  components.keys().forEach(filename => components(filename));
  // You can require as many stories as you need.
}

// Imports project entry for default styles before the component
// eslint-disable-next-line import/first
import 'sass/leading.scss';

configure(loadStories, module);

// Imports project entry for default styles after the component
// eslint-disable-next-line import/first
import 'sass/closing.scss';
