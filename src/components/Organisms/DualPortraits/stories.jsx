import React from 'react';
import { storiesOf } from '@storybook/react';

import DualPortraits from 'components/Organisms/DualPortraits/index';
import data from './data.json';

storiesOf('components|organisms.ContentComponents', module)
  .add('Dual portrait', () => (
    <DualPortraits
      {...data}
    />
  ));
