<template>
  <div>
    <a href="javascript:" class="item" v-for="item in con" :text="item.text" @click="changeit(item.text)">{{ item.text }}</a>
  </div>
</template>

<script>
  export default {
    name: 'itemlist',
    props: ['con'],
    data () {
      return {
        text: '跳转到测试页面'
      }
    },
    methods: {
      changeit (data) {
        this.$emit('sechange', data)
      }
    }
  }
</script>
