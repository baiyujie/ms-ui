import avalon from 'avalon2'
import tools from './../utils/tools.js'
import './style.scss';
import down from './img/down.png'

avalon.component('ms-multilevelSelect', {
  template: `
    <div class="ms-multilevelSelect" :class="@uuid">
      <div class="selected" :click="toggle"><input readonly disabled class="word" :duplex="@val" :attr="{placeholder: @placeholder}"><img class="down" :attr="{src: @down}"></div>
      <div :visible="isShow" class="wrap">
        <div class="group" :for="option in @options">
          <div class="title" :click="select(option.head)"><strong>{{@option.head.label}}</strong></div>
          <div class="options">
            <div class="option" :for="item in @option.items" :click="select(item)">{{@item.label}}</div>
          </div>
        </div>
      </div>
    </div>
  `,
  defaults: {
    uuid: '',
    options: [],
    val: '',
    isShow: false,
    down: down,
    placeholder: '',
    toggle () {
      this.isShow = !this.isShow
    },
    close () {
      this.isShow = false
    },
    select (item) {
      this.isShow = false
      this.val = item.label
      this.selectEvent(item)
    },
    selectEvent () {},
    clickMultilevelSelectOutSide (e) {
      let b = tools.isClickCurentEl(this.uuid, e.target)
      if (b) return
      this.close()
    },
    onReady () {
      this.uuid = 'uuid_' + tools.uuid(8, 2)
      avalon.bind(document, 'click', this.clickMultilevelSelectOutSide)
    },
    onDispose () {
      avalon.unbind(document, 'click', this.clickMultilevelSelectOutSide)
    }
  }
})
