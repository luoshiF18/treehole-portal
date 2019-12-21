import Home from '@/module/home/page/home.vue';
import AppWrite from '@/module/appointment/page/app_write.vue';
import AppPay from '@/module/appointment/page/app_pay.vue';

export default [{
    path: '/appointment',
    component: Home,
    name: '在线预约',  //菜单名称
    hidden: false,
    children:[
      {path:'/appointment/write/:cltId',name:'填写预约订单',component: AppWrite,hidden:false},
      {path:'/appointment/pay',name:'支付',component: AppPay,hidden:false}
    ]
  }
]
