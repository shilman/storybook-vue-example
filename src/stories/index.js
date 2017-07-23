/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';

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

storiesOf('Charts', module)
  .add('bar', () => ({ template: '<chartjs-bar />' }))
  .add('doughnut', () => ({ template: '<chartjs-doughnut />' }))
  .add('horizontal-bar', () => ({ template: '<chartjs-horizontal-bar />' }))
  .add('line', () => ({ template: '<chartjs-line />' }))
  .add('pie', () => ({ template: '<chartjs-pie />' }))
  .add('polar-area', () => ({ template: '<chartjs-polar-area />' }))
  .add('radar', () => ({ template: '<chartjs-radar />' }));
