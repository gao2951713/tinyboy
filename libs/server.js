
/**
 * #创建一个标准的http服务器。默认监听3000端口，启动命令node server.js。
 * 实现简单路由方法get和post。
 * 导入util模块，使用提供的工具方法。完成对象监控。方法原型继承。
 * @class Server
 * @author Vincent Gao
 */
/**
 * nodejs 内置http模块
 * @property {Object} http 
 * @property {Object} http.createServer(fn) 创建http对象的方法。
 */
var http = require('http'),


    /**
     * nodejs 内置工具模块
     * @property {Object} util
     */
    //$ = require('./router').$,
    /**
     * nodejs 内置url地址解析模块
     * @property {Object} url
     *
     */
    url = require('url');
/**
 * 定义http服务器的请求入口方法。request,为http请求。response 为服务器响应http请求的响应对象。
 * @method reqmethod
 * @param {Object} request 客户端请求
 * @param {Object} response 服务器端响应
 *
 */
module.exports.start = function (route){
	function onRequest(request,response) {

	var pathname = url.parse(request.url).pathname;
	route(pathname,request,response);
//	$.inspect(pathname);
//	response.writeHead(200,{'Content-Type' : 'text/plain'});

//	response.end('helo world \n');
	}

	http.createServer(onRequest).listen(3000);
	console.log('server start at localhost:3000/')
}
