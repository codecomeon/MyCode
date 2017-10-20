var http=require('http');
var querystring=require('querystring');
var util=require('util');

http.createServer(function (req,res) {
    if(req.url=='/favicon.ico') return;
    var postdata='';

    //最简单的处理post的方式，直接累加，然后转为post的数据体
    req.on('data',function (chunk) {
        postdata+=chunk;
    });

    req.on('end',function () {
        postdata=querystring.parse(postdata);
        res.end(util.inspect(postdata));
    });
}).listen(3000);