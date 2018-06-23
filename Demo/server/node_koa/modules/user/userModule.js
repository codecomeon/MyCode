/**
 * Created by denglin on 2017/5/4.
 */

export default class {
	constructor(mongoose, _) {
		this._ = _;
		var Schema = mongoose.Schema;
		var userSchema = new Schema({
			name: String,               // 联系人名称
			phone: String,              // 电话
			team: String,               // 团队名称
			email: String,              // 邮箱
			qq: String,                 // QQ
			wechat: String,             // 微信
			password: String,           // 密码
			salt: String,               // salt加密，防止彩虹表破解
			userType: {
				type: String,
				default: '2'
			},                          // 用户类型，1表示管理员，2表示普通用户
			hidden: {                   // 是否隐藏
				type: Boolean,
				default: false
			},
			createdOn: {                    // 创建时间
				type: Date,
				default: Date.now
			},

			//是否删除 0没删 1已经删除
			isDelete: {
				type: String,
				default: '0',
			},
		});
		var User = mongoose.model('User', userSchema);

		// 保存 user 扣除记录
		this.saveUser = function (moduleObj) {
			return new Promise((resolve, reject) => {
				let userObj = new User(moduleObj);
				userObj.save(function (err, data) {
					if (err) {
						reject({status: 'failed', msg: '新增用户失败', err: err});
					} else {
						resolve({status: 'success', msg: '新增用户成功', data: data});
					}
				});
			});
		};

		// 获取用户列表
		this.getUserList = function (params) {
			if (typeof params === "object") {
				let queryParams = {userType: '2', isDelete: {$ne: 1}}; // 列出非管理员、没被删除的用户
				if (params.queryParams) queryParams[params.queryParams.condition] = new RegExp(params.queryParams.value); // 判断是否带了查询参数
				return new Promise((resolve, reject) => {
					User.find(queryParams)
					.skip((params.pageNum - 1) * params.pageSize)
					.limit(params.pageSize)
					.exec(function (err, res) {

						// res 为查询到的文档
						if (err) {
							reject({status: 'failed', msg: err})
						} else {
							resolve({status: 'success', msg: '用户列表查询成功', data: res})
						}
					});
				})
			}
		};

		// 邮箱重名验证
		this.isDuplicate = function (email) {
			if (email !== "") {
				return new Promise((resolve, reject) => {
					User.find({email: email}, function (err, res) {
						if (err) {
							reject({status: 'failed', msg: err})
						} else if (res && res[0]) {
							resolve({status: 'failed', msg: '该邮箱名已存在', data: true})
						} else {
							resolve({status: 'success', msg: '邮箱验证通过', data: false})
						}
					})
				})
			}
		};

		// 删除用户
		this.deleteUser = function (userId) {
			if (userId !== "") {
				return new Promise((resolve, reject) => {
					User.update({_id: userId}, { $set: { isDelete: 1 } },  function (err, res) {
						if (err) {
							reject({status: 'failed', msg: err})
						} else {
							resolve({status: 'success', msg: '删除成功', data: true})
						}
					})
				})
			}
		};

		// 获取总数量
		this.totalNumber = function (params) {
			return new Promise((resolve, reject) => {
				let queryParams = {userType: '2'};
				if (params.queryParams) queryParams[params.queryParams.condition] = new RegExp(params.queryParams.value); // 判断是否带了查询参数
				User.count(queryParams)
				.exec((err, res) => {
					if (err) {
						reject({status: 'failed', msg: err})
					} else {
						resolve({status: 'success', msg: '查询成功', data: res})
					}
				})
			})
		};

		// 修改用户
		this.editUser = function (params) {
			if (params) {
				return new Promise((resolve, reject) => {
					User.findById(params._id, (err, res) => {
						if (err) {
							reject({status: 'failed', msg: err})
						} else {
							res.set(params);
							res.save(function (err, newRes) {
								if (err) {
									reject({status: 'failed', msg: err})
								} else {
									resolve({status: 'success', msg: '修改成功', data: newRes})
								}
							})
						}
					})
				})
			}
		};
        //  重置密码
        this.resetPassword = function (params) {
            if (params) {
                return new Promise((resolve, reject) => {
                    User.update({email: params.getEmail}, { $set: { password: params.getPassword , salt: params.salt } }, (err) => {
                        if (err) {
                            reject({status: 'failed', msg: err})
                        } else {
                            resolve({status: 'success', msg: '修改成功'})
                        }
                    })
                })
            }
        };

		// 查询用户
		this.findUser = function (params,fields) {
			if (params && typeof params == 'object') {
				return new Promise((resolve, reject) => {
					fields = fields ? fields: '';
					User.find(params, fields, function (err, res) {
						if (err) {
							reject({status: 'failed', msg: err})
						} else {
							resolve({status: 'success', msg: '用户名查询成功', data: res});
						}
					})
				})
			}
		};


		this.find = function (params,fields = []) {
		    let that = this;
            return new Promise((resolve, reject) => {
                User.find(params, fields, function (err, res) {
                   if (res){
                       res = res.map(function (value) {
                           return value.toObject({virtuals:true});
                       });
                       console.log(res);
                   }
                   resolve({err:err, data:res});
                });
            });
        };

        this.findUserById = function (id){
            return new Promise((resolve, reject) => {
                User.findById(id, function (err, result) {
                    resolve({err: err, data: result});
                })
            })
        };
	}
}
