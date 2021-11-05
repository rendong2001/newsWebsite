<template>
  <div>
    <el-row type="flex" justify="space-between" class="underline">
      <span>学院动态</span>
      <span @click="goMore('学院动态')">更多<i class="el-icon-d-arrow-right"></i> </span>
    </el-row>
    <div>
      <ul>
        <li :key="index" v-for="(item, index) in schoolList">
          <!-- <a href="item.path"> {{ item.title }} </a> -->
          <!-- <router-link :to="{name:'schoolMessage',params:{id:item.id}}" >{{ item.title }} </router-link> -->
          <div @click="toSchoolMsg(item.title)"> {{ item.title }} </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'school',
  data() {
    return {
      schoolList: [
        { id: '1',title: '学校状态1' },
        { id: '2',title: '学校状态2' },
        { id: '3',title: '学校状态3' },
        { id: '4',title: '学校状态4' },
        { id: '5',title: '学校状态5' },
        { id: '6',title: '学校状态6' }
      ]
    }
  },
  methods:{
    goMore(val){
      this.$router.push({
        path:'moreMessage',
        query:{
          type:val,
        }
      })
    },
    toSchoolMsg(t) {
      this.$router.push({
        path: 'schoolMessage',
        query: {
          title:t
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.underline {
  border-bottom: 1px solid rgb(0, 110, 215);
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
</style>