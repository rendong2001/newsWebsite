<template>
  <div>
    <!-- 通知公告导航条 -->
    <el-row type="flex" class="row-bg underline marb10" justify="space-between">
      <span class="color"><b>通知公告</b></span>
      <span @click="goMore('通知公告')" class="liPointer"> 更多<i class="el-icon-d-arrow-right"></i> </span>
    </el-row>
    <!-- 通知公告新闻列表 -->
    <div style="max-height:382px;overflow:hidden;">
      <ul>
        <li class="lieBiao liPointer" :key="index" v-for="(item, index) in noticeList">
          <div class="time">
            {{ item.releaseTime }}
          </div>
          <div class="title" @click="toNoticeMsg(item.id)">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { getMinTitle, getNewsList } from '../api/api'
export default {
  name: 'notice',
  data() {
    return {
      noticeList: []
    }
  },
  created() {},
  mounted() {
    //获取小标题
    // axios.get('http://localhost:8080/news_category/list/1').then(res => {
    //   console.log(res);
    //   if(res.status==200){
    //     this.noticeList = res.data.data
    //   }
    // }).catch(err => {
    //   console.log(err);
    // })
    this.getnews()
  },
  methods: {
    //获取新闻列表
    getnews() {
      const data = {
        current: 1,
        newsCategoryId: 42,
        size: 6
      }
      getNewsList(data)
        .then(res => {
          console.log(res)
          if (res.code == 200) {
            this.noticeList = res.data.records
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 去到新闻展示页
    toNoticeMsg(id) {
      this.$router.push({
        path: '/home/news',
        query: {
          id: id
        }
      })
    },
    //去到更多新闻列表页
    goMore(val) {
      this.$router.push({
        path: '/home/moreMessage',
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
.lieBiao {
  width: 100%;
  height: 55px;
  background: rgb(241, 241, 241);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 10px;
}
.time {
  width: 100px;
  padding: 17px 0px;
  display: flex;
  flex-direction: column;
  background-color: rgb(1, 72, 153);
  color: white;
  text-align: center;
}
.title {
  width: 500px;
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  // background-color: rgb(179, 19, 19);
  padding: 0 0 0 10px;
}
</style>
