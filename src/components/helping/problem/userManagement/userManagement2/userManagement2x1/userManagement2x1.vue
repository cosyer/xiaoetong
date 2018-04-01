<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'UserManagement2', query: {routerTitleIndex: '1', routerContentIndex: '1'} }">客户消息</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">如何查看店铺访问用户？</h2>
    <p class="article-time">2017-12-19 16:07:04</p>
    <br>
    <p class="article-paragraph">用户可以在以下入口给店铺管理员提建议：</p>
    <p class="article-paragraph">1，手机端【店铺】→【我的】→【意见反馈】</p>
    <p class="article-paragraph">2，店铺所有页面底部“投诉举报”</p>
    <br>
    <p class="article-paragraph">管理员则可以在两个地方收看用户反馈：</p>
    <p class="article-paragraph">1，【管理台】→【用户】→右上角【客户消息】图标</p>
    <img class="article-img" src="./1.png" alt="收看用户反馈">
    <p class="article-paragraph">2，管理台【用户】→【客户消息】查看所有用户提出的反馈意见，并可点击“发消息”回复用户。用户将在店铺“消息”页面收到回复</p>
    <img class="article-img" src="./2.png" alt="收看用户反馈">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
