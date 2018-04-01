<template lang="html">
  <div>
    <userTopNav>
      <slot>
        <router-link class="userTopNav-link" :to="{ name: 'operatorSetting' }">运营者设置</router-link>
        <span>&nbsp;->&nbsp;&nbsp;添加运营者</span>
      </slot>
    </userTopNav>
    <article class="addOperator">
      <div class="addOperator-Wrapper">
        <div class="operatorIfo">
          <h3 class="operatorIfo-title">运营者信息</h3>
          <label for="operatorIfo-name-input" class="operatorIfo-name">
            <span class="operatorIfo-name-desc">联系人</span>
            <input id='operatorIfo-name-input' class='operatorIfo-name-input' type="text" placeholder='请输入运营者联系人'>
          </label>
          <label for="operatorIfo-phone-input" class="operatorIfo-phone">
            <span class="operatorIfo-phone-desc">手机号码</span>
            <input id='operatorIfo-phone-input' class="operatorIfo-phone-input" type="text" placeholder='请输入运营者联系人手机号'>
          </label>
        </div>
        <div class="operatorPower">
          <h3 class="operatorPower-title">权限设置(请勾选该角色可以操作的模块)</h3>
          <form class="operatorPower-checkbox-wrapper" action="" method="post">
            <input type="checkbox" value="知识商品" id="operatorPower-input-knowledgeGoods" class="operatorPower-input">
            <label for="operatorPower-input-knowledgeGoods" class="operatorPower-label">知识商品</label>
            <br>
            <input type="checkbox" id="operatorPower-input-orderForm" class="operatorPower-input">
            <label for="operatorPower-input-orderForm" class="operatorPower-label">订单</label>
            <br>
            <input type="checkbox" value="用户" id="operatorPower-input-user" class="operatorPower-input" @click='checkAllUserInputs'>
            <label for="operatorPower-input-user" class="operatorPower-label">用户</label>
            <!-- 用户 -->
            <input type="checkbox" value="用户列表" id="operatorPower-input-user-userList" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-userList" class="operatorPower-label operatorPower-label-rightSide">用户列表</label>
            <input type="checkbox" value="消息列表" id="operatorPower-input-user-ifo" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-ifo" class="operatorPower-label operatorPower-label-rightSide">消息列表</label>
            <input type="checkbox" value="反馈列表" id="operatorPower-input-user-feedback" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-feedback" class="operatorPower-label operatorPower-label-rightSide">反馈列表</label>
            <br>
            <input type="checkbox" value="资产" id="operatorPower-input-property" class="operatorPower-input">
            <label for="operatorPower-input-property" class="operatorPower-label">资产</label>
            <br>
            <input type="checkbox" value="社群" id="operatorPower-input-community" class="operatorPower-input">
            <label for="operatorPower-input-community" class="operatorPower-label">社群</label>
            <!-- 社群 -->
            <input type="checkbox" value="评论互动" id="operatorPower-input-user-interaction" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-interaction" class="operatorPower-label operatorPower-label-rightSide">评论互动</label>
            <input type="checkbox" value="活动管理" id="operatorPower-input-user-activity" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-activity" class="operatorPower-label operatorPower-label-rightSide">活动管理</label>
            <input type="checkbox" value="小社群" id="operatorPower-input-user-community" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-community" class="operatorPower-label operatorPower-label-rightSide">小社群</label>
            <input type="checkbox" value="问答" id="operatorPower-input-user-answer" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-answer" class="operatorPower-label operatorPower-label-rightSide">问答</label>
            <input type="checkbox" value="作业本" id="operatorPower-input-user-book" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-book" class="operatorPower-label operatorPower-label-rightSide">作业本</label>
            <input type="checkbox" value="打卡" id="operatorPower-input-user-punch" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-punch" class="operatorPower-label operatorPower-label-rightSide">打卡</label>
            <br>
            <input type="checkbox" value="营销" id="operatorPower-input-marketing" class="operatorPower-input">
            <label for="operatorPower-input-marketing" class="operatorPower-label">营销</label>
            <!-- 营销 -->
            <input type="checkbox" value="页面统计" id="operatorPower-input-user-count" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-count" class="operatorPower-label operatorPower-label-rightSide">页面统计</label>
            <input type="checkbox" value="推广员" id="operatorPower-input-user-generalize" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-generalize" class="operatorPower-label operatorPower-label-rightSide">推广员</label>
            <input type="checkbox" value="邀请码" id="operatorPower-input-user-Invitation" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-Invitation" class="operatorPower-label operatorPower-label-rightSide">邀请码</label>
            <input type="checkbox" value="优惠券" id="operatorPower-input-user-coupon" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-coupon" class="operatorPower-label operatorPower-label-rightSide">优惠券</label>
            <input type="checkbox" value="请好友看" id="operatorPower-input-user-friend" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-friend" class="operatorPower-label operatorPower-label-rightSide">请好友看</label>
            <br>
            <input type="checkbox" value="设置" id="operatorPower-input-setting" class="operatorPower-input">
            <label for="operatorPower-input-setting" class="operatorPower-label">设置</label>
            <!-- 设置 -->
            <input type="checkbox" value="店铺设置" id="operatorPower-input-user-shopSetting" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-shopSetting" class="operatorPower-label operatorPower-label-rightSide">店铺设置</label>
            <input type="checkbox" value="运营模式" id="operatorPower-input-user-operationMode" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-operationMode" class="operatorPower-label operatorPower-label-rightSide">运营模式</label>
            <br>
            <input type="checkbox" value="我的服务" id="operatorPower-input-myService" class="operatorPower-input">
            <label for="operatorPower-input-myService" class="operatorPower-label">我的服务</label>
            <!-- 我的服务 -->
            <input type="checkbox" value="服务订购" id="operatorPower-input-user-orderService" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-orderService" class="operatorPower-label operatorPower-label-rightSide">服务订购</label>
            <input type="checkbox" value="流量账户" id="operatorPower-input-user-account" class="operatorPower-input operatorPower-input-rightSide">
            <label for="operatorPower-input-user-account" class="operatorPower-label operatorPower-label-rightSide">流量账户</label>
            <br>
          </form>
          <button type="button" name="button" class="operatorPower-button-selectAll" :class="{ 'operatorPower-button-selectAll_active': isSelectAll }" @click='checkAll'>{{selectAll}}</button>
          <button type="button" name="button" class="operatorPower-button-save">保存</button>
        </div>
      </div>
    </article>
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
      selectAll: '全选',
      isSelectAll: false
    }
  },
  computed: {
    allInput () {
      return document.getElementsByClassName('operatorPower-input')
    }
  },
  methods: {
    checkAll () {
      this.isSelectAll = !this.isSelectAll
      for (let i = 0; i < this.allInput.length; i++) {
        if (!this.isSelectAll) {
          this.selectAll = '全选'
          this.allInput[i].checked = false
        } else {
          this.selectAll = '取消全选'
          this.allInput[i].checked = true
        }
      }
    },
    checkAllUserInputs (event) {
      // console.log(event.target.checked)
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../../assets/css/color.css';

.userTopNav-link:hover {
  color: $light-blue;
}

.addOperator {
  padding: 20px;
}

.addOperator-Wrapper {
  padding: 20px;
  background-color: #fff;
}

.operatorIfo,
.operatorPower {
  margin-bottom: 60px;
}

.operatorIfo-title,
.operatorPower-title {
  padding-left: 10px;
  margin-bottom: 30px;
  border-left: 2px solid $light-blue;
  line-height: 1;
}

.operatorIfo-name,
.operatorIfo-phone {
  display: block;
  margin-bottom: 20px;
}

.operatorIfo-name-desc,
.operatorIfo-phone-desc {
  display: inline-block;
  width: 140px;
  padding-left: 13px;
}

.operatorIfo-name-input,
.operatorIfo-phone-input {
  width: 360px;
  height: 36px;
  line-height: 36px;
  outline: none;
  border-radius: 4px;
  border: 1px solid $border-maincolor;
  padding-left: 12px;
  color: $text-light-color;
  transition: .3s;
}

.operatorIfo-name-input:focus,
.operatorIfo-phone-input:focus {
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),
              0 0 8px rgba(102,175,233,.6);
  border-color: $light-blue;
  color: $main-color;
}

.operatorPower-checkbox-wrapper {
  padding-left: 13px;
}

.operatorPower-label {
  width: 130px;
  display: inline-block;
  margin-bottom: 30px;
  font-weight: 700;
}

.operatorPower-label-rightSide {
  font-weight: 400;
}

.operatorPower-label::before {
  content: '\a0';
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 12px;
  border-radius: 3px;
  box-shadow: 0 0 1px 1px $text-background-color-1 inset;
  line-height: .8;
  text-align: center;
  transition: 0.5s;
}

.operatorPower-label:hover {
  cursor: pointer;
}

.operatorPower-input:focus + .operatorPower-label::before,
.operatorPower-label:hover::before {
  box-shadow: 0 0 1px 1px $light-blue inset;
}

.operatorPower-input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  transition: 0.5s;
}

.operatorPower-input:checked + .operatorPower-label::before {
  content: '\2713';
  color: #fff;
  background-color: $light-blue;
}

.operatorPower-button-selectAll,
.operatorPower-button-save {
  display: inline-block;
  width: 100px;
  height: 36px;
  line-height: 36px;
  margin-bottom: 20px;
  text-align: center;
  background-color: $light-blue;
  color: #fff;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  outline: none;
}

.operatorPower-button-selectAll_active {
  background-color: $text-wraning;
}
</style>
