/**
 * 应用的配置文件
 * @author: haoran.shu
 * @datetime: 2018/2/26 11:38
 */
module.exports = {
  port: 3000, // 应用启动端口号
  {{#mongo}}
  mongo: {{{mongo}}}
  {{/mongo}}
};