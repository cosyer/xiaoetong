<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent1', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">售卖形式</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">内容商品售卖形式</h2>
    <p class="article-time">2017-11-17 17:40:09</p>
    <br>

    <h3 class="article-content-title">单品</h3>
    <p class="article-paragraph">功能介绍：学员购买后能随时在线查看的一个内容商品，如单个图文、音频、视频、直播</p>
    <p class="article-paragraph">适合老师：对某个话题非常熟悉、擅长文字写作、音频录制、视频录制和直播其中一种或多种内容创作形式的老师</p>
    <p class="article-paragraph">适用场景：学员通过购买单个内容了解某个主题/话题的内容</p>
    <router-link class="article-link-block" :to="{ name: 'paidContent4x1', query: {routerTitleIndex: '2', routerContentIndex: '3'} }">查看创建图文单品教程</router-link>
    <router-link class="article-link-block" :to="{ name: 'paidContent2x1', query: {routerTitleIndex: '2', routerContentIndex: '1'} }">查看创建音频单品教程</router-link>
    <router-link class="article-link-block" :to="{ name: 'paidContent3x1', query: {routerTitleIndex: '2', routerContentIndex: '2'} }">查看创建视频单品教程</router-link>
    <router-link class="article-link-block" :to="{ name: '', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">查看创建直播单品教程</router-link>

    <br>
    <h3 class="article-content-title">专栏</h3>
    <p class="article-paragraph">功能介绍：学员购买后能随时在线查看的内容合集，支持添加图文、音频、视频、直播四种内容，老师通过连载更新内容</p>
    <p class="article-paragraph">适合老师：对某个领域/主题/话题非常熟悉，擅长文字写作、音频录制、视频录制和直播其中一种或多种内容创作形式，具备持续创作新内容能力</p>
    <p class="article-paragraph">适用场景：学员通过购买专栏持续学习并逐渐掌握某个领域/主题/话题的内容/话题的内容</p>
    <router-link class="article-link-block" :to="{ name: 'paidContent5x1', query: {routerTitleIndex: '2', routerContentIndex: '4'} }">查看创建专栏教程</router-link>

    <br>
    <h3 class="article-content-title">会员</h3>
    <p class="article-paragraph">功能介绍：学员购买后能在会员有效期内查看专属内容，包括图文、音频、视频、直播和专栏，同时可点亮会员专属标识，彰显会员身份。</p>
    <p class="article-paragraph">适合老师：希望聚集一定量级忠实粉丝，为特定人群在特定期限内提供价值内容，打造老师个人品牌</p>
    <p class="article-paragraph">适用场景：学员在一定时间段内以会员专属身份，跟随老师持续学习</p>
    <router-link class="article-link-block" :to="{ name: 'paidContent6x1', query: {routerTitleIndex: '2', routerContentIndex: '5'} }">查看创建会员教程</router-link>

    <br>
    <h3 class="article-content-title">小社群</h3>
    <p class="article-paragraph">功能介绍：帮助老师和学员、学员与学员进行日常互动沟通的社群工具。小社群支持发布图文动态，置顶群公告，精选动态，用户发帖、评论、点赞等基础功能。</p>
    <p class="article-paragraph">适合老师：有时间与学员进行日常沟通，以价格为门槛聚集学员粉丝，打造以课程和学员为中心的交流社区</p>
    <p class="article-paragraph">适用场景：学员想要在学习社区里分享学习心得，发起话题讨论等</p>
    <router-link class="article-link-block" :to="{ name: 'gettingStart', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">查看创建小社群教程</router-link>

    <br>
    <h3 class="article-content-title">付费问答</h3>
    <p class="article-paragraph">功能介绍：学员在线支付费用后向老师提问，老师回复语音或者图文为学生解答问题</p>
    <p class="article-paragraph">适合老师：对某个领域/主题/话题非常熟悉，擅长或习惯口头表达沟通的老师</p>
    <p class="article-paragraph">适用场景：学员可以有针对地提出自己的问题，由老师解答。其他想提出类似问题的学员，可以通过付费偷听的方式，听到老师的解答。</p>
    <router-link class="article-link-block" :to="{ name: 'gettingStart', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">查看付费问答教程</router-link>

    <br>
    <h3 class="article-content-title">付费直播</h3>
    <p class="article-paragraph">功能介绍：学员购买后能实时在线参与的直播</p>
    <p class="article-paragraph">适合老师：擅长演讲表达、有直播需求和经验的老师</p>
    <p class="article-paragraph">适用场景：学员通过直播近距离跟老师学习和提问互动</p>
    <br>
    <p class="article-paragraph">付费直播目前有三种形式，分别是语音直播、视频录播以及 PPT 直播，功能、适合老师和场景区别请查看相关教程。</p>
    <router-link class="article-link-block" :to="{ name: 'gettingStart', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">查看语音直播教程</router-link>
    <router-link class="article-link-block" :to="{ name: 'gettingStart', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">查看视频录播教程</router-link>
    <router-link class="article-link-block" :to="{ name: 'gettingStart', query: {routerTitleIndex: '2', routerContentIndex: '0'} }">查看 PPT 直播教程</router-link>

  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
