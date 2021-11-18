<template>
  <div>
    <el-row type="flex" class="row-bg underline" justify="space-between">
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
            <span>{{ item.categoryId }}</span>
            <span>{{ item.contypeId }}</span>
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
      noticeList:
        // {years:'2021',date:'11-2',title:'我是标题1'},
        // {years:'2021',date:'11-2',title:'我是标题2'},
        // {years:'2021',date:'11-2',title:'我是标题3'},
        // {years:'2021',date:'11-2',title:'我是标题4'},
        // {years:'2021',date:'11-2',title:'我是标题5'},
        {
          categoryId: 1,
          contypeId: 2,
          coverPath: '13',
          dataString: '123',
          title:"12"
        }
    }
  },
  created(){
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
  border-bottom: 1px solid #0f99e9;
}
.lieBiao {
  width: 95%;
  height: 80px;
  background: rgb(202, 202, 202);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 10px;
}
.time {
  width: 100px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.title {
  width: 500px;
  height: 70px;
  overflow: hidden;
}
</style>