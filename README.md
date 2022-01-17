# axios demo

## 简介
使用axios跨域发请求，此方法通过vue模拟发起，不是直接通过浏览器发起

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


