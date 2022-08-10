<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../../assets/logo.jpg" alt="" />
        <span>新闻后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    logout() {
      //清空token
      window.sessionStorage.clear()
      //跳转到登录页
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: rgb(55, 61, 63);
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 60px;
    img {
      width: 60px;
      height: 100%;
      border-radius: 50%;
    }
    span {
      margin-left: 15px;
    }
  }
}
// .el-main {
//   // background-color: rgb(233, 237, 240);
// }

.iconfont {
  margin-right: 10px;
}
</style>
