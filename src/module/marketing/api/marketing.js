import http from './../../../base/api/public'
import querystring from 'querystring'
import moment from 'moment';
let sysConfig = require('@/../config/sysConfig')
let apiUrl = sysConfig.thApiUrlPre;


export const queryReleaseInteractiveActivity= (today) => {
  today = moment(today).format("YYYY-MM-DD");
  return http.requestQuickGet(apiUrl + "/marketing/interaction/release/all?today=" +today)
}

export const queryReleaseInteractiveActivityInfo  = (id) =>{
  return http.requestQuickGet(apiUrl + "/marketing/interaction/info/" + id)
}

export const receive_coupon = (userCouponRequest) => {
  return http.requestPost(apiUrl + "/marketing/coupon/my_coupon" , userCouponRequest);
}

export const coupon_cdetail = (id) => {
  return http.requestQuickGet(apiUrl + "/marketing/coupon/cdetail/" + id)
}

export  const coupon_releaseAll = (today) => {
  today = moment(today).format("YYYY-MM-DD");
  return http.requestQuickGet(apiUrl + "/marketing/coupon/valid/all?today=" +today)
}

export  const getBadge = (userId) => {
  return http.requestQuickGet(apiUrl + "/marketing/extension/user/count/" +userId)
}

export const getNotice = (userId) => {
  return http.requestQuickGet(apiUrl + "/marketing/extension/user/my_extension_list/" + userId)
}

export const setResolve = (userId) => {
  return http.requestPut(apiUrl + "/marketing/extension/user/resolve/"+userId)
}
