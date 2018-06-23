/**
 * Created by mahao on 2017/5/8.
 */

// Controller 中为模块具体处理方
var loginController = require('../../controller/login/loginController');

module.exports = function (koaRouter, options) {
    // 创建 Controller 实例，options 为上层传入的参数，之后可能会有必须参数
    loginController = new loginController(options);

    // get请求


    // post请求
    koaRouter.post('/login', loginController.userValidate); // 用户登录
    koaRouter.get('/loginOut', loginController.logOut); // 用户登出

    koaRouter.get('/session', async(ctx, next) => {
        ctx.session.user = {name: 'user name'}
        console.log('session : ', ctx.session);

        ctx.body = {session: ctx.session}
    }); // 用户登出
};
