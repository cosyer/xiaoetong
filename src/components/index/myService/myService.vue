<template lang="html">
  <div>
    <userTopNav>
      <slot>我的服务</slot>
    </userTopNav>
    <section class="myService">
      <ul class="myService-topNav">
        <li class="myService-topNav-item">
          <router-link class="myService-topNav-item-link" :to="{ name: 'serviceSubscription' }">服务订购</router-link>
        </li>
        <li class="myService-topNav-item">
          <router-link class="myService-topNav-item-link" :to="{ name: 'flowAccount' }">流量账户</router-link>
        </li>
        <li class="myService-topNav-item">
          <router-link class="myService-topNav-item-link" :to="{ name: 'giftCertificate' }">我的礼券</router-link>
        </li>
        <li class="myService-topNav-item">
          <router-link class="myService-topNav-item-link" :to="{ name: 'invoiceManagement' }">发票管理</router-link>
        </li>
      </ul>
      <div class="myService-routerView-container">
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

.myService {
  padding: 20px;
}

.myService-topNav {
  @mixin topNav;
}

.myService-topNav-item,
.myService-topNav-item-link {
  display: inline-block;
}

.myService-topNav-item-link {
  margin: 0 20px;
  position: relative;
}

.myService-topNav-item-link::after {
  @mixin topNav-after;
}

.router-link-exact-active {
  color: $light-blue;
}

.myService-topNav-item-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.myService-routerView-container {
  padding: 20px;
  background-color: #fff;
}

</style>
