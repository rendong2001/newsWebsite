<template>
  <div>
    <el-row>
      <globalTitle />
    </el-row>
    <el-row class="mart10">
      <!-- 小标题 -->
      <el-col :span="4" class="marr10">
        <ul>
          <li v-for="(item, index) in menuList" :key="index" class="liStylenone liPointer marb10" @click="changeMenu(item)">
            <b :class="cont == item.name ? 'ft-blue' : 'ft-black'">{{ item.name }}</b>
          </li>
        </ul>
      </el-col>
      <!-- 新闻内容 -->
      <el-card class="box-card">
        <el-col>
          <div v-html="this.new.content" class="ql-editor"></div>
        </el-col>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
import { getMinTitle, getNewsList, getnew } from '../../api/api'
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
      new: {} //新闻对象
    }
  },
  created() {},
  mounted() {
    this.getTitle()
  },
  watch: {
    menuList(n, o) {
      this.cont = this.menuList[0].name
      this.getnews(this.menuList[0]) //改变对象，菜单栏的东西要写到监听属性里边
    }
  },
  methods: {
    //获取小标题的id
    getTitle() {
      const data = Number(this.$route.query.id)
      getMinTitle(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.menuList = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    //小标题菜单的球切换
    changeMenu(val) {
      this.cont = val.name
      this.getnews(val)
    },
    //获取到了新闻列表，里边只有一个对象
    getnews(item) {
      const data = {
        current: 1,
        newsCategoryId: item.id,
        size: 5
      }
      getNewsList(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.newsList = res.data.records
            this.getalone(this.newsList[0].id)
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    //获取新闻内容,得到一个新闻对象
    getalone(id) {
      const data = id
      getnew(data)
        .then(res => {
          // console.log(res);
          if (res.code == 200) {
            this.new = res.data
            console.log(this.new.content)
          }
        })
        .catch(error => {
          console.log(error)
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
.ql-editor {
  padding: 12px 0px !important;
}
</style>
