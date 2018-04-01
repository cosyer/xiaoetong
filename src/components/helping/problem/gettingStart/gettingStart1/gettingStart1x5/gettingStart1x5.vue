<template lang="html">
  <article class="problem-guide-article">
    <div class="article-nav">
      <router-link class="article-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">开通店铺</router-link>
      <span>&nbsp;/&nbsp;&nbsp;详情</span>
    </div>
    <h2 class="article-title">体验交易流程</h2>
    <p class="article-time">2017-11-29 10:57:23</p>
    <br>

    <p class="article-paragraph"><strong>1.购买内容商品</strong></p>
    <p class="article-paragraph">新建付费内容商品后，您可以为该商品设置一个价格，并体验一次完成的支付流程。购买成功后将进入商品详情或者内容目录。开始体验内容商品。</p>
    <img class="article-img" src="./1.png" alt="购买内容商品">

    <p class="article-paragraph"><strong>2.查看内容商品收入</strong></p>
    <p class="article-paragraph">用户购买内容商品产生的收入可在管理后台查看详情，登录小鹅通管理后台，在【资产】→【全部收入】页面查看店铺收入。您的收入模式根据内容商品和收入渠道分为自有模式收入和小鹅通知识助手账户收入。</p>

    <p class="article-paragraph"><strong>自有账号收入</strong></p>
    <p class="article-paragraph">自有账号收入会直接存入您的微信商户账户，包含除去小鹅通知识助手收入的其他收入。如果您未开通微信支付-自有账号，则不会显示“自有账号收入”这一栏。</p>
    <img class="article-img" src="./2.png" alt="自有账号收入">

    <p class="article-paragraph"><strong>小鹅通知识助手账号收入</strong></p>
    <p class="article-paragraph">微信支付-小鹅通知识助手账号收入暂存于小鹅通账户，你可随时进行提现。</p>
    <p class="article-paragraph"><strong>①，小鹅通知识助手账号收入包含以下部分：</strong></p>
    <p class="article-paragraph">a. 你更改为自有模式前的全部收入；</p>
    <p class="article-paragraph">b. 用户通过邀请卡购买产生的收入 ；</p>
    <p class="article-paragraph">c. 用户通过推广员的推广链接购买产生的收入；</p>
    <p class="article-paragraph">d. 付费问答产生的收入；</p>
    <p class="article-paragraph"><strong>②，从小鹅通知识助手账号扣除的佣金支出包含以下部分：</strong></p>
    <p class="article-paragraph">a. 通过邀请卡成功邀请好友购买后获得的奖励金；</p>
    <p class="article-paragraph">b. 推广员成功推广获得的佣金；</p>
    <p class="article-paragraph">c. 推广员成功推广后，上级推广员获得的邀请奖励；</p>
    <p class="article-paragraph">d. 付费问答产生的分成支出（包括提问和偷听）；</p>
    <img class="article-img" src="./3.png" alt="小鹅通知识助手账号收入">

    <p class="article-paragraph"><strong>3.查看订单记录</strong></p>
    <p class="article-paragraph">在积累一定量的订单之后，您可以通过查看订单记录了解内容商品的售卖情况。</p>
    <p class="article-paragraph">登录小鹅通管理后台，在【订单】页面中查看所有用户的购买订单。</p>

    <p class="article-paragraph"><strong>查看单个商品的订单记录</strong></p>
    <p class="article-paragraph">点击【订单】即可进入商品的订单记录页面。注意，该页面下“导出订单记录”导出的是店铺内指定月份所有商品的订单记录。</p>
    <img class="article-img" src="./4.png" alt="查看单个商品的订单记录">

    <p class="article-paragraph"><strong>导出订单记录</strong></p>
    <p class="article-paragraph">导出订单记录可将订单记录保存为本地表格，便于数据分析。</p>
    <p class="article-paragraph">点击【导出订单记录】按钮，按月选择“订单生成时间”，选择“office使用版本”，点击【确定】即可导出相应月份的订单记录。</p>
    <img class="article-img" src="./5.png" alt="导出订单记录">
  </article>
</template>

<script>
import '@/assets/css/problem-desc.css'

export default {
}
</script>
