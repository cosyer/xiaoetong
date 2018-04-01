<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent6', query: {routerTitleIndex: '2', routerContentIndex: '5'} }">会员</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">创建会员商品</h2>
    <p class="article-time">2018-01-20 23:12:43</p>
    <br>

    <video src="http://wechatapppro-1252524126.file.myqcloud.com/video/2d00af8f1e8866adc4faac1242533750.mp4" controls class="article-video">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/2d00af8f1e8866adc4faac1242533750.mp4" type="video/mp4">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/2d00af8f1e8866adc4faac1242533750.mp4" type="video/webm">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/2d00af8f1e8866adc4faac1242533750.mp4" type="video/ogg">
    </video>

    <p class="article-paragraph">功能介绍：学员购买后能在会员有效期内查看特定内容，包括图文、音频、视频、直播和专栏，同时可点亮会员专属标识，彰显会员身份。</p>
    <p class="article-paragraph">适合老师：希望聚集一定量级忠实粉丝，为特定人群在特定期限内提供价值内容，打造老师个人品牌</p>
    <p class="article-paragraph">适用场景：学员在一定时间段内以会员专属身份，跟随老师持续学习</p>
    <h3 class="article-content-title">一，步骤</h3>
    <p class="article-paragraph"><strong>1，登录管理台</strong></p>
    <p class="article-paragraph">从【知识商品】选择【会员】→【新建会员】进入会员编辑页面。</p>
    <img class="article-img" src="./1.png" alt="小鹅通会员教程步骤-1">
    <p class="article-paragraph"><strong>2，基本信息</strong></p>
    <p class="article-paragraph">填写会员名称、简介、详情等信息，并上传封面。 点击【保存】即可成功创建会员商品。</p>
    <img class="article-img" src="./2.png" alt="小鹅通会员教程步骤-2">
    <p class="article-paragraph"><strong>3，关联信息</strong></p>
    <p class="article-paragraph">您可以选择开启售卖或暂不售卖；暂不售卖时，商品将暂存于回收站列表，您可以随时开启售卖。同时，暂不售卖的商品您无需进行显示设置。</p>
    <img class="article-img" src="./3.png" alt="小鹅通会员教程步骤-3">
    <p class="article-paragraph"><strong>4，其他</strong></p>
    <p class="article-paragraph">在店铺内显示的设置，与该商品的访问形式有关。当您设置显示时间，该商品可以在店铺内且通过链接的形式被访问到；当您设置隐藏，该商品只可以通过链接的形式被访问到。</p>
    <p class="article-paragraph"><strong>5，添加会员权益</strong></p>
    <br>
    <h3 class="article-content-title">二，新建单品</h3>
    <p class="article-paragraph">在会员方案列表中点击想要添加权益内容的会员方案，点击【详情】进入会员详情页，点击【添加会员权益】，选择【新建商品】，选择单品类型并填写相应信息。</p>
    <img class="article-img" src="./4.png" alt="小鹅通会员教程步骤-4">
    <img class="article-img" src="./5.png" alt="小鹅通会员教程步骤-5">
    <p class="article-paragraph">编辑完内容信息后，点击【保存】按钮，一个新的单品就成功添加到了会员中。</p>
    <br>
    <h3 class="article-content-title">三，从已有单品中选择</h3>
    <p class="article-paragraph">从已有分类（图文、音频、视频、直播、专栏）中添加。</p>
    <img class="article-img" src="./4.png" alt="小鹅通会员教程步骤-4">
    <p class="article-paragraph">点击确定后，单品就成功添加到了会员中，已购买会员的用户可在会员有效期内免费查看该单品。</p>

  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
