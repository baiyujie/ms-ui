/**
 * 事件函数对象：用于组件之间传参
 * handlers注册的所有事件
 * $on: 绑定事件
 * $off: 删除事件
 * $clear: 清除某类事件
 * $emit: 触发事件
 */
let event_extend = {
  handlers: {},
  $on (type, handler) {
    if (typeof this.handlers[type] === 'undefined') {
      this.handlers[type] = new Array()
    }
    this.handlers[type].push(handler)
  },
  $off (type, handler) {
    if (this.handlers[type] instanceof Array) {
      let handlers = this.handlers[type]
      for (let i = 0, len = handlers.length; i < len; i++) {
        if (handler[i] === handler) {
          handlers.splice(i,1)
          break
        }
      }
    }
  },
  $clear (type) {
    if (this.handlers[type] instanceof Array) {
      delete this.handlers[type]
    }
  },
  $emit (type) {
    if (this.handlers[type] instanceof Array) {
      var handlers = this.handlers[type]
      for(let i = 0, len = handlers.length; i < len; i++){
        handlers[i].apply(this, arguments)
      }
    }
  }
}
if (typeof window.event_extend === 'undefined') window.event_extend = event_extend
