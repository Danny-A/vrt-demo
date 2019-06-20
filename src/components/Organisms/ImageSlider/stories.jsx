import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import ImageSlider from 'components/Organisms/ImageSlider';

import data from './data';

storiesOf('components|organisms.ContentComponents', module)
  .add('Image slider', () => (
    <ImageSlider
      {...data}
      topBackground={select('Top background', {
        white: 'white',
        black: 'black',
        grey: 'gray-b',
      },
      'black')}
      bottomBackground={select('Bottom background', {
        white: 'white',
        black: 'black',
        grey: 'gray-b',
      },
      'white')}
    />
  ));
