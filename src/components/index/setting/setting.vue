<template lang="html">
  <div>
    <userTopNav>
      <slot>设置</slot>
    </userTopNav>
    <section class="setting">
      <ul class="setting-topNav">
        <li class="setting-topNav-item">
          <router-link class="setting-topNav-item-link" :to="{ name: 'shopSetting' }">店铺设置</router-link>
        </li>
        <li class="setting-topNav-item">
          <router-link class="setting-topNav-item-link" :to="{ name: 'operatorSetting' }">运营者设置</router-link>
        </li>
        <li class="setting-topNav-item">
          <router-link class="setting-topNav-item-link" :to="{ name: 'paymentSetting' }">支付设置</router-link>
        </li>
      </ul>
      <div class="setting-routerView-container">
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

.setting {
  padding: 20px;
}

.setting-topNav {
  @mixin topNav;
}

.setting-topNav-item,
.setting-topNav-item-link {
  display: inline-block;
}

.setting-topNav-item-link {
  margin: 0 20px;
  position: relative;
}

.setting-topNav-item-link::after {
  @mixin topNav-after;
}

.router-link-exact-active {
  color: $light-blue;
}

.setting-topNav-item-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.setting-routerView-container {
  padding: 20px;
  background-color: #fff;
}

</style>
