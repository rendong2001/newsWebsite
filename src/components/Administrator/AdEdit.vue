<template>
  <div>
    <el-card class="box-card">
      <el-button type="primary" @click="add()" icon="el-icon-circle-plus" class="add">注册新的管理员账号</el-button>
      <!-- 新闻表格区域 -->
      <el-table :data="tableData" border style="width: 100%" :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
        <el-table-column type="index" label="序号" width="50">
          <!-- <template slot-scope="scope">
            <span>{{ (currentPage-1)*pageSize+scope.$index+1 }}</span>
          </template> -->
        </el-table-column>
        <el-table-column prop="username" label="普通管理员账号" width=""> </el-table-column>
        <el-table-column prop="id" label="id" width=""> </el-table-column>
        <el-table-column label="操作" width="">
          <template slot-scope="scope">
            <!-- {{ scope.row.id }} -->
            <div>
              <el-button type="primary" @click="showEditDialog(scope.row.id)" icon="el-icon-edit"></el-button>
              <el-button type="danger" @click="deleteAds(scope.row.id)" icon="el-icon-delete"></el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 修改账户的对话框 -->
    <el-dialog title="修改普通管理员密码" :visible.sync="editDialogVisible" width="50%" @close="editClose">
      <!-- rules表单验证规则，ref当前表单的验证对象 -->
      <el-form ref="editFormRef" :model="editForm" label-width="80px" status-icon>
        <el-form-item label="用户名:">
          <el-input v-model="editForm.username" prefix-icon="iconfont icon-user" placeholder="请输入账号" clearable=""></el-input>
        </el-form-item>
        <el-form-item label="旧密码:">
          <el-input v-model="editForm.oldPassword" prefix-icon="iconfont icon-3702mima" type="password" show-password placeholder="请输入旧密码"></el-input>
        </el-form-item>
        <el-form-item label="新密码:">
          <el-input v-model="editForm.password" prefix-icon="iconfont icon-3702mima" type="password" show-password placeholder="请输入新密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="subEdit()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加管理员对话框 -->
    <el-dialog title="添加普通管理员" :visible.sync="addDialogVisible" width="50%" @close="addClose">
      <!-- rules表单验证规则，ref当前表单的验证对象 -->
      <el-form ref="addFormRef" :model="addForm" label-width="80px" status-icon>
        <el-form-item label="用户名:">
          <el-input v-model="addForm.username" prefix-icon="iconfont icon-user" placeholder="请输入账号" clearable=""></el-input>
        </el-form-item>
        <el-form-item label="密码:">
          <el-input v-model="addForm.password" prefix-icon="iconfont icon-3702mima" type="password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="canceladd">取 消</el-button>
        <el-button type="primary" @click="addEdit()">注 册</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getmain, editAccount, deleteAd, addAd } from '../../api/api'
export default {
  data() {
    return {
      tableData: [], //普通管理员列表
      editDialogVisible: false,
      addDialogVisible: false,
      editForm: { username: '', oldPassword: '', password: '' }, //修改表单对象
      addForm: { username: '', password: '' } //添加管理对象
    }
  },
  created() {
    this.ready()
  },
  methods: {
    //获取铺管列表
    ready() {
      getmain().then(res => {
        // console.log(res);
        if (res.code == 200) {
          this.tableData = res.data
        }
      })
    },
    //展示编辑对话框
    showEditDialog() {
      this.editDialogVisible = true
    },
    editClose() {
      this.editForm.username = ''
      this.editForm.oldPassword = ''
      this.editForm.password = ''
    },
    cancel() {
      this.editForm.username = ''
      this.editForm.oldPassword = ''
      this.editForm.password = ''
      this.editDialogVisible = false
    },
    //编辑确定事件
    subEdit() {
      const data = {
        username: this.editForm.username,
        oldPassword: this.editForm.oldPassword,
        password: this.editForm.password
      }
      editAccount(data).then(res => {
        // console.log(res);
        if (res.code == 200) {
          this.$message.success('账户修改成功')
          this.editDialogVisible = false
          this.ready()
        } else {
          this.$message.error('账户修改失败')
        }
      })
    },
    //删除普通管理员
    async deleteAds(id) {
      // console.log(id);
      const res = await this.$confirm('此操作将永久删除该管理账号, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => {
        return err
      })
      //如果用户点击确定则返回confirm
      //如果用户点击取消则返回cancel
      console.log(res)
      if (res !== 'confirm') {
        return this.$message.info('已取消删除~')
      } else {
        // console.log(id);
        const data = {
          id: id
        }
        //参数data 要以对象的形式传入
        deleteAd(data).then(res => {
          // console.log('>>>'+res);
          if (res.code == 200) {
            this.$message.success('删除成功！')
            this.ready()
          } else {
            return this.$message.error('删除失败！')
          }
        })
      }
    },
    add() {
      this.addDialogVisible = true
    },
    //注册取消清空
    canceladd() {
      this.addForm.username = ''
      this.addForm.password = ''
      this.addDialogVisible = false
    },
    addClose() {
      this.addForm.username = ''
      this.addForm.password = ''
    },
    //注册提交
    addEdit() {
      const data = {
        username: this.addForm.username,
        password: this.addForm.password
      }
      addAd(data).then(res => {
        if (res.code == 200) {
          this.$message.success('注册成功')
          this.addDialogVisible = false
          this.ready()
        } else {
          this.$message.error('注册失败')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.add {
  margin-bottom: 10px;
}
</style>
