<template>
  <div class="hello">
    <img alt="Vue logo" src="@/assets/logo.png">
    <SayHello msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import SayHello from '@/components/home/say-hello.vue'
export default {
  components: {
    SayHello
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
