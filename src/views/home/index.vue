<template>
  <div class="hello">
    <img alt="Vue logo" src="@/assets/logo.png">
    <SayHello msg="vuex-store demo" />
    <div>
      <p>
        <span>current user：</span>
        <span>{{this.$store.getters.userName}}</span>
        <span>{{this.$store.state.user.age}}</span>
      </p>
      <p>
        <span>current car：</span>
        <span>{{this.$store.getters.carName}}</span>
        <span>{{this.$store.state.car.cost}}</span>
      </p>
    </div>
    <div>
      <span>user name：</span>
      <input v-model="user.name">
      <span>age</span>
      <input v-model="user.age">
    </div>
    <div>
      <span>car name：</span>
      <input v-model="car.name">
      <span>cost</span>
      <input v-model="car.cost">
    </div>
    <div>
      <button @click="save">save data</button>
    </div>
  </div>
</template>

<script>
import SayHello from '@/components/home/say-hello.vue'
export default {
  components: {
    SayHello
  },

  data() {
    return {
      user: {
        name: '',
        age: '',
        sex: ''
      },
      car: {
        name: '',
        model: '',
        cost: ''
      }
    }
  },

  methods: {
    save() {
      this.$store.dispatch('setUser', this.user).then(() => {
        console.log("update user success");
      })
      this.$store.dispatch('setCar', this.car).then(() => {
        console.log("update car success");
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
