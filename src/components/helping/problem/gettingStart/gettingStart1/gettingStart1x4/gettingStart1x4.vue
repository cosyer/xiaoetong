<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">注册小鹅通</h2>
    <p class="article-time">2017-12-22 20:51:48</p>
    <br>
    <h3 class="article-content-title">Step1. 注册小鹅通</h3>
    <br>
    <p class="article-paragraph">通过电脑端浏览器或者手机端浏览器打开小鹅通官网（www.xiaoe-tech.com），点击首页【免费试用】或者其他按钮进入注册页。</p>
    <p class="article-paragraph">填写手机号并输入验证码，设置密码，点击【确认注册】进入第二步。</p>
    <p class="article-paragraph">填写店铺信息，点击【确认创建】即完成注册并创建第一个店铺。</p>
    <p class="article-paragraph">在注册完成页，您可通过扫码或者复制链接访问自己的微信知识店铺。</p>
    <img class="article-img" src="./1.png" alt="小鹅通注册步骤-1">
    <img class="article-img" src="./2.png" alt="小鹅通注册步骤-2">
    <img class="article-img" src="./3.png" alt="小鹅通注册步骤-3">
    <img class="article-img" src="./4.png" alt="小鹅通注册步骤-4">
    <img class="article-img" src="./5.png" alt="小鹅通注册步骤-5">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
