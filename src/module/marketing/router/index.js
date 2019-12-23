import Home from '@/module/home/page/home.vue';
import InteractiveActivityDetail from "@/module/marketing/page/interactiveactivity/InteractiveActivityDetail";
import InteracticeActivityMore from "@/module/marketing/page/interactiveactivity/InteracticeActivityMore";
import coupon_page from "@/module/marketing/page/coupon/coupon_page";


export default [{
  path: '/',
  component: Home,
  hidden: false,
  // redirect: '/home',
  children: [
    {path:'/interactiveactivity/info',name:'',component: InteractiveActivityDetail,hidden:true},
    {path:'/interactiveactivity/more',name:'',component: InteracticeActivityMore,hidden: true},
    {path:'/coupon/receive',name:'',component: coupon_page,hidden: true},

  ]
}/*,
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }*/
]

