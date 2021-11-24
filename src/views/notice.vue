<template>
  <div>
    <!-- 通知公告导航条 -->
    <el-row type="flex" class="row-bg underline marb10" justify="space-between">
      <span class="color"><b>通知公告</b></span>
      <span @click="goMore('通知公告')" class="liPointer">
        更多<i class="el-icon-d-arrow-right"></i>
      </span>
    </el-row>
    <!-- 通知公告新闻列表 -->
    <div style="max-height:382px;overflow:hidden;">
      <ul>
        <li
          class="lieBiao liPointer"
          :key="index"
          v-for="(item, index) in noticeList"
        >
          <div class="time">
            <span>{{ item.contypeId }}</span>
            <span>{{ item.categoryId }}</span>
          </div>
          <div class="title" @click="toNoticeMsg(item.title,item.id)">
            {{ item.dataString }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getNewsList} from '../api/api'
export default {
  name: 'notice',
  data() {
    return {
      noticeList: [
      ]
    }
  },
  created() {
    this.getnews();
  },
  methods: {
    //获取新闻列表
    getnews() {
      const data = {
        categoryId: 1,//小标题ID
        contypeId: 2,//大标题ID
        p: 0//当前页
      };
      getNewsList(data).then(res => {
        console.log('res',res);
        if(res.code == 200){
          this.noticeList = res.data.records
        }
      }).catch(err => {
        console.log('err',err);
      })
    },
    // 去到新闻展示页
    toNoticeMsg(t,id) {
      this.$router.push({
        path: '/home/noticeMessage',
        query: {
          title: t,
          id:id
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
  width: 95%;
  height: 55px;
  background: rgb(241, 241, 241);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 10px;
}
.time {
  width: 80px;
  overflow: hidden;
  display: flex;
  // line-height: 20px;
  flex-direction: column;
  padding: 8px;
  background-color: rgb(1, 72, 153);
  color: white;
  text-align: center;
}
.title {
  width: 500px;
  height: 50px;
  overflow: hidden;
  line-height: 50px;
  padding: 0 0 0 10px;
}
</style>