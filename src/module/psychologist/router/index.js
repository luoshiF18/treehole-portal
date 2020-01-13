import Home from '@/module/home/page/home.vue';
import psychologist_list from '@/module/psychologist/page/psychologist_list';
import psychologist_detail from '@/module/psychologist/page/psychologist_detail';
import add_psychologist from '@/module/psychologist/page/add_psychologist';

export default [{
  path: 'psychologist',
  component: Home,
  hidden: false,
  children: [
    {path: '/psychologist_list', name: '咨询师列表', component: psychologist_list, hidden: false},
    {path: '/psychologist_detail/:id', name: '咨询师详情', component: psychologist_detail, hidden: true},
    {path: '/add_psychologist', name: '新增咨询师', component: add_psychologist, hidden: true},
  ]
}
]
