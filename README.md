# vue_base

## 操作
- 安装依赖
```
npm install
```

-  运行
```
npm run serve
```

- 打包
```
npm run build
```

### 其他
如果部署到带有前缀的路径下，打包时需要修改`vue.config.js`的`publicPath`。否则无法找到文件路径
```
module.exports = {
  publicPath: './',
}
```

