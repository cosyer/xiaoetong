<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">把店铺嵌入公众号</h2>
    <p class="article-time">2017-11-27 21:35:08</p>
    <br>
    <p class="article-paragraph">步骤一：获取小鹅通店铺链接后，您可以把手机端展示页面挂在公众号菜单栏当中，方便用户从公众号进入你的个人店铺。（注：只有已认证的公众号可以在公众号菜单栏添加小鹅通链接。）操作详情： 步骤一：登录您想要嵌入页面的公众号</p>
    <p class="article-paragraph">登录公众号后台 https://mp.weixin.qq.com/ ，在左侧菜单栏点击“自定义菜单”。</p>
    <img class="article-img" src="./1.png" alt="把店铺嵌入公众号教程步骤-1">
    <p class="article-paragraph">步骤二：选择您要添加链接的菜单位置并发布</p>
    <p class="article-paragraph">填写“菜单名称”；在菜单内容栏选择“跳转网页”。将复制的链接粘贴至“页面地址”。点击“预览”，查看链接设置是否正确。确认无误后点击“保存并发布”。</p>
    <img class="article-img" src="./2.png" alt="把店铺嵌入公众号教程步骤-2">
    <img class="article-img" src="./3.png" alt="把店铺嵌入公众号教程步骤-3">
    <p class="article-paragraph">步骤三：发布成功后，就可以从公众号进入你的个人知识店铺页面。</p>
    <img class="article-img" src="./4.png" alt="把店铺嵌入公众号教程步骤-4">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
