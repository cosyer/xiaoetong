<template>
  <div>
    <xheader></xheader>
    <xnav></xnav>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <xfooter></xfooter>
    <backToTop></backToTop>
  </div>
</template>

<script>
import xfooter from 'helping/xfooter/xfooter'
import xheader from 'helping/xheader/xheader'
import xnav from 'helping/xnav/xnav'
import backToTop from '@/components/common/backToTop/backToTop'

export default {
  components: {
    xfooter,
    xheader,
    xnav,
    backToTop
  }
}
</script>

<style lang="css" scoped>

.fade-enter-active, .fade-leave-active {
  transition: .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}

</style>
