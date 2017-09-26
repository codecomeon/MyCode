# Express
- 这里的模板引擎用的是EJS
- 快速框架 express -e -c less project EJS+LESS

express选项
```bash
-h, --help           output usage information
--version        output the version number
-e, --ejs            add ejs engine support
--pug            add pug engine support
-hbs            add handlebars engine support
-H, --hogan          add hogan.js engine support
-v, --view <engine>  add view <engine> support (dust|ejs|hbs|hjs|jade|pug|twig|vash) (defaults to jade)
-c, --css <engine>   add stylesheet <engine> support (less|stylus|compass|sass) (defaults toplain css)
--git            add .gitignore
-f, --force          force on non-empty directory
```

## 启动
- cd project && npm install
- DEBUG=project & npm start 或者 SET DEBUG=project:* & npm start

## 最重要的概念：路由
- 写法:
```javascript
app.get('/path',function(req,res) {
  res.send();
});
```
- 所有支持的HTTP路由方法，get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect
- 路由路径：支持字符串模式（?表示最多一个，+表示多个，*表示任意字符，()?表示可有可无），还支持正则表达式
- **特别的,'/:user'用于占位匹配，可以通过req.params.user来访问到匹配的项，如果匿名的话，则可以用req.params[0]等来访问**
- app.all() 对所有请求都进行处理
- res的方法：download\end\json\jsonp\redirect\send\sendFile\sendStatus
- app.route()
- app.render()渲染
### 控制权转移 next()
- 由于支持同一请求，定义多个路由，默认下只遵循第一个匹配的规则，后面的多个会被忽略；所以提供了next()来依次地转移控制权，形成一个链条
- 一般先用all()来捕获所有的请求，根据情况使用next()来灵活路由，实现了RESTful的风格

## 工具
### app.set()
- 可用参数
1. basepath 基础地址
2. views 视图文件
3. view engine 视图模板引擎
4. view options 全局视图参数
5. view cache 视图缓存标记
6. case sensitive routes 路径大小写
7. strict routing 严格路径，不忽略末尾的'/'
8. jsonp callback 透明jsonp支持

### app.use() 引导、启用中间件

## EJS Embedded JavaScript
```html
<!-- 通过这种方式组合不同的ejs -->
<%- include('layout') %>
<!-- 通过形成片段视图，有点类似遍历 -->
<%- partials('listitem',items) %>
```
- 语法：<% js代码 %>  <%= 要替换的数据 %>  

## REST Representational State Transfer 表征状态转移
