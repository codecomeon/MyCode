var fs=require('fs');

//同步阻塞
// var data=fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log('Node程序执行结束');

//异步
fs.readFile('input.txt',function (err,data) {
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log('Node程序执行到末尾了~');