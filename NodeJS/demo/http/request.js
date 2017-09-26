var http=require('http');
var url=require('url');
var util=require('util');

var server=new http.Server().listen(3000);
server.on('request',function (req,res) {
    //内部的处理函数，解析url中的查询参数并返回每一个req的键值
    if(req.url!='/favicon.ico'){
        res.writeHead(200,{'Content-type':'text/html','charset':'utf-8'});
        var query = url.parse(req.url,true);
        for(var k in query.query){
            res.write("<h3>"+k+" : "+(util.inspect(req[k]))+"</h3>");
        }
        res.end('<span>Analyse ended~</span>');
    }
});
//http://localhost:3000/user?method&complete&httpVersion&url&headers&trailers&connection&socket&client