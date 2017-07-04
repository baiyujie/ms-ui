import avalon from 'avalon2';
import './style.scss';

avalon.component('ms-paging', {
  template: `
    <div class="ms-paging">
      <div class="prev btn mouse-effect-scale" :click="changePage('del')">上一页</div>
      <div class="nums">
        <div :for="num in firstNums" class="btn mouse-effect-scale" :click="changePage(num)" :class="{'active': num === currentPage}">{{@num}}</div>
        <div :if="isSowLeftMore" class="ellipsis btn">...</div>
        <div :for="num in secondNums" class="btn mouse-effect-scale" :click="changePage(num)" :class="{'active': num === currentPage}">{{@num}}</div>
        <div :if="isSowRightMore" class="ellipsis btn">...</div>
        <div :for="num in thirdNums" class="btn mouse-effect-scale" :click="changePage(num)" :class="{'active': num === currentPage}">{{@num}}</div>
      </div>
      <div class="next btn mouse-effect-scale" :click="changePage('add')">下一页</div>
    </div>
  `,
  defaults: {
    firstNums: [1],
    secondNums: [],
    thirdNums: [],
    isSowLeftMore: false,
    isSowRightMore: false,
    currentPage: 1,
    totalPage: 1,
    getNums () {
      let pagerCount = 5
      let currentPage = this.currentPage * 1
      let totalPage = this.totalPage * 1

      if (totalPage > pagerCount) {
        if (currentPage > pagerCount - 2) {
          this.isSowLeftMore = true
        }
        if (currentPage < totalPage - 2) {
          this.isSowRightMore = true
        }
      }
      const array = []

      if (this.isSowLeftMore && !this.isSowRightMore) {
        const startPage = totalPage - (pagerCount - 2)
        for (let i = startPage; i < totalPage; i++) {
          array.push(i)
        }
      } else if (!this.isSowLeftMore && this.isSowRightMore) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i)
        }
      } else if (this.isSowLeftMore && this.isSowRightMore) {
        const offset = Math.floor(pagerCount / 2) - 1
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i)
        }
      } else {
        for (let i = 2; i < totalPage; i++) {
          array.push(i)
        }
      }
      this.secondNums = array
    },
    changePage (num) {
      if (typeof num === 'string' && num === 'del' && this.currentPage > 1) {
        num = this.currentPage - 1
        this.changePageEvent(num)
      } else if (typeof num === 'string' && num === 'add' && this.currentPage < this.totalPage) {
        num = this.currentPage + 1
        this.changePageEvent(num)
      } else if (typeof num === 'number') {
        this.changePageEvent(num)
      }
    },
    changePageEvent () {},
    // 组件初始化
    onInit () {
      this.getNums()
      this.thirdNums = this.totalPage > 1 ? [this.totalPage] : []
    }
  }
})
