<template lang="html">
  <article class="invoiceManagement">
    <div v-if='hasTemporalInformation'>
      <p class="temporal-information">由于春节期间各公司陆续放假及快递停运，为保证发票能安全准确送达到您的手中，我司于&nbsp;2018&nbsp;年&nbsp;2&nbsp;月&nbsp;5&nbsp;日&nbsp;-&nbsp;2018&nbsp;年&nbsp;2&nbsp;月&nbsp;23&nbsp;日期间暂停发票寄送，在此期间您仍可正常申请，&nbsp;2&nbsp;月&nbsp;23&nbsp;日后我们将安排快递陆续为您寄送。不便之处敬请谅解，祝您新春快乐，阖家幸福！</p>
    </div>
    <p class="invoiceManagement-warning">温馨提示：如信息无误，我们会在<span class="invoiceManagement-warning-point">&nbsp;10&nbsp;个工作日内&nbsp;</span>完成开具与邮寄，请耐心等待。</p>
    <div class="invoiceManagement-captions">
      <router-link class="invoiceManagement-captions-titleLink" :to="{ name: 'waitToMakeInvoice' }">待开票</router-link>
      <router-link class="invoiceManagement-captions-titleLink" :to="{ name: 'invoiceRecord' }">开票记录</router-link>
    </div>
    <div class="invoiceManagement-routerView-container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </article>
</template>

<script>

export default {
  data () {
    return {
      hasTemporalInformation: true
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';

.temporal-information {
  line-height: 2;
  padding: 0 20px;
  font-size: 12px;
  background-color: $background-color-13;
  border: solid 1px $border-light-yellow;
}

.invoiceManagement-warning {
  margin: 20px 0;
}

.invoiceManagement-warning-point {
  color: $text-wraning;
}

.invoiceManagement-captions {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.invoiceManagement-captions-titleLink {
  padding: 10px 15px;
  border: 1px solid $border-maincolor;
  overflow: hidden;
  color: $light-blue;
  background-color: $background-color-8;
}

.invoiceManagement-captions-titleLink:not(:first-child) {
  border-left: none;
}

.invoiceManagement-captions-titleLink:hover {
  background-color: $background-color-8;
}

.router-link-active {
  background-color: #fff;
  border-bottom: none;
}

</style>
