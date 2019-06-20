import React from 'react';
import { storiesOf } from '@storybook/react';

import LinkHighlight from 'components/Organisms/LinkHighlight';
import data from './data';

storiesOf('components|organisms.ContentComponents', module)
  .add('Link highlight', () => (
    <LinkHighlight {...data} />
  ));
