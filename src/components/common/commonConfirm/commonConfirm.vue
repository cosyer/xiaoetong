<template lang="html">
  <transition name='fade'>
    <div class="warning-container">
      <div class="explain-content" key='content'>
        <img class="explain-content-img-close" src="./icon_Pop-ups_close.svg" alt="提示图标-关闭窗口" @click='hideExplainContent'>
        <img class="explain-content-img-warning" src="./blue_info_prompt.svg" alt="提示图标-惊叹号">
        <h3 class="explain-content-title">提示</h3>
        <p class="explain-content-desc">
          <slot></slot>
        </p>
        <button class="explain-content-button-cancel" type="button" name="button" @click='hideExplainContent'>取消</button>
        <button class="explain-content-button-confirm" type="button" name="button" @click='confirm'>确定</button>
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
    },
    confirm () {
      this.$emit('confirm')
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

.explain-content-button-cancel {
  @mixin button-cancel-large;
  margin: 20px;
}

.explain-content-button-cancel:hover {
  background-color: $background-color-1;
}

.explain-content-button-confirm {
  @mixin button-confirm-large;
  margin: 20px;
}

.explain-content-button-confirm:hover {
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
