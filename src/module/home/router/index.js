export default [{
  path: '/',
  name: 'home',
  component: () => import('@/module/home/page/home.vue'),
  children: [
    {path: 'index', component: () => import('@/module/home/page/homePage.vue')},
    {path: '/', redirect: 'index'}
  ]
}
]
