<template lang="html">
  <article class="giftCertificate">
    <h2 class="giftCertificate-title">可用礼券：{{giftCertificateData.length}}</h2>
    <p class="giftCertificate-desc">所有礼券已于&nbsp;11&nbsp;月&nbsp;15&nbsp;日&nbsp;24:00&nbsp;统一清零</p>
    <div class="giftCertificate-captions">
      <router-link class="giftCertificate-captions-titleLink" :to="{ name: '' }">礼券记录</router-link>
    </div>
    <div class="giftCertificate-table-wrapper">
      <table class="giftCertificate-table">
        <thead>
          <tr class="giftCertificate-thead-tr">
            <th class="giftCertificate-thead-detail">明细</th>
            <th class="giftCertificate-thead-type">分类</th>
            <th class="giftCertificate-thead-time">时间</th>
            <th class="giftCertificate-thead-certificate">礼券</th>
            <th class="giftCertificate-thead-state">
              <span class="giftCertificate-thead-state-desc">记录状态</span>
              <img class="giftCertificate-thead-state-img" src='./icon_point.png' alt='图标-问号'>
              <div class="giftCertificate-thead-state-explain">
                <p>预抵扣：当您产生了一笔未完成支付的订单，礼券此时已被抵扣，无法再用于别的支付。您可以继续完成支付，或者取消支付。取消后，礼券将被返还至您的礼券余额。</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody v-if='giftCertificateData.length > 0'>
          <tr class="giftCertificate-tbody-tr" v-for='item of giftCertificateData' :key='item.id'>
            <td class="giftCertificate-tbody-detail">{{item.detail}}</td>
            <td class="giftCertificate-tbody-type">{{item.type}}</td>
            <td class="giftCertificate-tbody-time">{{item.time}}</td>
            <td class="giftCertificate-tbody-certificate">{{item.certificate}}</td>
            <td class="giftCertificate-tbody-state">{{item.state}}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan='5' class="no-giftCertificateData">暂无相关数据</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      giftCertificateData: [
        // {
        //   id: 1,
        //   detail: '',
        //   type: '',
        //   time: '',
        //   certificate: '',
        //   state: ''
        // }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.no-giftCertificateData {
  @mixin no-data-in-table;
}

.giftCertificate-title,
.giftCertificate-desc {
  display: inline-block;
  margin-top: 20px;
}

.giftCertificate-desc {
  margin-left: 20px;
  color: $text-wraning-lighter;
}

.giftCertificate-captions {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.giftCertificate-captions-titleLink {
  padding: 8px;
  border: 1px solid $border-maincolor;
  border-bottom-color: #fff;
  overflow: hidden;
  color: $light-blue;
}

.giftCertificate-table-wrapper {
  padding-top: 20px;
  margin-top: -1px;
  border-top: 1px solid $border-maincolor;
}

.giftCertificate-table {
  @mixin table;
}

.giftCertificate-thead-tr {
  @mixin thead;
}

.giftCertificate-tbody-tr {
  @mixin tr-medium;
}

.giftCertificate-tbody-tr:hover {
  background-color: $background-color-1;
}

.giftCertificate-thead-detail,
.giftCertificate-tbody-detail {
  @mixin table-left;
}

.giftCertificate-tbody-type,
.giftCertificate-tbody-time,
.giftCertificate-tbody-certificate,
.giftCertificate-tbody-state {
  text-align: center;
}

.giftCertificate-thead-state {
  position: relative;
}

.giftCertificate-thead-state-img {
  width: 15px;
  margin-left: 10px;
  cursor: pointer;
}

.giftCertificate-thead-state-explain {
  width: 300px;
  padding: 10px;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 99;
  text-align: left;
  border: 1px solid $border-maincolor;
  background-color: $background-color-13;
  box-shadow: 5px 5px 10px 0 rgba(0,0,0,.3);
  opacity: 0;
  transition: .5s;
}

.giftCertificate-thead-state-img:hover+.giftCertificate-thead-state-explain {
  opacity: 1;
}

.giftCertificate-thead-state-desc,
.giftCertificate-thead-state-img {
  vertical-align: middle;
}
</style>
