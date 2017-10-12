var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var morgan=require('morgan');
var fs=require('fs');
var path=require('path');
var mongoose=require('mongoose');
var jwt=require('jsonwebtoken');
var config=require('./config');
var User=require('./app/models/user');

var port= process.env.port || 8080;
mongoose.connect(config.database);
app.set('superSecret',config.secret);

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

var accessStream=fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});
app.use(morgan('dev',{stream:accessStream}));

// app.all('*',function(req,res,next){
//    res.header('Access-Control-Allow-Origin','*');
//    next(); 
// });

app.get('/',function(req,res){
    res.send('Hello~'+port);
});

app.get('/user',function(req,res){
    // 创建一个测试用户
  var nick = new User({
    name: 'nick1',
    password: '123',
    admin: true
  });

  nick.save(function(err,result) {
    if (err) throw err;
    console.log('User saved successfully');
    res.json({ success: true });
  });
});

// 获取一个 express 的路由实例
var apiRoutes = express.Router();

apiRoutes.use(function(req, res, next) {
  //检查post的信息或者url查询参数或者头信息
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  console.log(token);
  // 解析 token
  if (token) {
      // 确认token
      jwt.verify(token, app.get('superSecret'), function(err, decoded) {
          if (err) {
              return res.json({ success: false, message: 'token信息错误.' });
          } else {
              // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
              req.decoded = decoded;
              next();
              // res.json(req.decoded);
          }
      });
  } else {
      // 如果没有token，则返回错误
      return res.status(403).send({
          success: false,
          message: '没有提供token！'
      });

  }
});
// apiRoutes.get('/', function(req, res) {
//   res.json({ message: 'Welcome to the coolest API on earth!' });
// });

// 返回所有用户信息
apiRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});

apiRoutes.post('/auth', function(req, res) {
      // find the user
      User.findOne({
          name: req.body.name
      }, function(err, user) {
          if (err) throw err;
          if (!user) {
              res.json({ success: false, message: '认证失败，用户名找不到' });
          } else if (user) {
              // 检查密码
              if (user.password != req.body.password) {
                  res.json({ success: false, message: '认证失败，密码错误' });
              } else {
                  // 创建token
                  var payload={
                    name:user.name,
                    password:user.password
                  };
                  var token = jwt.sign(payload, app.get('superSecret'), {
                      expiresIn: 1440 // 设置过期时间
                  });
  
                  // json格式返回token
                  res.json({
                      success: true,
                      message: 'Enjoy your token!',
                      token: token
                  });
              }
          }
      });
  });

  

// 应用apiRoutes，并在前面加前缀 /api
app.use('/api', apiRoutes);

app.listen(port);
console.log('接口开始监听8080端口');