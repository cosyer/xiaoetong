<template lang="html">
  <article class="serviceSubscription">
    <div v-if='!isPaid'>
      <p class="deadline-ifo">7&nbsp;天试用期已于&nbsp;{{deadline}}&nbsp;过期，建议立即升级以确保服务正常使用。</p>
    </div>
    <h2 class="serviceSubscription-title">七天试用版</h2>
    <p class="serviceSubscription-desc">升级后可继续享受以下权益：&nbsp;&nbsp;<a class="serviceSubscription-desc-link" href="https://www.xiaoe-tech.com/version_price" target="_blank">查看价格详情页</a></p>
    <ul class="serviceSubscription-list">
      <li class="serviceSubscription-item">单品、直播、专栏等付费内容展现形式</li>
      <li class="serviceSubscription-item">轮播图、分类导航等个性化店铺装修功能</li>
      <li class="serviceSubscription-item">浏览、购买支持PC端操作</li>
      <li class="serviceSubscription-item">促进内容裂变式传播的多种营销工具</li>
      <li class="serviceSubscription-item">实现圈层化管理，精细化运营的社群工具</li>
      <li class="serviceSubscription-item">用户管理、消息触达</li>
      <li class="serviceSubscription-item">订单管理实现观测内容变现效果</li>
      <li class="serviceSubscription-item">数据化监控店铺运营效果</li>
      <li class="serviceSubscription-item">管理员和子账号权限管理</li>
    </ul>
    <div class="serviceSubscription-standard">
      <h3 class="serviceSubscription-standard-title">小鹅通标准版一季度</h3>
      <p class="serviceSubscription-standard-desc">[小鹅通知识店铺标准版 3 个月使用时长]</p>
      <div class="serviceSubscription-standard-wrapper">
        <p class="serviceSubscription-standard-currentPrice">1800<span class="serviceSubscription-standard-currentPrice-RMB">元</span></p>
      </div>
      <router-link class="serviceSubscription-standard-link" :to="{ name: '' }">立即升级</router-link>
    </div>
    <div class="serviceSubscription-standard serviceSubscription-standard-recommend">
      <h3 class="serviceSubscription-standard-title">小鹅通标准版一年期</h3>
      <p class="serviceSubscription-standard-desc">[小鹅通知识店铺标准版 12 个月使用时长]</p>
      <div class="serviceSubscription-standard-wrapper">
        <p class="serviceSubscription-standard-currentPrice">4800<span class="serviceSubscription-standard-currentPrice-RMB">元</span></p>
        <p class="serviceSubscription-standard-originalPrice"><span class="serviceSubscription-standard-originalPrice-discounts">可劲省33%</span><del>7200元</del></p>
      </div>
      <router-link class="serviceSubscription-standard-link" :to="{ name: '' }">立即升级</router-link>
    </div>
    <div class="serviceSubscription-standard serviceSubscription-standard-recommend">
      <h3 class="serviceSubscription-standard-title">小鹅通标准版二年期</h3>
      <p class="serviceSubscription-standard-desc">[小鹅通知识店铺标准版 24 个月使用时长]</p>
      <div class="serviceSubscription-standard-wrapper">
        <p class="serviceSubscription-standard-currentPrice">8800<span class="serviceSubscription-standard-currentPrice-RMB">元</span></p>
        <p class="serviceSubscription-standard-originalPrice"><span class="serviceSubscription-standard-originalPrice-discounts">可劲省39%</span><del>14400元</del></p>
      </div>
      <router-link class="serviceSubscription-standard-link" :to="{ name: '' }">立即升级</router-link>
    </div>
    <h3 class="serviceSubscription-orderRecord">订购记录</h3>
    <table class="serviceSubscription-table">
      <thead>
        <tr class="serviceSubscription-thead-tr">
          <th class="serviceSubscription-thead-buy">购买服务</th>
          <th class="serviceSubscription-thead-serviceTime">服务时长</th>
          <th class="serviceSubscription-thead-buyTime">消费时间</th>
          <th class="serviceSubscription-thead-mode">支付方式</th>
          <th class="serviceSubscription-thead-price">金额（元）</th>
          <th class="serviceSubscription-thead-state">状态</th>
          <th class="serviceSubscription-thead-operator">操作</th>
        </tr>
      </thead>
      <tbody v-if='serviceSubscriptionData.length > 0'>
        <tr class="serviceSubscription-tbody-tr" v-for='item of serviceSubscriptionData' :key='item.id'>
          <td class="serviceSubscription-tbody-buy">{{item.buy}}</td>
          <td class="serviceSubscription-tbody-serviceTime">{{item.serviceTime}}</td>
          <td class="serviceSubscription-tbody-buyTime">{{item.buyTime}}</td>
          <td class="serviceSubscription-tbody-mode">{{item.mode}}</td>
          <td class="serviceSubscription-tbody-price">{{item.price}}</td>
          <td class="serviceSubscription-tbody-state">{{item.state}}</td>
          <td class="serviceSubscription-tbody-operator" v-if='!isOperator'>
            <router-link class="serviceSubscription-tbody-operator-link" :to="{ name: '' }">去支付</router-link>
            <span class="serviceSubscription-tbody-operator-cancel">取消</span>
          </td>
          <td v-else class="serviceSubscription-tbody-operator">--</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='7' class="no-serviceSubscriptionData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data () {
    return {
      isPaid: false,
      isOperator: false,
      deadline: '2018-01-24 23:36:40',
      serviceSubscriptionData: [
        // {
        //   id: 1,
        //   buy: '小鹅通标准版一季度',
        //   serviceTime: '3月',
        //   buyTime: '2018-02-16 14:28:03',
        //   mode: '微信支付',
        //   price: '1,800.00',
        //   state: '待支付'
        // }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.no-serviceSubscriptionData {
  @mixin no-data-in-table;
}

.deadline-ifo {
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  font-size: 12px;
  background-color: $background-color-13;
  border: solid 1px $border-light-yellow;
}

.serviceSubscription-title {
  margin-top: 20px;
}

.serviceSubscription-desc {
  margin: 10px 0;
  color: $text-light-color;
}

.serviceSubscription-desc-link {
  color: $light-blue;
}

.serviceSubscription-list {
  width: 1050px;
  padding-left: 20px;
  overflow: hidden;
}

.serviceSubscription-item {
  width: 33%;
  height: 54px;
  line-height: 54px;
  float: left;
  list-style-type: disc;
}

.serviceSubscription-standard {
  height: 95px;
  padding: 0 20px;
  margin-top: 20px;
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid $border-maincolor;
  border-radius: 2px;
  background-color: $background-color-8;
}

.serviceSubscription-standard-recommend::after {
  content: '';
  width: 36px;
  height: 20px;
  position: absolute;
  top: 10px;
  left: -5px;
  background: url('./recommend.png') center no-repeat;
  background-size: 36px 20px;
}

.serviceSubscription-standard:hover {
  border-color: $text-wraning;
}

.serviceSubscription-standard-desc {
  padding-left: 10px;
  font-size: 12px;
}

.serviceSubscription-standard-wrapper {
  margin-left: auto;
  text-align: right;
}

.serviceSubscription-standard-currentPrice {
  font-size: 24px;
  color: $text-wraning;
}

.serviceSubscription-standard-currentPrice-RMB {
  font-size: 12px;
}

.serviceSubscription-standard-originalPrice {
  color: $text-light-color;
}

.serviceSubscription-standard-originalPrice-discounts {
  font-size: 10px;
  margin-right: 5px;
  color: #fff;
  background-color: $text-wraning;
}

.serviceSubscription-standard-link {
  display: inline-block;
  width: 90px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 2px;
  background-color: $text-wraning;
  color: #fff;
  margin-left: 30px;
}

.serviceSubscription-standard-link:hover {
  background-color: $text-wraning-lighter;
}

.serviceSubscription-orderRecord {
  margin: 20px 0;
}

.serviceSubscription-table {
  @mixin table;
}

.serviceSubscription-thead-tr {
  @mixin thead;
}

.serviceSubscription-tbody-tr {
  @mixin tr-medium;
}

.serviceSubscription-tbody-tr:hover {
  background-color: $background-color-1;
}

.serviceSubscription-thead-buy,
.serviceSubscription-tbody-buy {
  @mixin table-left;
}

.serviceSubscription-thead-buy {
  width: 20%;
}

.serviceSubscription-thead-serviceTime,
.serviceSubscription-thead-mode,
.serviceSubscription-thead-price,
.serviceSubscription-thead-state {
  width: 10.25%;
}

.serviceSubscription-thead-buyTime {
  width: 20%;
}

.serviceSubscription-thead-operator {
  width: 15%;
}

.serviceSubscription-thead-operator,
.serviceSubscription-tbody-operator {
  @mixin table-right;
}

.serviceSubscription-tbody-serviceTime,
.serviceSubscription-tbody-buyTime,
.serviceSubscription-tbody-mode,
.serviceSubscription-tbody-price,
.serviceSubscription-tbody-state {
  text-align: center;
}

.serviceSubscription-tbody-operator-link,
.serviceSubscription-tbody-operator-cancel {
  @mixin router-link-inline-block;
}

.serviceSubscription-tbody-operator-link {
  padding-right: 10px;
  line-height: 1;
  border-right: 1px solid $light-blue;
}

.serviceSubscription-tbody-operator-cancel {
  padding-left: 10px;
  cursor: pointer;
}
</style>
