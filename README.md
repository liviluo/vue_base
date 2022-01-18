# axios demo

## 简介
使用axios跨域发请求。浏览器发请求到前端服务器，属于同一个域(所以浏览器发请求不存在跨域问题)，后端请求由前端服务器转发。在部署到nginx的时候需要配置转发后端的地址，把前端的api请求转发到后端

## 步骤
1. 添加axios
```
npm install axios --save
```
2. 跨域配置（创建或者修改vue.config.js）
```
module.exports = {
  // see https://cli.vuejs.org/config/#devserver-proxy
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9001',
        changeOrigin: true, // 允许跨域
        ws: true
      }
    }
  }
};
```

## 部署配置（nginx）
后续更新...

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


