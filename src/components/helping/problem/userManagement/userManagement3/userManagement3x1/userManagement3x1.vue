<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'UserManagement3', query: {routerTitleIndex: '1', routerContentIndex: '2'} }">消息推送</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">已认证服务号推送消息/通知</h2>
    <p class="article-time">2017-11-29 17:52:20</p>
    <br>
    <p class="article-paragraph">您可以通过服务号向用户发送通知：在专栏/会员内的内容上架时，通过服务号向订阅了该专栏/会员的用户发送内容更新提醒；在创建直播时，设置开课提醒，订阅了直播的学员在直播开始前可以收到提醒。</p>
    <p class="article-paragraph">(只有服务号具有发送模板消息的功能，才可以正常使用服务号通知功能；这里的服务号指的是您接入小鹅通的服务号。)</p>
    <img class="article-img" src="./1.png" alt="内容更新提醒">
    <p class="article-paragraph">设置模板消息：</p>
    <p class="article-paragraph">1.登录服务号的公众平台：https://mp.weixin.qq.com/</p>
    <p class="article-paragraph">点击左侧菜单栏的“模板消息”。</p>
    <img class="article-img" src="./2.png" alt="左侧菜单栏的“模板消息图示">
    <p class="article-paragraph">2.  在“模板库”中将所在行业设置为“教育 培训”</p>
    <img class="article-img" src="./3.png" alt="“模板库”中将所在行业设置指引">
    <p class="article-paragraph">设定发送时间：</p>
    <p class="article-paragraph">1.在专栏/会员内添加内容(除直播以外)时，可以看到“服务号通知”选项，开启后订阅了该专栏/会员的用户即可在内容上架时收到提醒。</p>
    <p class="article-paragraph">特别注意：</p>
    <p class="article-paragraph">（1）只有付费专栏内的内容设置了【服务号通知】，用户才会收到通知，免费专栏则不能。</p>
    <p class="article-paragraph">（2）每天单个专栏/会员更新的服务号通知最多发送三次。</p>
    <img class="article-img" src="./4.png" alt="服务号通知">
    <p class="article-paragraph">2.您在小鹅通管理台创建直播的时候，可以看到【开课提醒】选项，选择提醒时间后，用户即可在设定的时间收到提醒。</p>
    <img class="article-img" src="./5.png" alt="设定提醒时间">
    <p class="article-paragraph">特别提醒：您在设置了“服务号通知”或“开课提醒”之后，会在服务号微信后台的“我的模板”当中看到标题为“订阅课程开课提醒”的模板，切勿删除这个模板，否则您的用户将无法收到通知。</p>
    <img class="article-img" src="./6.png" alt="勿删除模板图示">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
