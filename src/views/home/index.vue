<template>
  <div class="hello">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <SayHello msg="mock demo" />
    <button @click="get">get data</button> |
    <button @click="gets">get data list</button>
    <div>
      <h3>result</h3>
      <label>{{data}}</label>
    </div>
  </div>
</template>

<script>
import SayHello from "@/components/home/say-hello.vue";
import { getData, getDatas } from "@/api/data.js";
export default {
  components: {
    SayHello,
  },
  data() {
    return {
      data: null
    }
  },
  methods: {
    get() {
      getData({
        id: 123,
      }).then((res) => {
        this.data = res.data;
        console.log(res.data);
      });
    },
    gets() {
      getDatas({
        id: 123,
        name: "test",
      }).then((res) => {
        this.data = res.data;
        console.log(res.data);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
