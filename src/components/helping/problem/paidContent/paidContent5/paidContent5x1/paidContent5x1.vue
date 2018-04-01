<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent5', query: {routerTitleIndex: '2', routerContentIndex: '4'} }">专栏</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">创建专栏商品</h2>
    <p class="article-time">2018-01-20 23:08:07</p>
    <br>

    <video src="http://wechatapppro-1252524126.file.myqcloud.com/video/22e0546f87f0671e6c51eeef5dc22e31.mp4" controls class="article-video">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/22e0546f87f0671e6c51eeef5dc22e31.mp4" type="video/mp4">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/22e0546f87f0671e6c51eeef5dc22e31.mp4" type="video/webm">
      <source src="http://wechatapppro-1252524126.file.myqcloud.com/video/22e0546f87f0671e6c51eeef5dc22e31.mp4" type="video/ogg">
    </video>

    <p class="article-paragraph">功能介绍：学员购买后能随时在线查看的内容合集，支持添加图文、音频、视频、直播四种内容，老师通过连载更新内容</p>
    <p class="article-paragraph">适合老师：对某个领域/主题/话题非常熟悉，擅长文字写作、音频录制、视频录制和直播其中一种或多种内容创作形式，具备持续创作新内容能力</p>
    <p class="article-paragraph">适用场景：学员通过购买专栏持续学习并逐渐掌握某个领域/主题/话题的内容</p>
    <img class="article-img" src="./1.png" alt="小鹅通专栏教程步骤-1">
    <h3 class="article-content-title">一，操作步骤</h3>
    <p class="article-paragraph"><strong>1，登录管理台</strong></p>
    <p class="article-paragraph">从【知识商品】选择【会员】→【新建会员】进入会员编辑页面。</p>
    <img class="article-img" src="./2.png" alt="小鹅通专栏教程步骤-1">
    <p class="article-paragraph"><strong>2，基本信息</strong></p>
    <p class="article-paragraph">从【知识商品】→【专栏】进入专栏列表页面，点击“新建专栏”。填写专栏名称、简介、详情等信息，上传专栏封面，即可完成专栏创建。</p>
    <img class="article-img" src="./3.png" alt="小鹅通专栏教程步骤-2">
    <p class="article-paragraph"><strong>3，关联信息</strong></p>
    <p class="article-paragraph">点击添加关联信息，弹窗显示会员列表，选择需要关联的内容，确定保存后，在会员详情内将会展示该专栏信息。</p>
    <p class="article-paragraph"><strong>4，付费形式</strong></p>
    <p class="article-paragraph">选择付费形式并填写详细信息。</p>
    <p class="article-paragraph"><strong>5，其它</strong></p>
    <p class="article-paragraph">在店铺内显示的设置，与该商品的访问形式有关。</p>
    <p class="article-paragraph">当您设置显示时间，该商品可以在店铺内且通过链接的形式被访问到；当您设置隐藏，该商品只可以通过链接的形式被访问到。</p>
    <img class="article-img" src="./4.png" alt="小鹅通专栏教程步骤-3">
    <h3 class="article-content-title">二，专栏内添加内容</h3>
    <p class="article-paragraph">在专栏列表中点击想要添加内容的专栏，点击【详情】进入专栏详情页。进入专栏详情页点击【添加单品】，可以选择已有分类或新建商品两种模式为专栏添加单品。【新建】模式与创建单品的流程一致，可新建音频、视频、图文及直播四种单品。</p>
    <img class="article-img" src="./5.png" alt="小鹅通专栏教程步骤-5">
    <img class="article-img" src="./6.png" alt="小鹅通专栏教程步骤-6">
    <p class="article-paragraph">一个单品可被添加至不同专栏，在弹出窗口中选择想要添加至专栏的单品，点击确定后，单品就成功添加到了专栏中，已购买专栏的用户可免费查看该单品。</p>
    <img class="article-img" src="./7.png" alt="小鹅通专栏教程步骤-7">
    <h3 class="article-content-title">三，设置试听/试看</h3>
    <p class="article-paragraph">将专栏内的音频、视频、图文设为试听/试看，未订阅专栏的用户可免费查看试听/试看内容。</p>
    <p class="article-paragraph">设置方法：找到想设为试听/试看的内容，在更多操作中点击【设为试听/试看】，该内容即成为免费内容供未定阅专栏的用户查看，设置成功后可在该内容名称右侧看到“试听/试看”标签。你也可随时在更多操作中取消试听/试看，取消后未订阅专栏的用户将不可查看该内容。</p>
    <img class="article-img" src="./8.png" alt="小鹅通专栏教程步骤-8">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
