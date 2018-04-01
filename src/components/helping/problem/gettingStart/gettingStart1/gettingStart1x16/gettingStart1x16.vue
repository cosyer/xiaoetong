<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">增强互动带来转化</h2>
    <p class="article-time">2017-11-27 21:35:45</p>
    <br>
    <p class="article-paragraph">小鹅通在提供功能完备的内容商品基础上，还您准备了丰富多彩的知识互动服务，帮助您在专属知识店铺内和粉丝用户保持互动，沉淀用户，创造更多转化</p>

    <p class="article-paragraph"><strong>小社群：</strong></p>
    <p class="article-paragraph">①，功能介绍：帮助老师和学员、学员与学员进行日常互动沟通的社群工具。小社群支持发布图文动态，置顶群公告，精选动态，用户发帖、评论、点赞等基础功能。</p>
    <p class="article-paragraph">②，适合老师：有时间与学员进行日常沟通，以价格为门槛聚集学员粉丝，打造以课程和学员为中心的交流社区</p>
    <p class="article-paragraph">③，适用场景：学员想要在学习社区里分享学习心得，发起话题讨论等</p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">小社群使用教程</router-link></p>

    <p class="article-paragraph"><strong>付费问答：</strong></p>
    <p class="article-paragraph">①，功能介绍：学员在线支付费用后向老师提问，老师回复语音或者图文为学生解答问题</p>
    <p class="article-paragraph">②，适合老师：对某个领域/主题/话题非常熟悉，擅长或习惯口头表达沟通的老师</p>
    <p class="article-paragraph">③，适用场景：学员可以有针对地提出自己的问题，由老师解答。其他想提出类似问题的学员，可以通过付费偷听的方式，听到老师的解答</p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">付费问答使用教程</router-link></p>

    <p class="article-paragraph"><strong>作业本：</strong></p>
    <p class="article-paragraph">①，功能介绍：老师授课后布置作业、测试学员知识掌握状态的学习工具。可设置老师和助教，以图片、语音和文字发布、提交和点评作业。</p>
    <p class="article-paragraph">②，适合老师：了解学员学习掌握状态，通过作业一对一指导学员</p>
    <p class="article-paragraph">③，适用场景：课程结束后为学员布置作业</p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">作业本使用教程</router-link></p>

    <p class="article-paragraph"><strong>社群打卡：</strong></p>
    <p class="article-paragraph">①，功能介绍：用户可以每日进行打卡，展示自己的学习成果或活动进展，并有打卡排行榜可以随时查看自己的打卡排名，激发用户的学习兴趣和行动力，支持图文、语音打卡动态，学员间互动评论。更有邀请好友、用户评论、排行榜、全部动态，实现有价值的打卡激励体制。</p>
    <p class="article-paragraph">②，适合老师：打卡功能面向所有标准版客户免费开放</p>
    <p class="article-paragraph">③，适用场景：学员想要在打卡社区里展示学习成果，分享学习心得，发起话题讨论等</p>
    <p class="article-paragraph"><router-link class="article-link" :to="{ name: '', params: {} }">社群打卡使用教程</router-link></p>
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
