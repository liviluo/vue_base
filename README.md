# vuex-store demo

## 简介
使用vuex管理状态

## 步骤
1. 安装依赖
```
npm install vuex@next --save
```
2. 在项目的src目录下新建store文件夹，然后在store目录下新建index.js
```
//index.js
import { createStore } from 'vuex'
import user from './modules/user'
import car from './modules/car'
import getters from './getters'
const store = new createStore({
  modules: {
    user,
    car
  },
  getters
})
export default store
```
```
//user.js
const user = {
  state: {
    name: '王富贵',
    age: '',
    sex: ''
  },

  mutations: {
    SET_USER: (state, data) => {
      state.name = data.name
      state.age = data.age
      state.sex = data.sex
    },
  },

  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)
    },
  }

}
export default user
```
```
//getters.js
const getters = {
  userName: state => state.user.name,
  carName: state => state.car.name,
}
export default getters
```

3. 在main.js中将 store 对象挂载到 vue 实例中
```
import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';
createApp(App)
  .use(store)
  .mount('#app');
```
4. state，getters
```
this.$store.state.user.age
this.$store.getters.userName
```
5. action
```
this.$store.dispatch('setUser', this.user).then(() => {
console.log("update user success");
})
```

