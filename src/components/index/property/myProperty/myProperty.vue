<template lang="html">
  <article class="myProperty">
    <div class="userAccount-caption">
      <span class="caption-title">自有服务号账户</span>
      <img class="caption-img userAccount-caption-img" src="./grey-prompt.png" alt="提示图标-惊叹号">
      <div class="userAccount-caption-prompt myProperty-prompt">
        <p class="caption-prompt-desc">自有服务号账户收入会直接存入您的服务号微信支付对应的账户，包含除去小鹅通知识助手账户收入的其他收入</p>
        <p class="caption-prompt-desc caption-prompt-desc-warning">小鹅通知识助手账户收入包含以下部分：</p>
        <ul class="caption-prompt-list">
          <li class="caption-prompt-item">您开通自有支付前的全部收入</li>
          <li class="caption-prompt-item">用户通过推广员推广购买产生的收入</li>
          <li class="caption-prompt-item">付费问答产生的收入</li>
        </ul>
      </div>
      <span class="caption-desc">请登录服务号微信商户平台查看详细对账单</span>
    </div>
    <div class="userAccount-dataContainer">
      <ul class="userAccount-dataContainer-list">
        <li class="userAccount-dataContainer-item">
          <p class="userAccount-dataContainer-item-desc">总收入（元）</p>
          <p class="userAccount-dataContainer-item-price">{{userAccountTotalIncome}}</p>
        </li>
        <li class="userAccount-dataContainer-item">
          <p class="userAccount-dataContainer-item-desc">今日收入（元）</p>
          <p class="userAccount-dataContainer-item-price">{{userAccountTodayIncome}}</p>
        </li>
      </ul>
    </div>
    <div class="xiaoeAccount-caption">
      <span class="caption-title">小鹅通知识助手账户</span>
      <img class="caption-img xiaoeAccount-caption-img" src="./grey-prompt.png" alt="提示图标-惊叹号">
      <div class="xiaoeAccount-caption-prompt myProperty-prompt">
        <p class="caption-prompt-desc">小鹅通知识助手账户收入暂存于小鹅通知识助手账户，您可随时进行提现</p>
        <p class="caption-prompt-desc caption-prompt-desc-warning">小鹅通知识助手账户收入包含以下部分：</p>
        <ul class="caption-prompt-list">
          <li class="caption-prompt-item">您开通自有支付前的全部收入</li>
          <li class="caption-prompt-item">用户通过推广员推广购买产生的收入</li>
          <li class="caption-prompt-item">付费问答产生的收入</li>
          <li class="caption-prompt-item">拼团产生的收入</li>
          <li class="caption-prompt-item">内容市场产生的收入</li>
        </ul>
        <p class="caption-prompt-desc caption-prompt-desc-warning">佣金支出包含以下部分：</p>
        <ul class="caption-prompt-list">
          <li class="caption-prompt-item">推广员成功推广获得的佣金</li>
          <li class="caption-prompt-item">推广员成功推广后，上级推广员获得的邀请奖励</li>
          <li class="caption-prompt-item">付费问答产生的分成支出（包括提问和围观）</li>
          <li class="caption-prompt-item">内容市场产生的内容分销支出</li>
        </ul>
      </div>
      <router-link class="caption-link" :to="{ name: '' }">查看小鹅通知识助手账户对账单</router-link>
    </div>
    <div class="xiaoeAccount-dataContainer">
      <ul class="xiaoeAccount-dataContainer-list">
        <li class="xiaoeAccount-dataContainer-item">
          <p class="xiaoeAccount-dataContainer-item-desc">总收入（元）</p>
          <p class="xiaoeAccount-dataContainer-item-price">{{userAccountTotalIncome}}</p>
        </li>
        <li class="xiaoeAccount-dataContainer-item">
          <p class="xiaoeAccount-dataContainer-item-desc">今日收入（元）</p>
          <p class="xiaoeAccount-dataContainer-item-price">{{userAccountTodayIncome}}</p>
        </li>
        <li class="xiaoeAccount-dataContainer-item">
          <p class="xiaoeAccount-dataContainer-item-desc">待结算（元）</p>
          <p class="xiaoeAccount-dataContainer-item-price">{{userAccountTodayIncome}}</p>
        </li>
        <li class="xiaoeAccount-dataContainer-item">
          <p class="xiaoeAccount-dataContainer-item-desc">可提现余额（元）<router-link class="xiaoeAccount-dataContainer-item-desc-link" :to="{ name: '' }">提现</router-link></p>
          <p class="xiaoeAccount-dataContainer-item-price">{{userAccountTodayIncome}}</p>
        </li>
      </ul>
    </div>
    <div class="myProperty-data-filter">
      <p class="myProperty-data-filter-desc">交易记录</p>
      <label for="myProperty-data-filter-input">订单号：</label>
      <input class="myProperty-data-filter-input" id="myProperty-data-filter-input" type="text" placeholder="请输入订单号">
      <select class="myProperty-data-filter-select">
        <option value="请选择时间范围" disabled selected>请选择时间范围</option>
        <option value="全部时间">全部时间</option>
        <option value="当月时间">当月时间</option>
        <img src="./calendar-icon.png" alt="图标-日历">
      </select>
      <button type="button" name="button" class="myProperty-data-filter-search">搜索</button>
      <button type="button" name="button" class="myProperty-data-filter-derive">导出交易记录</button>
    </div>
    <table class="myProperty-table">
      <thead>
        <tr class="myProperty-thead-tr">
          <th class="myProperty-thead-tradeTime">交易时间</th>
          <th class="myProperty-thead-productName">商品名称</th>
          <th class="myProperty-thead-productType">商品类型</th>
          <th class="myProperty-thead-tradeAccount">交易账户</th>
          <th class="myProperty-thead-money">金额（元）</th>
          <th class="myProperty-thead-tradeType">交易类型</th>
          <th class="myProperty-thead-status">状态</th>
          <th class="myProperty-thead-operator">操作</th>
        </tr>
      </thead>
      <tbody  v-if='myPropertyData.length > 0'>
        <tr class="myProperty-tbody-tr" v-for="item of myPropertyData" :key="item.id">
          <td class="myProperty-tbody-tradeTime">{{item.tradeTime}}</td>
          <td class="myProperty-tbody-productName">{{item.productName}}</td>
          <td class="myProperty-tbody-productType">{{item.productType}}</td>
          <td class="myProperty-tbody-tradeAccount">{{item.tradeAccount}}</td>
          <td class="myProperty-tbody-money">{{item.money}}</td>
          <td class="myProperty-tbody-tradeType">{{item.tradeType}}</td>
          <td class="myProperty-tbody-status">{{item.status}}</td>
          <td class="myProperty-tbody-operator"></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='8' class="no-myPropertyData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data () {
    return {
      userAccountTotalIncome: 0.00,
      userAccountTodayIncome: 0.00,
      myPropertyData: [
        // {
        //   id: 1,
        //   tradeTime: '',
        //   productName: '',
        //   productType: '',
        //   tradeAccount: '',
        //   money: '',
        //   tradeType: '',
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

.no-myPropertyData {
  @mixin no-data-in-table;
}

.userAccount-caption,
.xiaoeAccount-caption {
  display: flex;
  position: relative;
  line-height: 1;
  margin-bottom: 20px;
}

.caption-img {
  width: 16px;
  height: 16px;
  margin-left: 10px;
  vertical-align: middle;
  cursor: pointer;
}

.caption-desc,
.caption-link {
  display: inline-block;
  margin-left: auto;
}

.caption-desc {
  color: $text-light-color;
}

.caption-link {
  color: $light-blue;
}

.myProperty-prompt {
  width: 400px;
  line-height: 1.5;
  position: absolute;
  top: 130%;
  z-index: 9;
  padding: 20px;
  background-color: #fff;
  border: 1px solid $border-maincolor;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  visibility: hidden;
  opacity: 0;
  transition: .3s;
}

.userAccount-caption-prompt {
  left: 108px;
}

.xiaoeAccount-caption-prompt {
  left: 136px;
}

.userAccount-caption-img:hover + .userAccount-caption-prompt {
  visibility: visible;
  opacity: 1;
}

.xiaoeAccount-caption-img:hover + .xiaoeAccount-caption-prompt {
  visibility: visible;
  opacity: 1;
}

.caption-prompt-list {
  margin-bottom: 20px;
}

.caption-prompt-desc,
.caption-prompt-item {
  margin-bottom: 10px;
}

.caption-prompt-desc-warning {
  color: $text-wraning;
}

.caption-prompt-item {
  list-style-type: disc;
  list-style-position: inside;
}

.userAccount-dataContainer,
.xiaoeAccount-dataContainer {
  height: 100px;
  margin-bottom: 20px;
  padding: 20px 0;
  background-color: $background-color-7;
}

.userAccount-dataContainer-item {
  display: inline-block;
  width: 49%;
  text-align: center;
}

.xiaoeAccount-dataContainer-item {
  display: inline-block;
  width: 24%;
  text-align: center;
}

.userAccount-dataContainer-item:first-child {
  border-right: 1px solid $border-maincolor;
}

.xiaoeAccount-dataContainer-item:not(:last-child) {
  border-right: 1px solid $border-maincolor;
}

.userAccount-dataContainer-item-desc,
.xiaoeAccount-dataContainer-item-desc {
  color: $text-light-color;
  margin-bottom: 10px;
}

.userAccount-dataContainer-item-price,
.xiaoeAccount-dataContainer-item-price {
  font-size: 20px;
}

.xiaoeAccount-dataContainer-item-desc-link {
  color: $light-blue;
}

.myProperty-data-filter {
  display: flex;
  align-items: center;
  line-height: 1;
  margin-bottom: 20px;
}

.myProperty-data-filter-desc {
  padding-left: 10px;
  margin-right: auto;
  border-left: 2px solid $light-blue;
}

.myProperty-data-filter-input,
.myProperty-data-filter-select {
  width: 220px;
  height: 36px;
  line-height: 36px;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid $border-maincolor;
  transition: .3s;
}

.myProperty-data-filter-input {
  margin: 0 10px;
}

.myProperty-data-filter-input:hover,
.myProperty-data-filter-input:focus {
  border-color: $light-blue;
}

.myProperty-data-filter-search {
  @mixin button-filter;
  margin-left: 10px;
}

.myProperty-data-filter-derive {
  @mixin button-main;
  margin-left: 10px;
}

.myProperty-data-filter-search:hover {
  background-color: $dark-blue;
}

.myProperty-data-filter-derive:hover {
  background-color: $background-color-1;
}

.myProperty-table {
  @mixin table;
  color: $text-dark-color;
  font-size: 12px;
}

.myProperty-thead-tr {
  @mixin thead;
}

.myProperty-tbody-tr {
  @mixin tr-medium;
}

.myProperty-tbody-tr:hover {
  background-color: $background-color-1;
}

.myProperty-thead-tradeTime,
.myProperty-tbody-tradeTime {
  @mixin table-left;
}

.myProperty-thead-operator,
.myProperty-tbody-operator {
  @mixin table-right;
}

.myProperty-thead-tradeTime,
.myProperty-thead-productName,
.myProperty-thead-tradeAccount,
.myProperty-thead-tradeType {
  width: 15%;
}

.myProperty-thead-productType,
.myProperty-thead-money,
.myProperty-thead-status,
.myProperty-thead-operator {
  width: 10%;
}

.myProperty-tbody-productName,
.myProperty-tbody-productType,
.myProperty-tbody-tradeAccount,
.myProperty-tbody-money,
.myProperty-tbody-tradeType,
.myProperty-tbody-status,
.myProperty-tbody-operator {
  text-align: center;
}
</style>
