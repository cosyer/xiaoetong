<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent4', query: {routerTitleIndex: '2', routerContentIndex: '3'} }">图文</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">在描述中插入视频</h2>
    <p class="article-time">2017-10-21 16:53:33</p>
    <br>

    <p class="article-paragraph">对于音频、视频、直播和专栏，小鹅通为大家提供了填写内容描述的功能。一段丰富而生动的描述可以是内容能达到的效果事半功倍，甚至能起到引导及教育用户的效果。尤其对于专栏和直播来说，详尽且生动的描述能够对吸引用户订阅产生很大帮助。</p>
    <p class="article-paragraph">在编辑描述的时候您可以插入一段视频来丰富描述信息。（需要注意，这里的视频指的是各视频网站上的视频，即只能插外链，<span class="warning">不支持在描述中添加本地视频</span>）</p>
    <img class="article-img" src="./1.png" alt="在描述中插入视频教程步骤-1">
    <h3 class="article-content-title">步骤</h3>
    <p class="article-paragraph"><strong>1，在视频网站上找到您想插入的视频，点击“分享”按钮，选择“复制通用代码”。</strong></p>
    <img class="article-img" src="./2.png" alt="在描述中插入视频教程步骤-2">
    <p class="article-paragraph">将这段代码复制并记录下来</p>
    <p class="article-paragraph"><strong>2，在填写描述时，点击编辑器里的“插入视频链接”按钮。</strong></p>
    <img class="article-img" src="./3.png" alt="在描述中插入视频教程步骤-3">
    <p class="article-paragraph">弹出对话框后，按提示将刚才记录下来的通用代码中的相应字段复制到“地址”栏。</p>
    <img class="article-img" src="./4.png" alt="在描述中插入视频教程步骤-4">
    <p class="article-paragraph">点击“确认”。</p>
    <p class="article-paragraph"><strong>2，这时在编辑器中可以看到，视频已经成功插入。</strong></p>
    <img class="article-img" src="./5.png" alt="在描述中插入视频教程步骤-5">
    <p class="article-paragraph">将其它信息填写完毕后保存，就可以在手机端查看了。</p>
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
