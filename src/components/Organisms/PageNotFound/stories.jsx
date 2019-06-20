import React from 'react';
import { storiesOf } from '@storybook/react';

import PageNotFound from 'components/Organisms/PageNotFound';
import data from './data';

storiesOf('pages|Errors', module)
  .add('PageNotFound', () => (
    <PageNotFound {...data} />
  ));
