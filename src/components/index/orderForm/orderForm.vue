<template lang="html">
  <div>
    <userTopNav>
      <slot>订单</slot>
    </userTopNav>
    <section class="orderForm">
      <article class="filter-container">
        <div class="filter-container-innerWrapper">
          <select class="filter-container-selection-left">
            <option value="商品名称" selected>商品名称</option>
            <option value="买家昵称">买家昵称</option>
            <option value="订单号">订单号</option>
          </select>
          <input type="text" class="filter-container-input">
        </div>
        <div class="filter-container-innerWrapper">
            <span class="filter-container-desc">订单时间</span>
            <input type="text" class="filter-container-input" id="orderTime" placeholder='请选择时间范围'>
            <img class="filter-container-img filter-container-img-calendar" src="./calendar-icon.png" alt="图标-日历">
        </div>
        <div class="filter-container-innerWrapper">
            <span class="filter-container-desc">订单状态</span>
            <select class="filter-container-selection-right">
              <option value="全部" selected>全部</option>
              <option value="已完成">已完成</option>
              <option value="已退款">已退款</option>
            </select>
        </div>

      </article>
      <article class="filter-container">
        <div class="filter-container-innerWrapper">
          <select class="filter-container-selection-left">
            <option value="交易单号" selected>交易单号</option>
            <option value="商户单号">商户单号</option>
          </select>
          <input type="text" class="filter-container-input">
          <img class="filter-container-img filter-container-img-warning" src="./grey-prompt.png" alt="提示图标-惊叹号">
          <div class="filter-container-prompt">
            <p class="filter-container-prompt-desc">交易单号&nbsp;/&nbsp;商户单号是指用户购买商品产生微信交易记录的编号信息（用户可在微信交易记录中查找到）:</p>
            <p class="filter-container-prompt-desc"><span class="filter-container-prompt-desc-warning">1，交易单号</span>是在交易记录中以&nbsp;42000&nbsp;开头的&nbsp;28&nbsp;位数字串；</p>
            <p class="filter-container-prompt-desc"><span class="filter-container-prompt-desc-warning">2，商户单号</span>是在交易记录中以&nbsp;oo_&nbsp;开头的&nbsp;25&nbsp;位由数字字母以及下划线组成的符号串；</p>
            <p class="filter-container-prompt-desc"><span class="filter-container-prompt-desc-warning">注意：请输入完整单号进行搜索。</span></p>
          </div>
        </div>
        <div class="filter-container-innerWrapper">
          <span class="filter-container-desc">订单状态</span>
          <select class="filter-container-selection-right">
            <option value="全部" selected>全部</option>
            <option value="普通订单">普通订单</option>
            <option value="续费订单">续费订单</option>
            <option value="买赠订单">买赠订单</option>
            <option value="内容分销订单">内容分销订单</option>
          </select>
        </div>
        <div class="filter-container-innerWrapper">
            <span class="filter-container-desc">分销情况</span>
            <select class="filter-container-selection-right">
              <option value="全部" selected>全部</option>
              <option value="已完成">参与分销</option>
              <option value="已退款">不参与分销</option>
            </select>
        </div>
      </article>
      <button class="orderForm-button-filter" type="button" name="button">筛选</button>
      <button class="orderForm-button-derive" type="button" name="button">导出订单</button>
      <div class="orderForm-table-container">
        <table class="orderForm-table">
          <thead>
            <tr class="orderForm-thead-tr">
              <th class="orderForm-thead-productName">商品名称</th>
              <th class="orderForm-thead-orderTime">订单时间</th>
              <th class="orderForm-thead-orderType">订单类型</th>
              <th class="orderForm-thead-orderStatus">订单状态</th>
              <th class="orderForm-thead-unitPrice">单价（元）</th>
              <th class="orderForm-thead-quantity">数量</th>
              <th class="orderForm-thead-orderPrice">订单金额（元）</th>
              <th class="orderForm-thead-purchaserName">买家昵称</th>
              <th class="orderForm-thead-operator">操作</th>
            </tr>
          </thead>
          <tbody v-if='orderFormData.length > 0'>
            <tr class="orderForm-tbody-tr">
              <td class="orderForm-tbody-productName"></td>
              <td class="orderForm-tbody-orderTime"></td>
              <td class="orderForm-tbody-orderType"></td>
              <td class="orderForm-tbody-orderStatus"></td>
              <td class="orderForm-tbody-unitPrice"></td>
              <td class="orderForm-tbody-quantity"></td>
              <td class="orderForm-tbody-orderPrice"></td>
              <td class="orderForm-tbody-purchaserName"></td>
              <td class="orderForm-tbody-operator"></td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan='9' class="no-orderFormData">暂无相关数据</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import userTopNav from 'index/userTopNav/userTopNav'
export default {
  components: {
    userTopNav
  },
  data () {
    return {
      orderFormData: [
        // {
        //   id: 1,
        //   productName: '',
        //   orderTime: '',
        //   orderType: '',
        //   orderStatus: '',
        //   unitPrice: '',
        //   quantity: '',
        //   orderPrice: '',
        //   purchaserName: ''
        // }
      ]
    }
  }
}
</script>

<style lang="css">
@import '../../../assets/css/color.css';
@import '../../../assets/css/indexCommonStyle.css';

.no-orderFormData {
  @mixin no-data-in-table;
}

.orderForm {
  padding: 20px;
  background-color: #fff;
  background-clip: content-box;
}

.filter-container {
  margin: 20px;
  display: flex;
  align-items: center;
}

.filter-container-innerWrapper {
  position: relative;
}

.filter-container-selection-left {
  width: 90px;
  height: 36px;
  line-height: 36px;
  padding-left: 5px;
  margin-right: 10px;
  border-radius: 2px;
  border: 1px solid $border-maincolor;
}

.filter-container-input,
.filter-container-selection-right {
  width: 220px;
  height: 36px;
  line-height: 36px;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid $border-maincolor;
  transition: .3s;
}

.filter-container-input:hover,
.filter-container-input:focus {
  border-color: $light-blue;
}

.filter-container-img {
  width: 16px;
  height: 16px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
}

.filter-container-img-calendar {
  right: 10px;
}

.filter-container-img-warning {
  right: -30px;
}

.filter-container-desc {
  display: inline-block;
  margin-right: 10px;
  margin-left: 46px;
}

.filter-container-prompt {
  width: 400px;
  position: absolute;
  top: 120%;
  left: 100%;
  z-index: 9;
  padding: 10px;
  background-color: #fff;
  border: 1px solid $border-maincolor;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.1);
  visibility: hidden;
  opacity: 0;
  transition: .3s;
}

.filter-container-prompt-desc {
  margin-bottom: 10px;
}

.filter-container-prompt-desc-warning {
  color: $text-wraning;
}

.filter-container-img-warning:hover + .filter-container-prompt {
  visibility: visible;
  opacity: 1;
}

.orderForm-button-filter {
  @mixin button-filter;
  margin-left: 125px;
}

.orderForm-button-derive {
  @mixin button-main;
  margin-left: 20px;
}

.orderForm-button-filter:hover {
  background-color: $dark-blue;
}

.orderForm-button-derive:hover {
  background-color: $background-color-1;
}

.orderForm-table-container {
  padding: 20px;
}

.orderForm-table {
  @mixin table;
  color: $text-dark-color;
  font-size: 12px;
}

.orderForm-thead-tr {
  @mixin thead;
}

.orderForm-tbody-tr {
  @mixin tr-medium;
}

.orderForm-tbody-tr:hover {
  background-color: $background-color-1;
}

.orderForm-thead-productName,
.orderForm-tbody-productName {
  @mixin table-left;
}

.orderForm-thead-operator,
.orderForm-tbody-operator {
  @mixin table-right;
}

.orderForm-thead-productName {
  width: 20%;
}

.orderForm-thead-orderTime {
  width: 15%;
}

.orderForm-thead-orderType,
.orderForm-thead-orderStatus,
.orderForm-thead-unitPrice,
.orderForm-thead-quantity,
.orderForm-thead-orderPrice,
.orderForm-thead-purchaserName,
.orderForm-tbody-operator {
  width: 9%;
}

.orderForm-tbody-orderTime,
.orderForm-tbody-orderStatus,
.orderForm-tbody-unitPrice,
.orderForm-tbody-quantity,
.orderForm-tbody-orderPrice,
.orderForm-tbody-purchaserName {
  text-align: center;
}
</style>
