import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.thApiUrlPre;


//查询所有类型
export const type_list = () => {
  /*  //将params对象数据拼装成key/value串
    let queryString = querystring.stringify(params);*/
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/scale/select/type/all');
}

//根据类型查询该类型的量表
export const type_scale_list = (typeId) => {
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/scale/select/type?page=1&size=5&scaleTypeId=' + typeId + '&isFree=true');
}
//根据量表id查询详细信息
export const scale_info = (scaleId) => {
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/scale/select/detail?scaleId=' + scaleId);
}
//第一次测试，普通
export const startTestFirst = (scaleId) => {
  return http.requestQuickGet(apiUrl + '/scale/select/test/type2?scaleId=' + scaleId);
}
//开始测试,普通
export const startTest1 = (scaleId, nextQuestionId, questionSort, optionId) => {
  return http.requestQuickGet(
    apiUrl + '/scale/select/test/type2?scaleId=' + scaleId + '&nextQuestionId=' + nextQuestionId + '&questionSort=' + questionSort + '&optionId=' + optionId);
}
//算分啊擦擦
export const getResult = (getScore) => {
  return http.requestPost(apiUrl + '/scale/select/result/', getScore);
}
//分页查询预警信息
export const getAllwarns = (page,size) =>{
  return http.requestQuickGet(apiUrl+'/warning/getWarning/'+page+'/'+size);
}
//添加一条干预表记录
export const addIntervene = (intervene) => {
  return http.requestPost(apiUrl + '/intervene/addRecord/', intervene)
}
//查询单个用户的干预记录
export const findByPsy = () =>{
  return http.requestQuickGet(apiUrl+'/intervene/findByPsy');
}
//新增预警消息
export const addWarning = (warnMsg) => {
  return http.requestPost(apiUrl + '/warning/addWarningByPsy/', warnMsg);
}

