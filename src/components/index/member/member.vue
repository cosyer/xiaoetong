<template lang="html">
  <div class="">
    <userTopNav>
      <slot>会员</slot>
    </userTopNav>
    <section class="member">
      <div class="member-top">
        <img class="member-top-img" src="./user.png" alt="用户图片">
        <div class="member-top-content">
          <h1 class="member-top-content-title">付费会员</h1>
          <p class="member-top-content-desc">可使您店铺的会员功能灵活多变，自由操作，更利于会员体系的搭建。内含：自定义设置会员期（季度、年等），会员内包含专栏、单品等多层次内容、会员续费提醒等项目，方便您以多种形式售卖您的内容，更好地管理用户。</p>
          <p class="member-top-content-overdue">功能已于&nbsp;{{overdue}}&nbsp;到期</p>
          <router-link class="member-top-content-continueLink" :to="{ name: 'myService', params: {} }">立即续费</router-link>
        </div>
      </div>
      <div class="member-bottom">
        <ul class="member-bottom-list">
          <li class="member-bottom-item member-bottom-item_active">功能介绍</li>
          <li class="member-bottom-item">
            <router-link class="member-bottom-item-link" :to="{ name: 'paidContent6x1', query: {routerTitleIndex: '2', routerContentIndex: '5'} }" target='_blank'>功能教程</router-link>
          </li>
        </ul>
        <div class="member-bottom-content">
          <div class="member-bottom-content-wrapper">
            <p class="member-bottom-content-desc"><strong>会员专属标识：</strong>用户开通前显示灰色，开通后可点亮专属标识，彰显会员身份</p>
            <p class="member-bottom-content-desc"><strong>自定义会员期限：</strong>可按1个月、3个月、一年等时段设置会员有效期，用户购买后可在您指定期限内查看专属内容</p>
            <p class="member-bottom-content-desc"><strong>发布会员内容：</strong>会员内可包含专栏、知识商品、线下活动等内容（活动功能需另行购买）</p>
            <p class="member-bottom-content-desc"><strong>会员续费提醒：</strong>会员期限结束时，可开启显示，提醒会员续费</p>
          </div>
          <div class="member-bottom-preview">
            <h3 class="member-bottom-preview-title">预览：</h3>
            <ul class="member-bottom-preview-list">
              <li class="member-bottom-preview-item">
                <img class="member-bottom-preview-img" src='./1.jpg' alt="会员预览图-1">
              </li>
              <li class="member-bottom-preview-item">
                <img class="member-bottom-preview-img" src='./2.png' alt="会员预览图-2">
              </li>
              <li class="member-bottom-preview-item">
                <img class="member-bottom-preview-img" src='./3.png' alt="会员预览图-3">
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
export default {
  components: {
    userTopNav
  },
  data () {
    return {
      // overdue: '2018-02-24 23:36:40'
    }
  },
  computed: {
    overdue () {
      return this.$store.state.userInfo.overdue
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.member {
  padding: 20px;
}

.member-top {
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  background-color: #fff;
}

.member-top-img {
  width: 180px;
  height: 180px;
  margin-right: 30px;
}

.member-top-content-title {
  margin-bottom: 10px;
}

.member-top-content-desc {
  color: $text-dark-color;
}

.member-top-content-overdue {
  margin-top: 15px;
  color: $text-wraning;
}

.member-top-content-continueLink {
  width: 100px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 2px;
  background-color: $light-blue;
  color: #fff;
  margin-top: 15px;
}

.member-top-content-continueLink:hover {
  background-color: $dark-blue;
}

.member-bottom,
.member-bottom-item_active {
  background-color: #fff;
}

.member-bottom-list {
  background-color: $background-color-4;
}

.member-bottom-item {
  width: 96px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
}

.member-bottom-item-link {
  display: block;
  color: $text-light-color;
}

.member-bottom-content {
  padding: 0 20px;
}

.member-bottom-content-wrapper {
  margin: 20px 0;
}

.member-bottom-content-desc {
  margin-bottom: 10px;
  color: $text-dark-color;
}

.member-bottom-preview-title {
  margin-bottom: 20px;
}

.member-bottom-preview-list {
  overflow-x: scroll;
  white-space: nowrap;
  padding-bottom: 20px;
}

.member-bottom-preview-item {
  margin-right: 40px;
  display: inline-block;
  height: 320px;
}

.member-bottom-preview-img {
  max-height: 100%;
}
</style>
