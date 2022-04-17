<template>
  <div>
    <h2>欢迎进入后台管理系统</h2>

    <el-upload ref="upload" action accept="image/*" :limit="3" :file-list="filelist" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :http-request="upload">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <el-button @click="save">保存</el-button>
  </div>
</template>

<script>
import { fileUpload, update } from '../../api/api'
export default {
  data() {
    return {
      // fileList: []
      imageUrl: '',
      filelist: [],
      delList: [],
      dialogVisible: false,
      dialogImageUrl: ''
    }
  },
  methods: {
    save() {
      //取到图片集合
      let uploadImglist = this.$refs.upload.uploadFiles
      console.log(uploadImglist)
      let formData = new FormData()
      uploadImglist.forEach(item => {
        //ready状态的是未上传的 success是已经上传成功的，只需要添加未上传的即可
        if (item.status == 'ready') {
          formData.append('file', item.raw)
        }
      })
      formData.get('file')
      fileUpload(formData).then(res => {
        //上传接口
        console.log(res)
      })
    },
    // 预览图片
    handlePictureCardPreview(file) {
      this.dialogVisible = true
      this.dialogImageUrl = file.url
      console.log(this.dialogImageUrl)
    },
    // 删除图片
    handleRemove(file) {
      //判断状态，如果是上传成功的 需要把id加到删除id集合里面
      if (file.status == 'success') {
        this.delList.push(file.id)
      }
    },
    upload() {}
  }
}
</script>

<style lang="less" scoped></style>
