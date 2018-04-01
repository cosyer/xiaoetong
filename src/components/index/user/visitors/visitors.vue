<template lang="html">
  <article class="visitors">
    <div class="visitors-caption">
      <button class="visitors-caption-button" type="button" name="button">导出消费用户</button>
      <div class="visitors-caption-wrapper">
        <router-link class="visitors-caption-link" :to="{ name: '', params: {} }">设置</router-link>
        <span class="visitors-caption-wrapper-desc">信息采集项</span>
        <img class="visitors-caption-img" src="./grey-prompt.png" alt="提示图标-惊叹号">
        <div class="visitors-caption-prompt">
          <p>设置完成后，消费用户在付费购买单品/专栏/会员前需填写您自定义的用户信息采集项，您可以在单品/专栏/会员详情页开启。采集后的信息将在用户详情页显示，也可以通过导出消费用户列表查看。</p>
        </div>
      </div>
      <div class="visitors-caption-searchWrapper">
        <select class="visitors-caption-select">
          <option value="所有" selected>所有</option>
          <option value="已消费">已消费</option>
          <option value="黑名单">黑名单</option>
        </select>
        <select class="visitors-caption-select">
          <option value="所有" selected>手机号码</option>
          <option value="已消费">昵称</option>
        </select>
        <input class="visitors-caption-input" type="text" placeholder="请输入搜索内容"><button class="visitors-caption-searchButton" type="button" name="button">搜素</button>
      </div>
    </div>
    <table class="visitors-table">
      <thead>
        <tr class="visitors-thead-tr">
          <th class="visitors-thead-imgAndName">头像/昵称</th>
          <th class="visitors-thead-phoneNum">手机号码</th>
          <th class="visitors-thead-wxNum">微信号</th>
          <th class="visitors-thead-creationTime">用户创建时间</th>
          <th class="visitors-thead-operator">操作</th>
        </tr>
      </thead>
      <tbody v-if='visitorsData.length > 0'>
        <tr class="visitors-tbody-tr" v-for='item of visitorsData' :key='item.id'>
          <td class="visitors-tbody-imgAndName">
            <img class="visitors-tbody-imgAndName-img" :src="item.src" alt="用户头像">
            <span class="visitors-tbody-imgAndName-name">{{item.name}}</span>
          </td>
          <td class="visitors-tbody-phoneNum">{{item.phoneNum}}</td>
          <td class="visitors-tbody-wxNum">{{item.wxNum}}</td>
          <td class="visitors-tbody-creationTime">{{item.creationTime}}</td>
          <td class="visitors-tbody-operator">
            <router-link class="visitors-tbody-link" :to="{ name: '', params: {} }">详情</router-link>
            <router-link class="visitors-tbody-link" :to="{ name: '', params: {} }">发消息</router-link>
            <router-link class="visitors-tbody-link" :to="{ name: '', params: {} }">加入黑名单</router-link>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='5' class="no-visitorsData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data () {
    return {
      // visitorsData: [
      //   {
      //     id: 1,
      //     src: require('./user.jpg'),
      //     name: '舒仔',
      //     phoneNum: '13715309863',
      //     wxNum: 'xiao-shuzai',
      //     creationTime: '2018-02-17 23:36:51'
      //   }
      // ]
    }
  },
  computed: {
    visitorsData () {
      return this.$store.state.userInfo.visitorsData
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.no-visitorsData {
  @mixin no-data-in-table;
}

.visitors-caption {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.visitors-caption-button {
  @mixin button-filter;
  width: 120px;
}

.visitors-caption-wrapper {
  position: relative;
  margin-left: 30px;
  line-height: 1;
}

.visitors-caption-link {
  color: $light-blue;
  vertical-align: middle;
}

.visitors-caption-wrapper-desc {
  vertical-align: middle;
}

.visitors-caption-img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
  cursor: pointer;
}

.visitors-caption-prompt {
  width: 400px;
  position: absolute;
  top: 160%;
  left: 86%;
  line-height: 2;
  padding: 10px;
  background-color: #fff;
  border: 1px solid $border-maincolor;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  visibility: hidden;
  opacity: 0;
  transition: .3s;
}

.visitors-caption-img:hover + .visitors-caption-prompt {
  visibility: visible;
  opacity: 1;
}

.visitors-caption-searchWrapper {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.visitors-caption-select,
.visitors-caption-input,
.visitors-caption-searchButton {
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  color: $text-dark-color;
  border: 1px solid $border-maincolor;
}

.visitors-caption-select {
  width: 110px;
  margin-right: 10px;
}

.visitors-caption-input {
  width: 160px;
}

.visitors-caption-searchButton {
  width: 70px;
  cursor: pointer;
  outline: none;
  background-color: $background-color-8;
  border-radius: 2px;
  border-left: none;
}

.visitors-caption-searchButton:hover {
  background-color: $background-color-3;
}

.visitors-table {
  @mixin table;
  color: $text-dark-color;
}

.visitors-thead-tr {
  @mixin thead;
}

.visitors-tbody-tr {
  @mixin tr-medium;
}

.visitors-tbody-tr:hover {
  background-color: $background-color-1;
}

.visitors-thead-imgAndName,
.visitors-tbody-imgAndName {
  @mixin table-left;
}

.visitors-thead-imgAndName,
.visitors-thead-operator {
  width: 25%;
}

.visitors-thead-phoneNum,
.visitors-thead-wxNum {
  width: 15%;
}

.visitors-thead-creationTime {
  width: 20%;
}

.visitors-thead-operator,
.visitors-tbody-operator {
  @mixin table-right;
}

.visitors-tbody-phoneNum,
.visitors-tbody-wxNum,
.visitors-tbody-creationTime {
  text-align: center;
}

.visitors-tbody-imgAndName-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}

.visitors-tbody-link {
  @mixin router-link-inline-block;
  line-height: 1;
  padding: 0 10px;
}

.visitors-tbody-link:last-child {
  padding-right: 0;
}

.visitors-tbody-link:not(:first-child) {
  border-left: 1px solid $light-blue;
}
</style>
