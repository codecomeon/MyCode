var express=require('express');

var app=express.createServer().listen(3000);
app.use(express.bodyParse());
app.all('/',function (req,res) {
    res.send(req.body.title+req.body.text);
});