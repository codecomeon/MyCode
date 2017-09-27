<template>
  <div class="active">这是{{ txt }}</div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
        txt: '测试啊啊啊啊啊'
      }
    }
  }
</script>

<style scoped>
  .active{
    font-size:22px;
    font-weight:bold;
  }
</style>
