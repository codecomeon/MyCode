var http=require('http');
var url=require('url');
var util=require('util');

http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end(util.inspect(url.parse(req.url,true)));
    //http://localhost:3000/user?name=wph&email=byvoid@byvoid.com
    //返回中query键就是需要的查询对象
}).listen(3000);