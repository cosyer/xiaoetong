<template lang="html">
  <div>
    <userTopNav v-if='!isOverTime'>
      <slot>店铺概况</slot>
    </userTopNav>
    <userTopNavWarning v-else></userTopNavWarning>
    <prompt v-if='isShowPrompt'>
      <slot>复制成功！您可在微信内或浏览器中打开</slot>
    </prompt>
    <commonConfirm v-if='isShowCommonConfirmWarning' @hideExplainContent='hideExplainContent' @confirm='confirm'>
      <slot>点击确定后，您将不会再看到精彩案例呦！</slot>
    </commonConfirm>
    <overDueWarning v-if='isShowOverDueWarning' @hideExplainContent='hideExplainContent'></overDueWarning>
    <section class="shopDetails">
      <div class="shopDetails-leftSide">
        <div class="myShop">
          <h3 class="myShop-title">{{userShopName}}</h3>
          <span class="myShop-probation" v-if='isProbation'>7天试用</span>
          <div class="myShop-server">
            <router-link class="myShop-server-vipLink" :to="{ name: 'marketing' }">
              <img class="myShop-server-vipImg" src="./icon_dimond_gold.png" alt="钻石图标-vip服务">
              <span class="myShop-server-vipDesc">大客户服务</span>
            </router-link>
            <router-link class="myShop-server-decorate" :to="{ name: 'shopSetting' }">店铺装修</router-link>
            <button class="myShop-server-visitButton">访问店铺</button>
            <div class="myShop-server-visitWrapper">
              <p class="myShop-server-visitWrapper-title">微信扫一扫访问店铺</p>
              <img class="myShop-server-visitWrapper-img" src="./visit-wx.png" alt="店铺微信二维码">
              <a class="myShop-server-visitWrapper-link1" href="#" @click.prevent='copyLink'>复制链接</a>
              <a class="myShop-server-visitWrapper-link2" href="#">电脑打开</a>
              <textarea id="myShop-server-visitWrapper-textarea" class="myShop-server-visitWrapper-textarea" name="name" rows="8" cols="8" v-model='userShopLink'></textarea>
            </div>
          </div>
        </div>
        <div class="operational-data">
          <h4 class="operational-data-title">运营数据</h4>
          <router-link class="operational-data-link" :to="{ name: '' }">数据分析</router-link>
          <ul class="operational-data-list">
            <li class="operational-data-item">
              <p class="operational-data-item-title">总付费用户</p>
              <p class="operational-data-item-num">0</p>
            </li>
            <li class="operational-data-item">
              <p class="operational-data-item-title">今日付费用户</p>
              <p class="operational-data-item-num">0</p>
            </li>
            <li class="operational-data-item">
              <p class="operational-data-item-title">今日活跃用户</p>
              <p class="operational-data-item-num">0</p>
            </li>
            <li class="operational-data-item">
              <router-link class="operational-data-item-link" :to="{ name: 'myProperty' }">
                <p class="operational-data-item-title">今日新增收入（元）</p>
                <p class="operational-data-item-incomeNum">{{todayIncome}}</p>
              </router-link>
            </li>
            <li class="operational-data-item">
              <router-link class="operational-data-item-link" :to="{ name: 'withdrawRecord' }">
                <p class="operational-data-item-title">可提现余额（元）</p>
                <p class="operational-data-item-incomeNum">{{totalIncome}}</p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="knowledge-goods">
          <h4 class="knowledge-goods-title">知识商品</h4>
          <p class="knowledge-goods-desc">专栏、直播等多种内容付费形式，让知识更立体</p>
          <ul class="knowledge-goods-list">
            <li class="knowledge-goods-item" v-for='(item, index) of knowledgeGoods' :key='item.id' @click='linkToKnowledgeGoods(index)'>
              <router-link class="knowledge-goods-item-link" :to="{ name: '' }">
                <img class="knowledge-goods-item-img" :src="item.src" :alt="item.desc">
                <div class="knowledge-goods-item-wrapper">
                  <p class="knowledge-goods-item-title">{{item.title}}</p>
                  <p class="knowledge-goods-item-desc">{{item.desc}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="community-operation">
          <h4 class="community-operation-title">社群运营</h4>
          <p class="community-operation-desc">更多互动方式增强用户黏性和促进内容沉淀</p>
          <ul class="community-operation-list">
            <li class="community-operation-item" v-for='(item, index) of communityOperation' :key='item.id' @click='linkToCommunityOperation(index)'>
              <router-link class="community-operation-item-link" :to="{ name: '' }">
                <img class="community-operation-item-img" :src="item.src" :alt="item.desc">
                <div class="community-operation-item-wrapper">
                  <p class="community-operation-item-title">{{item.title}}</p>
                  <p class="community-operation-item-desc">{{item.desc}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="marketing-functions">
          <h4 class="marketing-functions-title">营销功能</h4>
          <p class="marketing-functions-desc">丰富的营销手段加速内容变现</p>
          <ul class="marketing-functions-list">
            <li class="marketing-functions-item" v-for='(item, index) of marketingFunctions' :key='item.id' @click='linkToMarketingFunctions(index)'>
              <router-link class="marketing-functions-item-link" :to="{ name: '' }">
                <p class="marketing-functions-item-title">{{item.title}}</p>
                <p class="marketing-functions-item-desc">{{item.desc}}</p>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="more-services">
          <h4 class="more-services-title">更多服务</h4>
          <ul class="more-services-list">
            <li class="more-services-item" v-for='(item, index) of moreServices' :key='item.id' @click='linkToMoreServices(index)'>
              <router-link class="more-services-item-link" :to="{ name: '' }">
                <img class="more-services-item-img" :src="item.src" :alt="item.desc">
                <div class="more-services-item-wrapper">
                  <p class="more-services-item-title">{{item.title}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <wellDone v-if='isShowWelldone' @hideWelldone='hideWelldone'>
        </wellDone>
      </div>
      <div class="shopDetails-rightSide">
        <div class="news">
          <h4 class="news-title">最新动态</h4>
          <router-link class="news-more" :to="{ name: '' }">查看更多</router-link>
          <ul class="news-list">
            <li class="news-item" v-for='item of newsItem' :key='item.id'>
              <router-link class="news-item-link" :to="{ name: item.name, query: item.query }" target='_blank'>{{item.desc}}</router-link>
            </li>
          </ul>
        </div>
        <div class="commonProblems">
          <h4 class="commonProblems-title">常见问题</h4>
          <router-link class="commonProblems-more" :to="{ name: 'helping' }" target='_blank'>帮助中心</router-link>
          <ul class="commonProblems-list">
            <li class="commonProblems-item" v-for='item of commonProblemsItem' :key='item.id'>
              <router-link class="commonProblems-item-link" :to="{ name: item.name, query: item.query }" target='_blank'>{{item.desc}}</router-link>
            </li>
          </ul>
        </div>
        <div class="weixin">
          <img class="weixin-img" src="./xe_qrcode.jpg" alt="小鹅通微信二维码">
          <div class="weixin-wrapper">
            <h4 class="weixin-wrapper-title">小鹅通微信公众号</h4>
            <p class="weixin-wrapper-desc">一手掌握最新产品动态、优惠活动、大咖店铺案例等新鲜资讯</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
import userTopNavWarning from '@/components/common/userTopNavWarning/userTopNavWarning'
import prompt from '@/components/common/prompt/prompt'
import overDueWarning from '@/components/common/overDueWarning/overDueWarning'
import commonConfirm from '@/components/common/commonConfirm/commonConfirm'
import wellDone from '@/components/common/wellDone/wellDone'

export default {
  components: {
    userTopNav,
    userTopNavWarning,
    prompt,
    overDueWarning,
    commonConfirm,
    wellDone
  },
  data () {
    return {
      isShowPrompt: false,
      isShowOverDueWarning: false,
      isShowCommonConfirmWarning: false,
      todayIncome: 0,
      totalIncome: 0,
      knowledgeGoods: [
        {
          id: 1,
          src: require('./icon_picture.svg'),
          title: '图文',
          desc: '图文内容',
          name: 'graphic'
        },
        {
          id: 2,
          src: require('./icon_voice.svg'),
          title: '音频',
          desc: '音频内容',
          name: 'audio'
        },
        {
          id: 3,
          src: require('./icon_video.svg'),
          title: '视频',
          desc: '视频内容',
          name: ''
        },
        {
          id: 4,
          src: require('./icon_live.svg'),
          title: '直播',
          desc: '音频，视频等直播方式',
          name: ''
        },
        {
          id: 5,
          src: require('./icon_column.svg'),
          title: '专栏',
          desc: '定期更新系列内容',
          name: ''
        },
        {
          id: 6,
          src: require('./icon_vip.svg'),
          title: '会员',
          desc: '享受会员待遇',
          name: ''
        }
      ],
      communityOperation: [
        {
          id: 1,
          src: require('./icon_community.svg'),
          title: '小社群',
          desc: '社群打卡',
          name: ''
        },
        {
          id: 2,
          src: require('./icon_qanda.svg'),
          title: '问答',
          desc: '问答专区',
          name: ''
        },
        {
          id: 3,
          src: require('./icon_activity.svg'),
          title: '活动',
          desc: '线下活动管理',
          name: ''
        },
        {
          id: 4,
          src: require('./icon_homework.svg'),
          title: '作业本',
          desc: '课程作业管理',
          name: ''
        },
        {
          id: 5,
          src: require('./icon_punch.svg'),
          title: '打卡',
          desc: '运营制胜法宝',
          name: ''
        },
        {
          id: 6,
          src: require('./icon_chat.svg'),
          title: '评论互动',
          desc: '用户评论管理',
          name: ''
        }
      ],
      marketingFunctions: [
        {
          id: 1,
          title: '优惠券',
          desc: '向用户发放店铺优惠券',
          name: ''
        },
        {
          id: 2,
          title: '推广员',
          desc: '用户推广店铺，获得奖励',
          name: ''
        },
        {
          id: 3,
          title: '邀请码',
          desc: '向用户发放店铺邀请码',
          name: ''
        },
        {
          id: 4,
          title: '页面统计',
          desc: '实时监控页面流量与转化',
          name: ''
        }
      ],
      moreServices: [
        {
          id: 1,
          src: require('./icon_finance.svg'),
          title: '收入/提现',
          name: ''
        },
        {
          id: 2,
          src: require('./f_alive.png'),
          title: '直播扩展',
          name: ''
        },
        {
          id: 3,
          src: require('./icon_miniprograms.svg'),
          title: '微信小程序',
          name: ''
        },
        {
          id: 4,
          src: require('./icon_message.svg'),
          title: '群发消息',
          name: ''
        },
        {
          id: 5,
          src: require('./icon_market.svg'),
          title: '内容市场',
          name: ''
        },
        {
          id: 6,
          src: require('./shop_hide.png'),
          title: '信息隐藏',
          name: ''
        },
        {
          id: 7,
          src: require('./icon_banner.svg'),
          title: '首页自定义',
          name: ''
        },
        {
          id: 8,
          src: require('./icon_shortlink.svg'),
          title: '二维码/短链接',
          name: ''
        },
        {
          id: 9,
          src: require('./icon_download.svg'),
          title: '下载管理',
          name: ''
        }
      ],
      newsItem: [
        {
          id: 1,
          desc: '功能更新：拼团功能上线',
          name: '',
          query: {}
        },
        {
          id: 2,
          desc: '功能更新：信息采集功能升级',
          name: 'paidContent8x1',
          query: {routerTitleIndex: '2', routerContentIndex: '7'}
        },
        {
          id: 3,
          desc: '全新分销模式：内容市场上线',
          name: '',
          query: {}
        },
        {
          id: 4,
          desc: '功能更新：优化知识商品管理',
          name: 'paidContent1x1',
          query: {routerTitleIndex: '2', routerContentIndex: '0'}
        },
        {
          id: 5,
          desc: '功能更新：支持手机号注册登录',
          name: 'gettingStart1x4',
          query: {routerTitleIndex: '0', routerContentIndex: '0'}
        }
      ],
      commonProblemsItem: [
        {
          id: 1,
          desc: '如何添加丰富内容形式',
          name: 'gettingStart1x6',
          query: {routerTitleIndex: '0', routerContentIndex: '0'}
        },
        {
          id: 2,
          desc: '如何将店铺嵌入公众号',
          name: 'gettingStart1x9',
          query: {routerTitleIndex: '0', routerContentIndex: '0'}
        },
        {
          id: 3,
          desc: '如何提高与学员之间的互动',
          name: 'gettingStart1x16',
          query: {routerTitleIndex: '0', routerContentIndex: '0'}
        },
        {
          id: 4,
          desc: '如何传播获取更多收入',
          name: 'gettingStart1x11',
          query: {routerTitleIndex: '0', routerContentIndex: '0'}
        },
        {
          id: 5,
          desc: '如何查看订单记录',
          name: 'gettingStart1x12',
          query: {routerTitleIndex: '0', routerContentIndex: '0'}
        }
      ]
    }
  },
  computed: {
    userShopName () {
      return this.$store.state.userInfo.userShopName
    },
    isProbation () {
      return this.$store.state.userInfo.isProbation
    },
    isOverTime () {
      return this.$store.state.userInfo.isOverTime
    },
    userShopLink () {
      return this.$store.state.userInfo.userShopLink
    },
    isShowWelldone () {
      return this.$store.state.userInfo.isShowWelldone
    }
  },
  methods: {
    hideWelldone () {
      this.isShowCommonConfirmWarning = true
    },
    confirm () {
      this.$store.commit('hideIsShowWellDone')
      this.isShowCommonConfirmWarning = false
    },
    copyLink () {
      this.isShowPrompt = true
      let textarea = document.getElementById('myShop-server-visitWrapper-textarea')
      textarea.select()
      document.execCommand('copy')
      setTimeout(() => { this.isShowPrompt = false }, 1500)
    },
    linkToKnowledgeGoods (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.knowledgeGoods[index].name})
      }
    },
    linkToCommunityOperation (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.communityOperation[index].name})
      }
    },
    linkToMarketingFunctions (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.marketingFunctions[index].name})
      }
    },
    linkToMoreServices (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.moreServices[index].name})
      }
    },
    hideExplainContent () {
      this.isShowOverDueWarning = false
      this.isShowCommonConfirmWarning = false
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';
@import '../../../assets/css/indexCommonStyle.css';

.shopDetails,
.shopDetails-leftSide {
  padding: 20px;
  overflow: hidden;
}

.shopDetails {
  position: relative;
}

.shopDetails-leftSide {
  background-color: #fff;
  margin-right: 280px;
}

.shopDetails-rightSide {
  width: 280px;
  padding-left: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
}

/********************
  店铺概况主内容顶部
*********************/
.myShop {
  height: 56px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.myShop-probation {
  background-color: $text-background-color-1;
  color: #fff;
  margin-left: 15px;
  padding: 0 5px;
  border-radius: 2px;
}

.myShop-server {
  position: relative;
  margin-left: auto;
}

.myShop-server-vipLink {
  margin-right: 20px;
}

.myShop-server-vipImg {
  width: 14px;
  margin-right: 6px;
  vertical-align: middle;
}

.myShop-server-vipDesc {
  color: $text-vip;
}

.myShop-server-visitButton,
.myShop-server-decorate {
  @mixin button-main;
}

.myShop-server-visitButton:hover,
.myShop-server-decorate:hover {
  background-color:$background-color-2;
}

.myShop-server-visitWrapper {
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 99;
  width: 180px;
  padding: 10px 20px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  border: 1px solid $border-maincolor;
  background-color: #fff;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: .5s;
}

.myShop-server-visitWrapper-title {
  line-height: 20px;
}

.myShop-server-visitWrapper-img {
  width: 120px;
  height: 120px;
  margin: 15px 0;
}

.myShop-server-visitWrapper-link1,
.myShop-server-visitWrapper-link2 {
  color: $light-blue;
}

.myShop-server-visitWrapper-link1 {
  margin-right: 10px;
}

.myShop-server-visitWrapper-link2 {
  margin-left: 10px;
}

.myShop-server-visitWrapper-textarea {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
}

/********************
  共同样式
*********************/

.operational-data-title,
.operational-data-link,
.operational-data-item-link,
.knowledge-goods-title,
.knowledge-goods-desc,
.community-operation-title,
.community-operation-desc,
.marketing-functions-title,
.marketing-functions-desc,
.news-title,
.news-more,
.commonProblems-title,
.commonProblems-more {
  display: inline-block;
}

.knowledge-goods-desc,
.knowledge-goods-item-desc,
.community-operation-desc,
.community-operation-item-desc,
.marketing-functions-desc,
.operational-data-link {
  font-size: 12px;
  color: $text-light-color;
}

.knowledge-goods-desc,
.community-operation-desc,
.marketing-functions-desc,
.operational-data-link,
.news-more,
.commonProblems-more {
  margin-left: 10px;
}

.knowledge-goods-list,
.community-operation-list,
.marketing-functions-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
}

.knowledge-goods,
.community-operation,
.more-services {
  margin-bottom: 20px;
}

.myShop-server-visitButton:hover + .myShop-server-visitWrapper,
.myShop-server-visitWrapper:hover {
  visibility: visible;
  opacity: 1;
}

/********************
  运营数据
*********************/
.operational-data-list {
  height: 90px;
  padding: 15px 0;
  margin: 10px 0 40px 0;
  background-color: $background-color-4;
  text-align: center;
  font-size: 0;
}

.operational-data-item {
  width: 20%;
  display: inline-block;
  font-size: 14px;
}

.operational-data-item:not(:last-child) {
  border-right: 1px solid $border-maincolor;
}

.operational-data-item-title {
  margin-top: 4px;
  margin-bottom: 8px;
  font-size: 12px;
  color: $text-light-color;
}

.operational-data-item-num,
.operational-data-item-incomeNum {
  font-size: 20px;
}

.operational-data-item-incomeNum {
  color: $light-blue;
}

/********************
  知识商品与社群运营
*********************/

.marketing-functions {
  margin-bottom: 40px;
}

.knowledge-goods-item,
.community-operation-item {
  width: 32%;
  display: inline-block;
  margin-bottom: 20px;
}

.knowledge-goods-item-link,
.community-operation-item-link {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  background-color: $background-color-4;
  transition: .3s;
}

.knowledge-goods-item-link:hover,
.community-operation-item-link:hover {
  background-color: $background-color-1;
}

.knowledge-goods-item-img,
.community-operation-item-img {
  width: 42px;
  height: 42px;
  margin-right: 10px;
  margin-left: 20px;
}

.knowledge-goods-item-title,
.community-operation-item-title {
  margin-bottom: 5px;
}

/********************
  营销功能
*********************/

.marketing-functions-item {
  width: 23%;
  border-radius: 2px;
}

.marketing-functions-item:hover {
  box-shadow: inset 0 0 1000px rgba(0, 0, 0, .2);
}

.marketing-functions-item:nth-child(1) {
  background-color: $background-color-9;
}

.marketing-functions-item:nth-child(2) {
  background-color: $background-color-10;
}

.marketing-functions-item:nth-child(3) {
  background-color: $background-color-11;
}

.marketing-functions-item:nth-child(4) {
  background-color: $background-color-12;
}

.marketing-functions-item-link {
  height: 80px;
  padding: 18px 0;
  display: block;
  text-align: center;
}

.marketing-functions-item-title,
.marketing-functions-item-desc {
  color: #fff;
  margin-bottom: 5px;
}

.marketing-functions-item-desc {
  font-size: 12px;
}

/********************
  更多服务
*********************/

.more-services-list {
  margin-top: 10px;
}

.more-services-item {
  width: 23%;
  height: 60px;
  margin: 0 2.6% 20px 0;
  display: inline-block;
  background-color: $background-color-4;
  border: solid 1px $border-maincolor;
}

.more-services-item:hover {
  background-color: $background-color-1;
}

.more-services-item:nth-child(4) {
  margin-right: 0;
}

.more-services-item:nth-child(8) {
  margin-right: 0;
}

.more-services-item-link {
  display: flex;
  align-items: center;
  padding: 18px 0 18px 20px;
}

.more-services-item-img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

/*****************************
  右侧最新动态，常见问题，公众号
*****************************/
.news,
.commonProblems,
.weixin {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
}

.news-item,
.commonProblems-item {
  margin-top: 10px;
  font-size: 12px;
}

.news-more,
.commonProblems-more {
  color: $light-blue;
  font-size: 12px;
}

.commonProblems-item-link,
.news-item-link {
  margin-top: 10px;
  font-size: 12px;
  display: block;
}

.commonProblems-item-link:hover,
.news-item-link:hover {
  color: $light-blue;
}

.weixin {
  display: flex;
  align-items: center;
}

.weixin-img {
  width: 90px;
  height: 90px;
  margin-right: 10px;
}

.weixin-wrapper-title {
  margin-bottom: 15px;
}

.weixin-wrapper-desc {
  font-size: 12px;
}
</style>
