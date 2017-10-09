var mysql=require('mysql');
var con=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'mydb'
});

con.connect(function () {
  console.log('数据库连接成功');
});

var query='SELECT * FROM tongxue WHERE xingming = "小明"';
query='insert into tongxue (xingming,qqhao,shoujihao,youxiao) values ("翁~","493021707","15267053970","493021707@qq.com")';
query='update tongxue set xingming = "wph" where xingming = "翁~"';

con.query(query,function (err,results,fields) {
  if(err) console.error.call(console,'这个错误是');
  console.log(results);
});

con.end(function () {
  console.log('数据库连接断开');
});