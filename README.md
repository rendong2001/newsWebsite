# 简单的新闻网站

#### 介绍
此项目是学校新闻与传播学院的网站设计（第一次做的前后端分离项目）
前端：Vue + Element-UI 后端：Spring Boot + ...
采用前后端分离的思想，后端提供一系列API接口服务，前端通过axios请求相应的数据并进行展现。完成对新闻（可含图片）的添加，修改，查找，删除

#### 软件架构
软件架构说明
将仓库地址从HTTPS 改为了 SSH

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

