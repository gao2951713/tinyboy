var server = require('./libs/server'),
    // 导入路由工具模块
    router = require('./libs/router'),
    $ = router.$,
    get = router.gobj,
    post = router.pobj;
    // 业务模块1。 执行路由添加方法。将路由加载到全局变量中
    require('./src/controller/module1')();
    require('./src/controller/resource')();
// $.addRoute(module1.gobj,module1.pobj);
// $.inspect(get);

// 启动服务器监听
server.start($.route);

