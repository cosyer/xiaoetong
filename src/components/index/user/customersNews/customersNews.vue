<template lang="html">
  <article class="customersNews">
    <div class="customersNews-caption">
      <div class="customersNews-caption-searchWrapper">
        <select class="customersNews-caption-select">
          <option value="全部来源" selected>全部来源</option>
          <option value="公众号">公众号</option>
          <option value="微信投诉">微信投诉</option>
        </select>
        <select class="customersNews-caption-select">
          <option value="内容" selected>内容</option>
          <option value="昵称">昵称</option>
        </select>
        <input class="customersNews-caption-input" type="text" placeholder="请输入搜索内容"><button class="customersNews-caption-searchButton" type="button" name="button">搜素</button>
      </div>
    </div>
    <table class="customersNews-table">
      <thead>
        <tr class="customersNews-thead-tr">
          <th class="customersNews-thead-img">头像</th>
          <th class="customersNews-thead-name">昵称</th>
          <th class="customersNews-thead-content">内容</th>
          <th class="customersNews-thead-feedbackTime">反馈时间</th>
          <th class="customersNews-thead-from">来源</th>
          <th class="customersNews-thead-replyTime">最新回复时间</th>
          <th class="customersNews-thead-operator">操作</th>
        </tr>
      </thead>
      <tbody v-if='customersNewsData.length > 0'>
        <tr class="customersNews-tbody-tr" v-for='item of customersNewsData' :key='item.id'>
          <td class="customersNews-tbody-img">
            <img :src="item.imgSrc" alt="用户头像">
          </td>
          <td class="customersNews-tbody-name">{{item.name}}</td>
          <td class="customersNews-tbody-content">{{item.content}}</td>
          <td class="customersNews-tbody-feedbackTime">{{item.feedbackTime}}</td>
          <td class="customersNews-tbody-from">{{item.from}}</td>
          <td class="customersNews-tbody-replyTime">{{item.replyTime}}</td>
          <td class="customersNews-tbody-operator">
            <router-link class="customersNews-tbody-link" :to="{ name: '' }">删除</router-link>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='7' class="no-customersNewsData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data () {
    return {
      customersNewsData: [
        // {
        //   id: 1,
        //   imgSrc: require('/'),
        //   name: '',
        //   content: '',
        //   feedbackTime: '',
        //   from: '',
        //   replyTime: ''
        // }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.no-customersNewsData {
  @mixin no-data-in-table;
}

.customersNews-caption {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.customersNews-caption-searchWrapper {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.customersNews-caption-select,
.customersNews-caption-input,
.customersNews-caption-searchButton {
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  color: $text-dark-color;
  border: 1px solid $border-maincolor;
}

.customersNews-caption-select {
  width: 110px;
  margin-right: 10px;
}

.customersNews-caption-input {
  width: 160px;
}

.customersNews-caption-searchButton {
  width: 70px;
  cursor: pointer;
  outline: none;
  background-color: $background-color-8;
  border-radius: 2px;
  border-left: none;
}

.customersNews-caption-searchButton:hover {
  background-color: $background-color-3;
}

.customersNews-table {
  @mixin table;
  color: $text-dark-color;
}

.customersNews-thead-tr {
  @mixin thead;
}

.customersNews-tbody-tr {
  @mixin tr-medium;
}

.customersNews-tbody-tr:hover {
  background-color: $background-color-1;
}

.customersNews-thead-img,
.customersNews-tbody-img {
  @mixin table-left;
}

.customersNews-thead-operator,
.customersNews-tbody-operator {
  @mixin table-right;
}

.customersNews-thead-img,
.customersNews-thead-name,
.customersNews-thead-content,
.customersNews-thead-from,
.customersNews-thead-operator {
  width: 12%;
}

.customersNews-thead-feedbackTime,
.customersNews-thead-replyTime {
  width: 20%;
}

.customersNews-tbody-name,
.customersNews-tbody-content,
.customersNews-tbody-feedbackTime,
.customersNews-tbody-from,
.customersNews-tbody-replyTime {
  text-align: center;
}

.customersNews-tbody-link {
  @mixin router-link-inline-block;
}
</style>
