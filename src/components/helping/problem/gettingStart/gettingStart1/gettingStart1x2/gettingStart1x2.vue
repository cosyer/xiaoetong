<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">访问知识店铺</h2>
    <p class="article-time">2017-11-29 09:40:59</p>
    <br>
    <h3 class="article-content-title">1.获取知识店铺链接</h3>
    <p class="article-paragraph">您可以通过两个途径，一是【店铺概况】页面内，点击【访问店铺】，点击“复制链接”，即可获得店铺链接。</p>
    <img class="article-img" src="./1.png" alt="访问知识店铺步骤-1">
    <p class="article-paragraph">另一个是【设置】页面内，点击选择“店铺设置”，进入设置详情页面。点击“复制链接”即可获取店铺地址。</p>
    <img class="article-img" src="./2.png" alt="访问知识店铺步骤-2">
    <h3 class="article-content-title">2.把店铺嵌入公众号</h3>
    <p class="article-paragraph">获取小鹅通店铺链接后，您可以把手机端展示页面挂在公众号菜单栏当中，方便用户从公众号进入你的个人店铺。（注：只有已认证的公众号可以在公众号菜单栏添加小鹅通链接。）操作详情：</p>
    <p class="article-paragraph"><strong>步骤一：登录您想要嵌入页面的公众号</strong></p>
    <p class="article-paragraph">登录公众号后台https://mp.weixin.qq.com/，在左侧菜单栏点击“自定义菜单”。</p>
    <img class="article-img" src="./3.png" alt="访问知识店铺步骤-3">
    <p class="article-paragraph"><strong>步骤二：选择您要添加链接的菜单位置并发布</strong></p>
    <p class="article-paragraph">填写“菜单名称”；在菜单内容栏选择“跳转网页”。将复制的链接粘贴至“页面地址”。点击“预览”，查看链接设置是否正确。确认无误后点击“保存并发布”。</p>
    <img class="article-img" src="./4.png" alt="访问知识店铺步骤-4">
    <img class="article-img" src="./5.png" alt="访问知识店铺步骤-5">
    <p class="article-paragraph"><strong>步骤三：发布成功后，就可以从公众号进入你的个人知识店铺页面。</strong></p>
    <img class="article-img" src="./6.png" alt="访问知识店铺步骤-6">
    <h3 class="article-content-title">3.分享您的知识店铺或内容商品</h3>
    <p class="article-paragraph">店铺已经正式上线，这个时候您可以通过微信把店铺分享到好友、微信群、朋友圈，邀请他们访问并购买体验您的内容商品。</p>
    <img class="article-img" src="./7.png" alt="访问知识店铺步骤-7">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
