import * as avalon from 'avalon2';
import './style.scss';
import cleanIcon from './img/clean.png';

avalon.component('ms-tag', {
  template: `
    <div :if="!isDispose" class="ms-tag" :class="@theme">
      <span class="label" :class="{'pr18': !isCanClean}">{{@label}}</span>
      <span :visible="isCanClean" class="clean" :click="clean">
        <img :attr="{'src': cleanIcon}">
      </span>
    </div>
  `,
  defaults: {
    isDispose: false,
    label: '',
    isCanClean: false,
    cleanIcon: cleanIcon,
    theme: 'gray',
    clean () {
      this.isDispose = true
      this.changeEvent(this.label)
    },
    cleanEvent (label) {}
  }
})
