import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
import './assets/css/my_style.css'


import axios from 'axios'
// 配置请求的跟路径
// axios.defaults.baseURL = 'http://8.140.68.52:8181'
// axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1'
axios.defaults.baseURL = 'http://localhost:7070/'
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
//把这个包挂载到Vue的原型对象上
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
