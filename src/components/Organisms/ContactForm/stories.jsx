import React from 'react';
import { storiesOf } from '@storybook/react';

import data from './data.json';

import ContactForm from './index';

storiesOf('components|organisms', module)
  .add('ContactForm', () => (
    <ContactForm {...data} />
  ));
