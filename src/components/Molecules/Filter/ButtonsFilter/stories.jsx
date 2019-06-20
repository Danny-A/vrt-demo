import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';

import data from './data.json';

import ButtonsFilter from './index';

const themeOptions = [
  'white',
  'black',
];

const defaultTheme = 'black';

storiesOf('components|molecules', module)
  .add('ButtonsFilter', () => (
    <ButtonsFilter
      theme={select('Theme', themeOptions, defaultTheme)}
      filters={data.facets}
      allFilterText={text('All filter text', 'No Filters')}
      useFirstAsAllFilter={boolean('Use first as all filter', false, true)}
    />
  ));
