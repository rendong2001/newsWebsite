<template>
  <el-container>
    <!-- 首页上半部分 -->
    <el-header>
      <el-container>
        <el-aside width="600px">图片要闻</el-aside>
        <el-main>通知公告</el-main>
      </el-container>
    </el-header>
    <!-- 首页下半部分 -->
    <el-main class="xiaBian">
      <el-container>
          <!-- 下边左半部分 -->
        <el-aside width="1000px">
          <el-container>
            <el-aside width="500px">工作状态</el-aside>
            <el-main>学院动态</el-main>
          </el-container>
        </el-aside>
        <!-- 下边右半部分 -->
        <el-main class="youXiaJiao">
          <el-container>
            <el-header>友情链接</el-header>
            <el-main>联系我们</el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: 'index'
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: rgb(131, 51, 51);
  height: 400px !important;
  padding: 0;
  .el-main {
    background-color: rgb(25, 202, 193);
    height: 400px;
  }
}
.xiaBian {
  background: rgb(132, 199, 44);
  height: 400px;
  padding: 0;
  .el-main {
    background-color: rgb(70, 27, 187);
    height: 400px;
  }
}
.youXiaJiao {
    padding: 0;
    // height: 400px;
    .el-header {
        height: 200px !important;
    }
    .el-main {
        height: 200px;
        background-color: rgb(206, 44, 171);
    }
}
</style>