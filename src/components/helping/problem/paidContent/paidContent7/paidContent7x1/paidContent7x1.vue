<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent7', query: {routerTitleIndex: '2', routerContentIndex: '6'} }">回收站</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">回收站功能说明</h2>
    <p class="article-time">2018-01-31 21:13:28</p>
    <br>

    <p class="article-paragraph"><strong>功能介绍</strong></p>
    <p class="article-paragraph">回收站用于储存停止售卖的商品，包括音频、视频、图文、直播、专栏、会员类型。用户可以在回收站内随时将商品开启售卖。回收站内支持彻底删除该商品，商品一旦彻底删除将无法恢复。</p>
    <img class="article-img" src="./1.png" alt="回收站教程步骤-1">
    <p class="article-paragraph"><strong>如何将商品放入回收站？</strong></p>
    <p class="article-paragraph">暂不支持通过直接操作将商品放入回收站。当对商品进行编辑时，如果商品处于</p>
    <p class="article-paragraph"><span class="warning">1，取消单卖</span></p>
    <p class="article-paragraph"><span class="warning">1，没有关联商品</span></p>
    <p class="article-paragraph">商品将自动放入回收站，你可以从每一种类型的商品页面右上角访问回收站。</p>
    <img class="article-img" src="./2.png" alt="回收站教程步骤-2">
    <p class="article-paragraph"><strong>回收站内的商品处于什么状态？</strong></p>
    <p class="article-paragraph">回收站内的商品处于停止售卖的状态。如果用户通过链接访问到该商品，商品详情页将显示停止售卖，无法进行购买。已购用户可以正常访问商品及商品的内容。</p>
    <p class="article-paragraph"><strong>如何将回收站内的商品恢复售卖？</strong></p>
    <p class="article-paragraph">在回收站内，点击编辑，设置 1）关联项 2）单卖（会员商品点击“开始售卖”）即可将商品恢复售卖</p>
    <p class="article-paragraph"><strong>如何将商品从回收站内彻底删除？</strong></p>
    <p class="article-paragraph">在回收站内，点击目标商品右侧删除操作，可以彻底删除该商品。<span class="warning">商品一旦删除将不可恢复，且已购用户将无法访问。</span></p>
    <img class="article-img" src="./3.png" alt="回收站教程步骤-3">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
