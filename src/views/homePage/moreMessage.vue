<template>
  <div>
    <el-row class="underline">
      <h3 style="color: rgb(1, 72, 153)">{{ this.$route.query.type }}</h3>
    </el-row>
    <div class="mart15">
      <div v-if="this.$route.query.type == '通知公告'">
        <ul>
          <li
            class="lieBiao flex-v flex-conter padt10 liPointer"
            :key="index"
            v-for="(item, index) in noticeList"
          >
            <div class="time">
              <span>{{ item.date }}</span>
              <span>{{ item.years }}</span>
            </div>
            <div class="title" @click="toNoticeMsg(item.title)">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
      <div v-if="this.$route.query.type == '学院动态'">
        <ul>
          <li :key="index" v-for="(item, index) in schoolList" class="liPointer">
            <!-- <a href="item.path"> {{ item.title }} </a> -->
            <!-- <router-link :to="{name:'schoolMessage',params:{id:item.id}}" >{{ item.title }} </router-link> -->
            <div @click="toNoticeMsg(item.title)">{{ item.title }}</div>
          </li>
        </ul>
      </div>
      <div v-if="this.$route.query.type == '工作状态'">
        <ul>
          <li :key="index" v-for="(item, index) in workList" class="liPointer">
            <!-- <a href="item.path"> {{ item.title }} </a> -->
            <!-- <router-link :to="{name:'schoolMessage',params:{id:item.id}}" >{{ item.title }} </router-link> -->
            <div @click="toNoticeMsg(item.title)">{{ item.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'moreMessage',
  data() {
    return {
      noticeList: [
        { years: '2021', date: '11-2', title: '我是标题1' },
        { years: '2021', date: '11-2', title: '我是标题2' },
        { years: '2021', date: '11-2', title: '我是标题3' },
        { years: '2021', date: '11-2', title: '我是标题4' },
        { years: '2021', date: '11-2', title: '我是标题5' }
      ],
      schoolList: [
        { id: '1', title: '学校状态1' },
        { id: '2', title: '学校状态2' },
        { id: '3', title: '学校状态3' },
        { id: '4', title: '学校状态4' },
        { id: '5', title: '学校状态5' },
        { id: '6', title: '学校状态6' }
      ],
      workList: [
        { id:'1', title: '工作状态1' },
        { id:'2', title: '工作状态2' },
        { id:'3', title: '工作状态3' },
        { id:'4', title: '工作状态4' },
        { id:'5', title: '工作状态5' },
        { id:'6', title: '工作状态6' },
      ]
    }
  },
  methods: {
    toNoticeMsg(t) {
      this.$router.push({
        path: '/home/noticeMessage',
        query: {
          title: t
        }
      })
    }
  }
}
</script>
<style >
.underline {
  border-bottom: 1px solid #0f99e9;
}
.lieBiao {
  width: 95%;
  height: 80px;
  background: rgb(202, 202, 202);
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