<template lang="html">
  <div>
    <userTopNav>
      <slot>用户</slot>
    </userTopNav>
    <section class="user">
      <ul class="user-topNav">
        <li class="user-topNav-item">
          <router-link class="user-topNav-item-link" :to="{ name: 'visitors' }">访问用户</router-link>
        </li>
        <li class="user-topNav-item">
          <router-link class="user-topNav-item-link" :to="{ name: 'messageList' }">消息列表</router-link>
        </li>
        <li class="user-topNav-item">
          <router-link class="user-topNav-item-link" :to="{ name: 'customersNews' }">客户消息</router-link>
        </li>
      </ul>
      <div class="user-routerView-container">
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

.user {
  padding: 20px;
}

.user-topNav {
  @mixin topNav;
}

.user-topNav-item,
.user-topNav-item-link {
  display: inline-block;
}

.user-topNav-item-link {
  margin: 0 20px;
  position: relative;
}

.user-topNav-item-link::after {
  @mixin topNav-after;
}

.router-link-exact-active {
  color: $light-blue;
}

.user-topNav-item-link:hover::after,
.router-link-active::after {
  width: 100%;
}

.user-routerView-container {
  padding: 20px;
  background-color: #fff;
}

</style>
