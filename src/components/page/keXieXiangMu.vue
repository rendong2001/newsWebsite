<template>
  <div>
    <globalTitle />
    <div >
      <!-- 项目展示区 -->
      <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column
          type="index"
          label="序号"
          width="80px"
        ></el-table-column>
        <el-table-column
          prop="lixiangbianhao"
          label="立项编号"
        ></el-table-column>
        <el-table-column
          prop="xiangmumingcheng"
          label="项目名称"
        ></el-table-column>
        <el-table-column
          prop="xiangmuxingshi"
          label="项目形式"
        ></el-table-column>
        <el-table-column
          prop="xiangmufuzheren"
          label="项目负责人"
        ></el-table-column>
        <el-table-column
          prop="jiexiangshijian"
          label="结项时间"
        ></el-table-column>
        <el-table-column prop="beizhu" label="备注"></el-table-column>
      </el-table>
      <!-- 分页导航栏 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 5, 8, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
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
        {
          lixiangbianhao: '1',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '2',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '3',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '4',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '5',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '6',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '7',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '8',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '9',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        },
        {
          lixiangbianhao: '10',
          xiangmumingcheng: '平顶山学院科学技术协会官网搭建',
          xiangmuxingshi: '607实验室构建',
          xiangmufuzheren: '喻恒',
          jiexiangshijian: '2021-12-31',
          beizhu: '科技楼S607'
        }
      ],
      // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 2
      },
      userlist: [],
      total: 0
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    async getUserList() {
      const { data: res } = await this.$http.get('users', {
        params: this.queryInfo
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取用户列表失败！ ')
      }
      this.userlist = res.data.users
      this.total = res.data.total
      console.log(res)
    },

    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      // console.log(newSize)
      this.queryInfo.pagesize = newSize
      this.getUserList()
    },
    // // 监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      // console.log(newPage)
      this.queryInfo.newpage = newPage
    }
  }
}
</script>

<style lang="less" scoped>
</style>
