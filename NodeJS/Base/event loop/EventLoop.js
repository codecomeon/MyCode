var events=require('events');
var eventEmitter= new events.EventEmitter();

var connectHandler=function () {
    console.log('连接成功');
    setTimeout(function () {
        eventEmitter.emit('data_received');
    },5000);
    console.log('请等待5秒');
};

eventEmitter.on('connection',connectHandler);
eventEmitter.on('data_received',function () {
    console.log('数据接收成功');
});

eventEmitter.emit('connection');

console.log('程序执行完毕');