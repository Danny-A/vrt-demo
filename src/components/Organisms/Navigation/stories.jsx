import React from 'react';
import { storiesOf } from '@storybook/react';

import data from './data.json';

import Navigation from './index';

storiesOf('components|organisms.Navigation', module)
  .add('Header', () => (
    <Navigation {...data} />
  ));
