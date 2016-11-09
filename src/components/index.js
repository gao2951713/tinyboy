 import ReactDOM from 'react-dom'
 import React from 'react'
 let App = React.createFactory(require('./Module'));

ReactDOM.render(App(window.APP_PROPS), document.getElementById('content'))
