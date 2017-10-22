1. npm build [<package-folder>]

<package-folder>: 根目录中包含package.json文件的文件夹.
这个命令一般是被npm link和npn install这些命令行所调用，不会单独进行使用
2. npm-config

npm config set <key> <value> [-g|--global] //为一个key值设置value值
npm config get <key> //获取一个key值的value值
npm config delete <key> //删除一个key值
npm config list //显示所有的config项
npm config edit //使用editor打开一个config文件
npm get <key> //
npm set <key> <value> [-g|--global]
3.npm init [-f|--force|-y|--yes]

init指令会询问一系列的问题，并将你的配置写成一个package.json文件。如果使用了-f|--force|-y|--yes这些参数，那么会生成一个默认的package.json文件。

4. npm install

在没有其他参数时这个指令会安装所有package.json文件中配置的依赖包。

npm install <packages-name> //安装这个包的最新版本
npm install <packages-name> -g //全局安装这个包的最新版本
npm install <packages-name> --sav //安装这个包的最新版本并写入package.json文件的dependencies字段。
npm install <packages-name> --sav-dev //安装这个包的最新版本并写入package.json文件的devDependencies字段。
5. npm start

如果在package.json文件中配置了start字段，那么npm start命令将会执行start字段所对应的value的内容，如果start字段缺省，那么将会运行node server.js

6. npm stop

将执行stop字段所对应的脚本

7. npm update

npm update [-g] [<pkg>...]
这个命令将会将依赖包升级到最新版本。
8. npm run

npm run-script <command> [-- <args>...]
alias: npm run
这个命令将会运行script字段的任意指令，如果script字段缺省那么将会列出所有可以run的指令。

作者：Aries_苏世
链接：http://www.jianshu.com/p/df467bdc96ff
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。