import React from 'react';
import { storiesOf } from '@storybook/react';

import data from './data.json';

import HomeAnimation from './index';

storiesOf('components|organisms', module)
  .add('Home Animation', () => (
    <HomeAnimation {...data} />
  ));
