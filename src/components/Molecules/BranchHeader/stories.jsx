import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import GlobalProvider from 'components/Context/GlobalProvider';

import data from './data.json';

import BranchHeader from './index';

const themeOptions = [
  'white',
  'black',
];

const defaultTheme = 'black';

storiesOf('components|molecules', module)
  .add('BranchHeader', () => (
    <GlobalProvider>
      <BranchHeader
        {...data}
        theme={select('Theme', themeOptions, defaultTheme)}
      />
    </GlobalProvider>
  ));
