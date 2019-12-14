import loginform from '@/base/components/loginform.vue';
import home from '@/module//home/page/home.vue';
export default [{
  path: '/',
  name: 'home',
  component: () => import('@/module/home/page/home.vue'),
  children: [
    {path: 'index', component: () => import('@/module/home/page/homePage.vue')},
    {path: '/', redirect: 'index'},
    {path: '/base/components/loginform',name:'登录页',component: loginform,hidden:true},
    {path: '/home/page/home',name:'首页',component: home,hidden:true}
  ]
}
]
