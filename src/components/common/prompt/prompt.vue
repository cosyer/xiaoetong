<template lang="html">
  <transition name='fade-in-out'>
    <div class="prompt-container">
      <slot>{{showWhatPrompt}}</slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['showWhatPrompt']
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.prompt-container {
  width: 450px;
  line-height: 40px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  text-align: center;
  background-color: $light-blue;
  color: #fff;
  box-shadow: 0 4px 12px 0 rgba(41,117,237,.2);
  border-radius: 2px;
}

.fade-in-out-enter-active {
  animation: fade-in-out 2.5s;
}

.fade-in-out-leave-active {
  animation: fade-in-out 2.5s reverse;
}

@keyframes fade-in-out {
  0% {
    transform: translate3d(-50%, -100%, 0);
  }
  25% {
    transform: translate3d(-50%, 0, 0);
  }
  75% {
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(-50%, -100%, 0);
  }
}
</style>
