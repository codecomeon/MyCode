<template>
  <div class="wrapper">
    <div class="item-box"
         v-for="item in list"
         :key="item.id">
      <span >{{ item.text }}</span>
      <p class="list">
        <itemlist :con="item.content" @sechange="changeit"></itemlist>
      </p>
    </div>
  </div>
</template>

<script>
  import itemlist from './itemlist.vue'
  export default {
    name: 'wordlist',
    props: ['list'],
    data () {
      return {
      }
    },
    components: {
      itemlist
    },
    methods: {
      changeit (data) {
        this.$emit('citychange', data)
      }
    }
  }
</script>
