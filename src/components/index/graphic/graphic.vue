<template lang="html">
  <div>
    <userTopNav>
      <slot>图文</slot>
    </userTopNav>
    <prompt v-if='isShowPrompt' :showWhatPrompt='showWhatPrompt'></prompt>
    <overDueWarning v-if='isShowOverDueWarning' @hideExplainContent='hideExplainContent'></overDueWarning>
    <confirmWarning v-if='isShowConfirmWarning' :hideOrShow='isShow' @hideExplainContent='hideExplainContent' @confirm='confirm'></confirmWarning>
    <section class="graphic">
      <div class="graphic-topNav">
        <router-link @click.native='linkToCreateGraphic' class="graphic-topNav-link" :to="{ name: '' }">新建图文</router-link>
        <select class="graphic-select" v-model="selected" @change='changeOption'>
          <option class="graphic-select-option" value='1'>全部</option>
          <option class="graphic-select-option" value='2'>显示</option>
          <option class="graphic-select-option" value='3'>隐藏</option>
        </select>
        <label for="graphic-input" class="graphic-label">
          <input id="graphic-input" class="graphic-input" type="text" placeholder='输入图文名称' v-model='searchMessage' @keyup.enter='showSearchResult'>
        </label>
        <button class="graphic-button" type="button" name="button" @click='showSearchResult'>搜索</button>
      </div>
      <div class="graphic-middleWrapper">
        <p class="graphic-middleWrapper-desc">图文列表（&nbsp;
          <span v-if="selected === '1'">{{graphicData.length}}</span>
          <span v-else-if="selected === '2'">{{isShowData.length}}</span>
          <span v-else-if="selected === '3'">{{isHideData.length}}</span>
          &nbsp;条）
        </p>
        <p class="graphic-middleWrapper-point">注意：这里只展示设置了单卖的图文</p>
        <p class="graphic-middleWrapper-recycleBin">
          <img class="graphic-middleWrapper-recycleBin-img" src="./icon-delete.svg" alt="回收站图标-垃圾桶">
          <span>回收站</span>
        </p>
      </div>
      <div class="table-container">
        <table class="graphic-table">
          <thead>
            <tr class="graphic-thead">
              <th class="graphic-thead-name">图文名称</th>
              <th class="graphic-thead-price">价格</th>
              <th class="graphic-thead-subscribe">订阅量</th>
              <th class="graphic-thead-comment">评论数</th>
              <th class="graphic-thead-member">关联专栏/会员</th>
              <th class="graphic-thead-operator">操作</th>
            </tr>
          </thead>
          <transition-group tag="tbody" v-if="allData.length > 0" name="list-complete">
            <tr class="graphic-tbodyLine" v-for='item of allData' :key='item.id'>
              <td class="graphic-tbodyLine-name">
                <!-- 图片懒加载，以后专栏数目很多时能够显著提高加载速度 -->
                <lazy-component class="lazyComponent">
                  <img class="graphic-tbodyLine-name-img" :src="item.src" alt="图文名称配图">
                </lazy-component>
                <div class="graphic-tbodyLine-name-wrapper">
                  <p class="graphic-tbodyLine-name-title">{{item.title}}</p>
                  <p v-if='item.isShow' class="graphic-tbodyLine-name-time">显示时间：&nbsp;{{item.time}}</p>
                  <p v-else class="graphic-tbodyLine-name-time">已隐藏</p>
                </div>
              </td>
              <td class="graphic-tbodyLine-price">¥&nbsp;{{item.price}}</td>
              <td class="graphic-tbodyLine-subscribe">{{item.subscribe}}</td>
              <td class="graphic-tbodyLine-comment">
                <router-link class="graphic-tbodyLine-comment-link" :to="{ name: '' }">{{item.comment}}</router-link>
              </td>
              <td class="graphic-tbodyLine-member">{{item.member}}</td>
              <td class="graphic-tbodyLine-operator">
                <router-link v-if='item.isShow' class="graphic-tbodyLine-operator-link" :to="{ name: '' }" @click.native='showWarning(item.id, item.isShow)'>隐藏</router-link>
                <router-link v-else class="graphic-tbodyLine-operator-link" :to="{ name: '' }" @click.native='showWarning(item.id, item.isShow)'>显示</router-link>
                <router-link class="graphic-tbodyLine-operator-link" :to="{ name: '' }" @click.native='linkToEdit'>编辑</router-link>
                <router-link class="graphic-tbodyLine-operator-link" :to="{ name: '' }" @click.native='linkToMore'>更多</router-link>
              </td>
            </tr>
          </transition-group>
          <tbody v-else>
            <tr>
              <td colspan="6" class="noData">没有相应的数据</td>
            </tr>
          </tbody>
        </table>
        <div class="pagination" v-if='isShowPagination'>
          <button class="pagination-pre" type="button" name="button" @click='prePage'>前一页</button>
          <button class="pagination-num" type="button" name="button" v-for='(item, index) of paginationNum' :key='index' @click='changePage(index)'>{{ index + 1 }}</button>
          <button class="pagination-next" type="button" name="button" @click='nextPage'>后一页</button>
        </div>
        <div class="pagination" v-if='isShowPagination'>
          <label for="pagination-input">前往第&nbsp;&nbsp;</label>
          <input type="text" class="pagination-input" id="pagination-input" placeholder="请输入页数" v-model.trim="goToPageNum" @keyup.enter='goToPage'>
          &nbsp;页&nbsp;
          <button type="button" name="button" class="pagination-go" @click='goToPage'>Go</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
import confirmWarning from '@/components/common/confirmWarning/confirmWarning'
import overDueWarning from '@/components/common/overDueWarning/overDueWarning'
import prompt from '@/components/common/prompt/prompt'

export default {
  components: {
    userTopNav,
    confirmWarning,
    overDueWarning,
    prompt
  },
  data () {
    return {
      showWhatPrompt: '',
      isShowConfirmWarning: false,
      isShowOverDueWarning: false,
      isShowPagination: false,
      isShowPrompt: false,
      idIndex: '',
      isShow: '',
      selected: '2',
      allData: [],
      searchMessage: '',
      paginationNum: [],
      pageIndex: 0,
      goToPageNum: ''
    }
  },
  computed: {
    isOverTime () {
      return this.$store.state.userInfo.isOverTime
    },
    graphicData () {
      return this.$store.state.userInfo.graphicData
    },
    isShowData () {
      return this.graphicData.filter(value => value.isShow === true)
    },
    isHideData () {
      return this.graphicData.filter(value => value.isShow === false)
    },
    pageButtons () {
      return document.getElementsByClassName('pagination-num')
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.allData = this.graphicData
        this.changeOption()
      }, 100)
    })
  },
  methods: {
    paging () {
      if (this.allData.length > 10) {
        this.paginationNum.length = Math.ceil(this.allData.length / 10)
        this.isShowPagination = true
        this.allData = this.allData.slice(0, 10)
        this.changePage(this.pageIndex)
        setTimeout(() => { this.highlightCurrentPage() }, 100)
      } else {
        this.isShowPagination = false
      }
    },
    highlightCurrentPage () {
      for (var i = 0; i < this.pageButtons.length; i++) {
        this.pageButtons[i].style.backgroundColor = '#2a75ed'
      }
      this.pageButtons[this.pageIndex].style.backgroundColor = '#fb6161'
    },
    prePage () {
      if (this.pageIndex >= 1) {
        this.pageIndex = this.pageIndex - 1
        this.changePage(this.pageIndex)
      } else {
        this.showWhatPrompt = '已经是第一页'
        this.isShowPrompt = true
        setTimeout(() => { this.isShowPrompt = false }, 1500)
      }
    },
    nextPage () {
      if (this.pageIndex < this.paginationNum.length - 1) {
        this.pageIndex = this.pageIndex + 1
        this.changePage(this.pageIndex)
      } else {
        this.showWhatPrompt = '已经是最后一页'
        this.isShowPrompt = true
        setTimeout(() => { this.isShowPrompt = false }, 1500)
      }
    },
    changePage (index) {
      if (this.selected === '1') {
        this.allData = this.graphicData.slice(index * 10, index * 10 + 10)
        this.pageIndex = index
        setTimeout(() => { this.highlightCurrentPage() }, 100)
      } else if (this.selected === '2') {
        this.allData = this.isShowData.slice(index * 10, index * 10 + 10)
        this.pageIndex = index
        setTimeout(() => { this.highlightCurrentPage() }, 100)
      } else if (this.selected === '3') {
        this.allData = this.isHideData.slice(index * 10, index * 10 + 10)
        this.pageIndex = index
        setTimeout(() => { this.highlightCurrentPage() }, 100)
      }
    },
    goToPage () {
      if (!/^\d+$/g.test(this.goToPageNum)) {
        this.showWhatPrompt = '只能输入数字'
        this.isShowPrompt = true
        setTimeout(() => { this.isShowPrompt = false }, 1500)
      } else if (this.goToPageNum > this.paginationNum.length) {
        this.showWhatPrompt = `页数只有 ${this.paginationNum.length} 页`
        this.isShowPrompt = true
        setTimeout(() => { this.isShowPrompt = false }, 1500)
      } else if (this.goToPageNum <= 0) {
        this.showWhatPrompt = '输入的页数不能小于 1'
        this.isShowPrompt = true
        setTimeout(() => { this.isShowPrompt = false }, 1500)
      } else {
        this.changePage(this.goToPageNum - 1)
      }
    },
    changeOption () {
      if (this.selected === '1') {
        this.allData = this.graphicData
        this.paging()
      } else if (this.selected === '2') {
        this.allData = this.isShowData
        this.paging()
      } else if (this.selected === '3') {
        this.allData = this.isHideData
        this.paging()
      }
    },
    hide (index) {
      this.$store.commit('hideGraphicData', index)
      if (this.selected === '1') {
        this.allData = this.graphicData
        this.paging()
        if (this.graphicData.length <= 10) {
          this.pageIndex = 0
        }
      } else {
        this.allData = this.isShowData
        this.paging()
        if (this.isShowData.length <= 10) {
          this.pageIndex = 0
        }
      }
    },
    show (index) {
      this.$store.commit('showGraphicData', index)
      if (this.selected === '1') {
        this.allData = this.graphicData
        this.paging()
        if (this.graphicData.length <= 10) {
          this.pageIndex = 0
        }
      } else {
        this.allData = this.isHideData
        this.paging()
        if (this.isHideData.length <= 10) {
          this.pageIndex = 0
        }
      }
    },
    showSearchResult () {
      if (this.selected === '1') {
        this.allData = this.graphicData.filter(value => value.title.includes(this.searchMessage))
      } else if (this.selected === '2') {
        this.allData = this.isShowData.filter(value => value.title.includes(this.searchMessage))
      } else if (this.selected === '3') {
        this.allData = this.isHideData.filter(value => value.title.includes(this.searchMessage))
      }
    },
    showWarning (index, condition) {
      this.isShowConfirmWarning = true
      this.idIndex = index
      this.isShow = condition
    },
    hideExplainContent () {
      this.isShowConfirmWarning = false
      this.isShowOverDueWarning = false
    },
    confirm () {
      this.isShowConfirmWarning = false
      if (this.isShow) {
        this.hide(this.idIndex)
      } else {
        this.show(this.idIndex)
      }
    },
    linkToCreateGraphic () {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: ''})/*  该页面还未完成，跳转路由暂时未空  */
      }
    },
    linkToEdit () {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: ''})/*  该页面还未完成，跳转路由暂时未空  */
      }
    },
    linkToMore () {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: ''})/*  该页面还未完成，跳转路由暂时未空  */
      }
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';
@import '../../../assets/css/indexCommonStyle.css';

.noData {
  @mixin no-data-in-table;
}

.graphic {
  @mixin components;
}

.graphic-topNav {
  @mixin operator-above-table;
}

.graphic-topNav-link {
  @mixin button-link;
  margin-right: auto;
}

.graphic-topNav-link:hover {
  background-color: $dark-blue;
}

.graphic-select {
  width: 116px;
  @mixin select;
}

.graphic-input {
  width: 240px;
  @mixin input;
}

.graphic-input:focus {
  border-color: $light-blue;
}

.graphic-button {
  @mixin button-search;
}

.graphic-button:hover {
  background-color: $background-color-1;
}

.graphic-middleWrapper {
  @mixin caption-above-table;
}

.graphic-middleWrapper-point {
  margin-left: 10px;
  color: $text-wraning;
}

.graphic-middleWrapper-recycleBin {
  @mixin recycleBin-wrapper;
}

.graphic-middleWrapper-recycleBin-img {
  @mixin recycleBin-img;
}

.table-container {
  padding: 0 20px;
}

.graphic-table {
  @mixin table;
}

.graphic-thead {
  @mixin thead;
}

.graphic-thead-name {
  width: 30%;
  @mixin table-left;
}

.graphic-thead-price,
.graphic-thead-subscribe,
.graphic-thead-comment,
.graphic-thead-subscribe {
  width: 10%;
}

.graphic-thead-member,
.graphic-thead-operator {
  width: 20%;
}

.graphic-thead-operator {
  @mixin table-right;
}

.graphic-tbodyLine {
  @mixin tr;
  transition: .8s;  /*单行列表过渡时间*/
}

/*显示和隐藏的过渡效果*/
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.list-complete-leave-active {
  position: absolute;
}

.graphic-tbodyLine:hover {
  background-color: $background-color-1;
}

.graphic-tbodyLine-price,
.graphic-tbodyLine-subscribe,
.graphic-tbodyLine-comment,
.graphic-tbodyLine-member {
  text-align: center;
}

.graphic-tbodyLine-name {
  @mixin table-left;
}

.graphic-tbodyLine-operator {
  @mixin table-right;
}

.graphic-tbodyLine-name-wrapper {
  @mixin product-desc-wrapper;
}

.graphic-tbodyLine-name-img {
  @mixin product-img;
}

.graphic-tbodyLine-name-title {
  margin-bottom: 20px;
}

.graphic-tbodyLine-name-time {
  color: $text-dark-color;
}

.graphic-tbodyLine-comment-link{
  display: block;
  color: $light-blue;
}

.graphic-tbodyLine-operator-link {
  @mixin router-link-inline-block;
  line-height: 1;
}

.graphic-tbodyLine-operator-link:not(:last-child) {
  border-right: 1px solid $light-blue;
  padding: 0 10px;
}

.graphic-tbodyLine-operator-link:last-child {
  padding-left: 10px;
}

.pagination {
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination-pre,
.pagination-next {
  @mixin button-main;
  margin: 0 5px;
  outline: none;
}

.pagination-pre:hover,
.pagination-next:hover {
  background: $background-color-1;
}

.pagination-num,
.pagination-go {
  @mixin button-filter;
  width: 36px;
  margin: 0 5px;
  outline: none;
}

.pagination-num:hover {
  background-color: $dark-blue;
}

.pagination-input {
  @mixin input;
  width: 100px;
  border-color: $main-color;
}

.lazyComponent {
  display: inline-block;
}
</style>
