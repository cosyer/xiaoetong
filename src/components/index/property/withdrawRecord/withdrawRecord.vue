<template lang="html">
  <article class="withdrawRecord">
    <div class="withdrawRecord-topContainer">
      <div class="withdrawRecord-topContainer-wrapper">
        <p class="withdrawRecord-topContainer-wrapper-desc">可提现余额(元)</p>
        <h2 class="withdrawRecord-topContainer-wrapper-money">{{withdrawDeposit}}</h2>
        <p class="withdrawRecord-topContainer-wrapper-desc">注：此账户用于小鹅通知识助手账户收款产生的相关收益。微信将收取每笔&nbsp;0.6%&nbsp;的交易手续费，由小鹅通完成代缴。 微信支付的结算周期为&nbsp;T+3&nbsp;, 提现申请后, 3&nbsp;个工作日后款项会自动转至您的微信钱包</p>
      </div>
      <router-link class="withdrawRecord-topContainer-link" :to="{ name: '' }">提现</router-link>
    </div>
    <div class="withdrawRecord-data-filter">
      <p class="withdrawRecord-data-filter-desc">提现记录</p>
      <select class="withdrawRecord-data-filter-select">
        <option value="全部订单" selected>全部订单</option>
        <option value="当月订单">当月订单</option>
      </select>
      <select class="withdrawRecord-data-filter-select">
        <option value="提现状态" selected disabled>提现状态</option>
        <option value="待审核">待审核</option>
        <option value="待打款">待打款</option>
        <option value="提现成功">提现成功</option>
        <option value="提现失败">提现失败</option>
      </select>
      <button type="button" name="button" class="withdrawRecord-data-filter-search">筛选</button>
    </div>
    <table class="withdrawRecord-table">
      <thead>
        <tr class="withdrawRecord-thead-tr">
          <th class="withdrawRecord-thead-withdrawDepositTime">提现时间</th>
          <th class="withdrawRecord-thead-wxAccount">到账微信账号</th>
          <th class="withdrawRecord-thead-money">金额（元）</th>
          <th class="withdrawRecord-thead-accomplishTime">完成时间</th>
          <th class="withdrawRecord-thead-status">状态</th>
          <th class="withdrawRecord-thead-proposer">申请人</th>
          <th class="withdrawRecord-thead-operator">操作</th>
        </tr>
      </thead>
      <tbody v-if='withdrawRecordData.length > 0'>
        <tr class="withdrawRecord-tbody-tr" v-for='item of withdrawRecordData' :key='item.id'>
          <td class="withdrawRecord-tbody-withdrawDepositTime">{{item.withdrawDepositTime}}</td>
          <td class="withdrawRecord-tbody-wxAccount">{{item.wxAccount}}</td>
          <td class="withdrawRecord-tbody-money">{{item.money}}</td>
          <td class="withdrawRecord-tbody-accomplishTime">{{item.accomplishTime}}</td>
          <td class="withdrawRecord-tbody-status">{{item.status}}</td>
          <td class="withdrawRecord-tbody-proposer">{{item.proposer}}</td>
          <td class="withdrawRecord-tbody-operator">
            <router-link class="withdrawRecord-tbody-link" :to="{ name: '' }">删除</router-link>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='7' class="no-withdrawRecordData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
export default {
  data () {
    return {
      withdrawDeposit: 0.00,
      withdrawRecordData: [
        // {
        //   id: 1,
        //   withdrawDepositTime: '',
        //   wxAccount: '',
        //   money: '',
        //   accomplishTime: '',
        //   status: '',
        //   proposer: ''
        // }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.no-withdrawRecordData {
  @mixin no-data-in-table;
}

.withdrawRecord-topContainer {
  padding-bottom: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid $border-maincolor;
}

.withdrawRecord-topContainer-wrapper {
  flex: 0 0 80%;
}

.withdrawRecord-topContainer-wrapper-money {
  margin: 10px 0;
  font-size: 30px;
}

.withdrawRecord-topContainer-wrapper-desc {
  color: $text-light-color;
}

.withdrawRecord-topContainer-link {
  @mixin button-link;
  margin-left: 10px;
}

.withdrawRecord-topContainer-link:hover {
  background-color: $dark-blue;
}

.withdrawRecord-data-filter {
  display: flex;
  align-items: center;
  line-height: 1;
  margin-bottom: 20px;
}

.withdrawRecord-data-filter-desc {
  padding-left: 10px;
  margin-right: auto;
  border-left: 2px solid $light-blue;
}

.withdrawRecord-data-filter-select {
  width: 220px;
  height: 36px;
  line-height: 36px;
  padding: 5px;
  margin-left: 10px;
  border-radius: 2px;
  border: 1px solid $border-maincolor;
  transition: .3s;
}

.withdrawRecord-data-filter-search {
  @mixin button-filter;
  margin-left: 10px;
}

.withdrawRecord-data-filter-search:hover {
  background-color: $dark-blue;
}

.withdrawRecord-table {
  @mixin table;
  color: $text-dark-color;
}

.withdrawRecord-thead-tr {
  @mixin thead;
}

.withdrawRecord-tbody-tr {
  @mixin tr-medium;
}

.withdrawRecord-tbody-tr:hover {
  background-color: $background-color-1;
}

.withdrawRecord-thead-withdrawDepositTime,
.withdrawRecord-tbody-withdrawDepositTime {
  @mixin table-left;
}

.withdrawRecord-thead-operator,
.withdrawRecord-tbody-operator {
  @mixin table-right;
}

.withdrawRecord-thead-withdrawDepositTime,
.withdrawRecord-thead-money,
.withdrawRecord-thead-accomplishTime, {
  width: 15%;
}

.withdrawRecord-thead-wxAccount {
  width: 20%;
}

.withdrawRecord-thead-status,
.withdrawRecord-thead-proposer,
.withdrawRecord-thead-operator {
  width: 11.6%;
}

.withdrawRecord-tbody-wxAccount,
.withdrawRecord-tbody-money,
.withdrawRecord-tbody-accomplishTime,
.withdrawRecord-tbody-status,
.withdrawRecord-tbody-proposer {
  text-align: center;
}

.withdrawRecord-tbody-link {
  @mixin router-link-inline-block;
}
</style>
