//用于写接口
//post请求参数放在data里面，get请求参数放在params里边

import request from "../utils/request";
//导航栏列表
export const getNavList = data => {
  return request({
    method: 'GET',
    url: '/contype/findList',
    params:data,
  })
}
//获取小标题
export const getMinTitle = data => {
  return request({
    method: 'POST',
    url: '/category/findCategoryIdByContypeId',
    data,
  })
}
//获取新闻列表
export const getNewsList = data => {
  return request({
    method: 'POST',
    url: '/newsTheme/findByTypeIdAndCategoryId',
    data,
  })
}