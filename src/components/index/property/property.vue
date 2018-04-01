<template lang="html">
  <div>
    <userTopNav>
      <slot>资产</slot>
    </userTopNav>
    <section class="property">
      <ul class="property-topNav">
        <li class="property-topNav-item">
          <router-link class="property-topNav-item-link" :to="{ name: 'myProperty' }">我的资产</router-link>
        </li>
        <li class="property-topNav-item">
          <router-link class="property-topNav-item-link" :to="{ name: 'withdrawRecord' }">提现记录</router-link>
        </li>
      </ul>
      <div class="property-routerView-container">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
export default {
  components: {
    userTopNav
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';
@import '../../../assets/css/indexCommonStyle.css';

.property {
  padding: 20px;
}

.property-topNav {
  @mixin topNav;
}

.property-topNav-item,
.property-topNav-item-link {
  display: inline-block;
}

.property-topNav-item-link {
  margin: 0 20px;
  position: relative;
}

.property-topNav-item-link::after {
  @mixin topNav-after;
}

.router-link-exact-active {
  color: $light-blue;
}

.property-topNav-item-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.property-routerView-container {
  padding: 20px;
  background-color: #fff;
}
</style>
