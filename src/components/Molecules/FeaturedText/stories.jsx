import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import data from './data.json';

import FeaturedText from './index';

const themeOptions = [
  'white',
  'black',
];

const defaultTheme = 'black';

storiesOf('components|molecules', module)
  .add('FeaturedText', () => (
    <FeaturedText
      {...data}
      theme={select('Theme', themeOptions, defaultTheme)}
    />
  ));
