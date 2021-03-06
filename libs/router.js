
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
	browserify = require("browserify"),
	watchify = require('watchify'),
	literalify = require('literalify'),
	uglify = require('uglify-js'),

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
 * 基础方法GET,将get请求的方法实现存入路由对象gobj中。
 * @method get
 * @param {String} url 请求的入口路径
 * @param {Function} fn 回调函数，为请求方法的实现
 * @param {Object} params 隐藏参数。get请求入参，默认，可直接使用。
 *
 */
$.get = function (url,fn) {
	gobj[url] = fn;
}

/**
 * 基础方法POST,将get请求的方法实现存入路由对象gobj中。
 * @method post
 * @param {String} url 请求的入口路径
 * @param {Function} fn 回调函数，为请求方法的实现
 * @param {Object} params 隐藏参数。post请求入参，默认，可直接使用。
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
 *
 * 基础方法,http请求解析后的路由跳转，请求到对应的处理方法。
 * @method route 
 * @param {String} pathname 请求路由
 * @param {Object} req 客户端请求，做为回调函数的参数。
 * @param {Object} res 服务器端响应,做为回调函数的参数。
 *
 */
$.route = function (pathname,req,res) {
	
	// 判断请求路由室否为get方法。	
	// 如果在路由对象gobj中获取到对应的Function的话，
	// 执行，并传入req，res对象作为参数。
	// todo 如果没有取到对应的实现方法，判定为非法请求。进入非法请求处理。
	if(req.method.toLowerCase() == "get") {
		if(pathname in gobj) {
			/**
			 *
			 * 也可使用var query=qs.parse(url.parse(req.url).query);
			 * 区别就是url.parse的arguments[1]为true：
			 * ...也能达到‘querystring库’的解析效果，而且不使用querystring
			 */
			let query = url.parse(req.url,true).query;
			gobj[pathname](req,res,params= query);
		}
	}
	// 判断请求路由是否为post方法。	
	// 如果在路由对象pobj中获取到对应的Function的话，
	// 执行，并传入req，res对象作为参数。
	if(req.method.toLowerCase() == "post") {
		if(pathname in pobj) {
			pobj[pathname](req,res);
		}
	}

	console.log("this is a route"+pathname);

}

$.bundle=function (b,outFolder,outFile) {
	b.bundle()
	b.pipe(uglify.minify({ outSourceMap: "out.js.map", sourceRoot: outFolder }))
	b.pipe(fs.createWriteStream(outFolder+outFile));
  // b.bundle().pipe(fs.createWriteStream('output.js'));
}

/**
 *
 * 基础方法,ES6语法的js源文件转换为ES5并写入http响应。
 * @method transform 
 * @param {Array} arrSrc 需要合并的js源文件数组。
 * @param {Object} req request对象
 * @param {Object} res response对象
 *
 */
$.transform=function(arrSrc,req,res) {
	let b= browserify();
	 for(a in arrSrc) {
	 //   // 添加源文件
	    b.add(arrSrc[a]);
	 }
	  b.transform("babelify", {presets: ["es2015", "react"]})
      b.transform(literalify.configure({
        'react': 'window.React',
        'react-dom': 'window.ReactDOM',
      }))
      b.bundle().pipe(res)
}
/**
 *
 * 基础方法,ES6语法的js源文件转换为ES5并写入磁盘。
 * @method transform 
 * @param {Array} arrSrc 需要合并的js源文件数组。
 * @param {String} outFolder 输出文件的输出路径。
 * @param {String} outFile 输出文件的文件名带文件后缀，要求为js文件。
 *
 */
// $.transform=function(arrSrc,outFolder,outFile) {
// 	var b =browserify({
// 	  entries: ['index.js'],
// 	  cache: {},
// 	  packageCache: {}
// 	});
// 	// 添加ES6转换
// 	b.transform("babelify", {presets: ["es2015", "react"]})
// 	b.transform(literalify.configure({
// 	'react': 'window.React',
// 	'react-dom': 'window.ReactDOM',
// 	}))
// 	b.plugin(watchify)
// 	b.on('update', $.bundle)
// 	for(a in arrSrc) {
// 	  // 添加源文件
// 	  b.add(a);
// 	}
// 	  
// }

module.exports.$ = $;
module.exports.gobj = gobj;
module.exports.pobj= pobj;
