import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import data from './data.json';

import Atmopshere from './index';

storiesOf('components|molecules', module)
  .add('Atmopshere', () => (
    <Atmopshere
      {...data}
      topBackground={select('Top background', {
        white: 'white',
        'gray-b': 'gray-b',
        black: 'black',
      },
      'white')}
      bottomBackground={select('Bottom background', {
        white: 'white',
        'gray-b': 'gray-b',
        black: 'black',
      },
      'black')}
    />
  ));
