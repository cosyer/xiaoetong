<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'UserManagement3', query: {routerTitleIndex: '1', routerContentIndex: '2'} }">消息推送</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">如何发送管理员消息？</h2>
    <p class="article-time">2017-11-28 21:59:37</p>
    <br>
    <p class="article-paragraph">老师可以向所有用户推送群发消息，也可以向指定用户发送私人消息，消息将会展示在手机端页面的“消息”列表当中。用户之间的回复、评论、点赞等互动消息也在“消息”列表中展示。</p>
    <img class="article-img" src="./1.png" alt="如何查看店铺访问用户">
    <h3 class="article-content-title">3.1 群发</h3>
    <p class="article-paragraph">登录管理台，按照以下路径分别点击【用户】→【消息列表】，点击【+推送全员消息】进入消息编辑页面。</p>
    <img class="article-img" src="./2.png" alt="如何查看店铺访问用户">
    <p class="article-paragraph">填写推送信息，包括推送时间、发送人、消息内容、链接信息。填写完成后，点击【推送消息】，到达指定时间后该条推送消息就会自动发送给所有用户。</p>
    <img class="article-img" src="./3.png" alt="如何查看店铺访问用户">
    <h3 class="article-content-title">再次编辑和撤回</h3>
    <p class="article-paragraph">已创建的消息可以在【消息列表】看到。在到达推送时间之前，可以点击编辑按钮对消息进行编辑操作；已发送的消息无法再进行编辑操作，所以在发送前需要认真检查。</p>
    <p class="article-paragraph">误发的消息可以通过点击【撤回】按钮进行撤回操作。</p>
    <img class="article-img" src="./4.png" alt="如何查看店铺访问用户">
    <h3 class="article-content-title">3.2 私人消息</h3>
    <p class="article-paragraph">登录管理台，按照以下路径分别点击【用户】→【用户列表】，搜索推送目标用户，点击【发消息】进入消息编辑页面。</p>
    <img class="article-img" src="./5.png" alt="如何查看店铺访问用户">
    <p class="article-paragraph">填写推送信息，包括发送人昵称、消息内容、链接，填写完成后点击【立即发送】即可。</p>
    <p class="article-paragraph">目前私人消息无法再次编辑，只能进行撤回操作。</p>
    <p class="article-paragraph">PS：群发和私人消息内容限制为512个字 </p>
    <img class="article-img" src="./6.png" alt="如何查看店铺访问用户">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
