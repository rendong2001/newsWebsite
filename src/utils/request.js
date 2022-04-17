// 对axios的封装
import axios from 'axios'
// eslint-disable-next-line camelcase
let is_baseURL = 'http://localhost:7070/' // 测试环境
// 创建axios实例
const request = axios.create({
  baseURL: is_baseURL,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
// response服务器响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err', error)
  }
)

export default request
