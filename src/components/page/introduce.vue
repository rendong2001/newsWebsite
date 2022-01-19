<template>
  <div>
    <el-row>
      <globalTitle />
    </el-row>
    <el-row class="mart10">
      <!-- 小标题 -->
      <el-col :span="4" class="marr10">
        <ul>
          <li v-for="(item, index) in menuList" :key="index" class="liStylenone liPointer marb10" @click="changeMenu(item)">
            <b :class="cont == item.name ? 'ft-blue' : 'ft-black'">{{item.name}}</b>
          </li>
        </ul>
      </el-col>
       <!-- 新闻内容 -->
      <el-card class="box-card">
        <el-col :span="18">
          <!-- <div v-if="newsList.length > 0">
            <el-row class="marb10" :key="index" v-for="(item, index) in newsList">
              {{ item.title }}
            </el-row>
          </div> -->
          <div>{{ content }}</div>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
import {getMinTitle,getNewsList,getnew} from '../../api/api'
export default {
  name: 'introduce',
  components: {
    globalTitle
  },
  data() {
    return {
      cont: '',
      menuList: [],
      newsList:[],
      content:'',
    }
  },
  created() {
  },
  mounted() {
    this.getTitle();
  },
  watch: {
    menuList(n,o){
      this.cont =  this.menuList[0].name;
      this.getnews(this.menuList[0]);
      this.getalone(this.newsList);
    }
  },
  methods: {
    getTitle(){
      const data = Number(this.$route.query.id);
      getMinTitle(data).then(res => {
        console.log(res);
        if(res.code == 200){
          this.menuList = res.data
        }
      }).catch(err => {
        console.log(err);
      })
    },
    changeMenu(val) {
      this.cont = val.name;
      this.getnews(val)
    },
    getnews(item){
      const data = {
        current:1,
        newsCategoryId:item.id,
        size:5
      };
      getNewsList(data).then(res => {
        console.log(res);
        if(res.code == 200){
          // if(res.data.records.length == 1){
            this.newsList = [];
            this.getalone(res.data.records[0]);
          // }else{
          //   this.content = '';
          //   this.newsList = res.data.records
          // }
        }
      }).catch(error => {
        console.log(error);
      })
    },
    getalone(item){
      const data = item.id;
      getnew(data).then(res => {
        console.log(">>>>",res);
        this.content = res.data.content;
        this.data = res.data;
      })
    }
  }
}
</script>
<style lang="less" scoped>
ul {
  width: 200px;
  li {
    background-color: rgb(242, 243, 245);
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
.ft-blue {
  color: rgb(9, 143, 252);
}
.ft-black {
  color: #000;
}
</style>