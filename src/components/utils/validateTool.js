let validataTool = {
  /**
   * addErrorClass - 给元素添加错误的提示样式，并在元素的末尾插入一个错误提示的信息
   *
   * @param  {type} el  被添加错误样式的元素
   * @param  {type} msg 错误提示信息
   * @return {type}     无
   */
  addErrorClass (el, msg) {
    let parentEl = el.parentNode
    if (parentEl.className.indexOf('ms-error') < 0) {
      parentEl.className = parentEl.className + ' ms-error'
    }
    let errorEl = parentEl.querySelector('.ms-error-tip') ? parentEl.querySelector('.ms-error-tip') : []
    if (errorEl.length <= 0) {
      parentEl.style.position = 'relative'
      errorEl = document.createElement("div")
      errorEl.className = 'ms-error-tip'
      let errorMsg = document.createTextNode(msg)
      errorEl.appendChild(errorMsg)
      parentEl.appendChild(errorEl)
    } else {
      errorEl.innerText = msg
    }

    //2s后删除提示的tip
    setTimeout(() => {
      try {
        parentEl.removeChild(errorEl)
      } catch (e) {
      }
    } , 2000)
  },
  /**
   * removeErrorClass - 删除元素上面相关的错误样式
   *
   * @param  {type} el 要删除错误样式的元素
   * @return {type}    无
   */
  removeErrorClass (el) {
    let parentEl = el.parentNode
    parentEl.className = parentEl.className.replace(' ms-error', '')
    let errorEl = parentEl.querySelector('.ms-error-tip') ? parentEl.querySelector('.ms-error-tip') : []
    if (errorEl.length > 0) {
      parentEl.removeChild(errorEl)
    }
  }
}
module.exports = validataTool
