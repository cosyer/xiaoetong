<template lang="html">
  <article class="shopSetting">
    <prompt v-if='isShowPrompt'>
      <slot>复制成功！您可在微信内或浏览器中打开</slot>
    </prompt>
    <table class="shopIfo">
      <thead>
        <tr class="titleWrapper">
          <th class="titleWrapper-title" colspan="3">店铺信息</th>
        </tr>
      </thead>
      <tbody>
        <tr class="descWrapper">
          <td class="descWrapper-left">店铺名称</td>
          <td class="descWrapper-middle">{{userShopName}}</td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-setting" :to="{ name: '' }">设置</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">店铺地址</td>
          <td class="descWrapper-middle">{{userShopLink}}</td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-copy" :to="{ name: '' }" @click.native='copyLink'>复制链接</router-link>
            <textarea id="copyLink-textarea" class="copyLink-textarea" name="name" rows="8" cols="8" v-model='userShopLink'></textarea>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="shopDecorate">
      <thead>
        <tr class="titleWrapper">
          <th class="titleWrapper-title" colspan="3">店铺装修</th>
        </tr>
      </thead>
      <tbody>
        <tr class="descWrapper">
          <td class="descWrapper-left">轮播图</td>
          <td class="descWrapper-middle">可以添加和管理在首页顶部显示的重点推荐内容</td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-setting" :to="{ name: '' }">设置</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">首页模块自定义</td>
          <td class="descWrapper-middle">可以任意调整首页模块的位置、自定义展示内容、自定义模块标题</td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-detail" :to="{ name: '' }">了解详情</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">首页名称自定义</td>
          <td class="descWrapper-middle">为用户访问您的店铺主页时顶部显示的名称</td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-detail" :to="{ name: '' }">了解详情</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">分享自定义</td>
          <td class="descWrapper-middle"></td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-detail" :to="{ name: '' }">了解详情</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">分类导航</td>
          <td class="descWrapper-middle">分类导航，首页将显示分类导航栏</td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-setting" :to="{ name: '' }">设置</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">公众号设置</td>
          <td class="descWrapper-middle">店铺内展示您的公众号名称和二维码，引导用户关注</td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-setting" :to="{ name: '' }">设置</router-link>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="functionConfigure">
      <thead>
        <tr class="titleWrapper">
          <th class="titleWrapper-title" colspan="3">功能配置</th>
        </tr>
      </thead>
      <tbody>
        <tr class="descWrapper">
          <td class="descWrapper-left">订阅量隐藏</td>
          <td class="descWrapper-middle">
            <span class="descWrapper-middle-point">显示</span>
            <span class="descWrapper-middle-desc">可以设置显示或隐藏订阅量</span>
          </td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-detail" :to="{ name: '' }">了解详情</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">更新期数隐藏</td>
          <td class="descWrapper-middle">
            <span class="descWrapper-middle-point">显示</span>
            <span class="descWrapper-middle-desc">更新期数隐藏，专栏/会员将不再显示更新期数</span>
          </td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-detail" :to="{ name: '' }">了解详情</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">播放量/浏览量隐藏</td>
          <td class="descWrapper-middle">
            <span class="descWrapper-middle-point">显示</span>
            <span class="descWrapper-middle-desc">播放量/浏览量隐藏，所有商品将不再显示播放量/浏览量</span>
          </td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-detail" :to="{ name: '' }">了解详情</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">消息提醒</td>
          <td class="descWrapper-middle">
            <span class="descWrapper-middle-point">已开启</span>
            <span class="descWrapper-middle-desc">消息提醒服务，你发送给用户的消息会在用户访问店铺页面顶部弹窗提醒</span>
          </td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-setting" :to="{ name: '' }">设置</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">服务号通知</td>
          <td class="descWrapper-middle">
            <span class="descWrapper-middle-point">已关闭</span>
            <span class="descWrapper-middle-desc">开启后您可通过小鹅通知识助手服务号向用户发送服务号通知</span>
          </td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-setting" :to="{ name: '' }">设置</router-link>
          </td>
        </tr>
        <tr class="descWrapper">
          <td class="descWrapper-left">流量模式</td>
          <td class="descWrapper-middle">
            <table>
              <tr>
                <td><span class="descWrapper-middle-point">补贴模式</span></td>
                <td><span class="descWrapper-middle-desc">补贴模式下，小鹅通为标准版客户全面免除第三方代收费用（含图文、音视频、语音直播、视频直播等产生的流量费，短信通知费，资源存储费等）</span></td>
              </tr>
            </table>
          </td>
          <td class="descWrapper-right">
            <router-link class="descWrapper-right-link descWrapper-right-link-setting" :to="{ name: '' }">设置</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </article>
</template>

<script>
import prompt from '@/components/common/prompt/prompt'

export default {
  components: {
    prompt
  },
  data () {
    return {
      isShowPrompt: false
      // userShopName: '舒仔小店',
      // location: 'https://h5.xiaoeknow.com/appDmibwJMq3505/'
    }
  },
  computed: {
    userShopName () {
      return this.$store.state.userInfo.userShopName
    },
    userShopLink () {
      return this.$store.state.userInfo.userShopLink
    }
  },
  methods: {
    copyLink () {
      this.isShowPrompt = true
      let textarea = document.getElementById('copyLink-textarea')
      textarea.select()
      document.execCommand('copy')
      setTimeout(() => { this.isShowPrompt = false }, 1500)
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';
@import '../../../../assets/css/indexCommonStyle.css';

.shopIfo,
.shopDecorate,
.functionConfigure {
  margin-bottom: 20px;
  @mixin table;
}

.titleWrapper {
  @mixin thead;
  color: $text-dark-color;
}

.titleWrapper-title {
  @mixin table-left;
}

.descWrapper {
  @mixin tr-small;
  color: $text-dark-color;
}

.descWrapper:hover {
  background-color: $background-color-1;
}

.descWrapper-left {
  width: 20%;
  @mixin table-left;
}

.descWrapper-middle {
  width: 70%;
}

.descWrapper-middle-point {
  width: 60px;
  margin-right: 20px;
  display: inline-block;
  color: $main-color;
}

.descWrapper-right {
  width: 10%;
  @mixin table-right;
}

.descWrapper-right-link-setting,
.descWrapper-right-link-copy {
  color: $light-blue;
}

.copyLink-textarea {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
}

.descWrapper-right-link-detail {
  color: $text-light-red;
}
</style>
