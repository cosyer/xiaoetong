<template lang="html">
  <div>
    <navigation></navigation>
    <div class="rightSide">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <backToTop></backToTop>
  </div>
</template>

<script>
import navigation from 'index/navigation/navigation'
import backToTop from '@/components/common/backToTop/backToTop'

export default {
  components: {
    navigation,
    backToTop
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$store.dispatch('getUserInfo')
    }
  }
}
</script>

<style lang="css" scoped>
@import '../assets/css/color.css';

.rightSide {
  margin-left: 160px;
  background-color: $background-color-7;
}

.fade-enter-active, .fade-leave-active {
  transition: .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
