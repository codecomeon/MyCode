"use strict";
const app = new (require('koa'))();
const logger = require('log4js').getLogger('app');
const Router = require('koa-router');
const serve = require('koa-static-cache');
{{#template}}
{{{ template.require }}}
{{/template}}

// 注册组件(context)
{{#template}}
{{{ template.content }}}
{{/template}}

// 中间件
app.use(require('./packages/log')()); // 日志记录
app.use(serve('./public',{gzip:true})); // 静态资源
app.use(require('./packages/bodyParser')()); // post 请求参数

// 路由
const appRouter = new Router();
appRouter.use('/{{ name }}', require('./routes/index').routes());
app.use(appRouter.routes()).use(appRouter.allowedMethods());

module.exports = app;