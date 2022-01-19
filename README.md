# axios demo

## 简介
使用axios直接在浏览器发起跨域的请求，baseURL直接设置后端地址，不需要在vue.config.js设置proxy。跨域请求操作直接由浏览器发起，不经过前端服务器转发。只需要在后端服务器配置跨域即可，参考：[springboot后端跨域配置](https://gitee.com/liviluo/base_tools/tree/cros/)

## 步骤
1. 添加axios
```
npm install axios --save
```
2. baseURL直接设置后端地址
```
import axios from 'axios';

export default axios.create({
  timeout: 5000,
  baseURL: 'http://localhost:9001/'
});
```

## 其他说明
- GET方法
```
axios.post('/api/data', data)
```

- POST方法
```
axios.get('/api/data', {
params: data
})
```


