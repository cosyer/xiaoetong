<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'UserManagement4', query: {routerTitleIndex: '1', routerContentIndex: '3'} }">信息收集</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">开启资料填写</h2>
    <p class="article-time">2017-12-27 22:50:08</p>
    <br>
    <p class="article-paragraph">专业版用户可以在【专栏】或【会员】的【详情】操作中，选择【开启资料填写】，开启后用户在购买本商品前需要填写个人信息。</p>
    <h3>管理台入口：</h3>
    <img class="article-img" src="./1.png" alt="管理台入口">
    <h3>手机端样式：</h3>
    <img class="article-img" src="./2.png" alt="手机端样式">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
