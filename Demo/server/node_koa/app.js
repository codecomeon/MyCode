import Koa from 'koa';
import json from 'koa-json';
import logger from 'koa-logger';
import path from 'path';
import session from "koa-session";
const app = new Koa();
const bodyparser = require('koa-bodyparser');
const koaNunjucks = require('koa-nunjucks-2');

var cookies = require("cookies");
const redis = require("redis");

const config = require("./config");

const DBModule = new (require('./modules/index.js'))(config);

const redisClient = redis.createClient(config.redis.clientOption);

const router = require('./routers/index')({config: config, DBModule: DBModule, redisClient: redisClient});
// middlewares
app.use(bodyparser({
    jsonLimit: '5mb', // 控制body的parse转换大小 default 1mb
    formLimit: '4096kb'  //  控制你post的大小  default 56kb
}));
app.use(json());
app.use(logger());

app.keys = ['session-for-njk-project']; // 必要的
app.use(session(config.session.config, app));


app.use(require('koa-static')(__dirname + '/www'));


console.log('=============...........', path.join(__dirname, '/www/views'));
app.use(koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, '/www/views'),
    nunjucksConfig: {
        autoescape: true,
        watch: true
    }
}));

// logger
app.use(async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(router.routes(), router.allowedMethods());

process.env.PORT = 5001;

// response

//var User = new (require('./modules/user.js'))();

//app.on('error', async (err, ctx) => {
//  console.log('server error : ', err);
//logger.error('server error', err, ctx);
//});

//app.listen(3000);
//console.log('start listen 3000 port');
export default app
// module.exports = app;



