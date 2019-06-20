import React from 'react';
import { storiesOf } from '@storybook/react';

import BranchSelector from './index';
import data from './data.json';

storiesOf('components|atoms', module)
  .add('BranchSelector', () => (
    <BranchSelector {...data} />
  ));
