/**
 * Created by denglin on 2017/4/18.
 */
const baseController = require('../baseController');

export default class extends baseController {
    constructor(options) {
        super(options);
        // 用户验证
        this.userValidate = async(ctx, next) => {
            var password = ctx.request.body.password,
                params = {
                    email: ctx.request.body.email
                };
            var isValidate = await this.DBModule.User.findUser(params);
            if (isValidate.status) {
                if (isValidate.status === 'success' && isValidate.data.length > 0) {
                    for (let i in isValidate.data) {
                        let salt = isValidate.data[i].salt, // 获取salt值
                            loginPssword = this.md5(password + salt); // 获取加密后的值
                        if (isValidate.data[i].password == loginPssword) {
                            ctx.session.user = isValidate.data[i]; // 将user放置到session中
                            ctx.body = {
                                "code": 200,
                                "msg": '验证成功',
                                "data": isValidate.data[i]
                            };
                        } else {
                            ctx.body = {
                                "code": 402,
                                "msg": '密码错误'
                            };
                        }
                    }
                } else {
                    ctx.body = {
                        "code": 401,
                        "msg": '用户名错误',
                    };
                }
            } else {
                ctx.body = {
                    "code": 403,
                    "msg": isValidate.msg
                };
            }
        };

        // 退出登录
        this.logOut = async(ctx, next) => {
            // mongoDB 连接测试
            var aaa = await this.DBModule.User.find({_id: '58a552a5ab7c46a17083dbeb'});
            console.log(aaa);

            var self = this;
            var key = 'redis:test:key';
            // redis 链接、写入、输出测试
            this.redisClient.set(key, 'redis save test', function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    //self.redisClient.expire(key, outTime)
                    self.redisClient.get(key, function (err, ret) {
                        console.log(err, ret);
                    });
                }
            });

            ctx.body = {a: 2222}

        }
    }
}
