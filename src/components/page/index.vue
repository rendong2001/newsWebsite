<template>
  <div calss="box">
    <!-- 首页上半部分 -->
    <el-row type="flex" class="row-bg" justify="space-between">
        <div class="block marr10">
          <el-carousel height="460px"  arrow="always" :interval="3000">
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

    <!-- 定位fixed -->
    <div class="fixed1">
      <a href="#"><img src="../../assets/gzh.jpg" alt=""></a>
    </div>
    <div class="fixed2">
      <a href="#"><img src="../../assets/wb.jpg" alt=""></a>
    </div>
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
        { path:require('../../assets/1.jpg'),index: 1},
        { path:require('../../assets/2.jpg'),index: 2},
        { path:require('../../assets/3.jpg'),index: 3},
      ]
    }
  }
}
</script>
<style lang="less" scoped>
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
.fixed1 {
  position: fixed;
  top:270px;
  right: 2px;
}
.fixed2 {
  position: fixed;
  top:340px;
  right: 2px;
}
</style>