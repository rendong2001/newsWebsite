<template>
  <div>
    <el-row type="flex" justify="space-between" class="underline">
      <span class="color"><b>工作动态</b></span>
      <span @click="goMore('工作状态')" class="liPointer">更多<i class="el-icon-d-arrow-right"></i> </span>
    </el-row>
    <div>
      <ul>
        <li :key="index" v-for="(item, index) in workList" class="liPointer">
          <div @click="toWorkMsg(item.title)" class="bgc mart10"> {{ item.title }} </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'work',
  data(){
    return{
      workList: [
        { id:'1', title: '关于做好2022年度国家自科基金项目三级论证工作的通知' },
        { id:'2', title: '关于组织申报河南省绿色技术创新示范基地的通知' },
        { id:'3', title: '关于做好2022年度国家社科基金项目三级论证工作的通知' },
        { id:'4', title: '关于组织申报河南省科协2022年度河南科技智库调研课题的通知' },
        { id:'5', title: '关于组织申报首批河南科技智库研究基地的通知' },
        { id:'6', title: '关于申报河南省超声技术应用工程研究中心2021年度开放基金.....' },
      ]
    }
  },
  methods:{
    toWorkMsg(t) {
      this.$router.push({
        path:'/home/workMessage',
        query: {
          title:t
        }
      })
    },
    goMore(val) {
      this.$router.push({
        path:'moreMessage',
        query:{
          type:val,
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.underline {
  border-bottom: 1px solid rgb(1, 72, 153);
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
  height: 60px;
  // background-color: salmon;
}
a {
  text-decoration: none;
}
.bgc {
  background: rgb(241, 241, 241);
  height: 55px;
  line-height: 55px;
}
</style>