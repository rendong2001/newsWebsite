<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="请输入账号" clearable></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="Login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '../api/api'
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'rendong',
        password: '123456'
      },
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields()
    },
    Login() {
      const data = {
        username: this.loginForm.username,
        password: this.loginForm.password
      }
      login(data).then(res => {
        console.log(res);
        if(res.code !== 200){
          this.$message.error('登录失败！')
        }else if(res.data.role == '超级管理员'){
          this.$message.success('超管登录成功！')
          window.sessionStorage.setItem('token',res.cookie)
          this.$router.push('/administrator/admain')
        }else{
          this.$message.success('登录成功！')
          window.sessionStorage.setItem('token',res.cookie)
          this.$router.push('/administrator/main')
        }
      })

      // this.$refs.loginFormRef.validate(async (valid) => {
      //   if (!valid) return
      //   const { data: res } = await this.$http.post('/login', this.loginForm)
      //   console.log('12312123123123123')
      //   console.log(res)
      //   if (res.meta.status !== 200) return this.$message.error('登录失败！')
      //   this.$message.success('登录成功')
      //   // console.log(res)
      //   // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
      //   //   1.1 项目中出了登录之外的其他API接口，必须在登录之后才能访问
      //   //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
      //   window.sessionStorage.setItem('token', res.data.token)
      //   // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
      //   this.$router.push('/administrator/main')
      // })
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
