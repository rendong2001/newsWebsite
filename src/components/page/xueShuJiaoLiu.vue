<template>
  <div>
    <globalTitle />
  
    <el-tabs :tab-position="tabPosition" style="height: 400px; width=500px">
      <el-tab-pane label="学术信息">
        <template>
          <el-table :data="xueshuData" style="width: 100%">
            <el-table-column prop="date" label="学术信息" width="">
            </el-table-column>
          </el-table>
        </template>
      </el-tab-pane>
      <el-tab-pane label="科技竞赛">
        <template>
          <el-table :data="kejiData" style="width: 100%">
            <el-table-column prop="date" label="科技竞赛" width="">
            </el-table-column>
          </el-table>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
export default {
  components: { globalTitle },
  name: 'xueShuJiaoLiu',
  data() {
    return {
      tabPosition: 'left',
      xueshuData: [
        {
          date: '市政协副主席王著一行来我校考察调研',
        },
        {
          date: '郑州大学博士生导师刘志伟教授来我校讲学',
        },
        {
          date: '南京大学博士生导师翟国方教授来我校讲学',
        },
        {
          date: '华中科技大学博士生导师徐晓林受聘我校特聘教授',
        }
      ],
      kejiData: [
        {
          date: '我校鲲鹏产业学院在河南省鲲鹏产业学院建设考核中获得优秀',
        },
        {
          date: '2021级临床医学本科生学业导师及班主任聘任仪式举行',
        },
        {
          date: '我校第十一次学生代表大会举行',
        },
        {
          date: '河南省高等教育外事工作业务培训会在我校召开',
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
</style>