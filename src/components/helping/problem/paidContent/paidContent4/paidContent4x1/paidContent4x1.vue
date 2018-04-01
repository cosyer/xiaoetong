<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent4', query: {routerTitleIndex: '2', routerContentIndex: '3'} }">图文</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">创建图文商品</h2>
    <p class="article-time">2017-12-22 21:56:18</p>
    <br>

    <video src="http://wechatapppro-1252524126.file.myqcloud.com/video/0f85494475e60f542680bec8c62fe0dc.mp4" controls class="article-video">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/0f85494475e60f542680bec8c62fe0dc.mp4" type="video/mp4">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/0f85494475e60f542680bec8c62fe0dc.mp4" type="video/webm">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/0f85494475e60f542680bec8c62fe0dc.mp4" type="video/ogg">
    </video>

    <p class="article-paragraph">功能介绍：学员购买后能随时在线阅读的文章</p>
    <p class="article-paragraph">适合老师：擅长文字写作的老师</p>
    <p class="article-paragraph">适用场景：适合文字和图片较多的付费内容</p>
    <h3 class="article-content-title">步骤</h3>
    <p class="article-paragraph"><strong>1，登录管理台</strong></p>
    <p class="article-paragraph">从【知识商品】选择【图文】→【新建图文】进入图文商品编辑页面。</p>
    <img class="article-img" src="./1.png" alt="小鹅通图文教程步骤-1">
    <p class="article-paragraph"><strong>2，基本信息</strong></p>
    <p class="article-paragraph">填写图文名称、详情、试看内容等信息，并上传封面。 点击【保存】即可成功创建图文商品。</p>
    <img class="article-img" src="./2.png" alt="小鹅通图文教程步骤-2">
    <p class="article-paragraph"><strong>3，关联信息</strong></p>
    <p class="article-paragraph">点击添加关联信息，弹窗显示专栏、会员列表，选择需要关联的内容，确定保存后，在专栏、会员详情内将会展示该商品信息。</p>
    <p class="article-paragraph"><strong>4，商品信息</strong></p>
    <p class="article-paragraph">选择开启单卖——填写付费形式，点击保存后，该商品将会在图文列表展示；选择关闭单卖，点击保存后，该商品不会再音频列表展示。</p>
    <p class="article-paragraph"><strong>5，其它</strong></p>
    <p class="article-paragraph">在店铺内显示的设置，与该商品的访问形式有关。</p>
    <p class="article-paragraph">当您设置显示时间，该商品可以在店铺内且通过链接的形式被访问到；当您设置隐藏，该商品只可以通过链接的形式被访问到。</p>
    <img class="article-img" src="./3.png" alt="小鹅通图文教程步骤-3">
    <img class="article-img" src="./4.png" alt="小鹅通图文教程步骤-4">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
