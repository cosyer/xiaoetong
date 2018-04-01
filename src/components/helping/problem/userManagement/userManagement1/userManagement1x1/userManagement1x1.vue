<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'UserManagement1', query: {routerTitleIndex: '1', routerContentIndex: '0'} }">访问用户</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">如何查看店铺访问用户？</h2>
    <p class="article-time">2017-11-28 21:14:54</p>
    <br>
    <p class="article-paragraph">在【用户】→【用户列表】可以查询到所有访问过店铺的用户名单，包括用户的基本信息和消费金额。</p>
    <img class="article-img" src="./1.png" alt="如何查看店铺访问用户">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
