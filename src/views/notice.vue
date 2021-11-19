<template>
  <div>
    <el-row type="flex" class="row-bg underline marb10" justify="space-between">
      <span class="color"><b>通知公告</b></span>
      <span @click="goMore('通知公告')" class="liPointer">
        更多<i class="el-icon-d-arrow-right"></i>
      </span>
    </el-row>
    <div>
      <ul>
        <li
          class="lieBiao liPointer"
          :key="index"
          v-for="(item, index) in noticeList"
        >
          <div class="time">
            <!-- <span>{{ item.categoryId }}</span>
            <span>{{ item.contypeId }}</span> -->

            <span>{{ item.years }}</span>
            <span>{{ item.date }}</span>
          </div>
          <div class="title" @click="toNoticeMsg(item.title)">
            {{ item.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'notice',
  data() {
    return {
      noticeList: [
        {years:'2021',date:'11-17',title:'平顶山学院高层次人才招聘公告'},
        {years:'2021',date:'11-17',title:'关于开展“我为学校‘十四五’规划建言献策”活动的通知'},
        {years:'2021',date:'11-17',title:'平顶山学院及附属口腔医院招聘口腔医学专业人才公告'},
        {years:'2021',date:'11-17',title:'平顶山学院2020-2021学年本科教学质量报告'},
        {years:'2021',date:'11-17',title:'关于推荐全省高校学生工作专家库专家的通知'},
        {years:'2021',date:'11-17',title:'平顶山学院2022届毕业生冬季网络视频双选会邀请函'},
      ]

      // {
      //   categoryId: 1,
      //   contypeId: 2,
      //   coverPath: '13',
      //   dataString: '123',
      //   title:"12"
      // }
    }
  },
  created() {
    // getnews() {
    //   const res = this.$http.post('newsTheme/insert',this.noticeList)
    //   console.log(res);
    // }
  },
  methods: {
    toNoticeMsg(t) {
      this.$router.push({
        path: '/home/noticeMessage',
        query: {
          title: t
        }
      })
    },
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
  padding: 8px ;
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