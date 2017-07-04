import './style.scss';

let popconfirm = {
  template: `
    <div class="ms-popconfirm" :if="isShow">
      <div class="title">{{@title}}</div>
      <div class="des">{{@describe}}</div>
      <div class="btns">
        <div class="btn ok" :click="ok" :click="close">{{@okText}}</div>
        <div class="btn cancle" :click="cancle" :click="close">{{@cancleText}}</div>
      </div>
    </div>
  `,
  createDom () {
    
  },
  show () {

  },
  close () {

  }
}
module.exports = popconfirm
