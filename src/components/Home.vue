<template>
  <el-container class="home-container">
    <!-- 主页头部 -->
    <el-header>
      <div>
        <img src="../assets/xiaohui4.png" alt="" />
      </div>
      <div class="bg"></div>
    </el-header>
    <!-- 主页导航栏 -->
    <el-row>
      <el-menu
        mode="horizontal"
        background-color="rgb(64, 112, 186)"
        text-color="white"
        class="menu"
        active-text-color="#000000"
        :default-active="activeIndex"
        @select="handleSelect"
      >
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="introduce">科协概况</el-menu-item>
        <el-menu-item index="zhengce">政策法规</el-menu-item>
        <el-menu-item index="keXieXiangMu">科协项目</el-menu-item>
        <el-menu-item index="xueShuJiaoLiu">学术交流</el-menu-item>
        <el-menu-item index="banShiZhiNan">办事指南</el-menu-item>
        <el-menu-item index="kePu">科普风采</el-menu-item>
        <el-menu-item index="xueXiaoShouYe">学校首页</el-menu-item>
        <el-menu-item index="telephone">联系我们</el-menu-item>
      </el-menu>
    </el-row>
    <el-container>
      <!-- 更变的内容区域 -->
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>@平顶山学院科学技术协会</el-footer>
  </el-container>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      activeIndex: 'index'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      this.$router.push({
        path: '/home/' + keyPath
      })
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background: -webkit-linear-gradient(
    left,
    rgb(5, 102, 141),
    rgb(240, 243, 189)
  );

  background: -o-linear-gradient(right, rgb(5, 102, 141), rgb(240, 243, 189));

  background: -moz-linear-gradient(right, rgb(5, 102, 141), rgb(240, 243, 189));

  background: linear-gradient(to right, rgb(5, 102, 141), rgb(240, 243, 189));
}
.el-header {
  height: 93px !important;
  overflow: hidden;
  div {
    display: flex;
    justify-content: left;
  }
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
</style>