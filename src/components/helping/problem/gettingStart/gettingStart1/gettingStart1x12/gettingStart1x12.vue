<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">查看订单记录</h2>
    <p class="article-time">2018-01-26 10:50:00</p>
    <br>
    <p class="article-paragraph">登录小鹅通管理后台，在【订单】页面中查看所有用户的购买订单，您可以根据筛选条件进行定向查找。</p>
    <img class="article-img" src="./1.png" alt="查看订单记录教程步骤-1">
    <p class="article-paragraph"><strong>查看单个商品的订单记录</strong></p>
    <p class="article-paragraph">点击目标订单右侧的“订单详情”即可进入该商品的订单详情页面。</p>
    <img class="article-img" src="./2.png" alt="查看订单记录教程步骤-2">
    <p class="article-paragraph"><strong>导出订单记录</strong></p>
    <p class="article-paragraph">导出订单记录可将订单记录保存为本地表格，便于数据分析。</p>
    <img class="article-img" src="./3.png" alt="查看订单记录教程步骤-3">
    <p class="article-paragraph">点击【导出订单】按钮，按月选择“订单生成时间”，选择“office使用版本”，点击【确定】即可导出相应月份的订单记录，并可以在【店铺概况】-【更多服务】-【下载管理】中查到对应的那条下载记录。</p>
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
