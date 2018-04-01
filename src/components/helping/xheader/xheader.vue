<template lang="html">
  <header>
    <section class="container">
      <a class="logo-link" href="#"><img class="logo" src="./Logo.png" alt="小鹅通Logo"></a>
      <h4 class="title">帮助中心</h4>
      <div class="search-wrapper">
        <label for="search">
          <input class="search-text" type="text" placeholder="请问有什么可以帮到您" v-model='searchMessage' @focus='showPrompt' @blur='hidePrompt' @keyup='deliverHint' @keyup.enter='linkTo'>
        </label>
        <transition name='fade'>
          <ul class="prompt-wrapper" v-if='isShowPromt'>
            <li class="prompt-desc-hot">以下为热门搜索：</li>
            <li class="prompt-desc" v-for='(item, index) of promptDesc' :key='item.id' @click='deliverMessage(index, item.name, item.query)'>{{item.content}}</li>
          </ul>
        </transition>
        <button class="search-button" @click='linkTo'>搜索</button>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  data () {
    return {
      searchMessage: '',
      isShowPromt: false,
      promptDesc: [
        {
          id: '1',
          content: '开通知识店铺',
          name: 'gettingStart1x1',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '2',
          content: '获取更多收入',
          name: 'gettingStart1x11',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '3',
          content: '查看客户消息',
          name: 'UserManagement2x1',
          query: { routerTitleIndex: '1', routerContentIndex: '1', searchContent: this.searchMessage }
        },
        {
          id: '4',
          content: '收集用户信息',
          name: 'UserManagement4x1',
          query: { routerTitleIndex: '1', routerContentIndex: '3', searchContent: this.searchMessage }
        },
        {
          id: '5',
          content: '交易流程',
          name: 'gettingStart1x5',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        }
      ],
      promptDescBackUp: [
        {
          id: '1',
          content: '开通知识店铺',
          name: 'gettingStart1x1',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '2',
          content: '获取更多收入',
          name: 'gettingStart1x11',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '3',
          content: '查看客户消息',
          name: 'UserManagement2x1',
          query: { routerTitleIndex: '1', routerContentIndex: '1', searchContent: this.searchMessage }
        },
        {
          id: '4',
          content: '收集用户信息',
          name: 'UserManagement4x1',
          query: { routerTitleIndex: '1', routerContentIndex: '3', searchContent: this.searchMessage }
        },
        {
          id: '5',
          content: '交易流程',
          name: 'gettingStart1x5',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        }
      ],
      keyHint: [
        {
          id: '1',
          content: '开通知识店铺',
          name: 'gettingStart1x1',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '2',
          content: '访问知识店铺',
          name: 'gettingStart1x2',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '3',
          content: '添加简单内容',
          name: 'gettingStart1x3',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '4',
          content: '注册小鹅通',
          name: 'gettingStart1x4',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '5',
          content: '体验交易流程',
          name: 'gettingStart1x5',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '6',
          content: '体验丰富内容形式',
          name: 'gettingStart1x6',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '7',
          content: '创建第一个知识商品',
          name: 'gettingStart1x7',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '8',
          content: '获取知识店铺链接',
          name: 'gettingStart1x8',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '9',
          content: '把店铺嵌入公众号',
          name: 'gettingStart1x9',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '10',
          content: '购买内容商品',
          name: 'gettingStart1x10',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '11',
          content: '如何获得更多收入',
          name: 'gettingStart1x11',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '12',
          content: '查看订单记录',
          name: 'gettingStart1x12',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '13',
          content: '查看内容商品收入',
          name: 'gettingStart1x13',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '14',
          content: '设置店铺首页',
          name: 'gettingStart1x14',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '15',
          content: '分享知识店铺或内容商品',
          name: 'gettingStart1x15',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '16',
          content: '增强互动带来转化',
          name: 'gettingStart1x16',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '17',
          content: '高效使用帮助中心',
          name: 'gettingStart1x17',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        },
        {
          id: '18',
          content: '老用户需知',
          name: 'gettingStart1x18',
          query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage }
        }
      ]
    }
  },
  computed: {
    getPromptDesc () {
      return document.getElementsByClassName('prompt-desc')
    }
  },
  methods: {
    showPrompt () {
      this.isShowPromt = true
    },
    hidePrompt () {
      this.isShowPromt = false
    },
    deliverMessage (index, nameContent, queryContent) {
      this.searchMessage = this.getPromptDesc[index].innerText
      this.$router.push({ name: nameContent, query: queryContent })
    },
    deliverHint () {
      this.promptDesc = this.keyHint.filter(value => value.content.includes(this.searchMessage))
      if (this.searchMessage === '') {
        this.promptDesc = this.promptDescBackUp
      }
    },
    linkTo () {
      if (this.searchMessage === '') {
        this.$router.push({ name: 'gettingStart', query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage } })
      } else {
        this.$router.push({ name: 'searchResult', query: { routerTitleIndex: '0', routerContentIndex: '0', searchContent: this.searchMessage } })
      }
    }
  }
}
</script>

<style lang="css" scoped>
@import '../../../assets/css/color.css';

.container {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.logo-link {
  width: 90px;
  height: 27px;
  margin-right: 10px;
}

.logo {
  width: 100%;
  height: 100%;
}

.title {
  font-size: 18px;
  font-weight: 400;
  padding-left: 10px;
  border-left: 1px solid $border-maincolor;
}

.search-wrapper {
  margin-left: auto;
  font-size: 0;
  position: relative;
}

.search-text {
  font-size: 14px;
  width: 400px;
  height: 36px;
  line-height: 36px;
  border: 1px solid $border-maincolor;
  border-radius: 3px;
  outline: none;
  padding-left: 8px;
  transition: .3s;
}

.search-text:focus {
  border-color: $light-blue;
}

input::-webkit-input-placeholder {
  color: $text-light-color;
}

input::-ms-input-placeholder {
  color: $text-light-color;
}

input::-moz-input-placeholder {
  color: $text-light-color;
}

.search-button {
  font-size: 14px;
  width: 60px;
  height: 36px;
  line-height: 36px;
  color: #fff;
  background-color: $light-blue;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
}

.search-button:hover {
  background-color: $dark-blue;
}

.prompt-wrapper {
  position: absolute;
  width: 100%;
  font-size: 14px;
  border: 1px solid $border-maincolor;
  border-top: none;
  border-radius: 3px;
  background-color: #fff;
  z-index: 99;
}

.prompt-desc-hot {
  color: $text-wraning;
}

.prompt-desc,
.prompt-desc-hot {
  width: 100%;
  line-height: 30px;
  padding-left: 8px;
}

.prompt-desc:hover {
  background-color: $background-color-1;
}

.fade-enter-active, .fade-leave-active {
  transition: .3s;
  visibility: visible;
  opacity: 1;
}
.fade-enter, .fade-leave-to {
  visibility: hidden;
  opacity: 0;
}
</style>
