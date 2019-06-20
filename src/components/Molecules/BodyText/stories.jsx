import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import data from './data.json';

import BodyText from './index';

const themeOptions = [
  'white',
  'black',
];

const defaultTheme = 'white';

storiesOf('components|molecules', module)
  .add('BodyText', () => (
    <BodyText
      {...data}
      theme={select('Theme', themeOptions, defaultTheme)}
    />
  ));
