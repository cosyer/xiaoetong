<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'UserManagement3', query: {routerTitleIndex: '1', routerContentIndex: '2'} }">消息推送</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">如何查看店铺访问用户？</h2>
    <p class="article-time">2017-11-20 11:59:23</p>
    <br>
    <p class="article-paragraph">个人模式用户可以通过“小鹅通知识助手”服务号向用户发送服务号通知，通知类型包括：专栏/会员更新提醒；直播开课提醒；社群动态提醒；问答专区提醒。点击【店铺设置】→【服务号通知】开启功能。</p>
    <img class="article-img" src="./1.png" alt="开启服务号通知功能">
    <p class="article-paragraph">开启该功能后，您在更新专栏/会员内容、创建直播、发布社群动态、问答专区产生新的提问/回答时，用户都可以通过小鹅通知识助手服务号收到模板消息提醒。</p>
    <img class="article-img" src="./2.png" alt="开启服务号通知功能">
    <p class="article-paragraph">您可以使用下面二维码引导用户关注小鹅通知识助手服务号，关注成功后用户即可通过小鹅通知识助手接收服务号通知。</p>
    <img class="article-img" src="./3.png" alt="开启服务号通知功能">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
