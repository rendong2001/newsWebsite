<template>
  <el-container class="home-container">
    <!-- 主页头部 -->
    <el-header>
      <div>
        <img src="../assets/xiaohui4.png" alt="" />
      </div>
      <div>
        <img src="../assets/bg.png" alt="">
      </div>
    </el-header>
    <!-- 主页导航栏 -->
    <el-row>
      <el-menu mode="horizontal" background-color="rgb(64, 112, 186)" text-color="white" class="menu" active-text-color="#000000" :default-active="activeIndex" @select="handleSelect">
        <el-menu-item :key="index" v-for="(item, index) in menuList" :index="(item.id).toString()">
          {{ item.contypeName }}
        </el-menu-item>
      </el-menu>
    </el-row>
    <el-container>
      <!-- 更变的内容区域 -->
      <el-main class="main">
        <router-view class="box"></router-view>
      </el-main>
    </el-container>
    <el-footer>@平顶山学院科学技术协会</el-footer>
  </el-container>
</template>

<script>
import {getNavList} from '../api/api'
export default {
  name: '',
  data() {
    return {
      activeIndex: '1',
      menuList: [{contypeName: '首页',id: 1},{contypeName: '科协概况',id: 2},{contypeName: '政策法规',id: 3},{contypeName: '科协项目',id: 4},
      {contypeName: '学术交流',id: 5},{contypeName: '办事指南',id: 6},{contypeName: '科普风采',id: 7},{contypeName: '学校首页',id: 8},
      {contypeName: '联系我们',id: 9}],
    }
  },
  created() {
    // this.getNavArr();
  },
  mounted() {},
  watch: {},
  methods: {
    // //获取导航栏
    // getNavArr(){
    //   const data ={};
    //   getNavList(data).then(res => {
    //     console.log('res', res)
    //     if(res.code == 200){
    //       this.menuList = res.data
    //     }
    //   }).catch(err => {
    //     console.log('err', err)
    //   })
    // },

    formatterTitle(t){
      switch(t){
        case '1':
          return 'index'
        case '2':
          return 'introduce'
        case '3':
          return 'zhengce'
        case '4':
          return 'keXieXiangMu'
        case '5':
          return 'xueShuJiaoLiu'
        case '6':
          return 'banShiZhiNan'
        case '7':
          return 'kePuFengCai'
        case '8':
          return 'xueXiaoShouYe'
        case '9':
          return 'telephone'
      }
    },
    handleSelect(key, keyPath) {
      if (key == '8') {
        window.open('https://www.pdsu.edu.cn/#')
      } else {
        this.$router.push({
          path: '/home/' + this.formatterTitle(key),
          query: {
            title: this.formatterTitle(key),
            id:key
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: rgb(1, 72, 153);
}
.el-header {
  height: 120px !important;
  padding: 0 80px 0 120px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-menu {
  .el-menu-item {
    width: 150px;
    font-size: 15px;
    text-align: center;
  }
}
.menu {
  display: flex;
  justify-content: space-between;
}
.el-footer {
  background-color: rgb(85, 81, 82);
}
.main {
  padding: 20px 5px;
}
.el-footer {
  font-size: 15px;
  color: white;
  text-align: center;
  line-height: 60px;
}
.box {
  width: 1200px;
  margin: 0 auto;
}
</style>