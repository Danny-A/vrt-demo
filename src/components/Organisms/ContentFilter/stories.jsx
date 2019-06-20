import React from 'react';
import { storiesOf } from '@storybook/react';

import data from './data.json';

import ContentFilter from './index';

storiesOf('components|organisms.Filters', module)
  .add('Content Filter', () => (
    <ContentFilter {...data} />
  ));
