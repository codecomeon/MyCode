/**
 * Created by denglin on 2017/4/18.
 * 统一加载各个功能模块的路由
 */

const router = require('koa-router')();
//子路由
var loginRouter = require('./login/login');

module.exports = function (option) {

    // 测试用的
    router.get('/', async(ctx, next)=> {
        await ctx.render('index');

        ctx.body = {a: 22222222}
    });

    /**
     * @param1 koa-router 实例对象
     * @param2 option选项：配置文件、数据库
     */
    loginRouter(router, option);


    return router;
};
