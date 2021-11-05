<template>
  <div>
    <span>noticeMessage</span>
    <p>{{ this.$route.query.title }}</p>
    <div v-html="message"></div>
  </div>
</template>
<script>
export default {
  name:'noticeMessage',
  data(){
    return {
      message:''
    }
  },
  created(){
    console.log(">>>>>>>>",this.$route.query.title);
    this.queryAll();
  },
  methods:{
    queryAll(){
      this.message = `<div class="detail_wbtext_4CRf9"><a href="//s.weibo.com/weibo?q=%23%E5%88%9B%E6%96%87%E5%BC%80%E5%B0%81%E5%85%A8%E6%B0%91%E6%80%BB%E5%8A%A8%E5%91%98%23" target="_blank">#创文开封全民总动员#</a>【 “创文”标识牌亮街头 传递文明正能量】11月3日，记者在街头看到，大梁路新增一处“创文”标识牌，新颖的造型和绚丽的色彩引人注目，让市民感受到文明风尚的热潮，并时刻提醒着大家要注重文明行为，文明就在你我身边。（全媒体记者：姜菡 ）<a href="//s.weibo.com/weibo?q=%23%E5%BC%80%E5%B0%81%E5%BC%80%E5%B0%81%E5%BC%80%E8%B7%AF%E5%85%88%E9%94%8B%23" target="_blank">#开封开封开路先锋#</a> ​​​</div>`
    }
  }
}
</script>
<style>

</style>