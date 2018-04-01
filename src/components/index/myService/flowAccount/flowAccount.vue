<template lang="html">
  <article class="flowAccount">
    <div v-if='hasTemporalInformation'>
      <p class="temporal-information">亲爱的客户您好：小鹅通为标准版客户全面免除第三方代收费用，您可在升级标准版后享受流量免费。若流量账户中有余额，则余额将于 2018 年 3 月 31 日起转为小鹅通点券，可用于购买小鹅通版本续费及增值服务等。<router-link class="temporal-information-link" :to="{ name: 'serviceSubscription' }">去升级</router-link></p>
    </div>
    <h3 class="flowAccount-title">流量账户余额 (&nbsp;当前为补贴模式&nbsp;)：</h3>
    <p class="flowAccount-remainingBalance">{{remainingBalance}}</p>
    <div class="flowAccount-captions">
      <h4 class="flowAccount-captions-title">结算记录</h4>
      <span class="flowAccount-captions-num">(&nbsp;{{flowAccountData.length}}&nbsp;条)</span>
      <button class="flowAccount-captions-button" type="button" name="button">导出流量记录</button>
      <div class="flowAccount-captions-wrapper" @click='showExplainContent'>
        <img class="flowAccount-captions-wrapper-img" src="./icon_point.png" alt="资费说明配图-问号">
        <span class="flowAccount-captions-wrapper-explain">资费说明</span>
      </div>
      <router-link class="flowAccount-captions-link" :to="{ name: 'invoiceManagement' }">申请开发票</router-link>
    </div>
    <table class="flowAccount-table">
      <thead>
        <tr class="flowAccount-thead-tr">
          <th class="flowAccount-thead-time">结算时间</th>
          <th class="flowAccount-thead-type">结算类型</th>
          <th class="flowAccount-thead-desc">相关描述</th>
          <th class="flowAccount-thead-money">结算金额（元）</th>
          <th class="flowAccount-thead-operator">操作</th>
        </tr>
      </thead>
      <tbody v-if='flowAccountData.length > 0'>
        <tr class="flowAccount-tbody-tr" v-for='item of flowAccountData' :key='item.id'>
          <td class="flowAccount-tbody-time">{{item.time}}</td>
          <td class="flowAccount-tbody-type">{{item.type}}</td>
          <td class="flowAccount-tbody-desc">{{item.desc}}</td>
          <td class="flowAccount-tbody-money">{{item.money}}</td>
          <td class="flowAccount-tbody-operator"></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan='5' class="no-flowAccountData">暂无相关数据</td>
        </tr>
      </tbody>
    </table>
    <transition name='fade'>
      <div class="explain-content" v-if='isShowExplainContent'>
        <h3 class="explain-content-title">流量资费说明</h3>
        <p class="explain-content-desc">流量费指的是用户访问视频类商品产生的流量费用。</p>
        <p class="explain-content-desc">小鹅通目前仅收取视频、视频录播、推流直播功能的流量费，充值后可以直接使用上述功能。</p>
        <p class="explain-content-desc">流量计算方式：</p>
        <p class="explain-content-desc">用户访问文件大小&nbsp;*&nbsp;当日新增访问用户数&nbsp;*&nbsp;流量单价<span class="explain-content-desc-point">（0.9元/G）</span></p>
        <p class="explain-content-desc">注意事项：</p>
        <p class="explain-content-desc">1，为规避用户多次视听导致流量费用不可控制，小鹅通采用<span class="explain-content-desc-point">“按独立访问用户数量计费”</span>，即<span class="explain-content-desc-point">单个用户多次访问只计费一次</span>。视频录播和推流直播时一个用户收取一次流量费，回放时同一个用户多次访问仅第一次收取流量费。</p>
        <p class="explain-content-desc">2，存储时，原始上传的视频大小不做改变。 流量计费将以压缩/优化后的用户访问文件大小计算。用户访问时，小鹅通会统一将视频（付费视频、直播视频）按照<span class="explain-content-desc-point">&nbsp;1024kbps&nbsp;</span>高清优化处理。</p>
        <button class="explain-content-button" type="button" name="button" @click='hideExplainContent'>我知道了</button>
      </div>
    </transition>
    <div class="overlay" :class="{'overlay_active': isShowExplainContent}"></div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      hasTemporalInformation: true,
      isShowExplainContent: false,
      flowAccountData: [
        // {
        //   id: 1,
        //   time: '',
        //   desc: '',
        //   money: ''
        // }
      ]
    }
  },
  computed: {
    remainingBalance () {
      return this.$store.state.userInfo.remainingBalance
    }
  },
  methods: {
    showExplainContent () {
      this.isShowExplainContent = true
    },
    hideExplainContent () {
      this.isShowExplainContent = false
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.no-flowAccountData {
  @mixin no-data-in-table;
}

.temporal-information {
  line-height: 2;
  padding: 0 20px;
  font-size: 12px;
  background-color: $background-color-13;
  border: solid 1px $border-light-yellow;
}

.temporal-information-link {
  color: $light-blue;
}

.flowAccount-title {
  margin: 20px 0 10px 0;
}

.flowAccount-remainingBalance {
  font-size: 36px;
  color: $text-wraning;
}

.flowAccount-captions {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.flowAccount-captions-num {
  color: $text-light-color;
  margin-left: 10px;
}

.flowAccount-captions-button {
  @mixin button-main;
  margin: 0 20px;
  font-size: 12px;
  color: $text-dark-color;
}

.flowAccount-captions-button:hover {
  background-color: $background-color-1;
}

.flowAccount-captions-wrapper {
  cursor: pointer;
  color: $light-blue;
  display: flex;
  align-items: center;
}

.flowAccount-captions-wrapper-img {
  width: 15px;
  margin-right: 5px;
}

.flowAccount-captions-link {
  margin-left: auto;
  color: $light-blue;
}

.flowAccount-table {
  @mixin table;
}

.flowAccount-thead-tr {
  @mixin thead;
}

.flowAccount-tbody-tr {
  @mixin tr-medium;
}

.flowAccount-tbody-tr:hover {
  background-color: $background-color-1;
}

.flowAccount-thead-time,
.flowAccount-tbody-time {
  @mixin table-left;
}

.flowAccount-thead-operator,
.flowAccount-tbody-operator {
  @mixin table-right;
}

.flowAccount-thead-time,
.flowAccount-thead-type,
.flowAccount-thead-desc,
.flowAccount-thead-money,
.flowAccount-thead-operator {
  width: 20%;
}

.flowAccount-tbody-type,
.flowAccount-tbody-desc,
.flowAccount-tbody-money {
  text-align: center;
}

.explain-content {
  position: fixed;
  top: 5%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  margin: auto;
  width: 600px;
  height: 550px;
  border-radius: 2px;
  padding: 40px;
  background-color: #fff;
}

.explain-content-title {
  margin-bottom: 20px;
  text-align: center;
}

.explain-content-desc {
  margin-bottom: 15px;
}

.explain-content-desc-point {
  color: $text-wraning;
}

.explain-content-button {
  @mixin button-confirm-large;
  display: block;
  margin: 20px auto;
}

.explain-content-button:hover {
  background-color: $dark-blue;
}

.overlay {
  @mixin overlay;
}

.overlay_active {
  @mixin overlay-active;
}

.fade-enter-active, .fade-leave-active {
  visibility: visible;
  transition: .5s;
}
.fade-enter, .fade-leave-to {
  visibility: hidden;
  opacity: 0;
}
</style>
