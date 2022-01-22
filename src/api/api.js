//用于写接口

import request from "../utils/request";
// // 导航栏列表
// export const getNavList = data => {
//   return request({
//     method: 'GET',
//     url: '/news_type/all',
//     params:data,
//   })
// }
//获取小标题
export const getMinTitle = data => {
  return request({
    method: 'GET',
    url: `/news_category/list/${data}`,
  })
}
//获取新闻列表
export const getNewsList = data => {
  return request({
    method: 'POST',
    url:'/news/list',
    params:data,
  })
}
//获取只有一篇新闻
export const getnew = data => {
  return request({
    method: 'GET',
    url:`/news/main/${data}`
  })
}
//修改新闻
export const update = data => {
  return request({
    method:'POST',
    url:'/news/update',
    params:data,
  })
}
//删除新闻
export const deleteNew = data => {
  return request({
    method:'POST',
    url:'/news/delete',
    params:data,
  })
}
//模糊查询
export const fuzzy = data => {
  return request({
    method:'POST',
    url:'/news/fuzzy',
    params:data,
  })
}