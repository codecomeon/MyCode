# NodeJS

## npm
- npm config set loglevel=http 监听下载过程（设置loglevel）

## package.json
- name - 包名
- version - 包的版本号
- description - 包的描述
- homepage - 包的官网 url
- author - 包的作者姓名
- contributors - 包的其他贡献者姓名
- dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
- repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
- main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
- keywords - 关键字

## Node REPL指令(不重要)
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

## Node.js回调（所有API都支持回调）

## 事件环
![事件环的一张图片](img/event_loop.jpg)
## events.EventEmitter() 事件触发与事件监听handler绑定
- 内置事件
newListener\removeListener\error
- on() 绑定
- emit() 触发
- addListener(e,h)\once(e,h)\removeListener(e,h)\removeAllListener([e])\setMaxListeners(n)\listeners(e)
- EventEmitter.listenerCount(emitter,e) 1-指定触发器，2-指定事件
