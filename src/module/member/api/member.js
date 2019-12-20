import http from './../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.thApiUrlPre;

// 页面查询(用户  phone | nickName | userID)
export const user_list = (page,size,params) =>{
  // 将params对象数据拼装成key/value串  + queryString
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据
  return http.requestQuickGet(apiUrl+'/member/user/getAllUserVos/'+page+'/'+size +'?'+ queryString);
}

// 页面查询(会员等级)
export const user_grade = (page,size,params) =>{
  // 将params对象数据拼装成key/value串
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据
  return http.requestQuickGet(apiUrl+'/member/freegrade/find/all/'+page+'/'+size+'?'+ queryString);
}
// 页面查询(VIP会员等级)
export const vip_user_grade = (page,size,params) =>{
  // 将params对象数据拼装成key/value串
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据
  return http.requestQuickGet(apiUrl+'/member/paygrade/find/all/'+page+'/'+size+'?'+ queryString);
}
// 页面查询(会员卡信息)
export const page_cardslist = (page,size,params) =>{
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl+'/member/card/getAllCards/'+page+'/'+size+'?'+ queryString);
}
//修改用户基本信息】】】
export const user_edit= (params) =>{
  return http.requestPut(apiUrl+'/member/user/update',params);
}
//注册】】】
export const user_register = (params) => {
  //请求服务端的页面查询接口
  return http.requestPost(apiUrl + '/member/user/insert',params );
}
// 页面查询(warn) 】】】
export const page_warnlist = (params) =>{
  //alert(params)
  let queryString = querystring.stringify(params);
  //alert(queryString)
  return http.requestQuickGet(apiUrl+'/warnMsg/getRedisWarning'+'?'+ queryString);
}

//页面查询(会员积分)】】】
export const user_point = (page,size,params) =>{
  // 将params对象数据拼装成key/value串
  let queryString = querystring.stringify(params);
  // 请求服务端的页面查询接口 通过ajax调用接口来请求数据
  return http.requestQuickGet(apiUrl+'/member/point/getAllPoints/'+page+'/'+size+'?'+ queryString);
}
//重置手机号】】】
export const reset_phone = (params)=>{
  //alert(params)
    let queryString = querystring.stringify(params);
  //alert(queryString)
    return http.requestPut(apiUrl + '/member/user/update/phone'+ '?' + queryString);

}

//重置密码】】】】
export const reset_pass = (params)=>{
  //alert(params)
  let queryString = querystring.stringify(params);
  //alert(queryString)
  return http.requestPut(apiUrl + '/member/user/update/password'+ '?' + queryString);
}
//根据id查询页面(用户)】】】
export const user_get= id =>{
  return http.requestQuickGet(apiUrl+'/member/user/find/userId/'+id);
}
//根据id查询页面(卡)   】】】】
export const card_get= id =>{
  return http.requestQuickGet(apiUrl+'/member/card/getCardByUserId/'+ id);
}
// 页面查询(签到)】】】
export const user_checkin = (page,size,params) => {
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl + '/member/checkin/getAllCheckin/' + page + '/' + size + '?' + queryString);
}
//根据id查询页面(注册会员等级)
export const freegrade_get= id =>{
  return http.requestQuickGet(apiUrl+'/member/freegrade/getGradeById/'+id);
}
//根据id查询页面(付费会员等级)
export const paygrade_get= id =>{
  return http.requestQuickGet(apiUrl+'/member/paygrade/getGradeById/'+id);
}
//根据id查询页面(用户)
export const page_get= id =>{
  return http.requestQuickGet(apiUrl+'/member/user/getUserById/'+id);
}
//修改页面提交
export const page_edit= (id,params) =>{
  return http.requestPut(apiUrl+'/member/page/edit/'+id,params);
}

//发布页面@
export const page_postPage= id => {
  return http.requestPost(apiUrl+'/member/page/postPage/'+id)
}
//页面模板查询(bewilder！）
export const page_template =() =>{
  //查询全部页面模板
  return http.requestQuickGet(apiUrl+'/member/template/list');
}




