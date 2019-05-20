/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
} from '@storybook/addon-knobs'

import MyButton from './MyButton'
import Welcome from './Welcome'
import ChartjsBar from '../components/chartjs-bar'
import ChartjsDoughnut from '../components/chartjs-doughnut'
import ChartjsHorizontalBar from '../components/chartjs-horizontal-bar'
import ChartjsLine from '../components/chartjs-line'
import ChartjsPie from '../components/chartjs-pie'
import ChartjsPolarArea from '../components/chartjs-polar-area'
import ChartjsRadar from '../components/chartjs-radar'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}))

storiesOf('Button', module)
  .add('with text', () => ({
    components: { MyButton },
    template: '<my-button :handle-click="log">Hello Button</my-button>',
    methods: { log: action('clicked text button') },
  }))
  .add('with emoji', () => ({
    components: { MyButton },
    template: '<my-button :handle-click="log">😀 😎 👍 💯</my-button>',
    methods: { log: action('clicked emoji button') },
  }))

storiesOf('Charts', module)
  .add('bar', () => ({
    components: { ChartjsBar },
    template: '<chartjs-bar />',
  }))
  .add('doughnut', () => ({
    components: { ChartjsDoughnut },
    template: '<chartjs-doughnut />',
  }))
  .add('horizontal-bar', () => ({
    components: { ChartjsHorizontalBar },
    template: '<chartjs-horizontal-bar />',
  }))
  .add('line', () => ({
    components: { ChartjsLine },
    template: '<chartjs-line />',
  }))
  .add('pie', () => ({
    components: { ChartjsPie },
    template: '<chartjs-pie />',
  }))
  .add('polar-area', () => ({
    components: { ChartjsPolarArea },
    template: '<chartjs-polar-area />',
  }))
  .add('radar', () => ({
    components: { ChartjsRadar },
    template: '<chartjs-radar />',
  }))

storiesOf('Addon Notes', module).add(
  'Note with HTML',
  () => ({
    components: { ChartjsBar },
    template: `<chartjs-bar :backgroundcolor="'orangered'" />`,
  }),
  {
    notes: `
      <h2>My notes on this chart</h2>
      <p>
        <em>It's not all that important to be honest, but..</em><br/>
        Emojis are great, I love emojis, in fact I like using them in my Component notes too! 😇
      </p>
		`.replace(/\n/g, ''),
  }
)

storiesOf('Addon Knobs', module)
  .addDecorator(withKnobs)
  .add(
    'Simple',
    () => {
      const name = text('Name', 'John Doe')
      const age = number('Age', 44)
      const content = `I am ${name} and I'm ${age} years old.`
      const style = text('style', 'text-align:center; line-height: 100vh')

      return {
        template: `<h2 style="${style}">${content}</h2>`,
      }
    },
    {
      notes: `
      <h2>My story has notes AND knobs !</h2>
      <p>
        <em>Document your component here..</em>
      </p>
    `.replace(/\n/g, ''),
    }
  )
  .add('All knobs', () => {
    const name = text('Name', 'Jane')
    const stock = number('Stock', 20, {
      range: true,
      min: 0,
      max: 30,
      step: 5,
    })
    const fruits = {
      apples: 'Apple',
      bananas: 'Banana',
      cherries: 'Cherry',
    }
    const fruit = select('Fruit', fruits, 'apple')
    const price = number('Price', 2.25)

    const colour = color('Border', 'deeppink')
    const today = date('Today', new Date('Jan 20 2017'))
    const items = array('Items', ['Laptop', 'Book', 'Whiskey'])
    const nice = boolean('Nice', true)

    const stockMessage = stock
      ? `I have a stock of ${stock} ${fruit}, costing &dollar;${price} each.`
      : `I'm out of ${fruit}${nice ? ', Sorry!' : '.'}`
    const salutation = nice ? 'Nice to meet you!' : 'Leave me alone!'

    return {
      template: `
        <div style="border:2px dotted ${colour}; padding: 8px 22px; border-radius: 8px">
          <h1>My name is ${name},</h1>
          <h3>today is ${new Date(today).toLocaleDateString()}</h3>
          <p>${stockMessage}</p>
          <p>Also, I have:</p>
          <ul>
            ${items.map(item => `<li key=${item}>${item}</li>`).join('')}
          </ul>
          <p>${salutation}</p>
        </div>
      `,
    }
  })
