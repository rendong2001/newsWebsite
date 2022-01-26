import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import NotFound from './components/NotFound.vue'
import index from './components/page/index.vue'
import introduce from './components/page/introduce.vue'
import zhengce from './components/page/zhengce.vue'
import keXieXiangMu from './components/page/keXieXiangMu.vue'
import xueShuJiaoLiu from './components/page/xueShuJiaoLiu.vue'
import banShiZhiNan from './components/page/banShiZhiNan.vue'
import kePuFengCai from './components/page/kePuFengCai.vue'
import xueXiaoShouYe from './components/page/xueXiaoShouYe.vue'
import telephone from './components/page/telephone.vue'
import News from './components/page/News.vue'
import moreMessage from './views/homePage/moreMessage'
import Administrator from './components/Administrator/AdminHome.vue'
import Welcome from './components/Administrator/Welcome.vue'
import Main from './components/Administrator/Main.vue'
import Edit from './components/Administrator/Edit.vue'
import EditLunBo from './components/Administrator/EditLunBo.vue'
import AdMain from './components/Administrator/AdMain.vue'
import AdEdit from './components/Administrator/AdEdit.vue'


Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    { path:'/administrator',
      component: Administrator,
      children: [{ path:'welcome',component:Welcome },
                { path:'main',component:Main },
                { path:'edit',component:Edit },
                { path:'news',component:News },
                { path:'editlunbo',component:EditLunBo },
                { path:'admain',component:AdMain },
                { path:'adedit',component:AdEdit }] 
    },
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
          path:'moreMessage',
          name:'moreMessage',
          component:moreMessage
        },
        {
          path:'news',
          name:'News',
          component:News
        },
      ]
    },
    { path:'*',component:NotFound }
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
  // if (to.path === '/administrator/main' && !tokenStr) return next()
  // if (to.path === '/home/index') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (to.path === '/administrator/main' && !tokenStr) return next('/login')
  if (to.path === '/administrator/admain' && !tokenStr) return next('/login')
  if (to.path === '/administrator' && !tokenStr) return next('/login')
  if (to.path === '/administrator/edit' && !tokenStr) return next('/login')
  if (to.path === '/administrator/welcome' && !tokenStr) return next('/login')
  // if (!tokenStr) return next('/login')
  next()
})

export default router
