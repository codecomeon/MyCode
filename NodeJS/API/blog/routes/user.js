var express=require('express');
var router=express.Router();
var jwt=require('jsonwebtoken');
var secret=require('../config').secret;
var User=require('../modules/user');
var db=require('./db');

router.get('/',function(req,res){
    db.open().then((con)=>{
        db.close(con);
        res.json({
            code:666,
            msg:'欢迎使用WPH开发的用户接口'});
    }).catch((err)=>console.error(err));
});

router.post('/login',function(req,res){
    var {name,password,admin}=req.body;
    if(name && password && admin){
        db.open().then((con)=>{
            User.findOne({name:name},function(err,user){
                db.close(con);       
                if(err) throw err;
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
        }).catch((err)=>console.error(err));
    }else{
        db.close(con);
        res.json({
            code:1,
            msg:'提供的登录信息不完整'
        });
    }
});

router.post('/reg',function(req,res){
    var {name,password,admin}=req.body;
    if(name && password && admin){
        db.open().then((con)=>{
            let user=new User({name,password,admin});
            User.findOne({name:name},function(err,result){
                if(err) throw err;
                if(result){
                    db.close(con);                  
                    return res.json({
                        code:1,
                        msg:'不好意思，用户名已存在'
                    });
                }
                user.save(function(err,result){
                  db.close(con);
                  if(err) console.error.bind(console,'这里有发生一个错误');
                  res.json({
                     code:0,
                     msg:'这里应该是注册成功了~',
                     admin:admin?'管理员组':'普通用户组'
                  });
               });
            });
        }); 
    }else{
        res.json({
            code:1,
            msg:'不好意思，您提供的信息不足'
        });
    }
});

module.exports=router;