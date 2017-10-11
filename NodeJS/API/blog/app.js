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

var app = express();
var port = process.env.port || 8080;
app.set('超级密钥', config.superKey);

//用morgan开启日志写入
var accessStream = fs.createWriteStream(path.join(__dirname, '/log/access.log', {flag: 'a'}));
app.use(morgan('dev', {
    stream: accessStream
}));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 开启跨域权限
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//路由部分
app.use('/user', user);

//为所有操作提供保护--验证token
app.use(function(req,res,next){
    var token=req.query.token || req.body.token || req.headers.token;

    if(!token){
        return res.status(403).json({
            code:1,
            msg:'连接没有提供token'
        });
    }
    jwt.verify(token,app.get('超级密钥'),function(err,decoded){
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
    res.render('error');
});
app.listen(port);
console.log('WPH开发的API服务已开启~~');