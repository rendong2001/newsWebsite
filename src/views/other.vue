<template>
  <div>
    <div>
      <span>友情链接</span>
      <div>
        <ul>
          <li class="lieBiao" :key="index" v-for="(item, index) in lianJieList">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <div>
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'other',
  data() {
    return {
      lianJieList: [{ name: '链接1' }, { name: '链接2' }, { name: '链接3' }]
    }
  }
}
</script>
<style lang="less" scoped>
ul {
  padding-left: 0;
}
.lieBiao {
  width: 90%;
  height: 30px;
  background-color: rgb(39, 144, 214);
  list-style: none;
  margin-bottom: 2px;
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