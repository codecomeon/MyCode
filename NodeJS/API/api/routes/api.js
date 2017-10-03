var express=require('express');
var router=express.Router();
var customer=require('../db/customer');
var document=require('../db/document');

router.get('/usr',function (req,res) {
    var query=req.query;
    customer.open(function (con) {
        customer.login(query.name,query.password,function (loginCode) {
            customer.close(con);
            if(loginCode===0){
                res.json({code:0,msg:'登录成功'});
                res.end();
            }else if(loginCode===1){
                res.json({code:1,msg:'用户名或密码错误'});
                res.end();
            }
        });
    });
});

router.post('/usr',function (req,res) {
  var body=req.body;
  customer.open(function (con) {
    customer.register(body.name,body.password,body.info,function (code) {
      customer.close(con);
      if(code===0){
        res.json({code:0,msg:'注册成功'});
        res.end();
      }else if(code===1){
        res.json({code:1,msg:'用户名被占用'});
        res.end();
      }
    });
  });
});

router.get('/doc',function (req,res) {
    var query=req.query;
    document.open(function (con) {
      if(query.title){
        document.getDoc(query.title,function (result) {
          document.close(con);
          res.end('获取到 '+query.title+' 该标题下的内容');
        });
      }else{
        document.getAllDoc(function (result) {
          document.close(con);
          res.end('获取到所有内容了');
        });
      }
    });
});

router.post('/doc',function (req,res) {
  var body=req.body;
  if(req.body.status==='add'){
    document.open(function (con) {
      document.addDoc(body.title,body.content,function (result) {
        document.close(con);
        if(result===1){
          res.json({code:1,msg:'该标题已存在'});
          return res.end();
        }
        res.json({code:0,msg:'保存成功'});
        res.end();
      });
    });
  }else if(req.body.status==='addit'){
    document.open(function (con) {
      document.addPara(body.title,body.content,function (result) {
        document.close(con);
        // if(result===0){
          res.json({code:0,msg:'添加条目成功'});
          res.end();
        // }
      })
    });
  }else {
      res.end(JSON.stringify(req.body.status)+'操作错误，请联系API开发人员');
  }
});
module.exports=router;