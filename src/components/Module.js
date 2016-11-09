var React = require('react');
let    DOM = React.DOM, form = DOM.form,textarea = DOM.textarea,input = DOM.input, div = DOM.div, button = DOM.button, ul = DOM.ul, li = DOM.li

// This is just a simple example of a component that can be rendered on both
// the server and browser

module.exports = React.createClass({
	
	propTypes: {
		// 定义静态属性。并做类型检查。
		name:React.PropTypes.string
	},
	getDefaultProps: function() {
		// 实例化时执行
		// 给非状态机属性赋初始值
		console.log("getDefaultProps");
		return {
			name : 'Mary'
		};
	},
	getInitialState: function() {
		// 实例化时执行
		// 定义状态机对象并赋初始值
		console.log("getInitialState");
		return {text : this.props.name};
	},
	componentWillMount: function() {
		// 执行完 getInitialState 方法后执行
		// 在渲染页面前的处理
		console.log("componentWillMount");
	},
	componentWillUpdate: function() {
		
	},
	
	onClick : function (event) {
	  console.log(event); // => nullified object.
	  console.log("onClick");
	},
	handleTextChange: function(e) {
		console.log("handleTextChange");
		// 这种格式是异步修改text属性值。
		this.setState({text:e.target.value});
		// 这种格式是实时取得text属性值。
		this.setState(function(prevState, props){
		  // counter: prevState.counter + props.increment
			 console.log(prevState.text);
			 console.log(props.text);
		});
		// 得到的是本次修改前的值
		console.log(this.state.text);
	},
	handleSubmit:function() {
		console.log("handleSubmit");
		console.log(this.state.text);
		return false;
		
	},
	render: function() {
		// 执行完 componentWillMount方法后执行
		// 将虚拟结点渲染到真实DOM结点上
		console.log("render");
	return form(
			{className:'commentForm' ,onSubmit:this.handleSubmit},
			input({type:'input',onPaste:function (){return false}}),
			textarea({type:'text',title:'请输入标题',onClick:this.onClick}),
			textarea({type:'text',id:'mde',title:'请输入文本内容',onChange:this.handleTextChange,defaultValue:this.props.name}),
			input({type:'submit',value:'POST'})
		)
	},
	componentDidMount:function(){
		// 调用render方法渲染完后执行
		// 在页面渲染完成后的一些处理
		console.log("componentDidMount");
		console.log(this.state.text);
	},
	componentWillUnmount:function(){
		//将要销毁控件时执行
		// 销毁前的清理工作在这里执行。
		console.log("componentWillUnmount");
	},
	componentWillReceiveProps:function() {
	}
});
