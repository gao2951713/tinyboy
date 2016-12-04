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
### 添加nodemon模块
添加该进程守护模块，添加demon命令，输入`npm run demon`执行监听，默认监听src和libs文件夹内的一切文件变动。
默认开启debug和watch,经测试，不能使用es6的import关键字来引入模块。
添加功能。router.js中的get方法默认取得请求参数列表
### 添加supervisor模块
添加改模块后，取消nodemon模块的监听命令，直接输入`supervisor index.js`即可实现对整个工程的监听，当有文件修改后，实现自动重启应用操作。添加前后端公用代码转换模块`broswerify babelify`实现开发阶段单页面对应的单个js模块的加载。避免全部js打包到同一模块，使动态打包模块臃肿。 
### 待续
添加post方法参数取得。
测试react的es6语法格式。
zlib压缩传输http。智能合并打包css。images。
动态文件缓存策略,静态资源缓存策略.
引入react router
