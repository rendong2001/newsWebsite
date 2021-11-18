<template>
  <div>
    <el-row>
      <globalTitle />
    </el-row>
    <el-row class="mart10">
      <!-- 小标题 -->
      <el-col :span="4" class="marr10">
        <ul>
          <li
            v-for="(item, index) in menuList"
            :key="index"
            class="liStylenone liPointer marb10"
            @click="changeMenu(item)"
          >
            <b :class="cont == item.categoryName ? 'ft-blue' : 'ft-black'">{{
              item.categoryName
            }}</b>
          </li>
        </ul>
      </el-col>
       <!-- 新闻内容 -->
      <el-card class="box-card">
        <el-col :span="18">
          <div>
            <el-row
              class="marb10"
              :key="index"
              v-for="(item, index) in newsList"
            >
              {{ item.title }}
            </el-row>
          </div>
          <!-- 分页 -->
          <div>
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="20"
              layout="total, pager, next"
              :total="total"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
import { getMinTitle, getNewsList } from '../../api/api'
export default {
  name: 'introduce',
  components: {
    globalTitle
  },
  data() {
    return {
      cont: '',
      menuList: [],
      newsList: [],
      total: 0,
      currentPage: 1
    }
  },
  created() {
    this.getMinTitleList()
  },
  mounted() {},
  watch: {
    menuList(newval, oldval) {
      this.getAllNewsList(this.menuList[0])
      this.cont = this.menuList[0].categoryName
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    changeMenu(val) {
      this.getAllNewsList(val)
      this.cont = val.categoryName
    },
    getMinTitleList() {
      const data = {
        contypeId: this.$route.query.id,
        p: 1
      }
      getMinTitle(data)
        .then((res) => {
          console.log('res', res)
          if (res.code == 200) {
            this.menuList = res.data.records
          }
        })
        .catch((err) => {
          console.log('err', err)
        })
    },
    getAllNewsList(item) {
      const data = {
        categoryId: item.id,
        contypeId: item.contypeId,
        p: this.currentPage
      }
      getNewsList(data)
        .then((res) => {
          console.log('res', res)
          if (res.code == 200) {
            this.newsList = res.data.records
            this.total = Number(res.data.total)
          }
        })
        .catch((err) => {
          console.log('err', err)
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