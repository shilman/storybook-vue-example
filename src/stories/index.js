/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';

import '../vue-charts'
import Bar from '../components/chartjs-bar.vue';
// chartjs-doughnut.vue
// chartjs-horizontal-bar.vue
// chartjs-line.vue
// chartjs-pie.vue
// chartjs-polar-area.vue
// chartjs-radar.vue

// storiesOf('Welcome', module).add('to Storybook', () => ({
//   components: { Welcome },
// <div id="app">
//     <canvas id="mycanvas" count="3"></canvas>
//     <chartjs-bar target="mycanvas"></chartjs-bar>

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: { action: action('clicked') },
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods: { action: action('clicked') },
  }));
