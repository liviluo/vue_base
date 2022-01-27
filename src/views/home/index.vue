<template>
  <div class="hello">
    <img alt="Vue logo" src="@/assets/logo.png">
    <SayHello msg="router demo" />
    <router-link to="/about">about</router-link> |
    <button @click="toPage('page')">page</button>
  </div>
</template>

<script>
import SayHello from '@/components/home/say-hello.vue'
export default {
  components: {
    SayHello
  },

  methods: {
    toPage(path) {
      this.$router.push(path)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
