// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
var config = {};

if(process.env.NODE_ENV === 'production'){

}
else{

    // mongoose 创建链接 mongoose.connect('mongodb://127.0.0.1/' + DBName, {user: 'teacher', pass: 'teacher123'});
    config.mongoDB = {
        port: '',
        databaseName: '',
        url: 'mongodb://127.0.0.1:27017/teacher',
        options: {
	    useMongoClient: true,
            //user: 'teacher',  // 用户名、密码 options 中 key 是固定的
           // pass: 'teacher123'
        }
    };

    config.redis = {
        clientOption: {
            host: '127.0.0.1',
            port: 6379,
            password: ''
        }
    };

    config.session = {
        config: {
            key: 'koa:session:test', /** (string) cookie key (default is koa:sess) */
            /** (number || 'session') maxAge in ms (default is 1 days) */
            /** 'session' will result in a cookie that expires when session/browser is closed */
            /** Warning: If a session cookie is stolen, this cookie will never expire */
            maxAge: 20000,
            overwrite: false, /** (boolean) can overwrite or not (default true) */
            httpOnly: true, /** (boolean) httpOnly or not (default true) */
            signed: true, /** (boolean) signed or not (default true) */
            rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
        }
    };
}

module.exports = config;
