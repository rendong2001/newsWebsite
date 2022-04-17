<template>
  <div>
    <el-row type="flex" justify="space-between" class="underline row-bg">
      <span class="color"><b>工作动态</b></span>
      <span @click="goMore('工作状态')" class="liPointer">更多<i class="el-icon-d-arrow-right"></i> </span>
    </el-row>
    <div style="max-height:420px;overflow:hidden;">
      <ul>
        <li :key="index" v-for="(item, index) in workList" class="liPointer">
          <div @click="toWorkMsg(item.id)" class="bgc mart10">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getNewsList } from '../api/api'
export default {
  name: 'work',
  data() {
    return {
      workList: []
    }
  },
  created() {
    this.getnews()
  },
  methods: {
    //获取新闻列表
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 43,
        size: 6
      }
      getNewsList(data)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.workList = res.data.records
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    toWorkMsg(id) {
      this.$router.push({
        path: '/home/news',
        query: {
          id: id
        }
      })
    },
    goMore(val) {
      this.$router.push({
        path: 'moreMessage',
        query: {
          type: val
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
