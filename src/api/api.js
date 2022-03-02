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
    url: '/news/list',
    params: data,
  })
}
//获取只有一篇新闻
export const getnew = data => {
  return request({
    method: 'GET',
    url: `/news/main/${data}`
  })
}
//修改新闻
export const update = data => {
  return request({
    method: 'POST',
    url: '/news/update',
    params: data,
  })
}
//删除新闻
export const deleteNew = data => {
  return request({
    method: 'POST',
    url: '/news/delete',
    params: data,
  })
}
//模糊查询
export const fuzzy = data => {
  return request({
    method: 'POST',
    url: '/news/fuzzy',
    params: data,
  })
}
//添加新闻
export const add = (data, fd) => {
  return request({
    method: 'POST',
    url: '/news/add',
    params: data,
    data: fd
  })
}
//登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/login',
    params: data
  })
}
//获取普通管理员列表
export const getmain = () => {
  return request({
    method: 'GET',
    url: '/admin/list'
  })
}
//超管修改普管账号密码
export const editAccount = data => {
  return request({
    method: 'POST',
    url: '/admin/updatePassword',
    params: data
  })
}
//删除普通管理员
export const deleteAd = data => {
  return request({
    method: 'POST',
    url: '/admin/delete',
    params: data
  })
}
//注册普通管理员
export const addAd = data => {
  return request({
    method: 'POST',
    url: '/admin/add',
    params: data
  })
}
//文件上传
export const fileUpload = fd => {
  return request({
    method: 'POST',
    url: '/uploading',
    data: fd
  })
}
