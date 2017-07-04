import avalon from 'avalon2'
import './style.scss';

avalon.component('ms-button', {
  template: `
    <button type="button" class="ms-button" :class="[type, size, fill, round, fluid]" :click="click" ms-attr="attr">
      <span :if="label !== ''">{{@label}}</span>
      <span :if="label === ''"><slot name="label" /></span>
    </button>
  `,
  defaults: {
    label: '',
    attr: {},
    type: 'default',
    size: 'normal',
    fill: 'noFill',
    round: 'noRound',
    fluid: 'noFluid',
    click () {}
  }
})
