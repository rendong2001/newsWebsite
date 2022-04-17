<template>
  <div>
    <!-- 级联选择器 -->
    <el-row class="block">
      <el-col :span="4">
        <el-cascader v-model="value" :options="options" clearable filterable :getCheckedNodes="true" @change="handleChange"> </el-cascader>
      </el-col>
      <el-col :span="5">
        <el-button type="primary" icon="el-icon-edit" @click="goAdEdit()">点击对普通管理员进行管理</el-button>
      </el-col>
    </el-row>
    <div>
      <el-card class="box-card">
        <el-row :gutter="40">
          <el-col :span="4">
            <!-- 添加新闻按钮 -->
            <el-button el-button class="add" type="success" icon="el-icon-plus" @click="goEdit(newsCategoryId)">点击在该列表下添加一条新闻</el-button>
          </el-col>
          <el-col :span="10">
            <!-- 新闻搜索 -->
            <el-input clearable placeholder="请输入所要查询的新闻标题" v-model="search" class="input-with-select"> </el-input>
          </el-col>
        </el-row>
        <!-- 新闻表格区域 -->
        <el-table
          :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
          border
          style="width: 100%"
          :header-cell-style="{ textAlign: 'center' }"
          :cell-style="{ textAlign: 'center' }"
        >
          <el-table-column type="index" label="序号" width="50">
            <template slot-scope="scope">
              <span>{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="releaseTime" label="日期" width=""> </el-table-column>
          <el-table-column prop="title" label="新闻标题" width=""> </el-table-column>
          <el-table-column prop="id" label="id" width=""> </el-table-column>
          <el-table-column label="操作" width="">
            <template slot-scope="scope">
              <!-- {{ scope.row.id }} -->
              <div>
                <el-button type="success" @click="look(scope.row.id)">查看</el-button>
                <el-button type="warning" @click="showEditDialog(scope.row.id)">修改</el-button>
                <el-button type="info" @click="deleteNews(scope.row.id)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div>
          <!-- 获取新闻列表分页 -->
          <div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[6, 12, 18]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
            </el-pagination>
          </div>
        </div>
      </el-card>
      <!-- 修改新闻的对话框 -->
      <el-dialog title="修改新闻" :visible.sync="editDialogVisible" width="50%" :before-close="handleClose">
        <!-- rules表单验证规则，ref当前表单的验证对象 -->
        <el-form ref="editFormRef" :model="editForm" label-width="80px" status-icon>
          <el-form-item label="id:">
            <el-input v-model="editForm.id" disabled></el-input>
          </el-form-item>
          <el-form-item label="新闻标题:">
            <el-input v-model="editForm.title"></el-input>
          </el-form-item>
          <el-form-item label="发布日期:">
            <el-date-picker v-model="editForm.releaseTime" type="date" placeholder="请选择发布日期" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"></el-date-picker>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="editNew()">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getNewsList, getnew, update, deleteNew, fuzzy } from '../../api/api'
export default {
  data() {
    return {
      search: '',
      getShow: true, //获取分页的显示(布尔值)
      gettable: true, //获取表格的显示
      visible: false,
      editDialogVisible: false, //控制修改对话框的布尔值
      AdDialogVisible: false, //超管登录对话框
      Ad: { username: '', password: '' }, //超管对象
      editForm: {}, //查询到的新闻对象，目前仅供修改使用
      newsCategoryId: 1, //先存一个小标题id
      tableData: [], //新闻列表对象
      fuzzytableData: [], //模糊查询列表对象
      pageSize: 6, //每页条数
      currentPage: 1, //当前页
      total: 0, //新闻总条数
      fuzzyShow: false, //模糊查询分页的显示(布尔值)
      fuzzytable: false, //模糊查询表格的显示
      fuzzyForm: { fuzzytitle: '', fuzzytotal: 0, fuzzycurrent: 1, fuzzysize: 6 }, //模糊查询列表对象
      value: [],
      options: [
        {
          value: 1,
          label: '首页',
          children: [
            {
              value: 42,
              label: '通知公告'
            },
            {
              value: 43,
              label: '工作动态'
            },
            {
              value: 44,
              label: '学院动态'
            },
            {
              value: 45,
              label: '轮播图'
            }
          ]
        },
        {
          value: 22,
          label: '科协概况',
          children: [
            {
              value: 27,
              label: '简介'
            },
            {
              value: 28,
              label: '章程'
            },
            {
              value: 29,
              label: '组织结构'
            },
            {
              value: 30,
              label: '工作职责'
            },
            {
              value: 31,
              label: '专职人员'
            }
          ]
        },
        {
          value: 23,
          label: '政策法规',
          children: [
            {
              value: 35,
              label: '中国科协政策文件'
            },
            {
              value: 36,
              label: '地方科协政策文件'
            },
            {
              value: 37,
              label: '社团管理文件'
            }
          ]
        },
        {
          value: 25,
          label: '学术交流',
          children: [
            {
              value: 38,
              label: '学术信息'
            },
            {
              value: 39,
              label: '科技竞赛'
            }
          ]
        },
        {
          value: 27,
          label: '科普风采',
          children: [
            {
              value: 40,
              label: '平顶山学院科普活动'
            },
            {
              value: 41,
              label: '平顶山市政协科普活动'
            }
          ]
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    //修改对话框关闭的方法
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    //跳转普通管理列表
    goAdEdit() {
      this.$router.push({ path: 'adedit' })
    },
    //级联选择器的方法
    handleChange(value) {
      // console.log(value);
      // console.log(value[1]);
      this.currentPage = 1
      this.newsCategoryId = value[1] //将得到的小标题id存放起来
      this.query(this.newsCategoryId)
    },
    query(newsCategoryId) {
      const data = {
        current: this.currentPage,
        newsCategoryId: newsCategoryId,
        size: this.pageSize
      }
      getNewsList(data)
        .then(res => {
          // console.log(res);
          if (res.code !== 200) {
            return this.$message.error('获取新闻列表失败')
          } else {
            this.tableData = res.data.records
            this.total = res.data.total
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    //展示修改对话框
    showEditDialog(id) {
      getnew(id).then(res => {
        // console.log(res);
        if (res.code == 200) {
          this.editForm = res.data
        }
      })
      this.editDialogVisible = true
    },
    //确定修改表单提交，验证发起请求
    editNew() {
      const data = {
        id: this.editForm.id,
        releaseTime: this.editForm.releaseTime,
        title: this.editForm.title
      }
      update(data).then(res => {
        console.log('dsadasas', res)
        if (res.code == 200) {
          this.editDialogVisible = false
          this.$message.success('修改新闻成功！')
          this.query(this.newsCategoryId)
        }
      })
    },
    //模糊查询
    fuzzyList(title) {
      // console.log(title);
      if (title == '') {
        return this.$message.error('请先输入查询新闻标题！')
      }
      this.fuzzyShow = true //模糊分页显示
      this.getShow = false //获取分页隐藏
      this.gettable = false
      this.fuzzytable = true
      const data = {
        current: this.fuzzyForm.fuzzycurrent,
        size: this.fuzzyForm.fuzzysize,
        title: title
      }
      fuzzy(data)
        .then(res => {
          // console.log(res);
          if (res.code !== 200) {
            return this.$message.error('查询新闻列表失败')
          } else {
            this.fuzzytableData = res.data.records
            this.fuzzyForm.fuzzytotal = res.data.total
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    //清空查询列表内容
    qingKong() {
      this.tableData = []
      this.fuzzytableData = []
      this.fuzzyForm.fuzzytotal = 0
      this.fuzzyShow = false
      this.getShow = true
      this.fuzzytable = false
      this.gettable = true
    },
    //根据id删除新闻
    async deleteNews(id) {
      // console.log(id);
      const res = await this.$confirm('此操作将永久删除该条新闻, 是否继续?', '提示', {
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
        console.log(id)
        const data = {
          id: id
        }
        //参数data 要以对象的形式传入
        deleteNew(data).then(res => {
          console.log('>>>' + res)
          if (res.code == 200) {
            this.$message.success('删除新闻成功！')
            this.query(this.newsCategoryId)
          } else {
            return this.$message.error('删除新闻失败！')
          }
        })
      }
    },
    //查看
    look(id) {
      this.$router.push({ path: 'news', query: { id: id } })
    },
    //超管登录对话框
    showAdDialog() {
      this.AdDialogVisible = true
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val
      this.query(this.newsCategoryId)
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val
      this.query(this.newsCategoryId)
    },
    handleCurrentChangefuzzy(val) {
      this.fuzzyForm.fuzzycurrent = val
      this.fuzzyList(this.fuzzyForm.fuzzytitle) //模糊查询
    },
    handleSizeChangefuzzy(val) {
      this.fuzzyForm.fuzzysize = val
      this.fuzzyList(this.fuzzyForm.fuzzytitle) //模糊查询
    },
    //去往添加编辑页面
    goEdit(id) {
      let title = ''
      console.log(this.value)
      if ((this.value.length = 2)) {
        let t = this.value[0]
        let i = this.value[1]
        this.options.forEach(item => {
          if (item.value == t) {
            title += item.label + '/'
            item.children.forEach(e => {
              if (e.value == i) title += e.label
            })
          }
        })
      }
      if (
        (this.newsCategoryId == 27 && this.total == 1) ||
        (this.newsCategoryId == 28 && this.total == 1) ||
        (this.newsCategoryId == 29 && this.total == 1) ||
        (this.newsCategoryId == 30 && this.total == 1) ||
        (this.newsCategoryId == 31 && this.total == 1)
      ) {
        this.$message.error('该新闻标题下只能存在一篇新闻')
      } else if (
        this.newsCategoryId == 27 ||
        this.newsCategoryId == 28 ||
        this.newsCategoryId == 29 ||
        this.newsCategoryId == 30 ||
        this.newsCategoryId == 31 ||
        this.newsCategoryId == 35 ||
        this.newsCategoryId == 36 ||
        this.newsCategoryId == 37 ||
        this.newsCategoryId == 38 ||
        this.newsCategoryId == 39 ||
        this.newsCategoryId == 40 ||
        this.newsCategoryId == 41 ||
        this.newsCategoryId == 42 ||
        this.newsCategoryId == 43 ||
        this.newsCategoryId == 44
      ) {
        this.$router.push({ path: '/administrator/edit', query: { id: id, title: title } })
        console.log(this.newsCategoryId)
      } else if (this.newsCategoryId == 45) {
        this.$router.push({ path: '/administrator/editlunbo', query: { id: id, title: title } })
        // console.log(this.newsCategoryId);
      } else {
        this.$message.error('请先选择新闻标题')
      }
    }
  }
}
</script>

<style lang="less">
.add {
  margin-bottom: 10px !important;
}
.block {
  margin-bottom: 10px;
}
.el-pagination {
  margin-top: 10px;
}
</style>
