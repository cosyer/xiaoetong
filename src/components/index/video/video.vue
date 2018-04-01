<template lang="html">
  <div>
    <userTopNav>
      <slot>视频</slot>
    </userTopNav>
    <section class="video">
      <div class="video-topNav">
        <router-link class="video-topNav-link" :to="{ name: '' }">新建视频</router-link>
        <select class="video-select">
          <option class="video-select-option" value='全部'>全部</option>
          <option class="video-select-option" value='显示' selected>显示</option>
          <option class="video-select-option" value='隐藏'>隐藏</option>
        </select>
        <label for="video-input" class="video-label">
          <input id="video-input" class="video-input" type="text" placeholder='输入视频名称'>
        </label>
        <button class="video-button" type="button" name="button">搜索</button>
      </div>
      <div class="video-middleWrapper">
        <p class="video-middleWrapper-desc">视频列表（&nbsp;{{videoLength}}&nbsp;条）</p>
        <p class="video-middleWrapper-point">注意：这里只展示设置了单卖的视频</p>
        <p class="video-middleWrapper-recycleBin">
          <img class="video-middleWrapper-recycleBin-img" src="./icon-delete.svg" alt="回收站图标-垃圾桶">
          <span>回收站</span>
        </p>
      </div>
      <div class="table-container">
        <table class="video-table">
          <thead>
            <tr class="video-thead">
              <th class="video-thead-name">视频名称</th>
              <th class="video-thead-price">价格</th>
              <th class="video-thead-subscribe">订阅量</th>
              <th class="video-thead-comment">评论数</th>
              <th class="video-thead-member">关联专栏/会员</th>
              <th class="video-thead-operator">操作</th>
            </tr>
          </thead>
          <tbody v-if="videoData.length > 0">
            <tr class="video-tbodyLine" v-for='item of videoData' :key='item.id'>
              <td class="video-tbodyLine-name">
                <img class="video-tbodyLine-name-img" :src="item.src" alt="视频名称配图">
                <div class="video-tbodyLine-name-wrapper">
                  <p class="video-tbodyLine-name-title">{{item.title}}</p>
                  <p class="video-tbodyLine-name-time">显示时间：&nbsp;{{item.time}}</p>
                </div>
              </td>
              <td class="video-tbodyLine-price">¥&nbsp;{{item.price}}</td>
              <td class="video-tbodyLine-subscribe">{{item.subscribe}}</td>
              <td class="video-tbodyLine-comment">
                <router-link class="video-tbodyLine-comment-link" :to="{ name: '' }">{{item.comment}}</router-link>
              </td>
              <td class="video-tbodyLine-member">{{item.member}}</td>
              <td class="video-tbodyLine-operator">
                <router-link class="video-tbodyLine-operator-link" :to="{ name: '' }">隐藏</router-link>
                <router-link class="video-tbodyLine-operator-link" :to="{ name: '' }">编辑</router-link>
                <router-link class="video-tbodyLine-operator-link" :to="{ name: '' }">更多</router-link>
              </td>
            </tr>
          </tbody>
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
export default {
  components: {
    userTopNav
  },
  data () {
    return {
      videoLength: '',
      videoData: [
        // {
        //   id: '',
        //   src: '',
        //   title: '',
        //   time: '',
        //   price: '',
        //   subscribe: '',
        //   comment: '',
        //   member: ''
        // }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.getvideoLength()
    })
  },
  methods: {
    getvideoLength () {
      this.videoLength = this.videoData.length
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

.video {
  @mixin components;
}

.video-topNav {
  @mixin operator-above-table;
}

.video-topNav-link {
  @mixin button-link;
  margin-right: auto;
}

.video-topNav-link:hover {
  background-color: $dark-blue;
}

.video-select {
  width: 116px;
  @mixin select;
}

.video-input {
  width: 240px;
  @mixin input;
}

.video-input:focus {
  border-color: $light-blue;
}

.video-button {
  @mixin button-search;
}

.video-middleWrapper {
  @mixin caption-above-table;
}

.video-middleWrapper-point {
  margin-left: 10px;
  color: $text-wraning;
}

.video-middleWrapper-recycleBin {
  @mixin recycleBin-wrapper;
}

.video-middleWrapper-recycleBin-img {
  @mixin recycleBin-img;
}

.table-container {
  padding: 0 20px;
}

.video-table {
  @mixin table
}

.video-thead {
  @mixin thead;
}

.video-thead-name {
  width: 30%;
  @mixin table-left;
}

.video-thead-price,
.video-thead-subscribe,
.video-thead-comment,
.video-thead-subscribe {
  width: 10%;
}

.video-thead-member,
.video-thead-operator {
  width: 20%;
}

.video-thead-operator {
  @mixin table-right;
}

.video-tbodyLine {
  @mixin tr;
  transition: .8s;  /*单行列表过渡时间*/
}

.video-tbodyLine:hover {
  background-color: $background-color-1;
}

.video-tbodyLine-price,
.video-tbodyLine-subscribe,
.video-tbodyLine-comment,
.video-tbodyLine-member {
  text-align: center;
}

.video-tbodyLine-operator {
  @mixin table-right;
}

.video-tbodyLine-name {
  @mixin table-left;
}

.video-tbodyLine-name-wrapper {
  @mixin product-desc-wrapper;
}

.video-tbodyLine-name-img {
  @mixin product-img;
}

.video-tbodyLine-name-title {
  margin-bottom: 20px;
}

.video-tbodyLine-name-time {
  color: $text-dark-color;
}

.video-tbodyLine-comment-link{
  display: block;
  color: $light-blue;
}

.video-tbodyLine-operator-link {
  display: inline-block;
  color: $light-blue;
  line-height: 1;
}

.video-tbodyLine-operator-link:not(:last-child) {
  border-right: 1px solid $light-blue;
  padding: 0 10px;
}

.video-tbodyLine-operator-link:last-child {
  padding-left: 10px;
}
</style>
