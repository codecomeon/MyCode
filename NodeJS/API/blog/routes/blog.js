var express=require('express');
var router=express.Router();
var Blog=require('../modules/blog');
var jwt=require('jsonwebtoken');
var db=require('./db');

router.get('/',function(req,res){
    db.open().then((con)=>{
        db.close(con);
        res.json({
            code:0,
            msg:'欢迎使用WPH开发的博客接口'
        });
    }).catch((err)=>console.error(err));
});

router.get('/get',(req,res)=>{
    db.open().then((con)=>{
       if(!req.query.title){
            Blog.find({},(err,result)=>{
                db.close(con);
                res.json({
                    code:0,
                    msg:'获取到所有的博文',
                    data:result
                });
            });
        }
    });
});

router.put('/put',(req,res)=>{
    var {title,body,author,comments,tags,date,hidden,meta}=req.body;
    if(!author) author=req.decoded.name;
    if(title && body && author){
        let blog=new Blog({title,body,author,comments,tags,date,hidden,meta});
        db.open().then((con)=>{
            blog.save((err,result)=>{
                db.close(con);
                if(err) console.error(err);
                res.json({
                    code:0,
                    msg:'博文保存成功'
                });
            });
        });
    }else{
        res.json({
            code:1,
            msg:'标题、内容、作者这三项是必填项'
        });
    }
});

module.exports=router;