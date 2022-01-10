import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import index from './components/page/index.vue'
import introduce from './components/page/introduce.vue'
import zhengce from './components/page/zhengce.vue'
import keXieXiangMu from './components/page/keXieXiangMu.vue'
import xueShuJiaoLiu from './components/page/xueShuJiaoLiu.vue'
import banShiZhiNan from './components/page/banShiZhiNan.vue'
import kePuFengCai from './components/page/kePuFengCai.vue'
import xueXiaoShouYe from './components/page/xueXiaoShouYe.vue'
import telephone from './components/page/telephone.vue'
import schoolMessage from './views/homePage/schoolMessage'
import noticeMessage from './views/homePage/noticeMessage'
import moreMessage from './views/homePage/moreMessage'
import workMessage from './views/homePage/workMessage'


Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    { 
      path: '/home', 
      component: Home ,
      children:[
        {
          path:'/home',
          redirect:'index'
        },
        {
          path:'index',
          component:index
        },
        {
          path:'introduce',
          name:'introduce',
          component:introduce
        },
        {
          path:'zhengce',
          name:'zhengce',
          component:zhengce
        },
        {
          path:'keXieXiangMu',
          name:'keXieXiangMu',
          component:keXieXiangMu
        },
        {
          path:'xueShuJiaoLiu',
          name:'xueShuJiaoLiu',
          component:xueShuJiaoLiu
        },
        {
          path:'banShiZhiNan',
          name:'banShiZhiNan',
          component:banShiZhiNan
        },
        {
          path:'kePuFengCai',
          name:'kePuFengCai',
          component:kePuFengCai
        },
        {
          path:'xueXiaoShouYe',
          name:'xueXiaoShouYe',
          component:xueXiaoShouYe
        },
        {
          path:'telephone',
          name:'telephone',
          component:telephone
        },
        {
          path:'schoolMessage',
          name:'schoolMessage',
          component:schoolMessage
        },
        {
          path:'noticeMessage',
          name:'noticeMessage',
          component:noticeMessage
        },
        {
          path:'moreMessage',
          name:'moreMessage',
          component:moreMessage
        },
        {
          path:'workMessage',
          name:'workMessage',
          component:workMessage
        },
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) { //页面跳转后自动回到顶部
    if (savedPosition) {
        return savedPosition
    }
    return {x: 0, y: 0}
  }
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // if (!tokenStr) return next('/login')
  next()
})

export default router
