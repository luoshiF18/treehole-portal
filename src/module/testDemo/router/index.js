import Home from '@/module/home/page/home.vue';
import first from '@/module/testDemo/page/first.vue';
import second from '@/module/testDemo/page/second.vue';

export default [{
  path: '/test',
  component: Home,
   // name: '测试',  //菜单名称
  hidden: false,
  children:[
    {path:'/test/page/first',component: first,hidden:false},
    {path:'/test/page/second',component: second,hidden:false},
  ]
}
]
