/**
 * 渲染流, 根据读取的模板内容进行渲染
 * Created by haoran.shu on 2018/1/12.
 */
const mustache = require('mustache');
const { Transform } = require('stream');

class renderStream extends Transform {
  /**
   * 构造函数
   * @param data {JSONObject} 渲染数据源
   * @param options {JSONObject}
   */
  constructor(data, options) {
    super(options);
    this.data = data;
  }

  _transform(data, encoding, callback) {
    callback(null, mustache.render(data.toString(), this.data));
  }
}

module.exports = renderStream;