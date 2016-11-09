var React = require('react'),
ReactDOMServer = require('react-dom/server'),
App = React.createFactory(require('../components/Module')),
DOM = React.DOM, body = DOM.body, div = DOM.div, script = DOM.script;
/**
 * #创建一个标准的http服务器。默认监听3000端口，启动命令node server.js。
 * 实现简单路由方法get和post。
 * 导入util模块，使用提供的工具方法。完成对象监控。方法原型继承。
 * @class Module1
 * @author Vincent Gao
 */
var    $ = require("../../libs/router").$;
module.exports = function () {
	// 测试方法，添加get路由
	$.get('/',function(req,res){
		var html = ReactDOMServer.renderToStaticMarkup(body(null,
			  div({id: 'content', dangerouslySetInnerHTML: {__html:
			ReactDOMServer.renderToString(App())
		  }}),  
		  script({src: '//cdn.bootcss.com/react/15.4.0-rc.3/react.js'}),
		  script({src: '//cdn.bootcss.com/react/15.4.0-rc.3/react-dom.js'}),
				script({src: '/index.js'})
		))
	console.log(html);
    res.end(html)
		// $.inspect(arguments[2]);
		$.inspect(params);
		console.log(req.method+"\n");
		console.log("method get");
	});
	$.get('/bundle.js',function(req,res) {

		console.log("method bundle");
	});

	// 测试方法，添加post路由
	$.post("/",function(req,res){
		console.log(req.method+"\n");
		console.log("method post");
	});

}



