<template lang="html">
  <nav class="userTopNav">
    <div class="userTopNav-leftSlot">
      <p class="userTopNav-leftSlot-desc">免费试用已到期，您的店铺已打烊：已付费用户可正常查看已购内容，未付费用户无法购买商品。
为了不影响店铺的正常运营，请尽快升级至标准版。客服热线: 400-102-6665</p>
      <router-link class="userTopNav-leftSlot-link" :to="{ name: 'serviceSubscription' }">立即升级</router-link>
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
  background-color: $text-wraning;
  border-bottom: 1px solid $border-maincolor;
  display: flex;
  align-items: center;
}

.userTopNav-leftSlot {
  margin-right: auto;
  margin-left: 20px;
  flex: 0 0 630px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.userTopNav-leftSlot-desc {
  width: 82%;
  font-size: 12px;
}

.userTopNav-leftSlot-link {
  display: inline-block;
  width: 90px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 4px;
  background-color: $light-blue;
  color: #fff;
}

.userTopNav-leftSlot-link:hover {
  background-color: $dark-blue;
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
  color: #fff;
  border-right: 1px solid $border-maincolor;
  position: relative;
}

.userTopNav-item-link::after {
  content: "";
  position: absolute;
  top: 140%;
  left: 50%;
  z-index: 999;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: $light-blue;
  transition: .3s;
}

.userTopNav-item-link:hover::after {
  width: 60%;
}

.userTopNav-item-link-img {
  width: 16px;
  height: 16px;
  padding: 0 30px;
  background: url('./icon_top_help_white.svg') center center no-repeat;
}

/* .userTopNav-item-link-img:hover {
  background: url('./icon_top_help_hover.svg') center center no-repeat;
} */

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
