<template>
  <div>
    <el-row type="flex" justify="space-between" class="underline">
      <span class="color"><b>学院动态</b></span>
      <span @click="goMore('学院动态')" class="liPointer">更多<i class="el-icon-d-arrow-right"></i> </span>
    </el-row>
    <div style="max-height:420px;overflow:hidden;">
      <ul>
        <li :key="index" v-for="(item, index) in schoolList" class="liPointer">
          <div @click="toSchoolMsg(item.id)" class="bgc mart10">
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
  name: 'school',
  data() {
    return {
      schoolList: []
    }
  },
  created() {
    this.getnews()
  },
  methods: {
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 44,
        size: 6
      }
      getNewsList(data)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.schoolList = res.data.records
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    //前往更多信息页面
    goMore(val) {
      this.$router.push({
        path: 'moreMessage',
        query: {
          type: val
        }
      })
    },
    //前往信息展示页面
    toSchoolMsg(id) {
      this.$router.push({
        path: '/home/news',
        query: {
          id: id
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
