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
    let {title,body,author,comments,tags,date,hidden,meta}=req.body;
    if(!author) author=req.decoded.name;
    if(title && body && author){
        let blog=new Blog({title,body,author,comments,tags,date,hidden,meta});
        db.open().then((con)=>{
            blog.save((err,result)=>{
                db.close(con);
                if(err) console.error(err);
                res.json({
                    code:0,
                    msg:'博文添加成功'
                });
            });
        });
    }else{
        res.json({
            code:1,
            msg:'博文添加失败：标题(title)、内容(body)、作者(author)这三项是必需字段'
        });
    }
});

router.post('./update',(req,res)=>{
    let {title,author,updateItem}=req.body;
    if(title && author){
        if(updateItem){
            Blog.findOneAndUpdate({title,author},updateItem,(err,result)=>{
                if(err) console.error(err);
                console.log(result);
                res.json({
                   code:0,
                   msg:'博文更新成功，分别更新了这几项：'+[].push 
                });
            });
        }else{
            res.json({
                code:1,
                msg:'博文更新失败：没有提供要更新的项'
            });
        }
    }else{
        res.json({
            code:1,
            msg:'博文更新失败：标题(title)和作者(author)是必需字段~' 
        });
    }
});

module.exports=router;