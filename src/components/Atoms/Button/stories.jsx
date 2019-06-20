import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';

import Button from './index';

storiesOf('components|atoms', module)
  .add('Button', () => (
    <Button
      modifier={select('Type', {
        '': 'primary',
        secondary: 'secondary',
        tertiary: 'tertiary',
        clean: 'clean, no fill',
      })}
      icon={select('Icon', {
        '': 'none',
        'icon-arrow-right': 'icon-arrow-right',
      }, 'icon-arrow-right')}
      text={text('Button label', 'Buttonlabel')}
      hideLabel={boolean('Hide label', false)}
      reversed={boolean('Reverse text/icon', false)}
      disabled={boolean('Disabled', false)}
      tag="a"
      field={{
        value: {
          href: '/bar',
          text: text('Button label', 'Buttonlabel'),
        },
      }}
    />
  ));
