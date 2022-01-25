<template>
  <div class="box">
    <el-row>{{ $route.query.title }}</el-row>
    新闻标题：<el-input v-model="title" placeholder="请输入新闻标题"></el-input><br/><br/>
    发布日期：<el-date-picker  format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" v-model="releaseTime" placeholder="请选择新闻发布日期"></el-date-picker><br/><br/>
    新闻内容：<quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
    <el-row style="margin-top:50px;">
      <el-button  type="success" @click="submit">发布</el-button>
    </el-row>
  </div>
</template>
<script>
import { add } from '../../api/api'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components:{ quillEditor },
  data(){
    return {
      title:'', //标题内容
      releaseTime:'', //发布日期
      content: '',  //新闻内容
      newsCategoryId:2,
      editorOption: {
        placeholder: "请输入正文",
        // editorOption里是放图片上传配置参数用的，例如：
        action:  '/api/product/richtext_img_upload.do',  // 必填参数 图片上传地址
        methods: 'POST',  // 必填参数 图片上传方式
        token: '',  // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
        name: 'upload_file',  // 必填参数 文件的参数名
        size: 10000000,  // 可选参数   图片大小，单位为Kb, 1M = 1024Kb
        accept: 'multipart/form-data, image/png, image/gif, image/jpeg, image/bmp, image/x-icon,image/jpg'  // 可选 可上传的图片格式
      } ,  //编辑器新闻对象
      fileList:[],
    }
  },
  created(){
    // console.log('>>>>>>>',this.$route.query.id);
    this.newsCategoryId = this.$route.query.id
  },
  methods:{
    submit(){
      const data = {
        newsCategoryId:this.newsCategoryId,
        content:this.content,
        title:this.title,
        releaseTime:this.releaseTime
      }
      add(data).then(res => {
        console.log(res);
        if(res.code !== 200){
          return this.$message.error('发布新闻失败，请重试！')
        }else{
          this.$message.success('新闻发布成功！')
          console.log(this.content);
          this.$router.go(-1)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  width: 1200px;
  margin: 0 auto;
}
.myQuillEditor{
  height: 350px;
}
.btn{
  position: absolute;
  bottom: 20px;
  left: 168px;
}
</style>