<template>
  <div>
     <div class="block">
      <el-cascader
        v-model="value"
        :options="options"
        clearable
        filterable
        @change="handleChange">
      </el-cascader>
    </div>
    <div>
      <el-card class="box-card">
        <el-button class="add" type="success" icon="el-icon-plus" @click="goEdit()">点击在该列表下添加一条新闻</el-button>
        <el-table :data="tableData" border style="width: 100%" :header-cell-style="{textAlign: 'center'}" :cell-style="{ textAlign: 'center' }"
        >
          <!-- :header-cell-style="{textAlign: 'center'}"设置头部居中： -->
          <!-- :cell-style="{ textAlign: 'center' }"设置整个表格内容水平居中： -->
          <!-- 问题：怎么获取数组中每个对象的key值（每条新闻的id）?
               解决：通过作用域插槽 slot-scope 获取每个对象 -->
          <el-table-column type="index"></el-table-column>
          <el-table-column prop="releaseTime" label="日期" width="" >
          </el-table-column>
          <el-table-column prop="title" label="新闻标题" width="">
          </el-table-column>
          <el-table-column prop="id" label="id" width="">
          </el-table-column>
          <el-table-column label="操作" width="">
            <template slot-scope="scope">
              <!-- {{ scope.row.id }} -->
              <div>
                <el-button type="success" @click="look(scope.row.id)">查看</el-button>
                <el-button type="warning" @click="amend(scope.row.id)">修改</el-button>&nbsp
                <el-popconfirm
                  confirm-button-text='是的'
                  cancel-button-text='取消'
                  icon="el-icon-info"
                  icon-color="red"
                  title="确定删除该条新闻？"
                >
                  <el-button slot="reference">删除</el-button>
                </el-popconfirm>
              </div>
            </template>
            
          </el-table-column>
        </el-table>
        <!-- 分页 -->
          <div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[3,6,12, 18,]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total">
            </el-pagination>
          </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getNewsList } from '../../api/api'
import axios from 'axios'
export default {
  data() {
    return {
      visible: false,
      newsCategoryId:1, //先存一个小标题id
      tableData:[],   //新闻列表对象
      pageSize:6,     //每页条数
      currentPage:1,  //当前页
      newsList:[],
      total:0,        //新闻总条数
      value: [],
      options: [{
        value: 1,
        label: '首页',
        children: [{
          value:42,
          label: '通知公告',
        }, 
        {
          value:43,
          label: '工作动态',
        },
        {
          value:44,
          label: '学院动态',
        }],
      },{
          value: 22,
          label: '科协概况',
          children: [{
            value:27,
            label: '简介',
          }, 
          {
            value:28,
            label: '章程',
          },
          {
            value:29,
            label: '组织结构',
          },
          {
            value:30,
            label: '工作职责',
          },
          {
            value:31,
            label: '专职人员',
          }],
        },
        {
          value: 23,
          label: '政策法规',
          children: [{
            value:35,
            label: '中国科协政策文件',
          }, 
          {
            value:36,
            label: '地方科协政策文件',
          },
          {
            value:37,
            label: '社团管理文件',
          }],
        },
        {
          value: 25,
          label: '学术交流',
          children: [{
            value:38,
            label: '学术信息',
          }, 
          {
            value:39,
            label: '科技竞赛',
          }],
        },
        {
          value: 27,
          label: '科普风采',
          children: [{
            value:40,
            label: '平顶山学院科普活动',
          }, 
          {
            value:41,
            label: '平顶山市政协科普活动',
          }],
      }]
    }
  },
  created(){
  },
  mounted(){
  },
  methods: {
    handleChange(value) {
      console.log(value);
      console.log(value[1]);
      this.newsCategoryId = value[1]; //将得到的小标题id存放起来
      this.query(this.newsCategoryId);
    },
    // query(value){
    //   const data = {
    //     current:this.currentPage,
    //     newsCategoryId:value[1],
    //     size:this.pageSize
    //   };
    //   getNewsList(data).then(res=>{
    //     console.log(res);
    //     this.tableData = res.data.records
    //     this.total = res.data.total
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // },
    query(newsCategoryId){
      const data = {
        current:this.currentPage,
        newsCategoryId:newsCategoryId,
        size:this.pageSize
      };
      getNewsList(data).then(res=>{
        console.log(res);
        if (res.code !== 200) {
          return this.$message.error('获取新闻列表失败')
        }else{
          this.tableData = res.data.records
          this.total = res.data.total
        }
      }).catch(err => {
        console.log(err);
      })
    },
    //修改
    amend(id){
      alert('爱你呦');
      console.log('>>>'+id);
    },
    //查看
    look(id){
      this.$router.push({path:'news',query:{id:id}})
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.query(this.newsCategoryId)
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.query(this.newsCategoryId)
    },
    //去往添加编辑页面
    goEdit(){
      if (this.newsCategoryId==27||this.newsCategoryId==28||this.newsCategoryId==29||
      this.newsCategoryId==30||this.newsCategoryId==31) {
        this.$message.error('该新闻标题下不能添加新闻')
      }else if(this.newsCategoryId == 35||this.newsCategoryId==36||this.newsCategoryId==37||
      this.newsCategoryId==38||this.newsCategoryId==39||this.newsCategoryId==40||
      this.newsCategoryId==41||this.newsCategoryId==42||this.newsCategoryId==43||
      this.newsCategoryId==44){
        this.$router.push('/administrator/edit')
      }else{
        this.$message.error('请先选择新闻标题')
      } 
    }
  },
}
</script>

<style lang="less">
.add{
  margin-bottom: 10px !important;
}
.el-pagination{
  margin-top: 10px;
}
</style>