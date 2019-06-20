import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import InputText from './index';

const style = {
  backgroundColor: 'white',
  height: '100%',
  margin: '0 auto',
  padding: '100px',
  width: '100%',
};

storiesOf('components|atoms.FormFields', module)
  .add('InputText', () => (
    <div style={style}>
      <InputText
        placeholder={text('placeholder text', 'placeholder')}
        hasError={boolean('has error', false)}
        isDisabled={boolean('is disabled', null)}
        readonly={boolean('read only', null)}
      />
    </div>
  ));
