<template>
  <div>
    <el-row type="flex" justify="space-between" class="underline">
      <span class="color"><b>学院动态</b></span>
      <span @click="goMore('学院动态')" class="liPointer">更多<i class="el-icon-d-arrow-right"></i> </span>
    </el-row>
    <div>
      <ul>
        <li :key="index" v-for="(item, index) in schoolList" class="liPointer">
          <!-- <a href="item.path"> {{ item.title }} </a> -->
          <!-- <router-link :to="{name:'schoolMessage',params:{id:item.id}}" >{{ item.title }} </router-link> -->
          <div @click="toSchoolMsg(item.title)" class="bgc mart10"> {{ item.title }} </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'school',
  data() {
    return {
      schoolList: [
        { id: '1',title: '河南省生态经济型木本植物种质创新与利用重点实验室建设项目' },
        { id: '2',title: '平顶山学院智慧校园软件及实验室管理平台二期' },
        { id: '3',title: '平顶山学院新工科实训楼和产教融合实训楼全过程跟踪审计服务' },
        { id: '4',title: '平顶山学院智慧校园综合业务服务系统（一期）' },
        { id: '5',title: '平顶山学院2021-2022第二学期医用低值易耗品采购项目公告' },
        { id: '6',title: '平顶山学院软件实验室硬盘采购项目竞争性谈判公告' }
      ]
    }
  },
  methods:{
    goMore(val){
      this.$router.push({
        path:'moreMessage',
        query:{
          type:val,
        }
      })
    },
    toSchoolMsg(t) {
      this.$router.push({
        path: 'schoolMessage',
        query: {
          title:t
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