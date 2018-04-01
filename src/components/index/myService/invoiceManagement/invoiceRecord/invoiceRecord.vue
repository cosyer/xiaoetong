<template lang="html">
  <div class="invoiceRecord-container">
    <table class="invoiceRecord-table">
      <thead>
        <tr class="invoiceRecord-thead-tr">
          <th class="invoiceRecord-thead-applyTime">申请时间</th>
          <th class="invoiceRecord-thead-invoiceTitle">发票抬头</th>
          <th class="invoiceRecord-thead-invoiceType">发票类型</th>
          <th class="invoiceRecord-thead-money">金额（元）</th>
          <th class="invoiceRecord-thead-name">联系人</th>
          <th class="invoiceRecord-thead-phoneNum">电话</th>
          <th class="invoiceRecord-thead-status">状态</th>
        </tr>
      </thead>
      <tbody v-if='invoiceRecordData.length > 0'>
        <tr class="invoiceRecord-tbody-tr" v-for='item of invoiceRecordData' :key='item.id'>
          <td class="invoiceRecord-tbody-applyTime">{{item.applyTime}}</td>
          <td class="invoiceRecord-tbody-invoiceTitle">{{item.invoiceTitle}}</td>
          <td class="invoiceRecord-tbody-invoiceType">{{item.invoiceType}}</td>
          <td class="invoiceRecord-tbody-money">{{item.money}}</td>
          <td class="invoiceRecord-tbody-name">{{item.name}}</td>
          <td class="invoiceRecord-tbody-phoneNum">{{item.phoneNum}}</td>
          <td class="invoiceRecord-tbody-status">{{item.status}}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='7' class="no-invoiceRecordData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      invoiceRecordData: [
        // {
        //   id: 1,
        //   applyTime: '',
        //   invoiceTitle: '',
        //   invoiceType: '',
        //   money: '',
        //   name: '',
        //   phoneNum: '',
        //   status: ''
        // }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../../assets/css/color.css';
@import '../../../../../assets/css/indexCommonStyle.css';

.no-invoiceRecordData {
  @mixin no-data-in-table;
}

.invoiceRecord-container {
  padding-top: 20px;
  margin-top: -1px;
  border-top: 1px solid $border-maincolor;
}

.invoiceRecord-table {
  @mixin table;
}

.invoiceRecord-thead-tr {
  @mixin thead;
}

.invoiceRecord-tbody-tr {
  @mixin tr-medium;
}

.invoiceRecord-tbody-tr:hover {
  background-color: $background-color-1;
}

.invoiceRecord-thead-applyTime {
  width: 15%;
}

.invoiceRecord-thead-invoiceTitle {
  width: 20%;
}

.invoiceRecord-thead-invoiceType,
.invoiceRecord-thead-money,
.invoiceRecord-thead-name,
.invoiceRecord-thead-phoneNum,
.invoiceRecord-thead-status {
  width: 13%;
}

.invoiceRecord-thead-applyTime,
.invoiceRecord-tbody-applyTime {
  @mixin table-left;
}

.invoiceRecord-tbody-invoiceTitle,
.invoiceRecord-tbody-invoiceType,
.invoiceRecord-tbody-money,
.invoiceRecord-tbody-name,
.invoiceRecord-tbody-phoneNum {
  text-align: center;
}

.invoiceRecord-thead-status,
.invoiceRecord-tbody-status {
  @mixin table-right;
}
</style>
