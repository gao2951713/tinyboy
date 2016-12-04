
/**
 * #创建一个标准的http服务器。默认监听3000端口，启动命令node server.js。
 * 实现简单路由方法get和post。
 * 导入util模块，使用提供的工具方法。完成对象监控。方法原型继承。
 * @class Router
 * @author Vincent Gao
 */

    /**
     * nodejs 内置工具模块
     * @property {Object} util
     */
var util = require('util'),
    /**
     * nodejs 内置url地址解析模块
     * @property {Object} url
     *
     */
    url = require('url'),

    /**
     * @property {Object} $ 定义公共对象$,用来存放公共属性和方法的集合对象。
     */
    $={},
    /**
     * @property {Object} gobj 定义GET路由对象，存放路由对应的方法实现 gobj
     */
    gobj={},
    /**
     * @property {Object} pobj 定义POST路由对象，存放路由对应的方法实现 pobj
     */
    pobj={};


/**
 * 基础方法POST,将get请求的方法实现存入路由对象gobj中。
 * @method post
 * @param {String} url 请求的入口路径
 * @param {Function} fn 回调函数，为请求方法的实现
 *
 */
$.post = function(url,fn) {
	pobj[url] = fn;
}
/**
 * 基础方法，用于将对象以json字符串格式输出到控制台
 * @method inspect
 * @param {Object} obj 需要查看内容的对象
 *
 */
$.inspect = function(obj) {

 console.log(util.inspect(obj,true,3,true));
}

/**
 * 将属性添加到目标对象中
 * @param {Object} obj 目标对象
 * @param {Object} src 源对象
 *
 */
$.addRoute = function (get, post) {
  Object.keys(get).forEach(function (key) {
	      gobj[key] = get[key];
	});
  Object.keys(post).forEach(function (key) {
	      pobj[key] = post[key];
	});
}

/**
 * 基础方法GET,将get请求的方法实现存入路由对象gobj中。
 * @method get
 * @param {String} url 请求的入口路径
 * @param {Function} fn 回调函数，为请求方法的实现
 *
 */
$.get = function (url,fn) {
	gobj[url] = fn;
}
$.get('/',function(req,res){
		$.inspect(query);
		console.log("method get");
	});
function test() {
var param = {a:10,b:20,c:'aaa'}

	gobj["/"]({url:'/'},{},query = param);
}
test();


module.exports.$ = $;
module.exports.gobj = gobj;
module.exports.pobj= pobj;
