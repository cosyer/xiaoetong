<template lang="html">
  <div>
    <userTopNav>
      <slot>营销</slot>
    </userTopNav>
    <overDueWarning v-if='isShowOverDueWarning' @hideExplainContent='hideExplainContent'></overDueWarning>
    <section class="marketing">
      <div class="marketing-container">
        <h4 class="marketing-container-title">经营渠道</h4>
        <p class="marketing-container-desc">拓展内容覆盖渠道</p>
        <ul class="marketing-container-list">
          <li class="marketing-container-item" v-for='(item, index) of operationalChannel' :key='item.id'>
            <router-link class="marketing-container-item-link" :to="{ name: item.name }" @click.native='linkToOperationalChannel(index)'>
              <img class="marketing-container-item-img" :src="item.src" :alt="item.desc">
              <div class="marketing-container-item-wrapper">
                <p class="marketing-container-item-title">{{item.title}}</p>
                <p class="marketing-container-item-desc">{{item.desc}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="marketing-container">
        <h4 class="marketing-container-title">营销功能</h4>
        <p class="marketing-container-desc">加速内容变现</p>
        <ul class="marketing-container-list">
          <li class="marketing-container-item" v-for='(item, index) of marketingFunction' :key='item.id'>
            <router-link class="marketing-container-item-link" :to="{ name: item.name }" @click.native='linkToMarketingFunction(index)'>
              <img class="marketing-container-item-img" :src="item.src" :alt="item.desc">
              <div class="marketing-container-item-wrapper">
                <p class="marketing-container-item-title">{{item.title}}<span class="marketing-container-item-note">{{item.note}}</span></p>
                <p class="marketing-container-item-desc">{{item.desc}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="marketing-container">
        <h4 class="marketing-container-title">商品服务</h4>
        <p class="marketing-container-desc">个性化配置，装修你的店铺</p>
        <ul class="marketing-container-list">
          <li class="marketing-container-item" v-for='(item, index) of goodsService' :key='item.id'>
            <router-link class="marketing-container-item-link" :to="{ name: item.name }" @click.native='linkToGoodsService(index)'>
              <img class="marketing-container-item-img" :src="item.src" :alt="item.desc">
              <div class="marketing-container-item-wrapper">
                <p class="marketing-container-item-title">{{item.title}}</p>
                <p class="marketing-container-item-desc">{{item.desc}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="marketing-container">
        <h4 class="marketing-container-title marketing-container-vipTitle">大客户服务</h4>
        <p class="marketing-container-desc">大客户经理一对一对接服务</p>
        <ul class="marketing-container-list">
          <li class="marketing-container-item" v-for='(item, index) of vipService' :key='item.id'>
            <router-link class="marketing-container-item-link" :to="{ name: item.name }" @click.native='linkToVipService(index)'>
              <img class="marketing-container-item-img" :src="item.src" :alt="item.desc">
              <div class="marketing-container-item-wrapper">
                <p class="marketing-container-item-title">{{item.title}}</p>
                <p class="marketing-container-item-desc">{{item.desc}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
import overDueWarning from '@/components/common/overDueWarning/overDueWarning'

export default {
  components: {
    userTopNav,
    overDueWarning
  },
  data () {
    return {
      isShowOverDueWarning: false,
      operationalChannel: [
        {
          id: 1,
          src: require('./icon_wechat.svg'),
          title: '微信认证服务号',
          desc: '用于自有支付和服务通知',
          name: ''
        },
        {
          id: 2,
          src: require('./mina.png'),
          title: '微信小程序',
          desc: '一键拥有自己的小程序',
          name: ''
        }
      ],
      marketingFunction: [
        {
          id: 1,
          src: require('./s_distribute.png'),
          title: '内容市场',
          desc: '店铺&链接分销知识好货',
          name: '',
          note: 'New' /* 红色标签 */
        },
        {
          id: 2,
          src: require('./s_saler.png'),
          title: '推广员',
          desc: '分销裂变传播',
          name: '',
          note: ''
        },
        {
          id: 3,
          src: require('./s_coupon.png'),
          title: '优惠券',
          desc: '向客户发放店铺优惠券',
          name: '',
          note: ''
        },
        {
          id: 4,
          src: require('./s_invite_code.png'),
          title: '邀请码',
          desc: '免费邀请开通',
          name: '',
          note: ''
        },
        {
          id: 5,
          src: require('./s_share_resource.png'),
          title: '请好友看',
          desc: '好友分享免费听',
          name: '',
          note: ''
        },
        {
          id: 6,
          src: require('./s_short_link.png'),
          title: '二维码/短链接生成',
          desc: '一键转短链接和二维码',
          name: '',
          note: ''
        },
        {
          id: 7,
          src: require('./s_channel.png'),
          title: '页面统计',
          desc: '渠道链接效果',
          name: '',
          note: ''
        },
        {
          id: 8,
          src: require('./s_teambuy2.png'),
          title: '拼团',
          desc: '提升销量必备',
          name: '',
          note: 'Beta'
        }
      ],
      goodsService: [
        {
          id: 1,
          src: require('./f_alive.png'),
          title: '直播扩展',
          desc: '打赏、共享文件、音频导出',
          name: ''
        },
        {
          id: 2,
          src: require('./f_member.png'),
          title: '付费会员',
          desc: '会员时长、会员续费',
          name: ''
        },
        {
          id: 3,
          src: require('./shop_diy.png'),
          title: '品牌形象',
          desc: '首页、分享自定义',
          name: ''
        },
        {
          id: 4,
          src: require('./shop_hide.png'),
          title: '信息隐藏',
          desc: '订阅数、更新期数隐藏',
          name: ''
        },
        {
          id: 5,
          src: require('./shop_pick.svg'),
          title: '信息采集',
          desc: '支付前填写用户信息',
          name: ''
        }
      ],
      vipService: [
        {
          id: 1,
          src: require('./vip_api.png'),
          title: '开放平台API',
          desc: 'API接口服务',
          name: ''
        },
        {
          id: 2,
          src: require('./vip_nano.png'),
          title: '微信小程序',
          desc: '一键拥有自己的小程序',
          name: ''
        },
        {
          id: 3,
          src: require('./vip_app_diy.png'),
          title: 'APP定制',
          desc: 'App渠道拓展',
          name: ''
        },
        {
          id: 4,
          src: require('./icon_binding.svg'),
          title: '服务号代绑定',
          desc: '大客户对接',
          name: ''
        }
      ]
    }
  },
  computed: {
    isOverTime () {
      return this.$store.state.userInfo.isOverTime
    }
  },
  methods: {
    linkToOperationalChannel (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.operationalChannel[index].name})
      }
    },
    linkToMarketingFunction (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.marketingFunction[index].name})
      }
    },
    linkToGoodsService (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.goodsService[index].name})
      }
    },
    linkToVipService (index) {
      if (this.isOverTime) {
        this.isShowOverDueWarning = true
      } else {
        this.$router.push({name: this.vipService[index].name})
      }
    },
    hideExplainContent () {
      this.isShowOverDueWarning = false
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.marketing {
  padding: 20px;
}

.marketing-container {
  padding: 19px 0 19px 19px;
  background-color: #fff;
}

.marketing-container-title,
.marketing-container-desc,
.marketing-container-item {
  display: inline-block;
}

.marketing-container-vipTitle {
  color: $text-vip;
}

.marketing-container-item-note {
  width: 34px;
  line-height: 16px;
  margin-left: 5px;
  padding: 0 4px;
  font-size: 12px;
  border-radius: 8px;
  color: #fff;
  background-color: $text-wraning;
  display: inline-block;
}

.marketing-container-desc {
  font-size: 12px;
  color: $text-light-color;
  margin-left: 10px;
}

.marketing-container-item {
  width: 235px;
  margin: 20px 20px 0 0;
}

.marketing-container-item-link {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  background-color: $background-color-4;
  transition: .3s;
}

.marketing-container-item-link:hover {
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14),
              0 1px 18px 0 rgba(0, 0, 0, .12),
              0 3px 5px -1px rgba(0, 0, 0, .11)
}

.marketing-container-item-img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.marketing-container-item-desc {
  margin-top: 3px;
  font-size: 12px;
  color: $text-light-color;
}
</style>
