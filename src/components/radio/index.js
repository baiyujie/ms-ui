import avalon from 'avalon2'
import './style.scss';

avalon.component('ms-radio', {
  template: `
    <div class="ms-radio">
      <div class="radio" :for="(index, option) in options" :class="{'active': @option.value === value, 'last': @index === (@options.length-1)}" :click="clickHandler(option)">{{@option.label}}</div>
    </div>
  `,
  defaults: {
    options: [],
    value: '',
    clickHandler (item) {
      this.value = item.value
    }
  }
})
