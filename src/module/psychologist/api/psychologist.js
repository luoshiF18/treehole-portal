import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.thApiUrlPre;
//根据条件查询咨询师信息
export const psychologist_list = (page, size, params) => {
  let queryString = querystring.stringify(params);
  return http.requestQuickGet(apiUrl + '/psychologist/profile/get?' + queryString);
}

//根据id查询详情信息
export const detail_get = id => {
  return http.requestQuickGet(apiUrl + '/psychologist/profile/get/detail/' + id)
}

//添加简介信息
export const profileExt_add = params => {
  return http.requestPost(apiUrl + '/psychologist/profile/add', params)
}
