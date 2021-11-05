<template>
  <div>
    <el-row>
      <globalTitle />
    </el-row> 
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
export default {
  name: 'introduce',
  components:{
    globalTitle
  },
  data() {
      return{
          menuList: [
              {name: '简介'},
              {name: '章程'},
              {name: '组织机构'},
              {name: '工作职责'},
              {name: '专职人员'}
          ]
      }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(85, 81, 82);
  font-size: 20px;
  line-height: 60px;
  padding: 0px 4px;
}
.el-aside {
  background-color: rgb(242, 243, 245);
  .el-menu {
    border-right: none;
  }
}
</style>