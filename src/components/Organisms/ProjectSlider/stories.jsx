import React from 'react';
import { storiesOf } from '@storybook/react';

import ProjectSlider from 'components/Organisms/ProjectSlider';

import data from './data';

storiesOf('components|organisms.ContentComponents', module)
  .add('Projects slider', () => (
    <ProjectSlider {...data} />
  ));
