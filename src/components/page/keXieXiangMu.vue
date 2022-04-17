<template>
  <div>
    <globalTitle />
    <div>
      <el-card class="mart10">
        <h4>平顶山学院2021年度河南省科协立项列表</h4>
        <el-table :data="tableData" border style="width: 100%" :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
          <!-- :header-cell-style="{textAlign: 'center'}"设置头部居中： -->
          <!-- :cell-style="{ textAlign: 'center' }"设置整个表格内容水平居中： -->
          <el-table-column prop="id" label="序号" width=""> </el-table-column>
          <el-table-column prop="bianhao" label="立项编号" width=""> </el-table-column>
          <el-table-column prop="name" label="项目名称"> </el-table-column>
          <el-table-column prop="xingshi" label="项目形式"> </el-table-column>
          <el-table-column prop="fuzeren" label="项目负责人"> </el-table-column>
          <el-table-column prop="time" label="结项时间"> </el-table-column>
          <el-table-column prop="beizhu" label="备注"> </el-table-column>
        </el-table>
      </el-card>
    </div>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
export default {
  components: { globalTitle },
  name: 'keXieXiangMu',
  data() {
    return {
      tableData: [
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' },
        { id: 1, bianhao: '001', name: '苹果', xingshi: '线上操作', fuzeren: '老杨', time: '2022-1-8', beizhu: '无' }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
h4 {
  text-align: center;
  margin-top: 0;
}
.mart10 {
  margin-top: 10px;
}
</style>
