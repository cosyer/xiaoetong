<template lang="html">
  <section class="novice-container">
    <h2 class="novice-title">新手学习流程</h2>
    <article class="novice-wrapper">
      <div class="novice-deal">
        <h3 class="novice-wrapper-title">体验交易流程</h3>
        <ul class="novice-list">
          <li class="novice-item novice-item-chapter">第&nbsp;1&nbsp;节</li>
          <li class="novice-item novice-item-desc">购买内容商品</li>
          <li class="novice-item">
            <router-link class="novice-item-link" :to="{ name: 'gettingStart1x10', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">
              <i class="novice-item-icon"></i>
              <span class="novice-item-look">立即查看</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="interactive">
        <div class="novice-deal">
          <h3 class="novice-wrapper-title">增强互动带来转化</h3>
          <ul class="novice-list" v-for='item of chapters' :key='item.id'>
            <li class="novice-item novice-item-chapter">第&nbsp;{{item.id}}&nbsp;节</li>
            <li class="novice-item novice-item-desc">{{item.content}}</li>
            <li class="novice-item">
              <router-link class="novice-item-link" :to="{ name: item.name, query: item.query}">
                <i class="novice-item-icon"></i>
                <span class="novice-item-look">立即查看</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data () {
    return {
      chapters: [
        {
          id: '1',
          content: '如何自定义推广海报',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '2',
          content: '创建直播商品',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '3',
          content: '开通知识店铺',
          name: 'gettingStart1x1',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '4',
          content: '视频录播教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '5',
          content: '视频直播使用教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '6',
          content: '如何使用二维码／短链接生成工具？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '7',
          content: '如何查看店铺访问用户？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '8',
          content: '查看客户消息',
          name: 'UserManagement2x1',
          query: { routerTitleIndex: '1', routerContentIndex: '1' }
        },
        {
          id: '9',
          content: '流量扶持计划是什么？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '10',
          content: '查看店铺信息/店铺链接/修改店铺名称',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '11',
          content: '发布活动',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '12',
          content: '请好友看使用教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '13',
          content: '如何创建优惠券？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '14',
          content: '如何开启“请好友看”？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '15',
          content: '如何开发票？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '16',
          content: '如何发布活动？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '17',
          content: '如何创建付费问答？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '18',
          content: '如何创建作业本？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '19',
          content: '导出订单记录',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '20',
          content: '如何设置管理员账号？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '21',
          content: '如何更换管理员账号？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '22',
          content: '访问知识店铺',
          name: 'gettingStart1x2',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '23',
          content: '注册小鹅通',
          name: 'gettingStart1x4',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '24',
          content: '添加简单内容？',
          name: 'gettingStart1x3',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '25',
          content: '优惠券使用教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '26',
          content: '查看流量账户',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '27',
          content: '如何设置邀请卡？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '28',
          content: '用户如何使用”请好友看“？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '29',
          content: '如何管理活动？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '30',
          content: '如何管理付费问答？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '31',
          content: '跨号支付/二维码支付问题/支付失败/无法支付等问题',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '32',
          content: '体验交易流程',
          name: 'gettingStart1x5',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '33',
          content: '创建第一个知识商品',
          name: 'gettingStart1x7',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '34',
          content: '直播时如何删除听众发言、对听众禁言？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '35',
          content: '如何管理活动签到？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '36',
          content: '手机端学员交作业/公开展示/老师点评',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '37',
          content: '如何新增运营者子账号？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '38',
          content: '首页模块自定义/在首页增加、调序/增加首页频道',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '39',
          content: '体验丰富内容形式',
          name: 'gettingStart1x6',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '40',
          content: '如何设置/更换管理员账号？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '41',
          content: '获取知识店铺链接',
          name: 'gettingStart1x8',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '42',
          content: '设置店铺首页',
          name: 'gettingStart1x14',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '43',
          content: 'PC端作业本使用教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '44',
          content: '如何获取更多收入',
          name: 'gettingStart1x11',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '45',
          content: '如何设置定向优惠券？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '46',
          content: '把店铺嵌入公众号',
          name: 'gettingStart1x9',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '47',
          content: '分享您的知识店铺或内容商品',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '48',
          content: '查看内容商品收入',
          name: 'gettingStart1x13',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '49',
          content: '查看订单记录',
          name: 'gettingStart1x12',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '50',
          content: '创建视频商品',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '51',
          content: '创建专栏商品',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '52',
          content: '创建会员商品',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '53',
          content: '已认证服务号推送消息/通知',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '54',
          content: '增强互动带来转化',
          name: 'gettingStart1x16',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '55',
          content: '其它财务管理相关问题',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '56',
          content: '会员排序',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '57',
          content: '如何创建小社群？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '58',
          content: '如何新增运营账号',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '59',
          content: '页面统计使用教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '60',
          content: '店铺消息提醒功能',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '61',
          content: '小社群如何关联专栏或会员？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '62',
          content: '小社群如何设置群主？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '63',
          content: '小社群如何管理动态及成员?',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '64',
          content: '分享语自定义',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '65',
          content: '直播时讲师如何回复听众发言？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '66',
          content: '专栏排序',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '67',
          content: '高效使用帮助中心',
          name: 'gettingStart1x17',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '68',
          content: '隐藏订阅数',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '69',
          content: '开启资料填写',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '70',
          content: '创建图文商品',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '71',
          content: '用户信息采集功能说明',
          name: 'UserManagement4x1',
          query: { routerTitleIndex: '1', routerContentIndex: '3' }
        },
        {
          id: '72',
          content: '创建音频商品',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '73',
          content: '提现知识店铺收入',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '74',
          content: '开启店铺内消息提醒',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '75',
          content: '直播时讲师如何与听众互动？',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '76',
          content: '设置分类导航',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '77',
          content: '没有认证服务号如何给用户发通知/消息',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '78',
          content: '作业本教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '79',
          content: '打赏及导出音频',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '80',
          content: '老用户需知',
          name: 'gettingStart1x18',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '81',
          content: '获取店铺名称/链接',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '82',
          content: '设置轮播图',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '83',
          content: '首页名称自定义',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '84',
          content: '隐藏更新期数',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '85',
          content: '关注公众号引导设置',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '86',
          content: '社群打卡教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '87',
          content: '小社群教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '88',
          content: '付费问答教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '89',
          content: '查看订单记录',
          name: 'gettingStart1x12',
          query: { routerTitleIndex: '0', routerContentIndex: '0' }
        },
        {
          id: '90',
          content: '如何发送管理员消息',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '91',
          content: '邀请码使用教程',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '92',
          content: '用户如何把内容赠送给好友',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '93',
          content: '老用户设置 https',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        },
        {
          id: '94',
          content: '评论互动功能说明',
          name: '',
          query: {routerTitleIndex: '', routerContentIndex: ''}
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.novice-container {
  width: 1200px;
  margin: 40px auto;
  overflow: hidden;
}

.novice-title {
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
}

.novice-wrapper {
  border: 1px solid $border-maincolor;
  padding: 0 20px 30px 30px;
  margin: 20px auto 60px auto;
}

.novice-wrapper-title {
  line-height: 65px;
  border-bottom: 1px solid $border-maincolor;
  font-size: 18px;
  font-weight: 600;
}

.novice-list {
  line-height: 65px;
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $border-maincolor;
}

.novice-list:hover {
  background-color: $background-color-3;
}

.novice-item-chapter {
  width: 80px;
}

.novice-item-desc {
  position: relative;
  padding-left: 40px;
  border-left: 1px solid $light-blue;
}

.novice-item-desc::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid $light-blue;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: -6px;
  transform: translate3d(0,-50%,0);
}

.novice-item:last-child {
  margin-left: auto;
}

.novice-item-link {
  display: flex;
  align-items: center;
  height: 35px;
  padding: 5px 10px;
  border: 1px solid $light-blue;
  border-radius: 3px;
  transition: .2s linear;
}

.novice-item-icon {
  background: url('./icon_play.png') center no-repeat;
  width: 16px;
  height: 16px;
  transition: .2s linear;
}

.novice-item-link:hover {
  background-color: $light-blue;
  color: #fff;
}

.novice-item-link:hover .novice-item-icon {
  background: url('./icon_play_pre.png') center no-repeat;
}

.novice-item-look {
  padding-left: 5px;
}

</style>
