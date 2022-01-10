<template>
  <div>
    <el-row type="flex" justify="space-between" class="underline">
      <span class="color"><b>工作动态</b></span>
      <span @click="goMore('工作状态')" class="liPointer"
        >更多<i class="el-icon-d-arrow-right"></i>
      </span>
    </el-row>
    <div style="max-height:420px;overflow:hidden;">
      <ul>
        <li :key="index" v-for="(item, index) in workList" class="liPointer">
          <div @click="toWorkMsg(item.title)" class="bgc mart10">
            {{ item.news }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getNewsList} from '../api/api'
export default {
  name:'work',
  data(){
    return{
      workList: [{id:1,year: 2022,month:'1-10',count:10, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:2,year: 2022,month:'1-10',count:11, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},
      {id:3,year: 2022,month:'1-10',count:12, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:4,year: 2022,month:'1-10',count:13, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},
      {id:5,year: 2022,month:'1-10',count:14, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:6,year: 2022,month:'1-10',count:14, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},
      {id:6,year: 2022,month:'1-10',count:15, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:6,year: 2022,month:'1-10',count:16, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},
      {id:6,year: 2022,month:'1-10',count:16, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:6,year: 2022,month:'1-10',count:17, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'}],
    }
  },
  created() {
    // this.getnews();
  },
  methods:{
    //获取新闻列表
    // getnews() {
    //   const data = {
    //     categoryId: 2,//小标题ID
    //     contypeId: 2,//大标题ID
    //     p: 0//当前页
    //   };
    //   getNewsList(data).then(res => {
    //     console.log('res',res);
    //     if(res.code == 200){
    //       this.workList = res.data.records
    //     }
    //   }).catch(err => {
    //     console.log('err',err);
    //   })
    // },
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