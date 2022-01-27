<template>
  <div class="hello">
    <img alt="Vue logo" src="@/assets/logo.png">
    <SayHello msg="router demo" />
    <router-link to="/page1">page 1</router-link> |
    <button @click="toPage(2)">page 2</button> |
    <button @click="toPage(3)">page 3</button>
  </div>
</template>

<script>
import SayHello from '@/components/home/say-hello.vue'
export default {
  components: {
    SayHello
  },

  methods: {
    toPage(num) {
      this.$router.push('/page' + num)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
