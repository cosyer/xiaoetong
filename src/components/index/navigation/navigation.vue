<template lang="html">
  <aside class="leftSideNavigation">
    <a class="leftSideNavigation-logoLink" href="/index/shopDetails">
      <img class="leftSideNavigation-logoLink-img" src="./logo-xiaoe-white.png" alt="小鹅通logo">
    </a>
    <router-link class="leftSideNavigation-menu leftSideNavigation-link" :to="{ name: 'shopDetails' }">
      <span class="leftSideNavigation-menu-img menu-img-shopDetials"></span>
      <span class="leftSideNavigation-menu-title">店铺概况</span>
    </router-link>

    <div class="leftSideNavigation-menu-knowledge">
      <img class="leftSideNavigation-menu-knowledge-img" src="./icon_shop_dis.svg" alt="知识商品">
      <span class="leftSideNavigation-menu-knowledge-title">知识商品</span>
    </div>

    <div class="leftSideNavigation-knowledgeGoodes">
      <router-link class="leftSideNavigation-knowledgeGoodes-link leftSideNavigation-link" :to="{ name: 'graphic' }">图文</router-link>
      <router-link class="leftSideNavigation-knowledgeGoodes-link leftSideNavigation-link" :to="{ name: 'audio' }">音频</router-link>
      <router-link class="leftSideNavigation-knowledgeGoodes-link leftSideNavigation-link" :to="{ name: 'video' }">视频</router-link>
      <router-link class="leftSideNavigation-knowledgeGoodes-link leftSideNavigation-link" :to="{ name: 'liveTelecast' }">直播</router-link>
      <router-link class="leftSideNavigation-knowledgeGoodes-link leftSideNavigation-link" :to="{ name: 'column' }">专栏</router-link>
      <router-link class="leftSideNavigation-knowledgeGoodes-link leftSideNavigation-link" :to="{ name: 'member' }">会员</router-link>
    </div>

    <router-link class="leftSideNavigation-menu leftSideNavigation-link" :to="{ name: 'orderForm' }">
      <span class="leftSideNavigation-menu-img menu-img-order"></span>
      <span class="leftSideNavigation-menu-title">订单</span>
    </router-link>
    <router-link class="leftSideNavigation-menu leftSideNavigation-link" :to="{ name: 'user' }">
      <span class="leftSideNavigation-menu-img menu-img-user"></span>
      <span class="leftSideNavigation-menu-title">用户</span>
    </router-link>
    <router-link class="leftSideNavigation-menu leftSideNavigation-link" :to="{ name: 'property' }">
      <span class="leftSideNavigation-menu-img menu-img-property"></span>
      <span class="leftSideNavigation-menu-title">资产</span>
    </router-link>

    <br>
    <router-link class="leftSideNavigation-menu leftSideNavigation-link" :to="{ name: 'community' }">
      <span class="leftSideNavigation-menu-img menu-img-community"></span>
      <span class="leftSideNavigation-menu-title">社群</span>
    </router-link>
    <router-link class="leftSideNavigation-menu leftSideNavigation-link" :to="{ name: 'marketing' }">
      <span class="leftSideNavigation-menu-img menu-img-marketing"></span>
      <span class="leftSideNavigation-menu-title">营销</span>
    </router-link>
    <router-link class="leftSideNavigation-menu leftSideNavigation-link" :to="{ name: 'setting' }">
      <span class="leftSideNavigation-menu-img menu-img-setting"></span>
      <span class="leftSideNavigation-menu-title">设置</span>
    </router-link>

    <br>
    <router-link class="leftSideNavigation-menu leftSideNavigation-link" :to="{ name: 'myService' }">
      <span class="leftSideNavigation-menu-img menu-img-myService"></span>
      <span class="leftSideNavigation-menu-title">我的服务</span>
    </router-link>
  </aside>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.leftSideNavigation {
  width: 160px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: $background-color-5;
  color: $text-light-white;
  overflow: hidden;
}

.leftSideNavigation-logoLink {
  display: block;
  text-align: center;
  border-bottom: 1px solid $border-light-white;
  margin-bottom: 20px;
}

.leftSideNavigation-logoLink-img {
  width: 115px;
  padding: 14px 0;
}

.leftSideNavigation-menu,
.leftSideNavigation-menu-knowledge {
  height: 36px;
  line-height: 36px;
  padding-left: 25px;
  margin-bottom: 10px;
  color: $text-light-white;
}

.leftSideNavigation-menu-knowledge {
  display: block;
}

.leftSideNavigation-menu {
  display: flex;
  align-items: center;
}

.leftSideNavigation-menu-knowledge-img {
  width: 14px;
  height: 14px;
  vertical-align: middle;
}

.leftSideNavigation-menu-title,
.leftSideNavigation-menu-knowledge-title {
  margin-left: 10px;
}

.leftSideNavigation-knowledgeGoodes {
  width: 95px;
  margin: 0 auto 10px auto;
}

.leftSideNavigation-knowledgeGoodes-link {
  display: inline-block;
  width: 44px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  margin: 6px 0;
  color: $text-light-white;
  overflow: hidden;
  border-radius: 2px;
}

.leftSideNavigation-link:hover,
.router-link-active {
  color: #fff;
  background-color: $light-blue;
}

.leftSideNavigation-menu-img {
  width: 14px;
  height: 14px;
  display: inline-block;
}

.menu-img-shopDetials {
  background: url('./icon_overview.svg') center no-repeat;
  background-size: 14px 14px;
}

.router-link-active .menu-img-shopDetials {
  background: url('./icon_overview_pre.svg') center no-repeat;
  background-size: 14px 14px;
}

.menu-img-order {
  background: url('./icon_order.svg') center no-repeat;
  background-size: 14px 14px;
}

.router-link-active .menu-img-order {
  background: url('./icon_order_pre.svg') center no-repeat;
  background-size: 14px 14px;
}

.menu-img-user {
  background: url('./icon_users.svg') center no-repeat;
  background-size: 14px 14px;
}

.router-link-active .menu-img-user {
  background: url('./icon_users_pre.svg') center no-repeat;
  background-size: 14px 14px;
}

.menu-img-property {
  background: url('./icon_assets.svg') center no-repeat;
  background-size: 14px 14px;
}

.router-link-active .menu-img-property {
  background: url('./icon_assets_pre.svg') center no-repeat;
  background-size: 14px 14px;
}

.menu-img-community {
  background: url('./icon_community.svg') center no-repeat;
  background-size: 14px 14px;
}

.router-link-active .menu-img-community {
  background: url('./icon_community_pre.svg') center no-repeat;
  background-size: 14px 14px;
}

.menu-img-marketing {
  background: url('./icon_marketing.svg') center no-repeat;
  background-size: 14px 14px;
}

.router-link-active .menu-img-marketing {
  background: url('./icon_marketing_pre.svg') center no-repeat;
  background-size: 14px 14px;
}

.menu-img-setting {
  background: url('./icon_set.svg') center no-repeat;
  background-size: 14px 14px;
}

.router-link-active .menu-img-setting {
  background: url('./icon_set_pre.svg') center no-repeat;
  background-size: 14px 14px;
}

.menu-img-myService {
  background: url('./icon_myservice.svg') center no-repeat;
  background-size: 14px 14px;
}

.router-link-active .menu-img-myService {
  background: url('./icon_myservice_pre.svg') center no-repeat;
  background-size: 14px 14px;
}
</style>
