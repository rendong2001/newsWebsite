<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/xiaohui.png" alt="" />
        <span>平顶山学院科学技术学会</span>
      </div>
    </el-header>
    <el-row>
         <el-menu
            mode="horizontal"
            background-color="rgb(64, 112, 186)"
            text-color="white"
            class="menu"
            :default-active="activeIndex"
            @select="handleSelect"
        >
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="introduce">科协概况</el-menu-item>
        <el-menu-item index="3">政策法规</el-menu-item>
        <el-menu-item index="4">科协项目</el-menu-item>
        <el-menu-item index="5">学术交流</el-menu-item>
        <el-menu-item index="6">办事指南</el-menu-item>
        <el-menu-item index="7">科普风采</el-menu-item>
        <el-menu-item index="8">学校首页</el-menu-item>
        <el-menu-item index="9">联系我们</el-menu-item>
      </el-menu>
    </el-row>
    <el-container>
    <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
    name:'',
    data(){
        return{
            activeIndex:'index',
        }
    },
    methods:{
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
            this.$router.push({
                path:'/home/'+keyPath
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
  height: 90px !important;
  overflow: hidden;
  div {
    display: flex;
    justify-content: left;
    // align-items: center;
    span {
      margin-left: 100px;
      font-size: 30px;
      line-height: 90px;
    }
  }
  .el-menu {
      .el-menu-item {
          width: 150px;
          font-size: 15px;
          text-align: center;
      }
  }
}
.menu{
    display: flex;
    justify-content: space-between;
}

</style>