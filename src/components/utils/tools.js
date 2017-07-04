let tools = {
  isClickCurentEl (className, el) {
    if (el.nodeType !== 'undefined' && el.nodeType !== 1 && el.nodeType !== 9) {
      console.error('isClickCurentEl：第二个参数不是DOM节点，请传入正确的DOM节点！')
      return
    }
    while (el.nodeType !== 9) {
      if (el.className.indexOf(className) >= 0) return true
      el = el.parentNode
    }
    return false
  },
  uuid (len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    var uuid = [], i
    radix = radix || chars.length

    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix]
    } else {
      var r
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
        }
      }
    }

    return uuid.join('')
  }
}
module.exports = tools
