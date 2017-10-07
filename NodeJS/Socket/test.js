var http=require('http');

var server=http.createServer(function(req,res){
  res.end('你好');
});

var io=require('socket.io')(server);
io.on('connection',function (socket) {
  console.log('一个客户端正保持链接');
});
server.listen(3000);