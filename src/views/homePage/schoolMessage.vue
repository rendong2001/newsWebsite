<template>
  <div>
    <span>schoolMessage</span>
    <p>{{ this.$route.query.title }}</p>
  </div>
</template> 
<script>
export default {
  name:'schoolMessage',
  data(){
    return {

    }
  },
  created(){
    console.log(">>>>>>>>",this.$route.params.id);
  }
}
</script>
<style>

</style>