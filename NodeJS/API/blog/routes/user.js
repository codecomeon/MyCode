var express=require('express');
var router=express.Router();
var jwt=require('jsonwebtoken');
var secret=require('../config').secret;
var User=require('../modules/user');

router.get('/',function(req,res){
    res.json({
        code:666,
        msg:'欢迎使用WPH开发的接口'
    });
});

router.post('/login',function(req,res){
    var {name,password}=req.body;
    if(name && password){
        User.findOne({name:name},function(err,user){
            if(err) console.error.call(console,"这里数据库查询发生了错误");
            if(!user){
                return res.json({
                    code:1,
                    msg:'不好意思，您的用户名不存在'
                });
            }
            var token=jwt.sign({
                name:user.name,
                password:user.password,
                admin:user.admin
            },secret,{expiresIn:'2 days'});
            res.json({
                code:0,
                msg:'登录成功，真不容易啊~~',
                admin:admin?'管理员登录':'普通用户登录',
                token:token
            });            
        });
    }else{
        res.json({
            code:1,
            msg:'提供的登录信息不完整'
        });
    }
});

router.post('/reg',function(req,res){
    var {name,password,admin}=req.body;
    if(name && password && admin){
        let user=new User({name,password,admin});
        User.findOne({name:name},function(err,user){
            if(err) console.error.call(console,'这里发生的错误是:');
            if(user){
                return res.json({
                    code:1,
                    msg:'不好意思，用户名已存在'
                });
            }
           user.save(function(err,result){
              if(err) console.error.call(console,'这里有发生一个错误');
              res.json({
                 code:0,
                 msg:'这里应该是注册成功了~',
                 admin:admin?'管理员组':'普通用户组'
              });  
           });
        });
    }else{
        res.json({
            code:1,
            msg:'不好意思，您提供的信息不正确'
        });
    }
});

module.exports=router;