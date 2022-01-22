<template>
  <div class="box">
    新闻标题：<el-input v-model="input" placeholder="请输入新闻标题"></el-input><br/><br/>
    发布日期：<el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker><br/><br/>
    新闻内容：<quill-editor ref="text" v-model="content" class="myQuillEditor" :options="editorOption" />
    <el-button type="primary" @click="submit">确定</el-button>
    <el-button type="success">提交</el-button>
  </div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  components:{ quillEditor },
  data(){
    return {
      input:'', //标题内容
      value1:'',  //日期
      content: '',  //新闻内容
      editorOption: {
        placeholder: "请输入正文",
      } ,  //编辑器新闻对象
    }
  },
  created(){
  },
  methods:{
    submit () {
      console.log(this.$refs.text.value)
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  width: 1200px;
  margin: 0 auto;
}
</style>