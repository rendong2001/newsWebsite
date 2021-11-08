<template>
  <div calss="box">
    <!-- 首页上半部分 -->
    <el-row type="flex" class="row-bg" justify="space-between">
        <div class="block marr10">
          <el-carousel height="460px"  arrow="always">
            <el-carousel-item v-for="(item,index) in imgList" :key="index">
              <div>
                <img :src="item.path"  alt="" style="width:105%;">
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      <notice class="notice" />
    </el-row>
    <!-- 首页下半部分 -->
    <el-row type="flex" class="row-bg" justify="space-between">
      <work class="work"/>
      <school class="school"/>
      <other class="other"/>
    </el-row>
  </div>
</template>
<script>
import notice from '../../views/notice.vue'
import work from '../../views/work.vue'
import school from '../../views/school.vue'
import other from '../../views/other.vue'

export default {
  components: { notice, work, school, other },
  name: 'index',
  data(){
    return{
      imgList:[
        { path:require('../../assets/boer.jpg'),index: 1},
        { path:require('../../assets/boer2.jpg'),index: 2},
        { path:require('../../assets/boer.jpg'),index: 3},
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: rgb(131, 51, 51);
  height: 400px !important;
  padding: 0;
  .el-main {
    background-color: rgb(25, 202, 193);
    height: 400px;
  }
}
.xiaBian {
  background: rgb(132, 199, 44);
  height: 400px;
  padding: 0;
  .el-main {
    background-color: rgb(70, 27, 187);
    height: 400px;
  }
}
.youXiaJiao {
  padding: 0;
  // height: 400px;
  .el-header {
    height: 200px !important;
  }
  .el-main {
    height: 200px;
    background-color: rgb(206, 44, 171);
  }
}

.el-carousel__item{
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.block {
  width: 50%;
}
.block div {
  img {
    width: 100%;
    height: 100%;
    // object-fit:cover;
  }
}
.notice{
  width: 50%;
}
.work {
  width: 40%;
  margin-right: 10px;
}
.school {
  width: 40%;
}
.other {
  width: 20%;
  margin-left: 5px;
}
</style>