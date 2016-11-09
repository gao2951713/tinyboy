# tinyboy
学习nodejsAPI并自己动手写一个web网站的记录。从nodejs开始。后续学习reactjs。模拟实战建站需求。
### 模块结构简述
~~~
│─events.js		
│─index.js		# 程序入口，负责模块调用，启动服务器。
│─router.js		# 路由器，get请求，post请求路由的实现
│─server.js		# 标准的创建服务器操作。将请求交给路由处理方法，完成路由调度。
│  
└─controller	# 存放所有控制层路由定义。
  └─ module1.js		# 添加/路径访问时的get。post请求示例。供模块扩展参考。在index.js中使用。
~~~