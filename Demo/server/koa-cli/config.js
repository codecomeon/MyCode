/**
 * 构建工程相关的参数
 * @type {{basepath: String, name: String, mongo: Object, test: Boolean, template: String}}
 *   basepath: // 工作目录(必填)
 *   name: // 工程名称(必填)
 *   mongo -- 如果需要 mongo, 则配置 mongo 链接地址(选填)
 *     main: { // 链接名称(多数据库链接切换)
		url: "mongodb://192.168.31.201:27017",
		dbname: 'test' // 该链接默认访问的数据库
	   } // 第一个作为默认使用的链接
	 test: false // 是否需要 mocha 进行单元测试
	 template: 'none' // 模板引擎
 */
module.exports = {
  basepath : "D:\\office\\project\\IdeaProjects", // 工作目录
  name: "FollowOrderSystem", // 工程名称
  mongo: {
	main: {
      url: "mongodb://192.168.31.201:27017",
      dbname: 'test' // 该链接默认访问的数据库
    } // 第一个作为默认使用的链接
  }, // 配置 mongo(可选), 如果不配做, 则没有 mongo 模块
  test: false, // 可以进行接口测试
  /*
   * 配置使用模板引擎,如果不填,则不使用模板引擎
   *  standard -- 标准,使用的是art-template,(https://aui.github.io/art-template/zh-cn/index.html)
   *  simple   -- 简单,一个相当比较简单的模板引擎,源码在middlewares/tpl.js
   */
  template: 'none'
};