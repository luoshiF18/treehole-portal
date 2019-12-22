import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
// 定义路由配置
let routes = []
let concat = (router) => {
  routes = routes.concat(router)
}
// // 导入路由规则
import HomeRouter from '@/module/home/router'
import CmsRouter from '@/module/cms/router'
import testDemoRouter from '@/module/testDemo/router'
import evRouter from '@/module/evaluation/router'
import PsychologistRouter from '@/module/psychologist/router'
import AppointmentRouter from '@/module/appointment/router'
import memberRouter from '@/module/member/router'

// 合并路由规则
concat(HomeRouter)  //加入home模块的路由
concat(CmsRouter)  //加入cms模块的路由
concat(testDemoRouter)  //
concat(evRouter)
concat(PsychologistRouter)  //加入psychologist模块的路由
concat(AppointmentRouter)  //加入appointment模块的路由
concat(memberRouter)  //加入member模块的路由


// concat(UserRouter)  //加入用户模块的路由
export default routes;
