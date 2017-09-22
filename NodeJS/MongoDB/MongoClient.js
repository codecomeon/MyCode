var MongoClient=require('mongodb').MongoClient;

var DB_CONN_STR='mongodb://localhost/test';

function insertData(db,cb) {
    var kittens=db.collection('kittens');
    var data={name:'shi',age:'1'};
    kittens.insert(data,function (err,result) {
        //remove\find\update
        if(err) {
            console.error(err);
        }
        cb(result);
    })
}

MongoClient.connect(DB_CONN_STR,function (err,db) {
    if(err) console.error(err);

    insertDate(db,function (result) {
        console.log(result);
    });
});