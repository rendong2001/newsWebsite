<template>
  <div>
    <el-row class="underline">
      <h3 style="color: rgb(1, 72, 153)">{{ this.$route.query.type }}</h3>
    </el-row>
    <div class="mart15">
      <div v-if="this.$route.query.type == '通知公告'">
        <ul>
          <li class="lieBiao flex-v flex-between" :key="index" v-for="(item, index) in noticeList">
            <div class="time">
              <span>{{ item.year }}</span>
              <span>{{ item.month }}</span>
            </div>
            <div class="title liPointer" @click="toNoticeMsg(item.id,item.count)">
              {{ item.news }}
            </div>
          </li>
        </ul>
      </div>
      <div v-if="this.$route.query.type == '学院动态'">
        <ul>
          <li class="lieBiao flex-v flex-between" :key="index" v-for="(item, index) in schoolList">
            <!-- <a href="item.path"> {{ item.title }} </a> -->
            <!-- <router-link :to="{name:'schoolMessage',params:{id:item.id}}" >{{ item.title }} </router-link> -->
            <div class="time">
              <span>{{ item.year }}</span>
              <span>{{ item.month }}</span>
            </div>
            <div  class="title liPointer" @click="toSchoolMsg(item.id,item.count)">
              {{ item.news }}
            </div>
          </li>
        </ul>
      </div>
      <div v-if="this.$route.query.type == '工作状态'">
        <ul>
          <li class="lieBiao flex-v flex-between" :key="index" v-for="(item, index) in workList">
            <!-- <a href="item.path"> {{ item.title }} </a> -->
            <!-- <router-link :to="{name:'schoolMessage',params:{id:item.id}}" >{{ item.title }} </router-link> -->
            <div class="time">
              <span>{{ item.year }}</span>
              <span>{{ item.month }}</span>
            </div>
            <div class="title liPointer" @click="toWorkMsg(item.id,item.count)">{{ item.news }}</div>
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
      noticeList: [{id:1,year: 2022,month:'1-10',count:10, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:2,year: 2022,month:'1-10',count:11, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},
      {id:3,year: 2022,month:'1-10',count:12, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:4,year: 2022,month:'1-10',count:13, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},
      {id:5,year: 2022,month:'1-10',count:14, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:6,year: 2022,month:'1-10',count:14, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},
      {id:6,year: 2022,month:'1-10',count:15, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:6,year: 2022,month:'1-10',count:16, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},
      {id:6,year: 2022,month:'1-10',count:16, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'},{id:6,year: 2022,month:'1-10',count:17, news:'你走过的地方只剩下思念难捱，把你藏在心头，每天每夜想你'}],
      
      schoolList: [{id:1,year: 2022,month:'1-10',count:10, news:'唐三藏参见女王陛下'},{id:2,year: 2022,month:'1-10',count:11, news:'唐三藏参见女王陛下'},
      {id:3,year: 2022,month:'1-10',count:12, news:'唐三藏参见女王陛下'},{id:4,year: 2022,month:'1-10',count:13, news:'唐三藏参见女王陛下'},
      {id:5,year: 2022,month:'1-10',count:14, news:'唐三藏参见女王陛下'},{id:6,year: 2022,month:'1-10',count:14, news:'唐三藏参见女王陛下'},
      {id:6,year: 2022,month:'1-10',count:15, news:'唐三藏参见女王陛下'},{id:6,year: 2022,month:'1-10',count:16, news:'唐三藏参见女王陛下'},
      {id:6,year: 2022,month:'1-10',count:16, news:'唐三藏参见女王陛下'},{id:6,year: 2022,month:'1-10',count:17, news:'唐三藏参见女王陛下'}],

      workList: [{id:1,year: 2022,month:'1-10',count:10, news:'黑人超白竹炭深洁牙膏'},{id:2,year: 2022,month:'1-10',count:11, news:'黑人超白竹炭深洁牙膏'},
      {id:3,year: 2022,month:'1-10',count:12, news:'黑人超白竹炭深洁牙膏'},{id:4,year: 2022,month:'1-10',count:13, news:'黑人超白竹炭深洁牙膏'},
      {id:5,year: 2022,month:'1-10',count:14, news:'黑人超白竹炭深洁牙膏'},{id:6,year: 2022,month:'1-10',count:14, news:'黑人超白竹炭深洁牙膏'},
      {id:6,year: 2022,month:'1-10',count:15, news:'黑人超白竹炭深洁牙膏'},{id:6,year: 2022,month:'1-10',count:16, news:'黑人超白竹炭深洁牙膏'},
      {id:6,year: 2022,month:'1-10',count:16, news:'黑人超白竹炭深洁牙膏'},{id:6,year: 2022,month:'1-10',count:17, news:'黑人超白竹炭深洁牙膏'}],
    }
  },
  methods: {
    toNoticeMsg(id,count) {
      this.$router.push({
        path: '/home/noticeMessage',
        query: {
          id: id,
          count: count
        }
      })
      window.location.reload()
    },
    toSchoolMsg(id,count) {
      this.$router.push({
        path: '/home/schoolMessage',
        query: {
          id: id,
          count: count
        }
      })
      window.location.reload()
    },
    toWorkMsg(id,count) {
      this.$router.push({
        path: '/home/workMessage',
        query: {
          id: id,
          count: count
        }
      })
      window.location.reload()
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
  height: 60px;
  background: rgb(241, 241, 241);
  margin-bottom: 10px;
}
.time {
  width: 80px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: rgb(1, 72, 153);
  color: white;
  text-align: center;
}
.title {
  width: 1030px;
  height: 70px;
  overflow: hidden;
}
</style> 