/**
 * Created by JsonMa on 2016/7/12.
 */
const mongoose = require('mongoose');
const _ = require("underscore");

export default class {
    constructor(config) {
		// 创建数据库链接
        mongoose.connect(config.mongoDB.url, config.mongoDB.options)
            .openUri(config.mongoDB.url, config.mongoDB.options);

        this.User = new (require('./user/userModule'))(mongoose, _);

    }
}
