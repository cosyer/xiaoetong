<template lang="html">
  <article class="messageList">
    <div class="messageList-caption">
      <button class="messageList-caption-button" type="button" name="button">推送全员消息</button>
      <router-link class="messageList-caption-link" :to="{ name: '' }">如何给用户发消息</router-link>
      <div class="messageList-caption-searchWrapper">
        <select class="messageList-caption-select">
          <option value="全部" selected>全部</option>
          <option value="私人">私人</option>
          <option value="群发">群发</option>
        </select>
        <select class="messageList-caption-select">
          <option value="内容" selected>内容</option>
          <option value="发送人">发送人</option>
          <option value="接收人">接收人</option>
        </select>
        <input class="messageList-caption-input" type="text" placeholder="请输入搜索内容"><button class="messageList-caption-searchButton" type="button" name="button">搜素</button>
      </div>
    </div>
    <table class="messageList-table">
      <thead>
        <tr class="messageList-thead-tr">
          <th class="messageList-thead-type">类型</th>
          <th class="messageList-thead-sender">发送人</th>
          <th class="messageList-thead-recipient">接收人</th>
          <th class="messageList-thead-messageContent">消息内容</th>
          <th class="messageList-thead-sendTime">发送时间</th>
          <th class="messageList-thead-status">状态</th>
          <th class="messageList-thead-operator">操作</th>
        </tr>
      </thead>
      <tbody v-if='messageListData.length > 0'>
        <tr class="messageList-tbody-tr" v-for='item of messageListData' :key='item.id'>
          <td class="messageList-tbody-type">{{item.type}}</td>
          <td class="messageList-tbody-sender">{{item.sender}}</td>
          <td class="messageList-tbody-recipient">{{item.recipient}}</td>
          <td class="messageList-tbody-messageContent">{{item.messageContent}}</td>
          <td class="messageList-tbody-sendTime">{{item.sendTime}}</td>
          <td class="messageList-tbody-status">{{item.status}}</td>
          <td class="messageList-tbody-operator">
            <router-link class="messageList-tbody-link" :to="{ name: '' }">删除</router-link>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='7' class="no-messageListData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data () {
    return {
      messageListData: [
        // {
        //   id: 1,
        //   type: '',
        //   sender: '',
        //   recipient: '',
        //   messageContent: '',
        //   sendTime: '',
        //   status: ''
        // }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.no-messageListData {
  @mixin no-data-in-table;
}

.messageList-caption {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.messageList-caption-button {
  @mixin button-filter;
  width: 120px;
}

.messageList-caption-link {
  @mixin router-link-inline-block;
  margin-left: 30px;
}

.messageList-caption-searchWrapper {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.messageList-caption-select,
.messageList-caption-input,
.messageList-caption-searchButton {
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  color: $text-dark-color;
  border: 1px solid $border-maincolor;
}

.messageList-caption-select {
  width: 110px;
  margin-right: 10px;
}

.messageList-caption-input {
  width: 160px;
}

.messageList-caption-searchButton {
  width: 70px;
  cursor: pointer;
  outline: none;
  background-color: $background-color-8;
  border-radius: 2px;
  border-left: none;
}

.messageList-caption-searchButton:hover {
  background-color: $background-color-3;
}

.messageList-table {
  @mixin table;
  color: $text-dark-color;
}

.messageList-thead-tr {
  @mixin thead;
}

.messageList-tbody-tr {
  @mixin tr-medium;
}

.messageList-tbody-tr:hover {
  background-color: $background-color-1;
}

.messageList-thead-type,
.messageList-tbody-type {
  @mixin table-left;
}

.messageList-thead-operator,
.messageList-tbody-operator {
  @mixin table-right;
}

.messageList-thead-type,
.messageList-thead-sender,
.messageList-thead-recipient,
.messageList-thead-status,
.messageList-thead-operator {
  width: 10%;
}

.messageList-thead-messageContent {
  width: 30%;
}

.messageList-thead-sendTime {
  width: 20%;
}

.messageList-tbody-sender,
.messageList-tbody-recipient,
.messageList-tbody-messageContent,
.messageList-tbody-sendTime,
.messageList-tbody-status {
  text-align: center;
}

.messageList-tbody-link {
  @mixin router-link-inline-block;
}
</style>
