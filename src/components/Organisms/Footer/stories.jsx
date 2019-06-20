import React from 'react';
import { storiesOf } from '@storybook/react';

import data from './data.json';

import Footer from './index';

storiesOf('components|organisms.Navigation', module)
  .add('Footer', () => (
    <Footer {...data} />
  ));
