/**
 * 日志记录中间件，记录 api 接口的请求信息
 * Created by haoran.shu on 2017/12/13.
 */
const log4js = require('log4js');
log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'dateFile', filename: '/tmp/{{ name }}.log', keepFileExt: true },
    'just-file': {type: 'logLevelFilter', appender: 'file', level: 'info'}
  },
  categories: { default: { appenders: ['console', 'just-file'], level: 'debug' } }
});
const logger = log4js.getLogger('app');

module.exports = () => {
  return async (ctx, next) => {
    const start = Date.now(); // 接口请求开始时间
    await next();
    const ms = Date.now() - start;
    logger.info(`${ctx.method} ${ctx.url} ${ctx.status} ${ms}ms`);
  }
};
