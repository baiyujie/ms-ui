import avalon from 'avalon2'
import './style.scss';
import searchIcon from './img/search.png'
// 请使用store,store2不支持IE8
import store from 'store'

avalon.component('ms-search', {
  template: `
    <div class="ms-search" :mouseenter="enterSearch" :mouseleave="leaveSeach">
      <img :click="search" class="search-icon" ms-attr="{src: @searchIcon}">
      <form ms-submit="search | prevent">
        <input class="input" type="text" placeholder="请输入大厦名称或区域位置" ignore-placeholer :duplex="@keyword" :focus="showHistory" :blur="blurEvent" :input="showHistory" />
      </form>
      <div :visible="isShowHistory && history.length > 0" class="show-items-box">
        <div ms-for="(index, item) in history | limitBy(6) as items" class="item" :click="selectHistory(item)">{{@item}}</div>
      </div>
      <div :visible="isShowFuzzy && fuzzySearchs.length > 0" class="show-items-box">
        <div ms-for="(index, item) in fuzzySearchs | limitBy(6) as items" class="item" :click="selectHistory(item)">{{@item}}</div>
      </div>
    </div>
  `,
  defaults: {
    searchIcon: searchIcon,
    keyword: '',
    history: store.get('searchHistory') ? store.get('searchHistory') : [],
    isShowHistory: false,
    fuzzySearchs: [],
    isShowFuzzy: false,
    isIn: true,
    enterSearch () {
      this.isIn = true
    },
    leaveSeach () {
      this.isIn = false
    },
    search () {
      if (this.keyword === '') return
      this.addHistory()
      this.searchEvent()
    },
    showHistory () {
      setTimeout(() => {
        if (this.keyword !== '') {
          this.isShowHistory = false
          this.isShowFuzzy = true
        } else {
          this.isShowHistory = true
          this.isShowFuzzy = false
        }
      }, 10)
    },
    blurEvent () {
      if (this.isIn) return
      this.isShowHistory = false
      this.isShowFuzzy = false
    },
    selectHistory (item) {
      this.keyword = item
      this.isShowHistory = false
    },
    addHistory () {
      if (this.history.indexOf(this.keyword) >= 0) return
      this.history.splice(0, 0, this.keyword)
      if (this.history.length > 6) {
        this.history.splice(6, this.history.length - 6)
      }
      store.set('searchHistory', this.history)
    },
    searchEvent () {}
  }
})
