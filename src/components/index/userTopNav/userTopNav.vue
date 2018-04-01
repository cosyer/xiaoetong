<template lang="html">
  <nav class="userTopNav">
    <div class="userTopNav-leftSlot">
      <slot></slot>
    </div>
    <ul class="userTopNav-list">
      <li class="userTopNav-item">
        <router-link class="userTopNav-item-link" :to="{ name: '' }">客户消息</router-link>
      </li>
      <li class="userTopNav-item userTopNav-item-systemIfo">
        <router-link class="userTopNav-item-link" :to="{ name: '' }">系统通知</router-link>
        <div class="systemIfo-wrapper">
          <router-link class="systemIfo-wrapper-desc" :to="{ name: '' }">产品动态</router-link>
          <router-link class="systemIfo-wrapper-desc" :to="{ name: '' }">店铺通知</router-link>
        </div>
      </li>
      <li class="userTopNav-item">
        <router-link class="userTopNav-item-link userTopNav-item-link-img" :to="{ name: 'helping' }" target='_blank'>
        </router-link>
      </li>
      <li class="userTopNav-item userTopNav-item-last">
        <img class="userTopNav-item-img" :src="userImg" alt="用户图像">
        <div class="userTopNav-item-userWrapper">
          <div class="userWrapper-userIfo">
            <img class="userWrapper-userImg" :src="userImg" alt="用户图像">
            <p class="userWrapper-userAccount">{{userAccount}}</p>
          </div>
          <ul class="userWrapper-list">
            <li class="userWrapper-item">
              <router-link class="userWrapper-link" :to="{ name: '' }">
                <img class="userWrapper-img" src="./icon_profile_account setting.png" alt="帐号设置">
                <span class="userWrapper-desc">帐号设置</span>
              </router-link>
            </li>
            <li class="userWrapper-item">
              <router-link class="userWrapper-link" :to="{ name: '' }">
                <img class="userWrapper-img" src="./icon_profile_switch_shop.png" alt="切换店铺">
                <span class="userWrapper-desc">切换店铺</span>
              </router-link>
            </li>
            <li class="userWrapper-item">
              <router-link class="userWrapper-link" :to="{ name: 'helping' }" target='_blank'>
                <img class="userWrapper-img" src="./icon_profile_help.png" alt="帮助中心">
                <span class="userWrapper-desc">帮助中心</span>
              </router-link>
            </li>
            <li class="userWrapper-item">
              <router-link class="userWrapper-link" :to="{ name: '' }">
                <img class="userWrapper-img" src="./icon_profile_signout.png" alt="退出登录">
                <span class="userWrapper-desc">退出登录</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    userAccount () {
      return this.$store.state.userInfo.userAccount
    },
    userImg () {
      return this.$store.state.userInfo.userImg
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.userTopNav {
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid $border-maincolor;
  display: flex;
  align-items: center;
}

.userTopNav-leftSlot {
  margin-right: auto;
  margin-left: 20px;
}

.userTopNav-list {
  display: flex;
  align-items: center;
}

.userTopNav-item {
  display: inline-block;
}

.userTopNav-item-link {
  padding: 0 20px;
}

.userTopNav-item-link {
  border-right: 1px solid $border-maincolor;
}

.userTopNav-item-link:hover {
  color: $light-blue;
}

.userTopNav-item-link-img {
  width: 16px;
  height: 16px;
  padding: 0 30px;
  background: url('./icon_top_help.svg') center center no-repeat;
}

.userTopNav-item-link-img:hover {
  background: url('./icon_top_help_hover.svg') center center no-repeat;
}

.userTopNav-item-img {
  width: 60px;
  height: 60px;
  padding: 20px;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
}

.userTopNav-item-last,
.userTopNav-item-systemIfo {
  position: relative;
}

.systemIfo-wrapper,
.userTopNav-item-userWrapper {
  position: absolute;
  z-index: 99;
  border: 1px solid $border-maincolor;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}

.systemIfo-wrapper {
  width: 140px;
  top: 40px;
  right: -21px;
  padding: 12px 0;
}

.userTopNav-item-userWrapper {
  width: 320px;
  top: 60px;
  right: 0;
}

.systemIfo-wrapper::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  transform: translateX(-50%);
  border-bottom-color: #eee;
}

.systemIfo-wrapper-desc {
  line-height: 30px;
  padding: 0 20px;
  display: block;
}

.userTopNav-item-last:hover .userTopNav-item-userWrapper,
.userTopNav-item-systemIfo:hover .systemIfo-wrapper {
  visibility: visible;
  opacity: 1;
}

.userWrapper-userIfo {
  padding: 20px 0;
  margin: 0 40px;
  text-align: center;
  border-bottom: 1px solid $border-maincolor;
}

.userWrapper-userImg {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.userWrapper-list {
  padding: 20px;
}

.userWrapper-item {
  padding-left: 20px;
}

.userWrapper-link {
  height: 40px;
  display: flex;
  align-items: center;
}

.userWrapper-link:hover,
.systemIfo-wrapper-desc:hover {
  background-color: $background-color-3;
  color: $light-blue;
}

.userWrapper-img {
  width: 16px;
  height: 16px;
}

.userWrapper-desc {
  margin-left: 20px;
}

</style>
