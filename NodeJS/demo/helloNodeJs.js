var http=require('http');
var url=require('url');
var querystring=require('querystring');

var server=http.createServer(function (require,response) {
    response.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge'));
    console.log(querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null, { decodeURIComponent: gbkDecodeURIComponent }));
    response.end('这是用于测试Nodejs的文件');
});

server.listen(3000,'127.0.0.1');