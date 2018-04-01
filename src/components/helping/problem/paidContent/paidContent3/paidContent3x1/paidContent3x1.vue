<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent3', query: {routerTitleIndex: '2', routerContentIndex: '2'} }">视频</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">创建视频商品</h2>
    <p class="article-time">2017-12-22 21:06:33</p>
    <br>

    <video src="http://wechatapppro-1252524126.file.myqcloud.com/video/0f85494475e60f542680bec8c62fe0dc.mp4" controls class="article-video">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/0f85494475e60f542680bec8c62fe0dc.mp4" type="video/mp4">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/0f85494475e60f542680bec8c62fe0dc.mp4" type="video/webm">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/0f85494475e60f542680bec8c62fe0dc.mp4" type="video/ogg">
    </video>

    <p class="article-paragraph">功能介绍：学员购买后能随时在线观看的视频，需提前录制准备并上传</p>
    <p class="article-paragraph">适合老师：擅长口头表达、有视频录制设备和经验的老师</p>
    <p class="article-paragraph">适用场景：学员在 WiFi 环境下通过视频学习更丰富的课程内容</p>
    <h3 class="article-content-title">步骤</h3>
    <p class="article-paragraph"><strong>1，登录管理台</strong></p>
    <p class="article-paragraph">从【知识商品】→【视频】→【新建视频】视频商品编辑页面。</p>
    <img class="article-img" src="./1.png" alt="小鹅通视频教程步骤-1">
    <p class="article-paragraph"><strong>2，基本信息</strong></p>
    <p class="article-paragraph">填写视频名称、详情等信息，并上传视频贴片、商品封面以及大小不超过 1G 的视频文件。最后点击【保存】即可成功创建视频商品。</p>
    <img class="article-img" src="./2.png" alt="小鹅通视频教程步骤-2">
    <p class="article-paragraph"><strong>3，关联信息</strong></p>
    <p class="article-paragraph">点击添加关联信息，弹窗显示专栏、会员列表，选择需要关联的内容，确定保存后，在专栏、会员详情内将会展示该商品信息。</p>
    <p class="article-paragraph"><strong>4，商品信息</strong></p>
    <p class="article-paragraph">选择开启单卖——填写付费形式，点击保存后，该商品将会在视频列表展示；选择关闭单卖，点击保存后，该商品不会再视频列表展示。</p>
    <p class="article-paragraph"><strong>5，其它</strong></p>
    <p class="article-paragraph">在店铺内显示的设置，与该商品的访问形式有关。</p>
    <p class="article-paragraph">当您设置显示时间，该商品可以在店铺内且通过链接的形式被访问到；当您设置隐藏，该商品只可以通过链接的形式被访问到。</p>
    <img class="article-img" src="./3.png" alt="小鹅通视频教程步骤-3">
    <p class="article-paragraph"><strong>视频属性：</strong>目前小鹅通支持的视频格式为MP4，上传视频推荐480p或720p。建议上传的视频大小不超过1G</p>
    <p class="article-paragraph"><strong>视频贴片：</strong>视频播放前显示的预览图片，上传尺寸750*422px，小于5M的图片即可。</p>
    <img class="article-img" src="./4.png" alt="小鹅通视频教程步骤-4">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
