import http from '../../../base/api/public'
import querystring from 'querystring'
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.thApiUrlPre;

//查询预约订单
export const page_list = (page,size,params) =>{
  //将params对象数据拼装成key/value串
  let queryString = querystring.stringify(params);
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl+'/appointment/order/list/'+page+'/'+size+'?'+queryString);
}
//删除预约订单
export const page_del= (id) =>{
  return http.requestDelete(apiUrl+'/appointment/order/del/'+id);
}
//根据id查询页面
export const page_get= id =>{
  return http.requestQuickGet(apiUrl+'/appointment/order/get/'+id);
}
//修改页面提交
export const page_edit= (id,params) =>{
  return http.requestPut(apiUrl+'/appointment/order/edit/'+id,params);
}





//根据咨询师id查询详情信息
export const detail_get = cltId => {
  return http.requestQuickGet(apiUrl + '/appointment/order/get/psychologist/' + cltId)
}
//根据用户id查询用户信息
export const user_get = userId => {
  return http.requestQuickGet(apiUrl + '/appointment/order/get/user/' + userId)
}
//添加预约订单
export const order_add = params => {
  return http.requestPost(apiUrl + '/appointment/order/add', params);
}
//修改预约订单
export const order_edit= (id,params) =>{
  return http.requestPut(apiUrl+'/appointment/order/edit/'+id,params);
}
