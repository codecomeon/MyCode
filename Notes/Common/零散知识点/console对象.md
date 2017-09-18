# Window.console

## console.assert()
- 断言：用于判断表达式是否为真

## console.clear()
- 清空

## console.count([lable])
- 计数器：每次调用返回;其中可选参数lable放置在次数前面
```javascript
for(var i=0;i<10;i++){
    console.count(i);
}
//0：1 1：1 2：1 3：1 .。。。

(function() {
  for(var i=0;i<10;i++){
      console.count(i);
  }
})();//1:1 2:1 3:1...
//TODO:但是当console.count()没有参数时，输出1,2,3,4,5,6,7,8,9,10
```
## console.debug()~=console.log()

## console.dir()
- 枚举

## console.dirxml()~=console.dir()

## console.error()
- 直接抛出错误，前面加红色错误图标

## console._exception()~=console.error()

## console.group()\console.groupCollapsed()\console.groupEnd()
- 分组缩进打印

## console.info()~= console.log()
- 打印时，前面加蓝色感叹号图标

## console.log()格式化打印
- %O  打印JS对象
- %o  打印DOM对象
- %d/%i  打印整数
- %s  打印字符串
- %f  打印浮点数
- %c  设置打印的CSS样式
```javascript
//以下代码可以设置打印样式为字体模糊
console.log("%cThis is the test %s string！","color:transparent;text-shadow:0 0 2px #666;","yes!");
//以下代码设置背景渐变样式
console.log("%cColorful CSS","background: -webkit-linear-gradient(left, rgba(252,234,187,1) 0%, rgba(175,250,77,1) 12%, rgba(0,247,49,1) 28%, rgba(0,210,247,1) 39%, rgba(0,189,247,1) 51%, rgba(133,108,217,1) 64%, rgba(177,0,247,1) 78%, rgba(247,0,189,1) 87%, rgba(245,22,52,1) 100%);font-size:5em;");
//以下代码设置文字色彩渐变
console.log('%cRainbow Text ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
```

## console.profile()\console.profileEnd()
- 数据采集，并且可以在Profile中看

## console.table()
- 表格形式打印（）支持数组嵌套，不支持对象嵌套

## console.time()\console.timeEnd()
- 定时器

## console.timeStamp()
- 往调试Timeline或Waterfall工具添加时间戳

## console.trace()
- 追踪函数调用

## console.warn()
- 警告，前面加黄色警告


