

var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function () {
	console.log('connected');

	eventEmitter.emit('data_received');
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function (){
	console.log('hide of function here');
});

eventEmitter.emit('connection');

console.log('program successed');
//out put here
//connected
//hide of function here
//program successed

