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
        <el-menu-item
          :key="index"
          v-for="(item, index) in menuList"
          :index="item.index"
        >
          {{ item.name }}
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
export default {
  name: '',
  data() {
    return {
      activeIndex: 'index',
      menuList: [
        { index: 'index', name: '首页' },
        { index: 'introduce', name: '科协概况' },
        { index: 'zhengce', name: '政策法规' },
        { index: 'keXieXiangMu', name: '科协项目' },
        { index: 'xueShuJiaoLiu', name: '学术交流' },
        { index: 'banShiZhiNan', name: '办事指南' },
        { index: 'kePu', name: '科普风采' },
        { index: 'xueXiaoShouYe', name: '学校首页' },
        { index: 'telephone', name: '联系我们' }
      ]
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (key == 'xueXiaoShouYe') {
        window.location.href = 'https://www.pdsu.edu.cn/#'
      } else {
        this.$router.push({
          path: '/home/' + key,
          query: {
            title: key
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
.box {
  width: 1200px;
  margin: 0 auto;
}
</style>