import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Media from 'components/Organisms/Media';
import data from './data.json';

storiesOf('components|organisms.ContentComponents', module)
  .add('Media without video', () => (
    <Media
      {...data}
      vimeoId={null}
      youtubeId={null}
      videoDuration={null}
      smallImage={data.smallImageIfNoVideo}
      isNarrow={boolean('Is narrow', false)}
      topBackground={select('Top background', {
        white: 'white',
        'gray-b': 'gray-b',
        black: 'black',
      },
      'white')}
      bottomBackground={select('Bottom background', {
        white: 'white',
        'gray-b': 'gray-b',
        black: 'black',
      },
      'black')}
    />
  ))
  .add('Media with video', () => (
    <Media
      {...data}
      isNarrow={boolean('Is narrow', false)}
      topBackground={select('Top background', {
        white: 'white',
        'gray-b': 'gray-b',
        black: 'black',
      },
      'white')}
      bottomBackground={select('Bottom background', {
        white: 'white',
        'gray-b': 'gray-b',
        black: 'black',
      },
      'black')}
    />
  ));
