import React from 'react';
import { storiesOf } from '@storybook/react';

import Infobar from 'components/Organisms/Infobar';
import data from './data';

storiesOf('components|organisms.ContentComponents', module)
  .add('Infobar', () => (
    <Infobar {...data} />
  ));
