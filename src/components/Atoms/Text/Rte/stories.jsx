import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import Theme from 'components/Atoms/Theme/index';
import Rte from './index';

import data from './data.json';

const themeOptions = [
  'white',
  'black',
];

const defaultTheme = 'black';

storiesOf('components|atoms', module).add('Rte', () => (
  <Theme theme={select('Theme', themeOptions, defaultTheme)}>
    <Rte
      richText={data.richText}
    />
  </Theme>
));
