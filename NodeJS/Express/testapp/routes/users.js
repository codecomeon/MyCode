var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    res.send('这是test子页面导航');
});

router.get('/json123', function(req, res, next) {
    // res.writeHead(200,{
    //     'Access-Control-Allow-Origin':'http://localhost:3100'
    // });
    res.send(`{ name: '翁鹏辉',id:'1234',class:{name:123},number:[1,2,3] }`);
    // res.send('1');
});

module.exports = router;
