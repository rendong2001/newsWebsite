<template>
  <div>
    <el-card class="box-card">
      <!-- 新闻表格区域 -->
      <el-table 
        :data="tableData"
        border 
        style="width: 100%" 
        :header-cell-style="{textAlign: 'center'}" 
        :cell-style="{ textAlign: 'center' }"
      >
        <el-table-column type="index" label="序号" width="50">
          <!-- <template slot-scope="scope">
            <span>{{ (currentPage-1)*pageSize+scope.$index+1 }}</span>
          </template> -->
        </el-table-column>
        <el-table-column prop="username" label="普通管理员账号" width="" >
        </el-table-column>
        <el-table-column prop="id" label="id" width="">
        </el-table-column>
        <el-table-column label="操作" width="">
          <template slot-scope="scope">
            <!-- {{ scope.row.id }} -->
            <div>
              <el-button type="success" @click="look(scope.row.id)">添加</el-button>
              <el-button type="warning" @click="showEditDialog(scope.row.id)">修改</el-button>
              <el-button type="info" @click="deleteNews(scope.row.id)">删除</el-button>
            </div>
          </template>
          
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getmain,editAccount } from '../../api/api'
export default {
  data() {
    return {
      tableData:[], //普通管理员列表
    }
  },
  created(){
    this.ready()
  },
  methods:{
    ready(){
      getmain().then(res => {
        console.log(res);
        if(res.code == 200){
          this.tableData = res.data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>