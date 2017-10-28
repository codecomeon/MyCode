var fs=require('fs');

var str = '深入浅出 NodeJS';
var buf = new Buffer(str,'utf-8');
console.log(buf);

fs.appendFile('./Buffer随机.txt',new Buffer(1024).toString(),'utf-8');

