<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">如何获取更多收入</h2>
    <p class="article-time">2017-11-27 21:21:29</p>
    <br>
    <p class="article-paragraph">在店铺运营一段时间之后，除了打磨优质内容，借助一些营销工具可以快速提升您的店铺收入。首先推荐您使用“邀请卡”功能。</p>
    <p class="article-paragraph">邀请卡是带有二维码和内容商品基本信息（如标题、上线时间等）的图片。制作专属个人的邀请卡，通过私信、微信群和朋友圈发送邀请卡给朋友，对方扫描二维码进入课程介绍页面成功购买后，制作该邀请卡的用户可以获得现金奖励。</p>
    <p class="article-paragraph">也即是说，生成邀请卡邀请朋友购买内容商品，被邀请人成功付费之后，邀请人可以获得该订阅内容的分成收益。邀请卡无需申请，人人可以使用，没有绑定关系和有效期，是轻量级的营销方式。 邀请卡功能适合创建有“图文、音频、视频、直播、专栏和会员”任何内容商品的老师，非常适合激励学员在朋友圈中主动传播课程，提高课程收入。</p>
    <img class="article-img" src="./1.png" alt="如何获取更多收入">
    <p class="article-paragraph">您还可以查看更多营销工具使用教程：</p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">①，邀请卡使用教程</router-link></p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">②，推广员使用教程</router-link></p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">③，优惠券使用教程</router-link></p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">④，邀请码使用教程</router-link></p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">⑤，请好友看使用教程</router-link></p>
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
