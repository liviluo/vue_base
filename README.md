# router demo

## 简介
使用vue router进行页面跳转

## 步骤
1. 添加axios
```
npm install vue-router@4
```
2. 配置/src/router/index.js
```
import { createRouter, createWebHistory } from "vue-router"
const routers = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: () => import('@/views/home/index'),
  },
  {
    path: '/page1',
    component: () => import('@/views/page/page1')
  },
  {
    path: '/page2',
    component: () => import('@/views/page/page2')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes: routers
})
export default router;
```

3. 在main.js中将 router 对象挂载到 vue 实例中
```
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
createApp(App)
  .use(router)
  .mount('#app')
```

4. router-view 用于渲染匹配到的组件
```
<router-view />
```

## 跳转方法
- router-link
```
<router-link to="/page1">page 1</router-link>
```

- this.$router.push()
```
this.$router.push('/page1')
```
