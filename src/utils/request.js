//对axios的封装
import axios from 'axios'
let is_baseURL = 'http://8.140.68.52:8181/'//测试环境
//创建axios实例
const request = axios.create({
  baseURL: is_baseURL
})
//response服务器响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err',error)
  }
)

export default request
