<template>
  <div>
    <div>
      <el-row class="underline marb20">
        <span class="color"><b>友情链接</b></span>
      </el-row>
      <div>
        <div class="aLianJ marb10">
          <a href="https://www.cast.org.cn/" class="anone" target="_block">中国科协</a>
        </div>
        <div class="aLianJ marb10">
          <a href="http://www.kepu.gov.cn/kejiweek/" class="anone" target="_block">中国科普网</a>
        </div>
        <div class="aLianJ marb10">
          <a href="https://www.hast.net.cn/" class="anone" target="_block">河南省科协</a>
        </div>
        <div class="aLianJ marb10">
          <a href="http://www.pdskx.cn/" class="anone" target="_block">平顶山市科协</a>
        </div>
        <div class="aLianJ marb10">
          <a href="#" class="anone" target="_block">平顶山市公安局</a>
        </div>
        <div class="aLianJ marb10">
          <a href="#" class="anone" target="_block">平顶山市消防局</a>
        </div>
        <div class="aLianJ marb10">
          <a href="#" class="anone" target="_block">平顶山市教育局</a>
        </div>
      </div>
    </div>
    <!-- <div>
      <span>联系我们</span>
      <div>
        <div class="bg">
          <span>微信 ></span>
          <a href="https://www.pdsu.edu.cn/#"> <img src="../assets/gongZhongHao.jpg" alt="" /> </a>
        </div>
      </div>
      <div>
        <div class="bg bg2">
          <span>微博 ></span>
          <a href="https://www.pdsu.edu.cn/#"> <img src="../assets/weiBo.jpg" alt="" /> </a>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'other',
  data() {
    return {
      lianJieList: [{ name: '链接1' }, { name: '链接2' }]
    }
  }
}
</script>
<style lang="less" scoped>
.aLianJ {
  height: 30px;
  background-color: rgb(242, 243, 244);
  text-align: center;
  line-height: 30px;
}
.bg {
  background-color: rgb(1, 72, 153) !important;
  background: url('../assets/wxbg.png') no-repeat 20px 50px;
  width: 90%;
  color: white;
}
.bg2 {
  background: url('../assets/wbbg.png') no-repeat 20px 50px;
}
.bg,.bg2 {
  position: relative;
  height: 120px;
}
.bg img {
  position: absolute;
  top: 12px;
  right: 26px;
}
.bg span {
  position: absolute;
  top: 20px;
  left: 25px;
}
</style>