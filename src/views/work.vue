<template>
  <div>
    <el-row type="flex" justify="space-between" class="underline">
      <span>工作动态</span>
      <span @click="goMore('工作状态')">更多<i class="el-icon-d-arrow-right"></i> </span>
    </el-row>
    <div>
      <ul>
        <li :key="index" v-for="(item, index) in workList">
          <div @click="toWorkMsg(item.title)"> {{ item.title }} </div>
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
        { id:'1', title: '工作状态1' },
        { id:'2', title: '工作状态2' },
        { id:'3', title: '工作状态3' },
        { id:'4', title: '工作状态4' },
        { id:'5', title: '工作状态5' },
        { id:'6', title: '工作状态6' },
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
  border-bottom: 1px solid rgb(0, 110, 215);
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
</style>