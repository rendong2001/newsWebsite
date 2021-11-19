<template>
  <div>
    <globalTitle />
    <el-table :data="tableData" stripe style="width: 100%;">
      <el-table-column type="index" label="序号" width="80px"></el-table-column>
      <el-table-column prop="zhize" label="职责" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="tele" label="联系电话" width="180">
      </el-table-column>
      <el-table-column prop="e" label="邮箱"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
export default {
  components: { globalTitle },
  name: 'telephone',
  data() {
    return {
      tableData: [
        {
          zhize: '校科协主席',
          name: '王小虎',
          tele: '17630124661',
          e: '2345@qq.com'
        },
        {
          zhize: '校科协秘书长',
          name: '王小虎',
          tele: '17630124661',
          e: '2345@qq.com'
        },
        {
          zhize: '校科协联络员',
          name: '王小虎',
          tele: '17630124661',
          e: '2345@qq.com'
        },
        {
          zhize: '青年分会主席',
          name: '王小虎',
          tele: '17630124661',
          e: '2345@qq.com'
        },
        {
          zhize: '学生分会联络员',
          name: '王小虎',
          tele: '17630124661',
          e: '2345@qq.com'
        },
        {
          zhize: 'XXXXX',
          name: 'XXX',
          tele: '17630124661',
          e: '2345@qq.com'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
