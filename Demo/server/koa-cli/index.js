/**
 * 构建 koa 工程
 * Created by haoran.shu on 2018/1/12.
 */
const config = require('./config');
const fileUtil = require('./utils/file');
const path = require('path');
const fs = require('fs');
const renderStream = require('./stream/render');

let projectName = config.name; // 工程名
let template = config.template; // 模板引擎
// 目标工程路径
let toPath = function(filePath) {
  return path.join(config.basepath, projectName, filePath);
};

/**
 * 渲染文件到目标文件
 * @param source  源文件, 需要进行渲染的文件
 * @param to      渲染后的文件路径
 * @param data    渲染的数据
 */
function renderFile(source, to, data) {
  fs.createReadStream(source).pipe(new renderStream(data))
    .pipe(fs.createWriteStream(toPath(to)));
}

/* 1. 创建工程文件夹 */
// 数组保存需要创建的文件夹
let proDirs = [
  path.join(projectName, 'packages'),
  path.join(projectName, 'public', projectName),
  path.join(projectName, 'routes'),
  path.join(projectName, 'bin')
];
if(config.mongo) { // 需要 mongodb 数据库
  proDirs.push(path.join(projectName, 'dbs'));
}
if(template) { // 模板引擎
  proDirs.push(path.join(projectName, 'views'));
}
proDirs.forEach((item) => {
  fileUtil.mkdirs(item, config.basepath);
});


/* 2. 复制通用的不需要改动的文件 */
let cpPath = path.join(process.cwd(), 'files');
fileUtil.fileIterator(cpPath, (filepath) => {
  let rp = path.relative(cpPath, filepath);
  fs.copyFile(filepath, toPath(rp), function(err) {
    if(err) {
      console.error(err);
    }
  });
});


/* 3. 复制需要验证的文件 */
if(template === 'simple') {
  let tplPath = path.join(process.cwd(), 'logic', 'packages', 'tpl.js');
  fs.copyFile(tplPath, path.join('packages'))
}


/* 4. 渲染需要改动的模板文件到工程文件夹下 */
let ctPath = path.join(process.cwd(), 'templates');
let tpl = undefined;
// 判断是否需要模板引擎
if(template === 'simple') { // 简单模板引擎
  tpl = {};
  tpl.require = 'const tpl = require(\'./packages/tpl\');';
  tpl.content = 'tpl(app, {\n  root: path.join(__dirname, \'views\')\n});'
} else if(template === 'standard') { // art-template
  tpl = {};
  tpl.tpl = 'standard';
  tpl.require = 'const render = require(\'koa-art-template\');';
  tpl.content = '// 模板引擎\nrender(app, {\n' +
    '  root: path.join(__dirname, \'views\'),\n' +
    '  extname: \'.html\',\n' +
    '  cache: \'false\',\n' +
    '  debug: true\n' +
    '});'
}
const opts = {
  name: projectName,
  desc: '测试工程',
  test: true,
  mongo: JSON.stringify(config.mongo, null, 2),
  template: tpl
};
fileUtil.fileIterator(ctPath, (filepath) => {
  let rt = path.relative(ctPath, filepath);
  renderFile(filepath, rt, opts);
  console.log('工程创建完毕：' + path.join(config.basepath, config.name));
});


/* 5. 渲染需要验证的文件 */