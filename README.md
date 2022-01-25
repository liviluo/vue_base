# mock demo


## 简介
使用axios发请求，mock拦截请求并返回数据

## 步骤
1. 添加axios
```
npm install mockjs --save
```

2. 在mock文件夹下创建index.js，注册所有mock服务
```
// 首先引入Mock
const Mock = require('mockjs');
// 设置拦截ajax请求的相应时间
Mock.setup({
timeout: '200-600'
});
let configArray = [];
// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
if (key === './index.js') return;
configArray = configArray.concat(files(key).default);
});
// 注册所有的mock服务
configArray.forEach((item) => {
for (let [path, target] of Object.entries(item)) {
let protocol = path.split('|');
Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target);
}
});
```

3. 服务注册好之后，在main.js中引入
```
import { createApp } from 'vue'
import App from './App.vue'
import Mock from 'mockjs'
require('./mock')
createApp(App)
  .use(Mock)
  .mount('#app')
```

4. 模拟响应和数据，放在mock文件夹下的.js文件
```
const data = {
  status: 200,
  message: 'success',
  data: {
    id: 1,
    name: '王富贵',
    age: '23',
    job: '前端工程师'
  }
};
const datas = {
  status: 200,
  message: 'success',
  data: {
    total: 100,
    'rows|10': [{
      id: '@guid',
      name: '@cname',
      'age|20-30': 23,
      'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师']
    }]
  }
};
export default {
  'get|/api/data': data,
  'post|/api/datas': datas
}
```



