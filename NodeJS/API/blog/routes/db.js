var mongoose=require('mongoose');
const CON = require('../config').con;

var handler={};

handler.open = function(collection){
    var db = mongoose.connection;
    db.on('error',console.error.bind(console,'连接数据库发生错误：'));
    db.once('connected',()=>console.log('数据库连接成功~'));
    db.once('close',()=>console.log('数据库连接关闭'));
    return mongoose.connect(CON+(collection?('/'+collection):'')).then(
        () => { return db; },
        (err) => { console.error(err); }
    );
};

handler.close = function(connection){
    connection.close();
};

module.exports=handler;