var MongoClient=require('mongodb').MongoClient;

var DB_CON_STR='mongodb://106.15.197.186:28017/test';

MongoClient.connect(DB_CON_STR,function (err,db) {
   if(err) {
       console.log('报错了~~');
       console.error(err);
   }
   else{
       console.log('连接成功!');
   }
});