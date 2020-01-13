import Home from '@/module/home/page/home.vue';
import scale_list from '@/module/evaluation/page/scale_list';
import scale_test from '@/module/evaluation/page/scale_test';
import scale_test2 from '@/module/evaluation/page/scale_test2';
import scale_result from '@/module/evaluation/page/scale_result';
import warnDetails from '@/module/evaluation/page/warnDetails';
import preview from '@/module/evaluation/page/preview';

export default [{
  path: 'scale',
  component: Home,
  // name: '测试',  //菜单名称
  hidden: false,
  children: [
    {path: '/scale/page/scale_list', component: scale_list, hidden: false},
    {path: '/scale/page/scale_test', component: scale_test, hidden: true},
    {path: '/scale/page/scale_test2', component: scale_test2, hidden: true},
    {path: '/scale/page/scale_result', component: scale_result, hidden: true},
    {path: '/scale/page/warnDetails', component: warnDetails, hidden: true},
    {path: '/scale/page/preview/:warningId', component: preview, hidden: true},
  ]
}
]
