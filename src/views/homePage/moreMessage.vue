<template>
  <div>
    <el-row class="underline">
      <h3 style="color: rgb(1, 72, 153)">{{ this.$route.query.type }}</h3>
    </el-row>
    <div class="mart15">
      <div v-if="this.$route.query.type == '通知公告'">
        <el-card>
          <ul class="ul">
            <li class="lieBiao liPointer flex-v flex-between" :key="index" v-for="(item, index) in noticeList">
              <div class="time">
                {{ item.releaseTime }}
              </div>
              <div class="title" @click="toNoticeMsg(item.id)">
                {{ item.title }}
              </div>
            </li>
          </ul>
          <!-- 分页 -->
          <div>
            <el-pagination background @current-change="handleCurrentChange1" :current-page="currentPagenotice" :page-size="pageSize" layout="prev, pager, next,total" :total="totalnotice">
            </el-pagination>
          </div>
        </el-card>
      </div>
      <div v-if="this.$route.query.type == '学院动态'">
        <ul>
          <el-card>
            <ul class="ul">
              <li class="lieBiao liPointer flex-v flex-between" :key="index" v-for="(item, index) in schoolList">
                <div class="time">
                  {{ item.releaseTime }}
                </div>
                <div class="title" @click="toSchoolMsg(item.id)">
                  {{ item.title }}
                </div>
              </li>
            </ul>
            <!-- 分页 -->
            <div>
              <el-pagination background @current-change="handleCurrentChange2" :current-page.sync="currentPageschool" :page-size="pageSize" layout="prev, pager, next,total" :total="totalschool">
              </el-pagination>
            </div>
          </el-card>
        </ul>
      </div>
      <div v-if="this.$route.query.type == '工作状态'">
        <ul>
          <el-card>
            <ul class="ul">
              <li class="lieBiao liPointer flex-v flex-between" :key="index" v-for="(item, index) in workList">
                <div class="time">
                  {{ item.releaseTime }}
                </div>
                <div class="title" @click="toWorkMsg(item.id)">
                  {{ item.title }}
                </div>
              </li>
            </ul>
            <!-- 分页 -->
            <div>
              <el-pagination background @current-change="handleCurrentChange3" :current-page.sync="currentPagework" :page-size="pageSize" layout="prev, pager, next,total" :total="totalwork">
              </el-pagination>
            </div>
          </el-card>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getNewsList } from '../../api/api'
export default {
  name: 'moreMessage',
  data() {
    return {
      noticeList: [],
      schoolList: [],
      workList: [],
      currentPagenotice: 1, //通知公告的当前页
      currentPageschool: 1, //学院动态的当前页
      currentPagework: 1, //工作动态的当前页
      pageSize: 10,
      totalnotice: 0, //通知公告新闻的总条数
      totalschool: 0, //学院动态新闻的总条数
      totalwork: 0 //工作动态新闻的总条数
    }
  },
  mounted() {
    this.getnotice()
    this.getwork()
    this.getschool()
  },
  methods: {
    //通知公告的分页切换
    handleCurrentChange1(val) {
      // console.log(`当前页: ${val}`);
      this.currentPagenotice = val
      this.getnotice()
    },
    //学院动态的分页切换
    handleCurrentChange2(val) {
      // console.log(`当前页: ${val}`);
      this.currentPageschool = val
      this.getschool()
    },
    //工作动态的分页切换
    handleCurrentChange3(val) {
      // console.log(`当前页: ${val}`);
      this.currentPagework = val
      this.getwork()
    },
    //获取新闻列表
    getnotice() {
      const data = {
        current: this.currentPagenotice,
        newsCategoryId: 42,
        size: this.pageSize
      }
      getNewsList(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.noticeList = res.data.records
            this.totalnotice = res.data.total
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getwork() {
      const data = {
        current: this.currentPagework,
        newsCategoryId: 43,
        size: this.pageSize
      }
      getNewsList(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.workList = res.data.records
            this.totalwork = Number(res.data.total)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    getschool() {
      const data = {
        current: this.currentPageschool,
        newsCategoryId: 44,
        size: this.pageSize
      }
      getNewsList(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.schoolList = res.data.records
            this.totalschool = Number(res.data.total)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    toNoticeMsg(id) {
      this.$router.push({
        path: '/home/news',
        query: {
          id: id
        }
      })
      window.location.reload()
    },
    toSchoolMsg(id) {
      this.$router.push({
        path: '/home/news',
        query: {
          id: id
        }
      })
      window.location.reload()
    },
    toWorkMsg(id) {
      this.$router.push({
        path: '/home/news',
        query: {
          id: id
        }
      })
      window.location.reload()
    }
  }
}
</script>
<style>
.underline {
  border-bottom: 1px solid #0f99e9;
}
.lieBiao {
  width: 100%;
  height: 60px;
  background: rgb(241, 241, 241);
  margin-bottom: 10px;
}
.time {
  width: 100px;
  padding: 17px 0px;
  background-color: rgb(1, 72, 153);
  color: white;
  text-align: center;
}
.title {
  width: 980px;
  height: 50px;
  overflow: hidden;
  line-height: 60px;
  /* // background-color: rgb(179, 19, 19); */
  padding: 0 0 0 10px;
}
.ul {
  width: 1100px;
  margin: 0;
}
</style>
