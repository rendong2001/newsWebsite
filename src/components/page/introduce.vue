<template>
  <div>
    <el-row>
      <globalTitle />
    </el-row>
    <el-row class="mart10">
     <el-col :span="4" class="marr10">
       <ul>
        <li
          v-for="(item, index) in menuList"
          :key="index"
          class="liStylenone liPointer marb10"
          @click="changeMenu(item.name)"
        >
          <b :class="cont == item.name?'ft-blue':'ft-black'">{{ item.name }}</b>
        </li>
      </ul>
     </el-col>
    <el-col :span="18">
      <div v-html="cont"></div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import globalTitle from '../globalTitle.vue'
export default {
  name: 'introduce',
  components: {
    globalTitle
  },
  data() {
    return {
      cont:'',
      menuList: [
        { name: '简介' },
        { name: '章程' },
        { name: '组织机构' },
        { name: '工作职责' },
        { name: '专职人员' }
      ]
    }
  },
  mounted(){
    this.cont = this.menuList[0].name;
  },
  methods:{
    changeMenu(val){
      this.cont = val;
    },
  }
}
</script>
<style lang="less" scoped>

ul {
  width: 200px;
  li {
    background-color: rgb(242, 243, 245);
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
.ft-blue{
  color:rgb(9, 143, 252);
}
.ft-black{
  color: #000;
}
</style>