<template lang="html">
  <div>
    <userTopNav>
      <slot>专栏</slot>
    </userTopNav>
    <confirmWarning v-if='isShowWarning' :hideOrShow='isShow' @hideExplainContent='hideExplainContent' @confirm='confirm'></confirmWarning>
    <section class="column">
      <div class="column-topNav">
        <router-link class="column-topNav-link" :to="{ name: '' }">新建专栏</router-link>
        <select class="column-select" v-model="selected" @change='changeOption'>
          <option class="column-select-option" value='1'>全部</option>
          <option class="column-select-option" value='2'>显示</option>
          <option class="column-select-option" value='3'>隐藏</option>
        </select>
        <label for="column-input" class="column-label">
          <input id="column-input" class="column-input" type="text" placeholder='输入专栏名称' v-model='searchMessage' @keyup.enter='showSearchResult'>
        </label>
        <button class="column-button" type="button" name="button" @click='showSearchResult'>搜索</button>
      </div>
      <div class="column-middleWrapper">
        <p class="graphic-middleWrapper-desc">专栏列表（&nbsp;
          <span v-if="selected === '1'">{{columnData.length}}</span>
          <span v-else-if="selected === '2'">{{isShowData.length}}</span>
          <span v-else-if="selected === '3'">{{isHideData.length}}</span>
          &nbsp;条）
        </p>
        <p class="column-middleWrapper-point">注意：这里只展示设置了单卖的专栏</p>
        <p class="column-middleWrapper-recycleBin">
          <img class="column-middleWrapper-recycleBin-img" src="./icon-delete.svg" alt="回收站图标-垃圾桶">
          <span>回收站</span>
        </p>
      </div>
      <div class="table-container">
        <table class="column-table">
          <thead>
            <tr class="column-thead">
              <th class="column-thead-name">专栏名称</th>
              <th class="column-thead-price">价格</th>
              <th class="column-thead-subscribe">订阅量</th>
              <th class="column-thead-periods">更新期数</th>
              <th class="column-thead-member">关联会员</th>
              <th class="column-thead-operator">操作</th>
            </tr>
          </thead>
          <transition-group tag="tbody" v-if="allData.length > 0" name="list-complete">
            <tr class="column-tbodyLine" v-for='item of allData' :key='item.id'>
              <!-- 这里修改了key -->
              <td class="column-tbodyLine-name">
                <!-- 图片懒加载，以后专栏数目很多时能够显著提高加载速度 -->
                <lazy-component class="lazyComponent">
                  <img class="column-tbodyLine-name-img" :src="item.src" alt="专栏名称配图">
                </lazy-component>
                <div class="column-tbodyLine-name-wrapper">
                  <p class="column-tbodyLine-name-title">{{item.title}}</p>
                  <p v-if='item.isShow' class="column-tbodyLine-name-time">显示时间：&nbsp;{{item.time}}</p>
                  <p v-else class="column-tbodyLine-name-time">已隐藏</p>
                </div>
              </td>
              <td class="column-tbodyLine-price">¥&nbsp;{{item.price}}</td>
              <td class="column-tbodyLine-subscribe">{{item.subscribe}}</td>
              <td class="column-tbodyLine-comment">{{item.comment}}</td>
              <td class="column-tbodyLine-member">{{item.member}}</td>
              <td class="column-tbodyLine-operator">
                <router-link class="column-tbodyLine-operator-link" :to="{ name: '' }" @click.native='showSorting'>排序</router-link>
                <div class="sorting-container">
                  <span class="sorting-container-desc">排列至第</span>
                  <input class="sorting-container-input" type="text" placeholder='输入数字' v-model='sortNum'>
                  <span class="sorting-container-desc">位 </span>
                  <button class="sorting-container-button-confirm" type="button" name="button" @click='confirmToSorting(item.id)'>确定</button>
                  <button class="sorting-container-button-cancel" type="button" name="button" @click='hideSorting'>取消</button>
                </div>

                <router-link v-if='item.isShow' class="column-tbodyLine-operator-link" :to="{ name: '' }" @click.native='showWarning(item.id, item.isShow)'>隐藏</router-link>
                <router-link v-else class="column-tbodyLine-operator-link" :to="{ name: '' }" @click.native='showWarning(item.id, item.isShow)'>显示</router-link>
                <router-link class="column-tbodyLine-operator-link" :to="{ name: '' }">详情</router-link>
              </td>
            </tr>
          </transition-group>
          <tbody v-else>
            <tr>
              <td colspan="6" class="noData">没有相应的数据</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
import confirmWarning from '@/components/common/confirmWarning/confirmWarning'

export default {
  components: {
    userTopNav,
    confirmWarning
  },
  data () {
    return {
      isShowWarning: false,
      sortNum: '',
      idIndex: '',
      isShow: '',
      selected: '2',
      allData: [],
      searchMessage: ''
    }
  },
  computed: {
    columnData () {
      return this.$store.state.userInfo.columnData
    },
    isShowData () {
      return this.columnData.filter(value => value.isShow === true)
    },
    isHideData () {
      return this.columnData.filter(value => value.isShow === false)
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.allData = this.columnData
        this.changeOption()
      }, 100)
    })
  },
  methods: {
    changeOption () {
      if (this.selected === '1') {
        this.allData = this.columnData
      } else if (this.selected === '2') {
        this.allData = this.isShowData
      } else if (this.selected === '3') {
        this.allData = this.isHideData
      }
    },
    hide (index) {
      this.$store.commit('hideColumnData', index)
      if (this.selected === '1') {
        this.allData = this.columnData
      } else {
        this.allData = this.isShowData
      }
    },
    show (index) {
      this.$store.commit('showColumnData', index)
      if (this.selected === '1') {
        this.allData = this.columnData
      } else {
        this.allData = this.isHideData
      }
    },
    showSearchResult () {
      if (this.selected === '1') {
        this.allData = this.columnData.filter(value => value.title.includes(this.searchMessage))
      } else if (this.selected === '2') {
        this.allData = this.isShowData.filter(value => value.title.includes(this.searchMessage))
      } else if (this.selected === '3') {
        this.allData = this.isHideData.filter(value => value.title.includes(this.searchMessage))
      }
    },
    showWarning (index, condition) {
      this.isShowWarning = true
      this.idIndex = index
      this.isShow = condition
    },
    hideExplainContent () {
      this.isShowWarning = false
    },
    confirm () {
      this.isShowWarning = false
      if (this.isShow) {
        this.hide(this.idIndex)
      } else {
        this.show(this.idIndex)
      }
    },
    showSorting () {
      event.target.nextElementSibling.classList.add('sorting-container_active')
    },
    hideSorting () {
      event.target.parentNode.classList.remove('sorting-container_active')
    },
    confirmToSorting (index) {
      this.hideSorting()
      if (this.selected === '1') {
        // this.$store.dispatch('sortColumnDataId')
        this.$store.commit('sortColumnData', {index: index, sortNum: this.sortNum})
      } else if (this.selected === '2') {
        this.$store.commit('sortColumnData', {index: index, sortNum: this.sortNum})
      } else if (this.selected === '3') {
        // this.allData = this.isHideData.filter(value => value.title.includes(this.searchMessage))
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

.column {
  @mixin components;
}

.column-topNav {
  @mixin operator-above-table;
}

.column-topNav-link {
  @mixin button-link;
  margin-right: auto;
}

.column-topNav-link:hover {
  background-color: $dark-blue;
}

.column-select {
  width: 116px;
  @mixin select;
}

.column-input {
  width: 240px;
  @mixin input;
}

.column-input:focus {
  border-color: $light-blue;
}

.column-button {
  @mixin button-search;
}

.column-button {
  background-color: $background-color-1;
}

.column-middleWrapper {
  @mixin caption-above-table;
}

.column-middleWrapper-point {
  margin-left: 10px;
  color: $text-wraning;
}

.column-middleWrapper-recycleBin {
  @mixin recycleBin-wrapper;
}

.column-middleWrapper-recycleBin-img {
  @mixin recycleBin-img;
}

.table-container {
  padding: 0 20px;
}

.column-table {
  @mixin table;
}

.column-thead {
  @mixin thead;
}

.column-thead-name {
  width: 30%;
  @mixin table-left;
}

.column-thead-price,
.column-thead-subscribe,
.column-thead-periods,
.column-thead-subscribe {
  width: 10%;
}

.column-thead-member,
.column-thead-operator {
  width: 20%;
}

.column-thead-operator {
  @mixin table-right;
}

.column-tbodyLine {
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

.column-tbodyLine:hover {
  background-color: $background-color-1;
}

.column-tbodyLine-name {
  @mixin table-left;
}

.column-tbodyLine-price,
.column-tbodyLine-subscribe,
.column-tbodyLine-comment,
.column-tbodyLine-member {
  text-align: center;
}

.column-tbodyLine-operator {
  position: relative;
  @mixin table-right;
}

.column-tbodyLine-name-wrapper {
  @mixin product-desc-wrapper;
}

.column-tbodyLine-name-img {
  @mixin product-img;
}

.column-tbodyLine-name-title {
  margin-bottom: 20px;
}

.column-tbodyLine-name-time {
  color: $text-dark-color;
}

.column-tbodyLine-operator-link {
  @mixin router-link-inline-block;
  line-height: 1;
}

.column-tbodyLine-operator-link:not(:last-child) {
  border-right: 1px solid $light-blue;
  padding: 0 10px;
}

.column-tbodyLine-operator-link:last-child {
  padding-left: 10px;
}

.sorting-container {
  width: 365px;
  height: 60px;
  padding: 12px 20px;
  position: absolute;
  right: 0;
  top: 15px;
  z-index: 99;
  border: 1px solid $border-maincolor;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.09);
  background-color: #fff;
  display: flex;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}

.sorting-container_active {
  visibility: visible;
  opacity: 1;
}

.sorting-container-input {
  width: 85px;
  @mixin input;
}

.sorting-container-button-confirm {
  @mixin button-confirm;
  margin: 0 10px;
}

.sorting-container-button-confirm:hover {
  background-color: $dark-blue;
}

.sorting-container-button-cancel {
  @mixin button-cancel;
}

.sorting-container-button-cancel:hover {
  background-color: $background-color-1;
}

.lazyComponent {
  display: inline-block;
}
</style>
