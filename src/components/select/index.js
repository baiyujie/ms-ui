import avalon from 'avalon2'
import tools from './../utils/tools.js'
import './style.scss';
import down from './img/down.png'

avalon.component('ms-select', {
  template: `
    <div class="ms-select" :class="uuid">
      <div class="selected" :click="toggle"><input readonly disabled class="word" :duplex="@val" :attr="{placeholder: @placeholder}"><img class="down" ms-attr="{src: @down}"></div>
      <div :visible="isShow" class="options">
        <div class="option" ms-for="(index, option) in @options" :class="{'active': index === selected}" :click="select(index)">{{@option.label}}</div>
      </div>
    </div>
  `,
  defaults: {
    uuid: '',
    options: [],
    val: '',
    selected: '',
    isShow: false,
    down: down,
    placeholder: '',
    toggle () {
      this.isShow = !this.isShow
    },
    close () {
      this.isShow = false
    },
    select (index) {
      this.isShow = false
      if (index === this.selected) return
      this.selected = index
      this.val = this.options[index].label
      this.selectEvent(this.options[index].$model)
    },
    selectEvent () {},
    clickSelectOutSide (e) {
      let b = tools.isClickCurentEl(this.uuid, e.target)
      if (b) return
      this.close()
    },
    onReady () {
      this.uuid = 'uuid_' + tools.uuid(8, 2)
      avalon.bind(document, 'click', this.clickSelectOutSide)
      if (this.placeholder === '') {
        this.select(0)
      }
    },
    onDispose () {
      avalon.unbind(document, 'click', this.clickSelectOutSide)
    }
  }
})
