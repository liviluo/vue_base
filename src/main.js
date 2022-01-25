import { createApp } from 'vue'
import App from './App.vue'
import Mock from 'mockjs'
require('./mock')

createApp(App)
  .use(Mock)
  .mount('#app')
