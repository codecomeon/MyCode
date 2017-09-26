# NodeJS

## node指令
- -v --version 版本
- -e --eval 执行
- -p 进入执行模式（相当于浏览器的控制台）
- --v8-options v8命令行选项
- --vars 内置变量（好像没有用）
- --max-stack-size=8 设置最大栈大小为8

## Node REPL指令(Read-eval-print-loop)
- ctrl + c - 退出当前终端。
- ctrl + c 按下两次 - 退出 Node REPL。
- ctrl + d - 退出 Node REPL.
- 向上/向下 键 - 查看输入的历史命令
- tab 键 - 列出当前命令
- .help - 列出使用命令
- .break - 退出多行表达式
- .clear - 退出多行表达式
- .save filename - 保存当前的 Node REPL 会话到指定文件
- .load filename - 载入当前 Node REPL 会话的文件内容。
- .editor enter editor mode

## npm
```bash
npm [install/i] #安装 可选参数 -g全局 
npm link #符号链接
npm init #初始化，可选参数-y默认填完
npm config set loglevel=http #监听下载过程（设置loglevel）

#开发管理包
npm adduser #账号
npm whoami #验证是否获取账号
npm publish
npm unpublish
```
虽然， 

### package.json
- name - 包名
- version - 版本号
- description - 描述
- keywords - 关键字数组
- maintainers - 维护者数组
- bugs - 提交bug的地址
- homepage - 包的官网 url
- author - 包的作者姓名
- licences - 许可证数组
- dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
- repositories - 包代码存放的地方数组，可以是 git 或 svn，git 可在 Github 上。
- main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。

## 调试
```bash
node debug debug.js
debug指令
run
contc
next
step
scripts #显示所有加载的脚本
```
以下是debug指令
- run 执行脚本，第一行暂停
- restart 重新执行
- cont,c 继续执行
- next,n 单步执行

## 全局变量
### process对象
- process.argv 命令行参数数组
- process.stdout 标准输出流
- process.stdin 标准输入流
- process.nextTick(callback) 为事件循环设置一项任务
- process.platform
- process.pid
- process.execpath
- process.memoryUsage
### console对象
- console.log
- console.error
- console.trace

## util
- util.inherits 继承
- util.inspect 任意对象转换为字符串
- util.isArray
- util.isRegExp
- util.isDate
- util.isError

## Node.js回调（所有API都支持回调）

## events
![事件环的一张图片](img/event_loop.jpg)
## **最重要**events.EventEmitter() 事件触发与事件监听handler绑定
- 内置事件
newListener\removeListener\error
- on() 绑定
- emit() 触发
- addListener(e,h)\once(e,h)\removeListener(e,h)\removeAllListener([e])\setMaxListeners(n)\listeners(e)
- EventEmitter.listenerCount(emitter,e) 1-指定触发器，2-指定事件

## fs
- 几乎都有同步版本，类似fs.readFile\fs.readFileSync
- fs.open\fs.close 打开关闭
- fs.read\fs.write 读写文件描述符
- fs.readFile\fs.writeFile 读写文件内容
- fs.mkdir\fs.rmdir\fs.readdir\fs.realpath 目录操作
- fs.rename
- fs.chown\fs.fchown\fs.lchown 所有权
- fs.chmod\fs.fchmod\fs.lchmod 权限
- fs.stat\fs.fstat\fs.lstat 文件信息
- fs.unlink\fs.link\fs.symlink\fs.readlink 链接
- fs.utimes\fs.futimes 时间戳
- fs.fsync 同步磁盘缓存

## HTTP
### http.Server
- http.Server事件：request\connection\close
- 监听request -》 http.createServer([requestListener])

### http.ServerRequest 请求
- 该对象提供的事件：data、end、close
- 该对象的属性：complete\httpVersion\method\url\headers\trailers\connection\socket\client

### http.ServerResponse 响应
- res.writeHead(statusCode,[headers]) 响应头
- res.write(data,[encoding])
- res.end([data],[encoding]) 结束响应

######################################
######################################
作为客户端

### http.request 作为客户端向服务器发起请求
- http.request(options,callback(res))
#### http.get 
- 简化的request，设为get方式，并且自动结束请求
- 除此之外，没有区别

#### http.ClientRequest 请求生成的JS对象
- 提供response事件
- 提供一些方法: var req=http.request(options);
1. req.abort()
2. req.setTimeout(timeout,[callback])
3. 还有req.setNoDelay\req.setSocketKeepAlive等等
#### http.ClientResponse 对应请求的响应
- 提供data\end\close事件
- 提供一些属性：statusCode\httpVersion\headers\trailers
- 提供一些方法:
1. res.setEncoding('uft8')
2. res.pause()
3. res.resume()

## url
- url.parse(req.url,true)

## querystring
- 工具式模块
- stringify
- parse

## 最终：你需要一个框架-Express
- 动态监听工具 supervisor
- npm install -g supervisor
- supervisor --harmony ./bin/www

## 进阶
### 模块加载
- 不显式加扩展名加载，查找顺序为.js\.json\.node
- 查找总是从近到远，从里到外，直到根目录