/**
 * 简单的 koa2 template 中间件, 渲染 views 下面的文件
 * {{ d.name }} -- {{ d.name(key) }} -- {{ include name }}
 * @author: haoran.shu
 * @datetime: 2018/3/1 15:20
 */
"use strict";
const fs = require('fs');
const path = require('path');

let config = {
  root: '',
  open: '{{',
  close: '}}'
};

let tool = {
  //匹配满足规则内容
  query: function(type, _, __){
    let types = [
      '#([\\s\\S])+?',   //js语句
      '([^{#}])*?' //普通字段
    ][type || 0];
    return exp((_||'') + config.open + types + config.close + (__||''));
  },
  escape: function(html){
    return String(html||'').replace(/&(?!#?[a-zA-Z0-9]+;)/g, '&amp;')
      .replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&#39;').replace(/"/g, '&quot;');
  },
  error: function(e, tplog){
    let error = 'Laytpl Error：';
    typeof console === 'object' && console.error(error + e + '\n'+ (tplog || ''));
    return error + e;
  }
};

let exp = function(str){
  return new RegExp(str, 'g');
};

function joinPath(name) {
  return path.join(config.root, name + '.html');
}

// 置换 include 的内容
function include(tpl) {
  // 匹配 include 的正则表达式字符串
  let ips = config.open + '\\s*include\\s+([\\s\\S]+?)\\s*' + config.close;
  // 置换 include
  tpl = tpl.replace(exp(ips), function(str) {
    let cp = str.match(new RegExp('^' + ips + '$'))[1]; // 包含的模板文件名称
    return fs.readFileSync(joinPath(cp), 'utf-8');
  });
  return tpl;
}

/**
 * 编译模板
 * @param tpl   模板内容
 */
let compile = function(tpl) {
  let tplog = tpl;
  let jss = exp('^'+config.open+'#', ''), jsse = exp(config.close+'$', '');

  tpl = include(tpl); // 置换 include 内容

  tpl = tpl.replace(/\s+|\r|\t|\n/g, ' ') // 替换换行符
    .replace(exp(config.open+'#'), config.open+'# ')
    .replace(exp(config.close+'}'), '} '+config.close).replace(/\\/g, '\\\\')

    //不匹配指定区域的内容
    .replace(exp(config.open + '!(.+?)!' + config.close), function(str){
      str = str.replace(exp('^'+ config.open + '!'), '')
        .replace(exp('!'+ config.close), '')
        .replace(exp(config.open + '|' + config.close), function(tag){
          return tag.replace(/(.)/g, '\\$1')
        });
      return str
    })

    //匹配JS规则内容
    .replace(/(?=["'])/g, '\\').replace(tool.query(), function(str){
      str = str.replace(jss, '').replace(jsse, '');
      return '";' + str.replace(/\\/g, '') + ';view+="';
    })

    //匹配普通字段
    .replace(tool.query(1), function(str) {
      let start = '"+(';
      if(str.replace(/\s/g, '') === config.open+config.close){
        return '';
      }
      str = str.replace(exp(config.open+'|'+config.close), '');
      if(/^=/.test(str)){
        str = str.replace(/^=/, '');
        start = '"+_escape_(';
      }
      return start + str.replace(/\\/g, '') + ')+"';
    });
  tpl = '"use strict";var view = "' + tpl + '";return view;';
  try{
    // 将模板文件包装成函数
    tpl = new Function('d, _escape_', tpl);
    return tpl;
  } catch(e){
    return tool.error(e, tplog);
  }
};

/**
 * 渲染数据
 * @param tpl   编译后的模板
 * @param data  需要渲染的数据对象
 * @returns {*}
 */
let render = function(tpl, data) {
  let r = compile(tpl);
  return r(data, tool.escape);
};

/**
 * 模板引擎配置
 * @param app       koa2 app
 * @param settings  配置参数
 *   root -- 模板文件所在的文件夹
 */
module.exports = function(app, settings) {
  if(app.context.render) {
    return;
  }
  if(!settings || !settings.root) {
    throw new Error('settings.root required');
  }
  Object.assign(config, settings);

  app.context.render = function(view, _context) {
    const ctx = this;
    const context = Object.assign({}, ctx.state, _context);
    let tpl = fs.readFileSync(joinPath(view), 'utf-8');
    ctx.type = 'html';
    ctx.body = render(tpl, context);
  }
};