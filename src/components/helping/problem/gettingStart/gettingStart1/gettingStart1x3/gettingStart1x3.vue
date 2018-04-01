<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">添加简单内容</h2>
    <p class="article-time">2017-11-27 21:13:51</p>
    <br>
    <p class="article-paragraph">登录管理台，从【知识商品】入口，选择自己想要建立的商品类型。</p>
    <p class="article-paragraph">填写图文名称、详情、试看内容、定价、上架时间等信息，并上传封面。 填写完相关内容后，点击“保存”，成功创建你的第一个知识产品。</p>
    <img class="article-img" src="./1.png" alt="添加简单内容-1">
    <img class="article-img" src="./2.png" alt="添加简单内容-2">
    <p class="article-paragraph">回到商品列表，点击“复制链接”，在手机微信中打开该链接，即可查看商品详情。  </p>
    <img class="article-img" src="./3.png" alt="添加简单内容-3">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
