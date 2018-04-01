<template lang="html">
  <main>
    <section class="guide-container">
      <h3 class="guide-title">新手上路</h3>
      <ul class="novice-list">
        <li class="novice-item" v-for='item of novice' :key='item.id'>
          <router-link class="novice-item-link" :to="{name: item.name, query: item.query }">
            <img class="novice-item-img" :src="item.src" :alt="item.title">
            <article class="novice-item-wrapper">
              <h5 class="novice-item-title">{{item.title}}</h5>
              <p class="novice-item-desc">{{item.desc}}</p>
            </article>
            <img class="novice-item-icon" src="./icon_arrow.png" alt="右箭头图标">
          </router-link>
        </li>
      </ul>
      <router-link class="more-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">更多</router-link>
    </section>
    <section class="guide-container">
      <h3 class="guide-title">功能导航</h3>
      <ul class="function-list">
        <li class="function-item" v-for='item of functions' :key='item.id'>
          <router-link class="function-item-link" :to="{name: item.name, query: item.query }">
            <img class="function-item-img" :src="item.src" :alt="item.desc">
            <p class="function-item-desc">{{item.desc}}</p>
          </router-link>
        </li>
      </ul>
      <router-link class="more-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">更多</router-link>
    </section>
    <section class="guide-container">
      <h3 class="guide-title">热门专题</h3>
      <ul class="hot-list">
        <li class="hot-item" v-for='item of hot' :key='item.id'>
          <router-link class="hot-item-link" :to="{name: item.name, query: item.query }">
            <img class="hot-item-img" :src="item.src" :alt="item.desc">
            <p class="hot-item-desc">{{item.desc}}</p>
          </router-link>
        </li>
      </ul>
      <router-link class="more-link" :to="{ name: 'gettingStart', query: {routerTitleIndex: '0', routerContentIndex: '0'} }">更多</router-link>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      novice: [
        {
          name: 'gettingStart1x1',
          query: {routerTitleIndex: '0', routerContentIndex: '0'},
          src: require('./novice-1.png'),
          title: '开通知识店铺',
          desc: '一分钟拥有自己的知识店铺',
          id: 'novice-1'
        },
        {
          name: 'gettingStart1x2',
          query: {routerTitleIndex: '0', routerContentIndex: '0'},
          src: require('./novice-2.png'),
          title: '访问知识店铺',
          desc: '把知识店铺发给你的朋友们',
          id: 'novice-2'
        },
        {
          name: 'gettingStart1x5',
          query: {routerTitleIndex: '0', routerContentIndex: '0'},
          src: require('./novice-3.png'),
          title: '体验交易流程',
          desc: '快速实现内容变现',
          id: 'novice-3'
        },
        {
          name: 'gettingStart1x6',
          query: {routerTitleIndex: '0', routerContentIndex: '0'},
          src: require('./novice-4.png'),
          title: '体验丰富内容形式',
          desc: '聚合丰富多样的内容变现形式',
          id: 'novice-4'
        },
        {
          name: 'gettingStart1x11',
          query: {routerTitleIndex: '0', routerContentIndex: '0'},
          src: require('./novice-5.png'),
          title: '如何获得更多收入',
          desc: '高效营销利器',
          id: 'novice-5'
        },
        {
          name: 'gettingStart1x16',
          query: {routerTitleIndex: '0', routerContentIndex: '0'},
          src: require('./novice-6.png'),
          title: '增强互动带来转化',
          desc: '沉淀店铺专属粉丝',
          id: 'novice-6'
        }
      ],
      functions: [
        {
          name: 'paidContent1',
          query: {routerTitleIndex: '2', routerContentIndex: '0'},
          src: require('./function-1.png'),
          desc: '内容付费',
          id: 'function-1'
        },
        {
          name: 'UserManagement1',
          query: {routerTitleIndex: '1', routerContentIndex: '0'},
          src: require('./function-2.png'),
          desc: '用户管理',
          id: 'function-2'
        },
        {
          name: '',
          query: {routerTitleIndex: '4', routerContentIndex: '0'},
          src: require('./function-3.png'),
          desc: '社群运用',
          id: 'function-3'
        },
        {
          name: '',
          query: {routerTitleIndex: '5', routerContentIndex: '0'},
          src: require('./function-4.png'),
          desc: '营销互动',
          id: 'function-4'
        },
        {
          name: '',
          query: {routerTitleIndex: '6', routerContentIndex: '0'},
          src: require('./function-5.png'),
          desc: '财务管理',
          id: 'function-5'
        }
      ],
      hot: [
        {
          name: 'paidContent1',
          query: {routerTitleIndex: '2', routerContentIndex: '0'},
          src: require('./hot-1.png'),
          desc: '售卖形式',
          id: 'hot-1'
        },
        {
          name: '',
          query: {routerTitleIndex: '4', routerContentIndex: '0'},
          src: require('./hot-2.png'),
          desc: '直播操作',
          id: 'hot-2'
        },
        {
          name: '',
          query: {routerTitleIndex: '5', routerContentIndex: '0'},
          src: require('./hot-3.png'),
          desc: '拼团',
          id: 'hot-3'
        },
        {
          name: '',
          query: {routerTitleIndex: '11', routerContentIndex: '0'},
          src: require('./hot-4.png'),
          desc: '独立小程序',
          id: 'hot-4'
        },
        {
          name: '',
          query: {routerTitleIndex: '5', routerContentIndex: '6'},
          src: require('./hot-5.png'),
          desc: '优惠券',
          id: 'hot-5'
        },
        {
          name: 'UserManagement3',
          query: {routerTitleIndex: '1', routerContentIndex: '2'},
          src: require('./hot-6.png'),
          desc: '消息推送',
          id: 'hot-6'
        },
        {
          name: '',
          query: {routerTitleIndex: '7', routerContentIndex: '3'},
          src: require('./hot-7.png'),
          desc: '流量费用说明',
          id: 'hot-7'
        },
        {
          name: '',
          query: {routerTitleIndex: '3', routerContentIndex: '3'},
          src: require('./hot-8.png'),
          desc: '作业本',
          id: 'hot-8'
        },
        {
          name: '',
          query: {routerTitleIndex: '3', routerContentIndex: '4'},
          src: require('./hot-9.png'),
          desc: '打卡',
          id: 'hot-9'
        },
        {
          name: '',
          query: {routerTitleIndex: '10', routerContentIndex: '1'},
          src: require('./hot-10.png'),
          desc: '店铺装修',
          id: 'hot-10'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

main {
  width: 1200px;
  margin: 0 auto 20px auto;
  overflow: hidden;
}

li {
  display: inline-block;
}

.guide-container {
  position: relative;
  margin-top: 40px;
}

.guide-title {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  line-height: 33px;
}

.more-link {
  font-size: 16px;
  line-height: 33px;
  color: $light-blue;
  position: absolute;
  top: 0;
  right: 0;
}

.more-link::after {
  content: "";
  position: absolute;
  top: 95%;
  left: 50%;
  z-index: 9;
  transform: translate3d(-50%, 0, 0);
  width: 0;
  height: 2px;
  background-color: $light-blue;
  transition: .3s;
}

.more-link:hover::after {
  width: 100%;
}

.novice-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.novice-item-link {
  width: 380px;
  height: 160px;
  margin-top: 20px;
  background-color: $background-color-3;
  display: flex;
  align-items: center;
  transition: .5s;
}

.novice-item-link:hover,
.hot-item-link:hover {
  background: $background-color-1;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
              0 1px 5px 0 rgba(0,0,0,.12),
              0 3px 1px -2px rgba(0,0,0,.2)
}

.novice-item-img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  margin-left: 40px;
}

.novice-item-icon {
  width: 14px;
  height: 22px;
  margin-left: 30px;
}

.novice-item-wrapper {
  width: 200px;
}

.novice-item-title {
  font-size: 18px;
  font-weight: 400;
}

.novice-item-desc {
  color: $text-light-color;
}

.function-item-link {
  width: 240px;
  height: 160px;
  display: inline-block;
  text-align: center;
}

.function-item-link:hover {
  color: $light-blue;
}

.function-item-img {
  width: 70px;
  height: 70px;
  margin-top: 35px;
}

.function-item-desc {
  margin-top: 8px;
}

.hot-list {
  padding: 20px 0;
}

.hot-item {
  margin-right: 26px;
  margin-top: 20px;
}

.hot-item:nth-child(4),
.hot-item:nth-child(8) {
  margin-right: 0;
}

.hot-item-link {
  width: 280px;
  height: 120px;
  display: flex;
  align-items: center;
  border: solid 1px $border-maincolor;
  transition: .5s;
}

.hot-item-img {
  width: 80px;
  height: 80px;
  margin-left: 60px
}

.hot-item-desc {
  margin-left: 20px;
}
</style>
