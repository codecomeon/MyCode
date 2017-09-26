var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var User=require('../models/user.js');

router.get('/',function (req,res) {
   res.render('reg',{title:'注册'});
});
router.post('/',function (req,res) {
    if(req.body['password-repeat']!=req.body.password){
       req.flash('error','两次输入的密码不一致');
       return res.redirect('/reg');
    }
    //生成MD5
    var md5=crypto.createHash('md5');
    var password=md5.update(req.body.password).digest('base64');

    var newUser=new User({
      name:req.body.username,
      password:password
    });

    User.get(newUser.name,function (err,user) {
      if(user){
         err='用户名已存在';
      }
      if(err){
         req.flash('error',err);
         return req.redirect('/reg');
      }
      newUser.save(function (err) {
          if(err){
             req.flash('error',err);
             return req.redirect('/reg');
          }
         req.session.user=newUser;
          req.flash('success','注册成功');
          req.flash('/');
      })
    });
});

module.exports=router;