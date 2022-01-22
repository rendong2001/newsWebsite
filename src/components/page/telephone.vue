<template>
  <div>
    <globalTitle />
    <el-card class="card">
      <div class="max">
        <div class="left">
          <el-card style="" class="img">
            <p>微信公众号</p>
            <img src="../../assets/gongZhongHao.jpg" alt="">
          </el-card>
          <el-card style="" class="img">
            <p>新浪微博</p>
            <img src="../../assets/weiBo.jpg" alt="">
          </el-card>
        </div>
        <div class="right">
          <el-table :data="tableData" border  :header-cell-style="{textAlign: 'center'}" :cell-style="{ textAlign: 'center' }">
            <!-- :header-cell-style="{textAlign: 'center'}"设置头部居中： -->
            <!-- :cell-style="{ textAlign: 'center' }"设置整个表格内容水平居中： -->
            <el-table-column prop="id" label="序号" width="60" >
            </el-table-column>
            <el-table-column prop="zhize" label="职责" width="">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="tel" label="联系电话">
            </el-table-column>
            <el-table-column prop="mail" label="邮箱" width="200">
            </el-table-column>
          </el-table>  
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
export default {
  components: { globalTitle },
  name: 'telephone',
  data() {
    return {
      tableData:[{id:1,zhize:'校长',name:'杨鸣',tel:'12345678910',mail:'12312312@qq.com'},
        {id:1,zhize:'校长',name:'杨鸣',tel:'12345678910',mail:'12312312@qq.com'},
        {id:1,zhize:'校长',name:'杨鸣',tel:'12345678910',mail:'12312312@qq.com'},
        {id:1,zhize:'校长',name:'杨鸣',tel:'12345678910',mail:'12312312@qq.com'},
        {id:1,zhize:'校长',name:'杨鸣',tel:'12345678910',mail:'12312312@qq.com'},
        {id:1,zhize:'校长',name:'杨鸣',tel:'12345678910',mail:'12312312@qq.com'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.card{
  margin-top: 10px;
}
.max{
  display: flex;
  justify-content: space-between;
}
p{
  text-align: center;
}
.right{
  width: 800px;
}
.left{
  width: 200px;
}
.img{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>