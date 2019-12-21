import Home from '@/module/home/page/home.vue';

import page_bind from '@/module/member/components/user/page_bind.vue'
import reset_pass from '@/module/member/components/user/reset_pass.vue'
import reset_phone from '@/module/member/components/user/reset_phone.vue'
import user_edit from '@/module/member/components/user/user_edit.vue'
import page_point from '@/module/member/components/point/page_point.vue'
import user_center from '@/module/member/components/user/user_center.vue'
import page_redpaper from '@/module/member/components/user/page_redpaper.vue'
import page_message from '@/module/member/components/user/page_message.vue'
import page_appoint from '@/module/member/components/user/page_appoint.vue'
import qingsu_order from '@/module/member/components/user/qingsu_order.vue'



export default [{
    path: '/',
    component: Home, // 路由要引用的组件
    name: '个人中心',  //菜单列表名
    hidden: false,
    children:[
      {path:'/member/page_bind',name:'账号绑定',component: page_bind, hidden:false},
      {path:'/member/reset_pass/:user_id',name:'重置密码',component: reset_pass, hidden:false},
      {path:'/member/reset_phone',name:'绑定手机号',component: reset_phone, hidden:false},
      {path:'/member/user_edit',name:'基本信息修改',component: user_edit, hidden:false},
      {path:'/member/page_point',name:'我的积分',component: page_point, hidden:false},
      {path: '/member/user_center', name:'用户中心',component: user_center,hidden:false},
      {path:'/member/page_redpaper',name:'我的红包',component: page_redpaper, hidden:false},
      {path:'/member/page_message',name:'我的消息',component: page_message, hidden:false},
      {path:'/member/page_appoint',name:'预约订单',component: page_appoint, hidden:false},
      {path:'/member/qingsu_order',name:'倾诉订单',component: qingsu_order, hidden:false},


      //{path:'/member/user/reset_pass',name:'重置密码',component: reset_pass, hidden:false},
      /*{path:'/member/page/user',name:'用户信息管理',component: page_user,hidden:false},
*/
    ]
  }
]
