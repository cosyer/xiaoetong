<template lang="html">
  <article class="paymentSetting">
    <div class="paymentSetting-userAccount">
      <div class="paymentSetting-userAccount-wrapper">
        <h3 class="paymentSetting-userAccount-wrapper-title">微信支付-自有账户</h3>
        <p class="paymentSetting-userAccount-wrapper-desc">前提条件：你需要在微信公众平台申请开通“微信认证服务号”，且此服务号需要向微信申请开通“微信支付权限”；</p>
        <p class="paymentSetting-userAccount-wrapper-desc">你可以在此配置，使用自己的微信支付。收入直接进入你的微信支付对应的帐号。微信将收取每笔0.6%的交易手续费。</p>
        <router-link class="paymentSetting-userAccount-wrapper-link" :to="{ name: '' }">查看配置教程</router-link>
      </div>
      <router-link class="paymentSetting-link" :to="{ name: '' }">立即配置</router-link>
    </div>
    <div class="paymentSetting-gooseAccount">
      <h3 class="paymentSetting-gooseAccount-title">微信支付-小鹅通知识助手账户<span class="paymentSetting-gooseAccount-point">正在使用</span></h3>
      <p class="paymentSetting-gooseAccount-desc">你的店铺收入可以暂存于“小鹅通知识助手”微信支付对应的账户，你可随时向小鹅通发起提现申请；</p>
      <p class="paymentSetting-gooseAccount-desc">微信收取0.6%交易手续费，通过小鹅通完成代缴；</p>
      <p class="paymentSetting-gooseAccount-desc">提现人工审核周期：当天18点前申请提现，3个工作日内到账，实际到账时间以微信入账时间为准。</p>
    </div>
  </article>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';

.paymentSetting-userAccount {
  position: relative;
}

.paymentSetting-userAccount-wrapper,
.paymentSetting-gooseAccount {
  padding: 20px;
  margin-bottom: 20px;
  background-color: $background-color-3;
}

.paymentSetting-userAccount-wrapper-title,
.paymentSetting-gooseAccount-title {
  margin-bottom: 20px;
}

.paymentSetting-userAccount-wrapper-desc,
.paymentSetting-gooseAccount-desc {
  font-size: 12px;
  margin-bottom: 5px;
}

.paymentSetting-gooseAccount-point {
  display: inline-block;
  margin-left: 10px;
  padding: 0 5px;
  border: 1px solid $text-light-red;
  color: $text-light-red;
  font-size: 12px;
}

.paymentSetting-userAccount-wrapper-link,
.paymentSetting-link {
  color: $light-blue;
}

.paymentSetting-link {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 100px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background-color: $light-blue;
  color: #fff;
  border-radius: 2px;
}
</style>
