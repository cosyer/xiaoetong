import Vue from 'vue'
import Router from 'vue-router'

/*******************************
  以下为 index 部分（后台主页面）路由设置
********************************/

const Index = (resolve) => {
  import('@/view/index').then((module) => {
    resolve(module)
  })
}

const ShopDetails = (resolve) => {
  import('index/shopDetails/shopDetails').then((module) => {
    resolve(module)
  })
}

const Graphic = (resolve) => {
  import('index/graphic/graphic').then((module) => {
    resolve(module)
  })
}

const Audio = (resolve) => {
  import('index/audio/audio').then((module) => {
    resolve(module)
  })
}

const Video = (resolve) => {
  import('index/video/video').then((module) => {
    resolve(module)
  })
}

const LiveTelecast = (resolve) => {
  import('index/liveTelecast/liveTelecast').then((module) => {
    resolve(module)
  })
}

const Column = (resolve) => {
  import('index/column/column').then((module) => {
    resolve(module)
  })
}

const Member = (resolve) => {
  import('index/member/member').then((module) => {
    resolve(module)
  })
}

const OrderForm = (resolve) => {
  import('index/orderForm/orderForm').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('index/user/user').then((module) => {
    resolve(module)
  })
}

const Visitors = (resolve) => {
  import('index/user/visitors/visitors').then((module) => {
    resolve(module)
  })
}

const MessageList = (resolve) => {
  import('index/user/messageList/messageList').then((module) => {
    resolve(module)
  })
}

const CustomersNews = (resolve) => {
  import('index/user/customersNews/customersNews').then((module) => {
    resolve(module)
  })
}

const Property = (resolve) => {
  import('index/property/property').then((module) => {
    resolve(module)
  })
}

const MyProperty = (resolve) => {
  import('index/property/myProperty/myProperty').then((module) => {
    resolve(module)
  })
}

const WithdrawRecord = (resolve) => {
  import('index/property/withdrawRecord/withdrawRecord').then((module) => {
    resolve(module)
  })
}

const Community = (resolve) => {
  import('index/community/community').then((module) => {
    resolve(module)
  })
}

const Marketing = (resolve) => {
  import('index/marketing/marketing').then((module) => {
    resolve(module)
  })
}

const Setting = (resolve) => {
  import('index/setting/setting').then((module) => {
    resolve(module)
  })
}

const ShopSetting = (resolve) => {
  import('index/setting/shopSetting/shopSetting').then((module) => {
    resolve(module)
  })
}

const OperatorSetting = (resolve) => {
  import('index/setting/operatorSetting/operatorSetting').then((module) => {
    resolve(module)
  })
}

const PaymentSetting = (resolve) => {
  import('index/setting/paymentSetting/paymentSetting').then((module) => {
    resolve(module)
  })
}

const AddOperator = (resolve) => {
  import('index/setting/addOperator/addOperator').then((module) => {
    resolve(module)
  })
}

const MyService = (resolve) => {
  import('index/myService/myService').then((module) => {
    resolve(module)
  })
}

const FlowAccount = (resolve) => {
  import('index/myService/flowAccount/flowAccount').then((module) => {
    resolve(module)
  })
}

const GiftCertificate = (resolve) => {
  import('index/myService/giftCertificate/giftCertificate').then((module) => {
    resolve(module)
  })
}

const InvoiceManagement = (resolve) => {
  import('index/myService/invoiceManagement/invoiceManagement').then((module) => {
    resolve(module)
  })
}

const ServiceSubscription = (resolve) => {
  import('index/myService/serviceSubscription/serviceSubscription').then((module) => {
    resolve(module)
  })
}

const WaitToMakeInvoice = (resolve) => {
  import('index/myService/invoiceManagement/waitToMakeInvoice/waitToMakeInvoice').then((module) => {
    resolve(module)
  })
}

const InvoiceRecord = (resolve) => {
  import('index/myService/invoiceManagement/invoiceRecord/invoiceRecord').then((module) => {
    resolve(module)
  })
}

/*******************************
  以下为 helping 部分（帮助中心）路由设置
********************************/

const Helping = (resolve) => {
  import('@/view/helping').then((module) => {
    resolve(module)
  })
}

const Novice = (resolve) => {
  import('helping/novice/novice').then((module) => {
    resolve(module)
  })
}

const Guide = (resolve) => {
  import('helping/guide/guide').then((module) => {
    resolve(module)
  })
}

const Problem = (resolve) => {
  import('helping/problem/problem').then((module) => {
    resolve(module)
  })
}

const SearchResult = (resolve) => {
  import('searchResult/searchResult').then((module) => {
    resolve(module)
  })
}

const GettingStart = (resolve) => {
  import('gettingStart/gettingStart').then((module) => {
    resolve(module)
  })
}

const GettingStart1x1 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x1/gettingStart1x1').then((module) => {
    resolve(module)
  })
}

const GettingStart1x2 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x2/gettingStart1x2').then((module) => {
    resolve(module)
  })
}

const GettingStart1x3 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x3/gettingStart1x3').then((module) => {
    resolve(module)
  })
}

const GettingStart1x4 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x4/gettingStart1x4').then((module) => {
    resolve(module)
  })
}

const GettingStart1x5 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x5/gettingStart1x5').then((module) => {
    resolve(module)
  })
}

const GettingStart1x6 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x6/gettingStart1x6').then((module) => {
    resolve(module)
  })
}

const GettingStart1x7 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x7/gettingStart1x7').then((module) => {
    resolve(module)
  })
}

const GettingStart1x8 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x8/gettingStart1x8').then((module) => {
    resolve(module)
  })
}

const GettingStart1x9 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x9/gettingStart1x9').then((module) => {
    resolve(module)
  })
}

const GettingStart1x10 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x10/gettingStart1x10').then((module) => {
    resolve(module)
  })
}

const GettingStart1x11 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x11/gettingStart1x11').then((module) => {
    resolve(module)
  })
}

const GettingStart1x12 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x12/gettingStart1x12').then((module) => {
    resolve(module)
  })
}

const GettingStart1x13 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x13/gettingStart1x13').then((module) => {
    resolve(module)
  })
}

const GettingStart1x14 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x14/gettingStart1x14').then((module) => {
    resolve(module)
  })
}

const GettingStart1x15 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x15/gettingStart1x15').then((module) => {
    resolve(module)
  })
}

const GettingStart1x16 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x16/gettingStart1x16').then((module) => {
    resolve(module)
  })
}

const GettingStart1x17 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x17/gettingStart1x17').then((module) => {
    resolve(module)
  })
}

const GettingStart1x18 = (resolve) => {
  import('gettingStart/gettingStart1/gettingStart1x18/gettingStart1x18').then((module) => {
    resolve(module)
  })
}

const UserManagement1 = (resolve) => {
  import('userManagement/userManagement1/userManagement1').then((module) => {
    resolve(module)
  })
}

const UserManagement1x1 = (resolve) => {
  import('userManagement/userManagement1/userManagement1x1/userManagement1x1').then((module) => {
    resolve(module)
  })
}

const UserManagement2 = (resolve) => {
  import('userManagement/userManagement2/userManagement2').then((module) => {
    resolve(module)
  })
}

const UserManagement2x1 = (resolve) => {
  import('userManagement/userManagement2/userManagement2x1/userManagement2x1').then((module) => {
    resolve(module)
  })
}

const UserManagement3 = (resolve) => {
  import('userManagement/userManagement3/userManagement3').then((module) => {
    resolve(module)
  })
}

const UserManagement3x1 = (resolve) => {
  import('userManagement/userManagement3/userManagement3x1/userManagement3x1').then((module) => {
    resolve(module)
  })
}

const UserManagement3x2 = (resolve) => {
  import('userManagement/userManagement3/userManagement3x2/userManagement3x2').then((module) => {
    resolve(module)
  })
}

const UserManagement3x3 = (resolve) => {
  import('userManagement/userManagement3/userManagement3x3/userManagement3x3').then((module) => {
    resolve(module)
  })
}

const UserManagement4 = (resolve) => {
  import('userManagement/userManagement4/userManagement4').then((module) => {
    resolve(module)
  })
}

const UserManagement4x1 = (resolve) => {
  import('userManagement/userManagement4/userManagement4x1/userManagement4x1').then((module) => {
    resolve(module)
  })
}

const PaidContent2 = (resolve) => {
  import('paidContent/paidContent2/paidContent2').then((module) => {
    resolve(module)
  })
}

const PaidContent2x1 = (resolve) => {
  import('paidContent/paidContent2/paidContent2x1/paidContent2x1').then((module) => {
    resolve(module)
  })
}

const PaidContent2x2 = (resolve) => {
  import('paidContent/paidContent2/paidContent2x2/paidContent2x2').then((module) => {
    resolve(module)
  })
}

const PaidContent1 = (resolve) => {
  import('paidContent/paidContent1/paidContent1').then((module) => {
    resolve(module)
  })
}

const PaidContent1x1 = (resolve) => {
  import('paidContent/paidContent1/paidContent1x1/paidContent1x1').then((module) => {
    resolve(module)
  })
}

const PaidContent3 = (resolve) => {
  import('paidContent/paidContent3/paidContent3').then((module) => {
    resolve(module)
  })
}

const PaidContent3x1 = (resolve) => {
  import('paidContent/paidContent3/paidContent3x1/paidContent3x1').then((module) => {
    resolve(module)
  })
}

const PaidContent4 = (resolve) => {
  import('paidContent/paidContent4/paidContent4').then((module) => {
    resolve(module)
  })
}

const PaidContent4x1 = (resolve) => {
  import('paidContent/paidContent4/paidContent4x1/paidContent4x1').then((module) => {
    resolve(module)
  })
}
const PaidContent4x2 = (resolve) => {
  import('paidContent/paidContent4/paidContent4x2/paidContent4x2').then((module) => {
    resolve(module)
  })
}

const PaidContent5 = (resolve) => {
  import('paidContent/paidContent5/paidContent5').then((module) => {
    resolve(module)
  })
}

const PaidContent5x1 = (resolve) => {
  import('paidContent/paidContent5/paidContent5x1/paidContent5x1').then((module) => {
    resolve(module)
  })
}

const PaidContent5x2 = (resolve) => {
  import('paidContent/paidContent5/paidContent5x2/paidContent5x2').then((module) => {
    resolve(module)
  })
}

const PaidContent6 = (resolve) => {
  import('paidContent/paidContent6/paidContent6').then((module) => {
    resolve(module)
  })
}

const PaidContent6x1 = (resolve) => {
  import('paidContent/paidContent6/paidContent6x1/paidContent6x1').then((module) => {
    resolve(module)
  })
}

const PaidContent6x2 = (resolve) => {
  import('paidContent/paidContent6/paidContent6x2/paidContent6x2').then((module) => {
    resolve(module)
  })
}

const PaidContent7 = (resolve) => {
  import('paidContent/paidContent7/paidContent7').then((module) => {
    resolve(module)
  })
}

const PaidContent7x1 = (resolve) => {
  import('paidContent/paidContent7/paidContent7x1/paidContent7x1').then((module) => {
    resolve(module)
  })
}

const PaidContent8 = (resolve) => {
  import('paidContent/paidContent8/paidContent8').then((module) => {
    resolve(module)
  })
}

const PaidContent8x1 = (resolve) => {
  import('paidContent/paidContent8/paidContent8x1/paidContent8x1').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index/shopDetails'
    },
    {
      path: '/index',
      component: Index,
      name: 'index',
      children: [
        {
          path: '/index/shopDetails',
          component: ShopDetails,
          name: 'shopDetails'
        },
        {
          path: '/index/graphic',
          component: Graphic,
          name: 'graphic'
        },
        {
          path: '/index/audio',
          component: Audio,
          name: 'audio'
        },
        {
          path: '/index/video',
          component: Video,
          name: 'video'
        },
        {
          path: '/index/liveTelecast',
          component: LiveTelecast,
          name: 'liveTelecast'
        },
        {
          path: '/index/column',
          component: Column,
          name: 'column'
        },
        {
          path: '/index/member',
          component: Member,
          name: 'member'
        },
        {
          path: '/index/orderForm',
          component: OrderForm,
          name: 'orderForm'
        },
        {
          path: '/index/user',
          component: User,
          name: 'user',
          redirect: '/index/user/visitors',
          children: [
            {
              path: '/index/user/visitors',
              component: Visitors,
              name: 'visitors'
            },
            {
              path: '/index/user/messageList',
              component: MessageList,
              name: 'messageList'
            },
            {
              path: '/index/user/customersNews',
              component: CustomersNews,
              name: 'customersNews'
            }
          ]
        },
        {
          path: '/index/property',
          component: Property,
          name: 'property',
          redirect: '/index/property/myProperty',
          children: [
            {
              path: '/index/property/myProperty',
              component: MyProperty,
              name: 'myProperty'
            },
            {
              path: '/index/property/withdrawRecord',
              component: WithdrawRecord,
              name: 'withdrawRecord'
            }
          ]
        },
        {
          path: '/index/community',
          component: Community,
          name: 'community'
        },
        {
          path: '/index/marketing',
          component: Marketing,
          name: 'marketing'
        },
        {
          path: '/index/setting',
          component: Setting,
          name: 'setting',
          redirect: '/index/setting/shopSetting',
          children: [
            {
              path: '/index/setting/shopSetting',
              component: ShopSetting,
              name: 'shopSetting'
            },
            {
              path: '/index/setting/operatorSetting',
              component: OperatorSetting,
              name: 'operatorSetting'
            },
            {
              path: '/index/setting/paymentSetting',
              component: PaymentSetting,
              name: 'paymentSetting'
            }
          ]
        },
        {
          path: '/index/setting/addOperator',
          component: AddOperator,
          name: 'addOperator'
        },
        {
          path: '/index/myService',
          component: MyService,
          name: 'myService',
          redirect: '/index/myService/serviceSubscription',
          children: [
            {
              path: '/index/myService/serviceSubscription',
              component: ServiceSubscription,
              name: 'serviceSubscription'
            },
            {
              path: '/index/myService/flowAccount',
              component: FlowAccount,
              name: 'flowAccount'
            },
            {
              path: '/index/myService/giftCertificate',
              component: GiftCertificate,
              name: 'giftCertificate'
            },
            {
              path: '/index/myService/invoiceManagement',
              component: InvoiceManagement,
              name: 'invoiceManagement',
              redirect: '/index/myService/invoiceManagement/waitToMakeInvoice',
              children: [
                {
                  path: '/index/myService/invoiceManagement/waitToMakeInvoice',
                  component: WaitToMakeInvoice,
                  name: 'waitToMakeInvoice'
                },
                {
                  path: '/index/myService/invoiceManagement/invoiceRecord',
                  component: InvoiceRecord,
                  name: 'invoiceRecord'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/helping',
      redirect: '/helping/guide',
      component: Helping,
      name: 'helping',
      children: [
        {
          path: '/helping/guide',
          component: Guide,
          name: 'guide'
        },
        {
          path: '/helping/novice',
          component: Novice,
          name: 'novice'
        },
        {
          path: '/helping/problem',
          name: 'problem',
          redirect: '/helping/problem/gettingStart',
          component: Problem,
          children: [
            {
              path: '/helping/problem/searchResult',
              name: 'searchResult',
              component: SearchResult
            },
            {
              path: '/helping/problem/gettingStart',
              name: 'gettingStart',
              component: GettingStart
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x1',
              name: 'gettingStart1x1',
              component: GettingStart1x1
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x2',
              name: 'gettingStart1x2',
              component: GettingStart1x2
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x3',
              name: 'gettingStart1x3',
              component: GettingStart1x3
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x4',
              name: 'gettingStart1x4',
              component: GettingStart1x4
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x5',
              name: 'gettingStart1x5',
              component: GettingStart1x5
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x6',
              name: 'gettingStart1x6',
              component: GettingStart1x6
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x7',
              name: 'gettingStart1x7',
              component: GettingStart1x7
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x8',
              name: 'gettingStart1x8',
              component: GettingStart1x8
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x9',
              name: 'gettingStart1x9',
              component: GettingStart1x9
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x10',
              name: 'gettingStart1x10',
              component: GettingStart1x10
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x11',
              name: 'gettingStart1x11',
              component: GettingStart1x11
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x12',
              name: 'gettingStart1x12',
              component: GettingStart1x12
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x13',
              name: 'gettingStart1x13',
              component: GettingStart1x13
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x14',
              name: 'gettingStart1x14',
              component: GettingStart1x14
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x15',
              name: 'gettingStart1x15',
              component: GettingStart1x15
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x16',
              name: 'gettingStart1x16',
              component: GettingStart1x16
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x17',
              name: 'gettingStart1x17',
              component: GettingStart1x17
            },
            {
              path: '/helping/problem/gettingStart/gettingStart1x18',
              name: 'gettingStart1x18',
              component: GettingStart1x18
            },
            {
              path: '/helping/problem/UserManagement1',
              name: 'UserManagement1',
              component: UserManagement1
            },
            {
              path: '/helping/problem/UserManagement1/UserManagement1x1',
              name: 'UserManagement1x1',
              component: UserManagement1x1
            },
            {
              path: '/helping/problem/UserManagement2',
              name: 'UserManagement2',
              component: UserManagement2
            },
            {
              path: '/helping/problem/UserManagement2/UserManagement2x1',
              name: 'UserManagement2x1',
              component: UserManagement2x1
            },
            {
              path: '/helping/problem/UserManagement3',
              name: 'UserManagement3',
              component: UserManagement3
            },
            {
              path: '/helping/problem/UserManagement3/UserManagement3x1',
              name: 'UserManagement3x1',
              component: UserManagement3x1
            },
            {
              path: '/helping/problem/UserManagement3/UserManagement3x2',
              name: 'UserManagement3x2',
              component: UserManagement3x2
            },
            {
              path: '/helping/problem/UserManagement3/UserManagement3x3',
              name: 'UserManagement3x3',
              component: UserManagement3x3
            },
            {
              path: '/helping/problem/UserManagement4',
              name: 'UserManagement4',
              component: UserManagement4
            },
            {
              path: '/helping/problem/UserManagement4/UserManagement4x1',
              name: 'UserManagement4x1',
              component: UserManagement4x1
            },
            {
              path: '/helping/problem/paidContent1',
              name: 'paidContent1',
              component: PaidContent1
            },
            {
              path: '/helping/problem/paidContent1/paidContent1x1',
              name: 'paidContent1x1',
              component: PaidContent1x1
            },
            {
              path: '/helping/problem/paidContent2',
              name: 'paidContent2',
              component: PaidContent2
            },
            {
              path: '/helping/problem/paidContent2/paidContent2x1',
              name: 'paidContent2x1',
              component: PaidContent2x1
            },
            {
              path: '/helping/problem/paidContent2/paidContent2x2',
              name: 'paidContent2x2',
              component: PaidContent2x2
            },
            {
              path: '/helping/problem/paidContent3',
              name: 'paidContent3',
              component: PaidContent3
            },
            {
              path: '/helping/problem/paidContent3/paidContent3x1',
              name: 'paidContent3x1',
              component: PaidContent3x1
            },
            {
              path: '/helping/problem/paidContent4',
              name: 'paidContent4',
              component: PaidContent4
            },
            {
              path: '/helping/problem/paidContent4/paidContent4x1',
              name: 'paidContent4x1',
              component: PaidContent4x1
            },
            {
              path: '/helping/problem/paidContent4/paidContent4x2',
              name: 'paidContent4x2',
              component: PaidContent4x2
            },
            {
              path: '/helping/problem/paidContent5',
              name: 'paidContent5',
              component: PaidContent5
            },
            {
              path: '/helping/problem/paidContent5/paidContent5x1',
              name: 'paidContent5x1',
              component: PaidContent5x1
            },
            {
              path: '/helping/problem/paidContent5/paidContent5x2',
              name: 'paidContent5x2',
              component: PaidContent5x2
            },
            {
              path: '/helping/problem/paidContent6',
              name: 'paidContent6',
              component: PaidContent6
            },
            {
              path: '/helping/problem/paidContent6/paidContent6x1',
              name: 'paidContent6x1',
              component: PaidContent6x1
            },
            {
              path: '/helping/problem/paidContent6/paidContent6x2',
              name: 'paidContent6x2',
              component: PaidContent6x2
            },
            {
              path: '/helping/problem/paidContent7',
              name: 'paidContent7',
              component: PaidContent7
            },
            {
              path: '/helping/problem/paidContent7/paidContent7x1',
              name: 'paidContent7x1',
              component: PaidContent7x1
            },
            {
              path: '/helping/problem/paidContent8',
              name: 'paidContent8',
              component: PaidContent8
            },
            {
              path: '/helping/problem/paidContent8/paidContent8x1',
              name: 'paidContent8x1',
              component: PaidContent8x1
            }
          ]
        }
      ]
    }
  ]
})
