import { configure } from '@storybook/vue'

import Vue from 'vue';
import '../../vue-charts';
Vue.use(VueCharts);

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
