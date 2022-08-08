# 新闻网站

## 框架
### [Vue](https://v2.cn.vuejs.org/) [Vue-cli](https://cli.vuejs.org/zh/guide/) [Element](https://element.eleme.io/#/zh-CN)

## 推荐 IDE Setup

- [VS Code](https://code.visualstudio.com/)

## 目录
- src
  - assets 静态资源
  - components 页面
    - Administrator 后台页面
    - page 各导航栏页面
  - api 封装接口
  - plugins Element ui
  - utils 请求方法
  - enums 枚举对象
  - https 请求方法
  - views 首页部分区域
    - homePage 更多的公共组件
  
#### 安装教程

1.  ```npm install```

2.  导入数据库文件
    ```source .sql文件的绝对路径```

3.  部署jar包
    ```java -jar school-of-journalism-and-communication-website-0.0.1-SNAPSHOT.jar```
    (注意：关闭cmd运行窗口将会终止程序运行)

4.  运行项目
    ```npm run serve```

#### 使用说明
    请求路径改为/login，即http://localhost:8080/#/login，即可进入登录界面，输入用户名和密码即可进入管理员界面

## 预览
![主页](./src/assets/preview/home.jpg)
![概况](./src/assets/preview/info.jpg)
![文件](./src/assets/preview/file.jpg)
![登录](./src/assets/preview/login.jpg)
![后台](./src/assets/preview/backstage.jpg)
![修改](./src/assets/preview/xiugai.jpg)
![注册](./src/assets/preview/zhuce.jpg)
