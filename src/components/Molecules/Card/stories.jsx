import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import data from './data.json';

import Card from './index';

storiesOf('components|molecules', module)
  .add('Card', () => (
    <Card
      {...data}
      title={text('Title', 'A card title')}
    />
  ));
