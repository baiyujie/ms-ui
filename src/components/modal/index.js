import avalon from 'avalon2'
import event_extend from './../utils/event_extend.js'
import './style.scss';

avalon.component('ms-modal', {
  template: `
    <div :visible="isShow" class="ms-modal" :click="closeModal">
      <div class="bg"></div>
      <div class="content" :mouseenter="lock" :mouseleave="cancelLock">
        <slot name="content" />
      </div>
    </div>
  `,
  defaults: {
    isShow: false,
    isCanClose: true,
    closeModal () {
      if (!this.isCanClose) return
      window.event_extend.$emit('closeModal')
    },
    lock () {
      this.isCanClose = false
    },
    cancelLock () {
      this.isCanClose = true
    },
    onViewChange () {
      if (this.isShow) {
        document.querySelector('body').style.overflow = 'hidden'
      } else {
        document.querySelector('body').style.overflow = 'auto'
      }
    }
  }
})
