<template lang="html">
  <transition name='fade'>
    <div class="warning-container">
      <div class="explain-content" key='content'>
        <img class="explain-content-img-close" src="./icon_Pop-ups_close.svg" alt="提示图标-关闭窗口" @click='hideExplainContent'>
        <img class="explain-content-img-warning" src="./blue_info_prompt.svg" alt="提示图标-惊叹号">
        <h3 class="explain-content-title">提示</h3>
        <p class="explain-content-desc">该功能需要在开通标准版基础上方可使用。<span class="explain-content-desc-point">您的使用期已过</span>，建议尽快升级至标准版，升级后可继续使用该功能</p>
        <button class="explain-content-button" type="button" name="button" @click='hideExplainContent'>我知道了</button>
        <router-link class="explain-content-link" :to="{ name: 'serviceSubscription', params: {} }">立即升级</router-link>
      </div>
      <div class="overlay" @click='hideExplainContent' key='overlay'></div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    hideExplainContent () {
      this.$emit('hideExplainContent')
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';
@import '../../../assets/css/indexCommonStyle.css';

.warning-container {
  position: relative;
  z-index: 99;
}

.explain-content {
  width: 540px;
  height: 300px;
  padding: 20px;
  position: fixed;
  top: 5%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  margin: auto;
  border-radius: 4px;
  background-color: #fff;
  text-align: center;
}

.explain-content-img-close {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: .5S;
}

.explain-content-img-close:hover {
  transform: rotate(180deg);
}

.explain-content-img-warning {
  width: 60px;
  height: 60px;
}

.explain-content-title {
  margin-bottom: 20px;
  margin-top: 10px;
}

.explain-content-desc {
  margin-bottom: 15px;
}

.explain-content-desc-point {
  color: $text-wraning;
}

.explain-content-button {
  @mixin button-main;
  margin: 20px;
  width: 100px;
}

.explain-content-button:hover {
  background-color: $background-color-1;
}

.explain-content-link {
  @mixin button-link;
  margin: 20px;
}

.explain-content-link:hover {
  background-color: $dark-blue;
}

.overlay {
  @mixin active-overlay;
}

.fade-enter-active, .fade-leave-active {
  visibility: visible;
  opacity: 1;
  transition: .5s;
}

.fade-enter, .fade-leave-to {
  visibility: hidden;
  opacity: 0;
}
</style>
