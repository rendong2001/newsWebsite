<template>
  <div>
    <el-row>
      <div class="fl">
        <span
          ><b>{{ getTitle(this.$route.query.title) }}</b></span
        >
      </div>
      <div class="fr">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <!-- <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item> -->
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ getTitle(this.$route.query.title) }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'globalTitle',
  data() {
    return {
      title: ''
    }
  },
  created() {},
  methods: {
    getTitle(v) {
      switch (v) {
        case 'introduce':
          return '科协概况'
        case 'zhengce':
          return '政策法规'
        case 'keXieXiangMu':
          return '科协项目'
        case 'xueShuJiaoLiu':
          return '学术交流'
        case 'banShiZhiNan':
          return '办事指南'
        case 'kePuFengCai':
          return '科普风采'
        case 'xueXiaoShouYe':
          return '学校首页'
        case 'telephone':
          return '联系我们'
      }
    }
  }
}
</script>

<style scoped>
.el-row {
  /* background-color: rgb(83, 168, 125); */
  border-bottom: 1px solid #0f99e9;
}
</style>
