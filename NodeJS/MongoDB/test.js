var MongoClient=require('mongodb').MongoClient,
    Server=require('mongodb').Server;

var db_connect_str='mongodb://localhost:27017/test';

var insertData=function (db,callback) {
    var collection=db.collection('users');
    var data = [{_id:7,"name":'rose',"age":21},{_id:8,"name":'mark',"age":22}];
    collection.insert(data, function(err, result) {
        //如果存在错误
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        //调用传入的回调方法，将操作结果返回
        callback(result);
    });
};

MongoClient.connect(db_connect_str,function (err,db) {
    console.log('连接成功');
    insertData(db,function (result) {
        console.log(result);
        db.close();
    })
});