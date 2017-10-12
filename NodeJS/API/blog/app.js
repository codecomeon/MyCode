var fs = require('fs');
var path = require('path');

var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var config = require('./config');
var blog = require('./routes/blog');
var category = require('./routes/category');
var user = require('./routes/user');

// -----  测试 -----
//开启连接
// var db = require('./routes/db');
//这里采用默认的连接，不指定具体数据库
//此处a.connection._readyState：'0': 'disconnected','1': 'connected','2': 'connecting','3': 'disconnecting','4': 'unauthorized','99': 'uninitialized',
// db.open(...[,(a)=>(console.log('连接成功：\n'),db.close(),console.log('断开连接：\n'))]);
// db.open().then((con)=>db.close(con));
// ----- 测试结束 -----

var app = express();
var port = process.env.port || 8080;
// 定义超级密码
app.set('super', config.secret);

//用morgan开启日志写入
var accessStream = fs.createWriteStream(path.join(__dirname, '/log/access'+Date.parse(new Date())/1000+'.log'), {flag: 'a'});
app.use(morgan('dev', {stream: accessStream}));

// body解析
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 开启跨域权限
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//路由部分
app.use('/user', user);

//为后面所有操作提供保护--验证token
app.use(function(req,res,next){
    var token=req.query.token || req.body.token || req.headers.token;

    if(!token){
        return res.status(403).json({
            code:1,
            msg:'连接没有提供token'
        });
    }
    jwt.verify(token,app.get('super'),function(err,decoded){
        if(err) {
            return res.json({
                code:1,
                msg:'不好意思，您的token不合法'
            });
        }
        req.decoded=decoded;
        next();
    });    
});

app.use('/blog',blog);
app.use('/cat',category);

//错误处理
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json({
        code:2,
        msg:'出现巨大错误~'
    });
});
app.listen(port);
console.log('WPH开发的API服务已开启~~');