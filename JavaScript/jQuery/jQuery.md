# JQuery
整体架构：
- 变量、正则表达式初始化
- $.fn 工具方法 
- $.ready()
- Sizzle 复杂选择器
- $.Callback() 回调对象：对函数的统一处理
- $.Deferred() 延迟对象：对异步的统一管理
- $.support 浏览器功能性检测
- $.data 数据存储
- queue() | dequeue() 队列方法：执行顺序管理
- attr() prop() val() addClass()等 对元素属性的操作
- on() trigger() 事件操作的相关方法
- DOM操作
- css() 样式操作
- Ajax()
- animate() 动画
- offset() 位置和尺寸
- 模块化
- window.jQuery=window.$=jQuery

#版本问题
2.x不兼容IE6.7.8

## $()函数，css选择器
- 支持css2.1选择器，支持部分css3选择器
1. $("p")
2. $(".box")   
3. $("#box")   
4. $("#box ul li")   
5. $("li.special")   
6. $("ol , ul")
7. $("*")


- 序号筛选器
1. $("p") 			所有的p
2. $("p:first")  	第一个p
3. $("p:last")	最后一个p
4. $("p:eq(3)")	下标为3的p
5. $("p:lt(3)")	下标小于3的p
6. $("p:gt(3)")	下标大于3的p
7. $("p:odd")		下标是奇数的p
8. $("p:even")	下标是偶数的p

### 注意点
- jQuery对象不是原生对象
```
//在对象后面加上[0]，就是原生对象保存的地方,多个对象，则以此[1]、[2]等等
$("#box")[0].style.backgroundColor = "red";
```
- 字符串引号
**只有三个不加引号**
1. $(this)
2. $(document)
2. $(window)

## 尺寸
$("div").width();  //计算后的内容宽度
$("div").innerWidth();  //计算后的算上padding的宽度
$("div").outerWidth();  //算上padding和border
$("div").outerWidth(true);//算上padding和border和margin


## css样式 css()
介绍：
可读 可写
css属性名支持连字符（background-color）或者驼峰（backgroundColor）
css属性值支持 +=

## 运动 animate()
默认缓冲 easeInOut

同一对象的多个运动会顺序运行

## 动画
- 改变display show()、hide()、toggle() 均可加参数([time],[callback])
- 改变display和高宽 slideDown()、slideUp()、slideToggle() 均可加参数([time],[callback])

- 淡入淡出 fadeIn()、fadeOut()、fadeTo()、fadeToggle()
```
//类似，动画的原理
$("div").show();  //瞬间显示
var oldHeight = $("div").css("height");   //记忆住原有的高度
$("div").css("height",0);   //瞬间变为0
$("div").animate({"height" : oldHeight},1000);   //动画！终点是oldHeight

```
- 动画控制 
1. stop() stop([false],[false]) 第一个参数：是否清除队列 第二个参数：是否瞬间完成
2. finish() 瞬间完成所有队列
3. delay() 延迟开始动画
**注意：$("div").delay(1000).hide(1); 必须加1，说明是动画**

- 判断动画状态或者序列 is(),返回值boolean
is(":animated") 
is("p:eq(3)")

## 序列
- eq() get()

- index()

- size() === length

- each()


## 插件
### jquery-ui.js
Draggable ： 拖拽
Droppable ： 拖放
Resizable ：改变尺寸
Selectable ： 可选择
Sortable ：可排序

### jquery-mousewheel.js 鼠标滚轮


### jquery-eaise.js 缓冲

