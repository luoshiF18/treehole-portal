import Home from '@/module/home/page/home.vue';
import InteractiveActivityDetail from "@/module/marketing/page/interactiveactivity/InteractiveActivityDetail";
import InteracticeActivityMore from "@/module/marketing/page/interactiveactivity/InteracticeActivityMore";
import coupon_page from "@/module/marketing/page/coupon/coupon_page";
import coupon_all from "@/module/marketing/page/coupon/coupon_all";
import NoticePage from "@/module/marketing/page/notice/NoticePage"
export default [{
  path: '/',
  component: Home,
  hidden: false,
  // redirect: '/home',
  children: [
    {path:'/interactiveactivity/info',name:'',component: InteractiveActivityDetail,hidden:true},
    {path:'/interactiveactivity/more',name:'',component: InteracticeActivityMore,hidden: true},
    {path:'/coupon/receive',name:'',component: coupon_page,hidden: true},
    {path:'/coupon/all',name:'',component: coupon_all,hidden: true},
    {path:'/notice/page',name:'',component: NoticePage,hidden: true},

  ]
}/*,
  {
    path: '/login',
    component: Login,
    name: 'Login',
    hidden: true
  }*/
]

