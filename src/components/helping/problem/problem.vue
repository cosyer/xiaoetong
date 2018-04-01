<template lang="html">
  <section class="problem-container">
    <div class="problem-nav">
      <ul class="problem-nav-list">
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper">
            <span class="problem-nav-item-title">新手入门</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">用户管理</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: 'UserManagement1', query: {routerTitleIndex: '1', routerContentIndex: '0'} }">访问用户</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'UserManagement2', query: {routerTitleIndex: '1', routerContentIndex: '1'} }">客户消息</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'UserManagement3', query: {routerTitleIndex: '1', routerContentIndex: '2'} }">消息推送</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'UserManagement4', query: {routerTitleIndex: '1', routerContentIndex: '3'} }">信息收集</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">内容付费</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: 'paidContent1', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">售卖形式</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'paidContent2', query: {routerTitleIndex: '2', routerContentIndex: '1'} }">音频</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'paidContent3', query: {routerTitleIndex: '2', routerContentIndex: '2'} }">视频</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'paidContent4', query: {routerTitleIndex: '2', routerContentIndex: '3'} }">图文</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'paidContent5', query: {routerTitleIndex: '2', routerContentIndex: '4'} }">专栏</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'paidContent6', query: {routerTitleIndex: '2', routerContentIndex: '5'} }">会员</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'paidContent7', query: {routerTitleIndex: '2', routerContentIndex: '6'} }">回收站</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: 'paidContent8', query: {routerTitleIndex: '2', routerContentIndex: '7'} }">其他相关功能</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">社群运营</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '3', routerContentIndex: '0'} }">小社群</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '3', routerContentIndex: '1'} }">活动管理</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '3', routerContentIndex: '2'} }">付费问答</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '3', routerContentIndex: '3'} }">作业本</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '3', routerContentIndex: '4'} }">打卡</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '3', routerContentIndex: '5'} }">评论互动</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">直播相关</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '4', routerContentIndex: '0'} }">直播操作</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '4', routerContentIndex: '1'} }">视频录播</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '4', routerContentIndex: '2'} }">视频直播</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '4', routerContentIndex: '3'} }">PPT直播</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '4', routerContentIndex: '4'} }">加密直播</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">营销互动</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '0'} }">拼团</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '1'} }">邀请卡</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '2'} }">邀请码</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '3'} }">请好友看</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '4'} }">赠送好友</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '5'} }">推广员</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '6'} }">优惠券</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '7'} }">页面统计</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '8'} }">内容分销</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '5', routerContentIndex: '9'} }">常见问题</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">账户管理</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '6', routerContentIndex: '0'} }">账户管理</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">财务管理</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '7', routerContentIndex: '0'} }">订单记录</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '7', routerContentIndex: '1'} }">店铺收入</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '7', routerContentIndex: '2'} }">提现</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '7', routerContentIndex: '3'} }">流量费用说明</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '7', routerContentIndex: '4'} }">常见问题</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">数据分析</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '8', routerContentIndex: '0'} }">数据分析指标</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '8', routerContentIndex: '1'} }">数据分析常见问题</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">基础配置</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '9', routerContentIndex: '0'} }">小鹅通服务协议</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '9', routerContentIndex: '1'} }">内容安全</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '9', routerContentIndex: '2'} }">企业模式开通指引</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '9', routerContentIndex: '3'} }">开放接口</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">店铺设置</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '10', routerContentIndex: '0'} }">店铺信息</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '10', routerContentIndex: '1'} }">店铺装修</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '10', routerContentIndex: '2'} }">功能配置</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">小程序</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '11', routerContentIndex: '0'} }">独立小程序</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '11', routerContentIndex: '1'} }">独立小程序配置指引</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '11', routerContentIndex: '2'} }">开放平台申请</router-link>
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '11', routerContentIndex: '3'} }">审核失败</router-link>
            </div>
          </div>
        </li>
        <li class="problem-nav-item">
          <div class="problem-nav-item-topWrapper" @click='showLinkContent'>
            <span class="problem-nav-item-title">内容违规实例</span>
            <img class="problem-nav-item-img" src="./icon_down_arrow.png" alt="向下箭头图标">
          </div>
          <div class="problem-nav-item-bottomWrapper">
            <div class="giveHeightToOuterWrapper">
              <router-link class="problem-nav-item-link" :to="{ name: '', query: {routerTitleIndex: '12', routerContentIndex: '0'} }">内容违规类型</router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="problem-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      searchContent: '',
      routerTitleIndex: '',
      routerContentIndex: ''
    }
  },
  computed: {
    getTopWrappers () {
      return document.getElementsByClassName('problem-nav-item-topWrapper')
    },
    getBottomWrappers () {
      return document.getElementsByClassName('problem-nav-item-bottomWrapper')
    },
    getArrowImgs () {
      return document.getElementsByClassName('problem-nav-item-img')
    },
    getGiveHeightToOuterWrapper () {
      return document.getElementsByClassName('giveHeightToOuterWrapper')
    },
    getLink () {
      return this.getGiveHeightToOuterWrapper[this.routerTitleIndex].getElementsByClassName('problem-nav-item-link')
    },
    getAllLinks () {
      return document.getElementsByClassName('problem-nav-item-link')
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.searchContent = to.query.searchContent
      vm.routerTitleIndex = to.query.routerTitleIndex
      vm.routerContentIndex = to.query.routerContentIndex

      if (vm.searchContent) {
        return
      }
      vm.getArrowImgs[vm.routerTitleIndex].classList.add('problem-nav-item-img_active')
      vm.getGiveHeightToOuterWrapper[vm.routerTitleIndex].classList.add('giveHeightToOuterWrapper_active')
      vm.getBottomWrappers[vm.routerTitleIndex].style.height = vm.getGiveHeightToOuterWrapper[vm.routerTitleIndex].offsetHeight + 'px'
      vm.getLink[vm.routerContentIndex].style.backgroundColor = '#eee'
    })
  },
  beforeRouteUpdate (to, from, next) {
    this.searchContent = to.query.searchContent
    this.routerTitleIndex = to.query.routerTitleIndex
    this.routerContentIndex = to.query.routerContentIndex

    if (this.searchContent) {
      for (let i = 0; i < this.getBottomWrappers.length; i++) {
        this.getArrowImgs[i].classList.remove('problem-nav-item-img_active')
        this.getGiveHeightToOuterWrapper[i].classList.remove('giveHeightToOuterWrapper_active')
        this.getBottomWrappers[i].style.height = '0px'
        this.getAllLinks[i].style.backgroundColor = ''
      }
      next()
      return
    }

    for (let i = 0; i < this.getBottomWrappers.length; i++) {
      this.getArrowImgs[i].classList.remove('problem-nav-item-img_active')
      this.getGiveHeightToOuterWrapper[i].classList.remove('giveHeightToOuterWrapper_active')
      this.getBottomWrappers[i].style.height = '0px'
      this.getAllLinks[i].style.backgroundColor = ''
    }

    this.getArrowImgs[this.routerTitleIndex].classList.add('problem-nav-item-img_active')
    this.getGiveHeightToOuterWrapper[this.routerTitleIndex].classList.add('giveHeightToOuterWrapper_active')
    this.getBottomWrappers[this.routerTitleIndex].style.height = this.getGiveHeightToOuterWrapper[this.routerTitleIndex].offsetHeight + 'px'
    this.getLink[this.routerContentIndex].style.backgroundColor = '#eee'
    next()
  },
  mounted () {
    this.$nextTick(() => {
      this.showLinkContent()
    })
  },
  methods: {
    showLinkContent () {
      let topWrappers = document.getElementsByClassName('problem-nav-item-topWrapper')
      let bottomWrappers = document.getElementsByClassName('problem-nav-item-bottomWrapper')
      let arrowImgs = document.getElementsByClassName('problem-nav-item-img')
      let giveHeightToOuterWrapper = document.getElementsByClassName('giveHeightToOuterWrapper')

      for (let i = 0; i < topWrappers.length; i++) {
        topWrappers[i].index = i
        topWrappers[i].onclick = function () {
          if (arrowImgs[this.index].classList.contains('problem-nav-item-img_active')) {
            arrowImgs[this.index].classList.remove('problem-nav-item-img_active')
            giveHeightToOuterWrapper[this.index].classList.remove('giveHeightToOuterWrapper_active')
            bottomWrappers[this.index].style.height = '0px'
            return
          }
          for (let i = 0; i < topWrappers.length; i++) {
            arrowImgs[i].classList.remove('problem-nav-item-img_active')
            giveHeightToOuterWrapper[i].classList.remove('giveHeightToOuterWrapper_active')
            bottomWrappers[i].style.height = '0px'
          }
          arrowImgs[this.index].classList.add('problem-nav-item-img_active')
          giveHeightToOuterWrapper[this.index].classList.add('giveHeightToOuterWrapper_active')
          bottomWrappers[this.index].style.height = giveHeightToOuterWrapper[this.index].offsetHeight + 'px'
        }
      }
    }
  }
}
</script>

<style scoped>
@import '../../../assets/css/color.css';

.problem-container {
  width: 1200px;
  overflow: hidden;
  margin: 40px auto;
  display: flex;
}

.problem-nav {
  width: 280px;
}

.problem-content {
  width: 880px;
  margin-left: 40px;
}

.problem-nav-item-topWrapper {
  width: 100%;
  height: 52px;
  line-height: 52px;
  padding-left: 20px;
  border-top: 1px solid $border-maincolor;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.problem-nav-item-img {
  width: 16px;
  height: 9px;
  margin-left: auto;
  transform: rotate(180deg);
  transition: .5s;
}

.problem-nav-item-img_active {
  transform: rotate(0);
}

.problem-nav-item-bottomWrapper {
  height: 0;
  transition: .5s;
  overflow: hidden;
}

.giveHeightToOuterWrapper {
  border-top: 1px solid $border-maincolor;
  padding-top: 5px;
  transition: .5s;
}

.giveHeightToOuterWrapper_active {
  border-top-color: $light-blue;
}

.problem-nav-item-link {
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  margin-bottom: 10px;
  padding-left: 30px;
  transition: .2s;
}

.problem-nav-item-link:hover {
  background-color: $border-maincolor;
}

.router-link-exact-active {
  background-color: $border-maincolor;
}

</style>
