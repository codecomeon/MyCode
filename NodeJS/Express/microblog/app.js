var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var MongoStore=require('connect-mongo');
var settings=require('./models/settings');

var index = require('./routes/index');
var users = require('./routes/users');
var post=require('./routes/post');
var reg=require('./routes/reg');
var log=require('./routes/log');
var logout=require('./routes/logout');
var session=require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.methodOverride());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:settings.cookieSecret,
    store:new MongoStore({db:settings.db})
}));

app.use('/', index);
app.use('/u', users);
app.use('/post', post);
app.use('/reg', reg);
app.use('/log', log);
app.use('/logout', logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.dynamicHelpers({
//     user:function (req,res) {
//         return req.session.user;
//     },
//     error:function (req,res) {
//         var err=req.flash('error');
//         if(err.length){
//           return err;
//         }else{
//           return null;
//         }
//     },
//     success:function (req,res) {
//         var succ=req.flash('success');
//         if(succ.length){
//           return succ;
//         }else{
//           return null;
//         }
//     }
// });

module.exports = app;
