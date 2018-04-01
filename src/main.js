import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import '@/assets/css/normalize.css'
import '@/assets/css/base.css'

Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading: require('@/assets/img/loading-spin.svg'),
  lazyComponent: true
})

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    userInfo: {
      'userShopName': '',
      'userShopLink': '',
      'isProbation': '',
      'isOverTime': '',
      'overdue': '',
      'remainingBalance': '',
      'operators': [],
      'visitorsData': [],
      'videoData': [],
      'audioData': [],
      'columnData': [],
      'graphicData': [],
      'liveTelecastData': [],
      'flowAccountData': [],
      'giftCertificateData': [],
      'invoiceRecordData': [],
      'waitToMakeInvoiceData': [],
      'serviceSubscriptionData': [],
      'orderFormData': [],
      'myPropertyData': [],
      'withdrawRecordData': [],
      'messageListData': [],
      'customersNewsData': []
    }
  },
  mutations: {
    getUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    hideColumnData (state, index) {
      state.userInfo.columnData[index].isShow = false
    },
    showColumnData (state, index) {
      state.userInfo.columnData[index].isShow = true
    },
    sortColumnData (state, {index, sortNum}) {
      state.userInfo.columnData.splice(sortNum - 1, 0, state.userInfo.columnData[index])
      state.userInfo.columnData.splice(index + 1, 1)
      state.userInfo.columnData.forEach((el, index) => {
        el.id = index
      })
    },
    hideAudioData (state, index) {
      state.userInfo.audioData[index].isShow = false
    },
    showAudioData (state, index) {
      state.userInfo.audioData[index].isShow = true
    },
    hideGraphicData (state, index) {
      state.userInfo.graphicData[index].isShow = false
    },
    showGraphicData (state, index) {
      state.userInfo.graphicData[index].isShow = true
    },
    hideIsShowWellDone (state) {
      state.userInfo.isShowWelldone = false
    }
  },
  getters: {
    columnData (state) {
      return state.userInfo.columnData.filter(value => value.isShow === true)
    }
  },
  actions: {
    getUserInfo (context) {
      axios.get('../../static/mock/userInfo.json').then(res => {
        context.commit('getUserInfo', res.data)
      })
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
