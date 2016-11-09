
/**
 * #创建一个标准的http服务器。默认监听3000端口，启动命令node server.js。
 * 实现简单路由方法get和post。
 * 导入util模块，使用提供的工具方法。完成对象监控。方法原型继承。
 * @class Module1
 * @author Vincent Gao
 */
var    $ = require("./router").$;
module.exports = function () {
	// 测试方法，添加get路由
	$.get('/',function(req,res){
		console.log(req.method+"\n");
		console.log("method get");
	});

	// 测试方法，添加post路由
	$.post("/",function(req,res){
		console.log(req.method+"\n");
		console.log("method post");
	});

}



