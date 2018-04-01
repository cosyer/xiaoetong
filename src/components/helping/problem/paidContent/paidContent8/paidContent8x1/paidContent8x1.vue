<template>
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'paidContent8', query: {routerTitleIndex: '2', routerContentIndex: '7'} }">其它相关功能</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">用户信息采集功能说明</h2>
    <p class="article-time">2018-01-22 23:40:59</p>
    <br>

    <p class="article-paragraph"><strong>功能说明</strong></p>
    <p class="article-paragraph">用户信息采集功能旨在帮助店铺运营方依据运营需要采集到一些用户的基本信息，包括联系方式，基本个人资料等15项常用字段，方便运营者获取用户相关信息及联系用户，强化与用户之间的联系。</p>
    <p class="article-paragraph"><strong>如何设置用户必填项？</strong></p>
    <p class="article-paragraph">您可以在【用户-访问用户-设置信息采集项】设置您需要用户必须填写的设置项。<span class="warning">目前所有商品为统一设置，暂不支持单个商品单独设置。</span></p>
    <img class="article-img" src="./1.png" alt="用户信息采集教程步骤-1">
    <img class="article-img" src="./2.png" alt="用户信息采集教程步骤-2">
    <p class="article-paragraph">您也可以在【营销-信息采集】入口访问介绍页，快捷跳转至访问用户页进行设置。</p>
    <img class="article-img" src="./3.png" alt="用户信息采集教程步骤-3">
    <img class="article-img" src="./4.png" alt="用户信息采集教程步骤-4">
    <p class="article-paragraph"><strong>如何开启信息采集功能？</strong></p>
    <p class="article-paragraph">每个商品（包括单品、专栏、会员）可以单独开启信息采集。您只需要在【目标商品-（详情）-更多-开启/关闭信息采集】进行操作，即可开启或关闭目标商品的采集功能。开启后，用户在购买目标商品前需要填写您设置的必填项后方可进行购买。</p>
    <p class="article-paragraph">温馨提示：设置过多的必填项可能会降低购买转化。</p>
    <img class="article-img" src="./5.png" alt="用户信息采集教程步骤-5">
    <p class="article-paragraph"><strong>如何查看和下载采集到的用户信息？</strong></p>
    <p class="article-paragraph">点击【用户-访问用户-用户详情】可以查看到单个用户的所有采集信息。</p>
    <p class="article-paragraph">点击【用户-访问用户-导出消费用户】可以完整下载所有已消费的用户的相关信息。</p>
    <img class="article-img" src="./6.png" alt="用户信息采集教程步骤-6">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'
export default {
}
</script>
