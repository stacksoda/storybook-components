import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import SimpleExample from '../components/draft/SimpleExample';
import BraftUtil from '../components/braft/ContentUtils';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )); 

storiesOf('draft', module)
  .add('hello world', () => (
    <SimpleExample />
  ))

storiesOf('braft', module)
  .add('test', () => (
    <BraftUtil />
  ))