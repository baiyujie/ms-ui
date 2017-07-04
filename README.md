## 目录结构说明
```
│  package.json   //项目依赖模块描述文件
│  README.md
│  utils.js  //编译打包配置文件
│  webpack.config.js  //编译打包配置文件
│  
├─dist //后台同事只使用这个文件夹里面的内容
│  ├─lib   //兼容IE8的第三方js库
│  │      
│  ├─static  //编译处理后的资源文件，包含css\img\js
│  │
│  ├─index.html   //首页
│  │
│  ├─list.html   //搜索列表页面
│  │
│  ├─building.html   //大厦详情
│  │
│  ├─room.html   //户型详情
│  │
│  ├─entrust.html   //委托找房
│  │
│  ├─delivery.html   //投放房源
│  │          
├─src   //前端开发过程中的源码，请后台同事直接忽略
│──├─assets   //前端开发过程中的相关资源（css , js , img）
│  │      
│  ├─components //前端开发过程中的相关模块
│  │      
│  └─pages  //前端开发过程中的html模板
│          
├─lib  //兼容IE8的第三方js库
│      
└─node_modules  //前端开发依赖的包，请后台同事直接忽略

```
tip: node-sass安装失败解决办法(npm i node-sass --sass_binary_site=https://npm.taobao.org/mirrors/node-sass)
