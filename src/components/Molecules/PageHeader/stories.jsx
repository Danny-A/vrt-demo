import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean } from '@storybook/addon-knobs';

import data from './data.json';

import PageHeader from './index';

const themeOptions = [
  'white',
  'black',
];

const defaultTheme = 'black';

storiesOf('components|molecules', module)
  .add('PageHeader', () => (
    <PageHeader
      {...data}
      theme={select('Theme', themeOptions, defaultTheme)}
      size={boolean('Small', false)}
    />
  ));
