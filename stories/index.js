import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import SimpleExample from '../components/draft/SimpleExample';
import BraftUtil from '../components/braft/ContentUtils';
import DraftLink from '../components/draft/link';
import BarChart from '../components/ECharts/BarReact';
import {barOption} from '../components/ECharts/Options';
import Theme from '../components/Context/Theme';
import ContextTheme from '../components/Context/ContextTheme';
import ContextAPI from '../components/Context/ContextAPI/ContextAPI';

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
  .add('Link', () => (
    <DraftLink />
  ))

storiesOf('braft', module)
  .add('test', () => (
    <BraftUtil />
  ))

storiesOf('Echarts', module)
  .add('barchart', () => (
    <BarChart option={barOption} />
  ))

storiesOf('Context', module)
    .add('theme', () => (
      <Theme />
    ))
    .add('context theme', ()=> (
      <ContextTheme />
    ))
    .add('context API', () => (
      <ContextAPI />
    ))