<template lang="html">
  <div>
    <userTopNav>
      <slot>直播</slot>
    </userTopNav>
    <section class="liveTelecast">
      <div class="liveTelecast-topNav">
        <router-link class="liveTelecast-topNav-link" :to="{ name: '' }">新建直播</router-link>
        <select class="liveTelecast-select">
          <option class="liveTelecast-select-option" value='全部'>全部</option>
          <option class="liveTelecast-select-option" value='显示' selected>显示</option>
          <option class="liveTelecast-select-option" value='隐藏'>隐藏</option>
        </select>
        <select class="liveTelecast-select">
          <option class="liveTelecast-select-option" value='直播类型' selected disabled>直播类型</option>
          <option class="liveTelecast-select-option" value='语音直播'>语音直播</option>
          <option class="liveTelecast-select-option" value='录屏 + 语音'>录屏 + 语音</option>
          <option class="liveTelecast-select-option" value='实时直播'>实时直播</option>
          <option class="liveTelecast-select-option" value='PPT + 语音'>PPT + 语音</option>
        </select>
        <label for="liveTelecast-input" class="liveTelecast-label">
          <input id="liveTelecast-input" class="liveTelecast-input" type="text" placeholder='输入直播名称'>
        </label>
        <button class="liveTelecast-button" type="button" name="button">搜索</button>
      </div>
      <div class="liveTelecast-middleWrapper">
        <p class="liveTelecast-middleWrapper-desc">直播列表（&nbsp;{{liveTelecastLength}}&nbsp;条）</p>
        <p class="liveTelecast-middleWrapper-point">注意：这里只展示设置了单卖的直播</p>
        <p class="liveTelecast-middleWrapper-recycleBin">
          <img class="liveTelecast-middleWrapper-recycleBin-img" src="./icon-delete.svg" alt="回收站图标-垃圾桶">
          <span>回收站</span>
        </p>
      </div>
      <div class="table-container">
        <table class="liveTelecast-table">
          <thead>
            <tr class="liveTelecast-thead">
              <th class="liveTelecast-thead-name">直播名称</th>
              <th class="liveTelecast-thead-type">类型</th>
              <th class="liveTelecast-thead-price">价格</th>
              <th class="liveTelecast-thead-subscribe">订阅量</th>
              <th class="liveTelecast-thead-comment">评论数</th>
              <th class="liveTelecast-thead-reward">打赏金额</th>
              <th class="liveTelecast-thead-member">关联专栏/会员</th>
              <th class="liveTelecast-thead-operator">操作</th>
            </tr>
          </thead>
          <tbody v-if="liveTelecastData.length > 0">
            <tr class="liveTelecast-tbodyLine" v-for='item of liveTelecastData' :key='item.id'>
              <td class="liveTelecast-tbodyLine-name">
                <img class="liveTelecast-tbodyLine-name-img" :src="item.src" alt="直播名称配图">
                <div class="liveTelecast-tbodyLine-name-wrapper">
                  <p class="liveTelecast-tbodyLine-name-title">{{item.title}}</p>
                  <p class="liveTelecast-tbodyLine-name-time">显示时间：&nbsp;{{item.time}}</p>
                </div>
              </td>
              <td class="liveTelecast-tbodyLine-type">{{item.type}}</td>
              <td class="liveTelecast-tbodyLine-price">¥&nbsp;{{item.price}}</td>
              <td class="liveTelecast-tbodyLine-subscribe">{{item.subscribe}}</td>
              <td class="liveTelecast-tbodyLine-comment">
                <router-link class="liveTelecast-tbodyLine-comment-link" :to="{ name: '' }">{{item.comment}}</router-link>
              </td>
              <td class="liveTelecast-tbodyLine-reward">{{item.reward}}</td>
              <td class="liveTelecast-tbodyLine-member">{{item.member}}</td>
              <td class="liveTelecast-tbodyLine-operator">
                <router-link class="liveTelecast-tbodyLine-operator-link" :to="{ name: '' }">隐藏</router-link>
                <router-link class="liveTelecast-tbodyLine-operator-link" :to="{ name: '' }">编辑</router-link>
                <router-link class="liveTelecast-tbodyLine-operator-link" :to="{ name: '' }">更多</router-link>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="8" class="noData">没有相应的数据</td>
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
      liveTelecastLength: '',
      liveTelecastData: [
        // {
        //   id: '',
        //   src: '',
        //   title: '',
        //   time: '',
        //   type: '',
        //   price: '',
        //   subscribe: '',
        //   comment: '',
        //   reward: '',
        //   member: ''
        // }
      ]
    }
  },
  computed: {
    //
  },
  mounted () {
    this.$nextTick(() => {
      this.getliveTelecastLength()
    })
  },
  methods: {
    getliveTelecastLength () {
      this.liveTelecastLength = this.liveTelecastData.length
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

.liveTelecast {
  @mixin components;
}

.liveTelecast-topNav {
  @mixin operator-above-table;
}

.liveTelecast-topNav-link {
  @mixin button-link;
  margin-right: auto;
}

.liveTelecast-topNav-link:hover {
  background-color: $dark-blue;
}

.liveTelecast-select {
  width: 116px;
  @mixin select;
}

.liveTelecast-input {
  width: 240px;
  @mixin input;
}

.liveTelecast-input:focus {
  border-color: $light-blue;
}

.liveTelecast-button {
  @mixin button-search;
}

.liveTelecast-middleWrapper {
  @mixin caption-above-table;
}

.liveTelecast-middleWrapper-point {
  margin-left: 10px;
  color: $text-wraning;
}

.liveTelecast-middleWrapper-recycleBin {
  @mixin recycleBin-wrapper;
}

.liveTelecast-middleWrapper-recycleBin-img {
  @mixin recycleBin-img;
}

.table-container {
  padding: 0 20px;
}

.liveTelecast-table {
  @mixin table
}

.liveTelecast-thead {
  @mixin thead;
}

.liveTelecast-thead-name {
  width: 30%;
  @mixin table-left;
}

.liveTelecast-thead-type,
.liveTelecast-thead-price,
.liveTelecast-thead-subscribe,
.liveTelecast-thead-comment,
.liveTelecast-thead-reward,
.liveTelecast-thead-accessData {
  width: 8%;
}

.liveTelecast-thead-member,
.liveTelecast-thead-operator {
  width: 11%;
}

.liveTelecast-thead-operator {
  @mixin table-right;
}

.liveTelecast-tbodyLine {
  @mixin tr;
  transition: .8s;  /*单行列表过渡时间*/
}

.liveTelecast-tbodyLine:hover {
  background-color: $background-color-1;
}

.liveTelecast-thead-type
.liveTelecast-tbodyLine-price,
.liveTelecast-tbodyLine-subscribe,
.liveTelecast-tbodyLine-comment,
.liveTelecast-thead-reward,
.liveTelecast-tbodyLine-member,
.liveTelecast-thead-accessDat {
  text-align: center;
}

.liveTelecast-tbodyLine-operator {
  @mixin table-right;
}

.liveTelecast-tbodyLine-name {
  @mixin table-left;
}

.liveTelecast-tbodyLine-name-wrapper {
  @mixin product-desc-wrapper;
}

.liveTelecast-tbodyLine-name-img {
  @mixin product-img;
}

.liveTelecast-tbodyLine-name-title {
  margin-bottom: 20px;
}

.liveTelecast-tbodyLine-name-time {
  color: $text-dark-color;
}

.liveTelecast-tbodyLine-comment-link{
  display: block;
  color: $light-blue;
}

.liveTelecast-tbodyLine-operator-link {
  display: inline-block;
  color: $light-blue;
  line-height: 1;
}

.liveTelecast-tbodyLine-operator-link:not(:last-child) {
  border-right: 1px solid $light-blue;
  padding: 0 10px;
}

.liveTelecast-tbodyLine-operator-link:last-child {
  padding-left: 10px;
}
</style>
