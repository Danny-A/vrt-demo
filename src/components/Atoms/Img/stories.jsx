import React from 'react';
import { storiesOf } from '@storybook/react';

import Img from './index';

import data from './data.json';

storiesOf('components|atoms', module).add('Img', () => (
  <div>
    <Img
      bigImage={data.picture.image}
      smallImage={data.picture.smallImage}
    />
  </div>
));
