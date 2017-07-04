import avalon from 'avalon2';
import './style.scss';
import upIcon from './img/up.png'

avalon.component('ms-tab', {
  template: `
    <div class="ms-tab">
      <div class="ms-tab-labels">
        <div class="label" ms-for="(index, label) in labels" :class="{'active': active === index}" :click="change(index)">{{@label}} <img :visible="active === index" class="up" ms-attr="{'src': upIcon}"/></div>
      </div>
      <div class="ms-tab-content">
        <slot name="content" />
      </div>
    </div>
  `,
  defaults: {
    labels: [],
    active: 0,
    upIcon: upIcon,
    change (index) {
      this.active = index
      this.changeEvent(index)
    },
    changeEvent (index) {}
  }
})
