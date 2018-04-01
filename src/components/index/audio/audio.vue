<template lang="html">
  <div>
    <userTopNav>
      <slot>音频</slot>
    </userTopNav>
    <section class="audio">
      <div class="audio-topNav">
        <router-link class="audio-topNav-link" :to="{ name: '' }">新建音频</router-link>
        <select class="audio-select" v-model="selected" @change='changeOption'>
          <option class="audio-select-option" value='1'>全部</option>
          <option class="audio-select-option" value='2'>显示</option>
          <option class="audio-select-option" value='3'>隐藏</option>
        </select>
        <label for="audio-input" class="audio-label">
          <input id="audio-input" class="audio-input" type="text" placeholder='输入音频名称' v-model='searchMessage' @keyup.enter='showSearchResult'>
        </label>
        <button class="audio-button" type="button" name="button" @click='showSearchResult'>搜索</button>
      </div>
      <div class="audio-middleWrapper">
        <p class="graphic-middleWrapper-desc">音频列表（&nbsp;
          <span v-if="selected === '1'">{{audioData.length}}</span>
          <span v-else-if="selected === '2'">{{isShowData.length}}</span>
          <span v-else-if="selected === '3'">{{isHideData.length}}</span>
          &nbsp;条）
        </p>
        <p class="audio-middleWrapper-point">注意：这里只展示设置了单卖的音频</p>
        <p class="audio-middleWrapper-recycleBin">
          <img class="audio-middleWrapper-recycleBin-img" src="./icon-delete.svg" alt="回收站图标-垃圾桶">
          <span>回收站</span>
        </p>
      </div>
      <div class="table-container">
        <table class="audio-table">
          <thead>
            <tr class="audio-thead">
              <th class="audio-thead-name">音频名称</th>
              <th class="audio-thead-price">价格</th>
              <th class="audio-thead-subscribe">订阅量</th>
              <th class="audio-thead-accessData">访问数据</th>
              <th class="audio-thead-comment">评论数</th>
              <th class="audio-thead-member">关联专栏/会员</th>
              <th class="audio-thead-operator">操作</th>
            </tr>
          </thead>
          <transition-group tag="tbody" v-if="allData.length > 0" name="list-complete">
            <tr class="audio-tbodyLine" v-for='item of allData' :key='item.id'>
              <td class="audio-tbodyLine-name">
                <img class="audio-tbodyLine-name-img" :src="item.src" alt="音频名称配图">
                <div class="audio-tbodyLine-name-wrapper">
                  <p class="audio-tbodyLine-name-title">{{item.title}}</p>
                  <p class="audio-tbodyLine-name-time">显示时间：&nbsp;{{item.time}}</p>
                </div>
              </td>
              <td class="audio-tbodyLine-price">¥&nbsp;{{item.price}}</td>
              <td class="audio-tbodyLine-subscribe">{{item.subscribe}}</td>
              <td class="audio-tbodyLine-accessData">{{item.accessData}}</td>
              <td class="audio-tbodyLine-comment">
                <router-link class="audio-tbodyLine-comment-link" :to="{ name: '' }">{{item.comment}}</router-link>
              </td>
              <td class="audio-tbodyLine-member">{{item.member}}</td>
              <td class="audio-tbodyLine-operator">
                <router-link v-if='item.isShow' class="audio-tbodyLine-operator-link" :to="{ name: '' }" @click.native='hide(item.id)'>隐藏</router-link>
                <router-link v-else class="audio-tbodyLine-operator-link" :to="{ name: '' }" @click.native='show(item.id)'>显示</router-link>
                <router-link class="audio-tbodyLine-operator-link" :to="{ name: '' }">编辑</router-link>
                <router-link class="audio-tbodyLine-operator-link" :to="{ name: '' }">更多</router-link>
              </td>
            </tr>
          </transition-group>
          <tbody v-else>
            <tr>
              <td colspan="7" class="noData">没有相应的数据</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
export default {
  components: {
    userTopNav
  },
  data () {
    return {
      selected: '2',
      allData: [],
      searchMessage: ''
    }
  },
  computed: {
    audioData () {
      return this.$store.state.userInfo.audioData
    },
    isShowData () {
      return this.audioData.filter(value => value.isShow === true)
    },
    isHideData () {
      return this.audioData.filter(value => value.isShow === false)
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        this.allData = this.audioData
        this.changeOption()
      }, 100)
    })
  },
  methods: {
    changeOption () {
      if (this.selected === '1') {
        this.allData = this.audioData
      } else if (this.selected === '2') {
        this.allData = this.isShowData
      } else if (this.selected === '3') {
        this.allData = this.isHideData
      }
    },
    hide (index) {
      this.$store.commit('hideAudioData', index)
      if (this.selected === '1') {
        this.allData = this.audioData
      } else {
        this.allData = this.isShowData
      }
    },
    show (index) {
      this.$store.commit('showAudioData', index)
      if (this.selected === '1') {
        this.allData = this.audioData
      } else {
        this.allData = this.isHideData
      }
    },
    showSearchResult () {
      this.allData = this.audioData.filter(value => value.title.includes(this.searchMessage))
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

.audio {
  @mixin components;
}

.audio-topNav {
  @mixin operator-above-table;
}

.audio-topNav-link {
  @mixin button-link;
  margin-right: auto;
}

.audio-topNav-link:hover {
  background-color: $dark-blue;
}

.audio-select {
  width: 116px;
  @mixin select;
}

.audio-input {
  width: 240px;
  @mixin input;
}

.audio-input:focus {
  border-color: $light-blue;
}

.audio-button {
  @mixin button-search;
}

.audio-button:hover {
  background-color: $background-color-1;
}

.audio-middleWrapper {
  @mixin caption-above-table;
}

.audio-middleWrapper-point {
  margin-left: 10px;
  color: $text-wraning;
}

.audio-middleWrapper-recycleBin {
  @mixin recycleBin-wrapper;
}

.audio-middleWrapper-recycleBin-img {
  @mixin recycleBin-img;
}

.table-container {
  padding: 0 20px;
}

.audio-table {
  @mixin table
}

.audio-thead {
  @mixin thead;
}

.audio-thead-name {
  width: 30%;
  @mixin table-left;
}

.audio-thead-price,
.audio-thead-subscribe,
.audio-thead-comment,
.audio-thead-subscribe,
.audio-thead-accessData {
  width: 10%;
}

.audio-thead-member,
.audio-thead-operator {
  width: 15%;
}

.audio-thead-operator {
  @mixin table-right;
}

.audio-tbodyLine {
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

.audio-tbodyLine:hover {
  background-color: $background-color-1;
}

.audio-tbodyLine-price,
.audio-tbodyLine-subscribe,
.audio-tbodyLine-comment,
.audio-tbodyLine-member,
.audio-tbodyLine-accessData {
  text-align: center;
}

.audio-tbodyLine-operator {
  @mixin table-right;
}

.audio-tbodyLine-name {
  @mixin table-left;
}

.audio-tbodyLine-name-wrapper {
  @mixin product-desc-wrapper;
}

.audio-tbodyLine-name-img {
  @mixin product-img;
}

.audio-tbodyLine-name-title {
  margin-bottom: 20px;
}

.audio-tbodyLine-name-time {
  color: $text-dark-color;
}

.audio-tbodyLine-comment-link{
  @mixin router-link-block;
}

.audio-tbodyLine-operator-link {
  @mixin router-link-inline-block;
  line-height: 1;
}

.audio-tbodyLine-operator-link:not(:last-child) {
  border-right: 1px solid $light-blue;
  padding: 0 10px;
}

.audio-tbodyLine-operator-link:last-child {
  padding-left: 10px;
}
</style>
