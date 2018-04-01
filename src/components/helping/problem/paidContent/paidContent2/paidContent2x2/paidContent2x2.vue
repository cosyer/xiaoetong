<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent2', query: {routerTitleIndex: '2', routerContentIndex: '1'} }">音频</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">如何一边听音频边聊微信</h2>
    <p class="article-time">2017-10-20 16:38:44</p>
    <br>

    <p class="article-paragraph">在小鹅通手机端页面，如果您想一边收听音频/视频/直播一边聊微信或者浏览其它页面，您可以按照如下方式操作（以音频为例）：</p>
    <p class="article-paragraph">1，首先保证您手机上安装的微信版本不低于6.5.4，在微信的“设置”当中点击“关于微信”，可以查看微信版本。</p>
    <img class="article-img" src="./1.png" alt="边听音频边聊微信教程步骤-1">
    <p class="article-paragraph">2，在音频收听页面，点击右上角的“更多”（三个圆点），这时候点击再第二排选项当中的“在聊天中置顶”，就会立即回到聊天列表页面，之前浏览的页面会显示在顶部。</p>
    <img class="article-img" src="./2.jpg" alt="边听音频边聊微信教程步骤-1">
    <p class="article-paragraph">在IOS微信客户端，置顶之后，小鹅通搭建的前端页面里播放的音频/视频/直播并不会停止。</p>
    <p class="article-paragraph">并且，置顶之后将手机锁屏，音频依然会继续播放。</p>
    <p class="article-paragraph">3，您收听小鹅通直播间里的音频时，点击某条语音，之后的内容是可以连续播放的，更加方便操作。为提升用户体验，我们一直在努力。</p>
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
