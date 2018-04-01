<template lang="html">
  <div class="waitToMakeInvoice-container">
    <div class="waitToMakeInvoice-caption">
      <router-link class="waitToMakeInvoice-caption-link" :to="{ name: '' }">开具已勾选服务发票</router-link>
      <span class="waitToMakeInvoice-caption-desc">当前页面不展示老版本（包括成长版、专业版、老版本流量充值）订单，如需开具上述发票请点击此链接：</span>
      <a class="waitToMakeInvoice-caption-hrefLink" href="#">开具老版本发票</a>
    </div>

    <table class="waitToMakeInvoice-table">
      <thead>
        <tr class="waitToMakeInvoice-thead-tr">
          <th class="waitToMakeInvoice-thead-buy">
            <input id="checkall" class="waitToMakeInvoice-input" type="checkbox" value="全选">
            <label for="checkall" class="waitToMakeInvoice-label">（全选）</label>
            <span>购买服务</span>
          </th>
          <th class="waitToMakeInvoice-thead-serviceTime">服务时长</th>
          <th class="waitToMakeInvoice-thead-buyTime">消费时间</th>
          <th class="waitToMakeInvoice-thead-mode">支付方式</th>
          <th class="waitToMakeInvoice-thead-money">金额</th>
        </tr>
      </thead>
      <tbody v-if='waitToMakeInvoiceData.length > 0'>
        <tr class="waitToMakeInvoice-tbody-tr" v-for='item of waitToMakeInvoiceData' :key='item.id'>
          <td class="waitToMakeInvoice-tbody-buy">{{item.buy}}</td>
          <td class="waitToMakeInvoice-tbody-serviceTime">{{item.serviceTime}}</td>
          <td class="waitToMakeInvoice-tbody-buyTime">{{item.buyTime}}</td>
          <td class="waitToMakeInvoice-tbody-mode">{{item.mode}}</td>
          <td class="waitToMakeInvoice-tbody-money">{{item.money}}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='5' class="no-waitToMakeInvoiceData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      waitToMakeInvoiceData: [
        // {
        //   id: 1,
        //   buy: '',
        //   serviceTime: '',
        //   buyTime: '',
        //   mode: '',
        //   money: ''
        // }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../../assets/css/color.css';
@import '../../../../../assets/css/indexCommonStyle.css';

.no-waitToMakeInvoiceData {
  @mixin no-data-in-table;
}

.waitToMakeInvoice-container {
  padding-top: 20px;
  margin-top: -1px;
  border-top: 1px solid $border-maincolor;
}

.waitToMakeInvoice-caption {
  margin-bottom: 20px;
}

.waitToMakeInvoice-caption-link {
  @mixin button-link;
  width: 160px;
}

.waitToMakeInvoice-caption-link:hover {
  background-color: $dark-blue;
}

.waitToMakeInvoice-caption-desc {
  display: inline-block;
  margin-left: 20px;
  color: $text-light-color;
}

.waitToMakeInvoice-caption-hrefLink {
  color: $light-blue;
}

.waitToMakeInvoice-table {
  @mixin table;
}

.waitToMakeInvoice-thead-tr {
  @mixin thead;
}

.waitToMakeInvoice-tbody-tr {
  @mixin tr-medium;
}

.waitToMakeInvoice-tbody-tr {
  background-color: $background-color-1;
}

.waitToMakeInvoice-thead-buy {
  width: 30%;
}

.waitToMakeInvoice-thead-buy,
.waitToMakeInvoice-tbody-buy {
  @mixin table-left;
}

.waitToMakeInvoice-tbody-serviceTime,
.waitToMakeInvoice-tbody-buyTime,
.waitToMakeInvoice-tbody-mode {
  text-align: center;
}

.waitToMakeInvoice-thead-money,
.waitToMakeInvoice-tbody-money {
  @mixin table-right;
}

.waitToMakeInvoice-input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  transition: 0.5s;
}

.waitToMakeInvoice-label::before {
  content: '\a0';
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  box-shadow: 0 0 1px 1px $text-background-color-1 inset;
  line-height: .8;
  text-align: center;
  transition: 0.5s;
}

.waitToMakeInvoice-label:hover {
  cursor: pointer;
}

.waitToMakeInvoice-label:hover::before,
.waitToMakeInvoice-label:focus + .waitToMakeInvoice-label::before {
  box-shadow: 0 0 1px 1px $light-blue inset;
}

.waitToMakeInvoice-input:checked + .waitToMakeInvoice-label::before {
  content: '\2713';
  color: #fff;
  background-color: $light-blue;
}

.waitToMakeInvoice-input:focus {
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),
              0 0 8px rgba(102,175,233,.6);
  border-color: $light-blue;
  color: $main-color;
}
</style>
