<template>
  <div class="box">
    <!-- <p>{{ this.$route.query.id }}</p> -->
    <div class="header">
      <h2>{{ title }}</h2>
      <p>发布日期：{{ releaseTime }} 点击量：[ {{hits}} ]</p>
    </div>
    <hr>
    <div v-html="content"></div>
  </div>
</template>
<script>
import {getnew} from '../../api/api'
export default {
  name:'noticeMessage',
  data(){
    return {
      content:'',
      hits:'',
      releaseTime:'',
      title:''
    }
  },
  created(){
    console.log(">>>>>>>>",this.$route.query.id);
    this.getalone();
    // this.queryAll();
  },
  methods:{
    getalone(){
      const data = this.$route.query.id;
      getnew(data).then(res => {
        console.log(res);
        this.content = res.data.content;
        this.hits = res.data.hits;
        this.releaseTime = res.data.releaseTime;
        this.title = res.data.title;
      })
    },
    // queryAll(){
    //   this.content = ``
    // }
  },
}
</script>
<style>
h2{
  color: rgb(3, 73, 144);
  text-align: center;
}
p{
  background-color: rgb(246, 246, 246);
  text-align: center;
  height: 35px;
  line-height: 35px;
}
.box {
  width: 1200px;
  margin: 0 auto;
}
</style>