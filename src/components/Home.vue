<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/heima.png" alt="" />
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="rgb(50, 55, 67)"
          text-color="#fff"
          active-text-color="rgb(61, 159, 243)"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu
            :index="item.id + ''"
            v-for="item in menulist"
            :key="item.id"
          >
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/' + subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/' + subItem.path)"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ subItem.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //左侧菜单数据
      menulist: [],
      iconsObj: {
        125: 'iconfont icon-user',
        103: 'iconfont icon-tijikongjian',
        101: 'iconfont icon-shangpin',
        102: 'iconfont icon-danju',
        145: 'iconfont icon-baobiao'
      },
      isCollapse: false,
      //被激活的链接地址
      activePath: ''
    }
  },
  created() {
    this.getMenuLsit()
    this.activePath = window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      //清空token
      window.sessionStorage.clear()
      //跳转到登录页
      this.$router.push('/login')
    },
    // 获取所有菜单
    async getMenuLsit() {
      const { data: res } = await this.$http.get('/menus')
      // 如果请求失败 把错误消息打印出来
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      //如果请求成功，将获取的数据拿过来即可
      this.menulist = res.data
      console.log(res.data)
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    //保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
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
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: rgb(50, 55, 67);
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background-color: rgb(233, 237, 240);
}
.iconfont {
  margin-right: 10px;
}
.toggle-button {
  background-color: rgb(72, 81, 98);
  color: white;
  text-align: center;
  font-size: 10px;
  line-height: 26px;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
