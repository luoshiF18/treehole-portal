import Home from '@/module/home/page/home.vue';
import scale_list from '@/module/evaluation/page/scale_list';

export default [{
  path: 'scale',
  component: Home,
  // name: '测试',  //菜单名称
  hidden: false,
  children: [
    {path: '/scale/page/scale_list', component: scale_list, hidden: false},
  ]
}
]
