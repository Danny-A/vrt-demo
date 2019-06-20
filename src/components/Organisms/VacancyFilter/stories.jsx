import React from 'react';
import { storiesOf } from '@storybook/react';

import VacancyFilter from 'components/Organisms/VacancyFilter';
import data from './data.json';

storiesOf('components|organisms.Filters', module)
  .add('Vacancy Filter', () => (
    <VacancyFilter {...data} />
  ));
