#jQuery
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

# 版本问题
1.x 全线兼容
2.x s不兼容IE6.7.8

# 重要的概念
- jQuery对象的方法--工具函数
$.each(array,function)

- jQuery类对象的方法--工具方法
$('').each(function)

- 链式调用
- 典型：
$('p').css('background-color','red').css('background','green').siblings()....
基本原理：
基于每个使用的方法都返回调用对象使得可以在一句代码逐项完成多个调用


# $()函数：作为css选择器
## 支持css2.1选择器，支持部分css3选择器
1. $("p")
2. $(".box")   
3. $("#box")   
4. $("#box ul li")   
5. $("li.special")   
6. $("ol , ul")
7. $("*")

## 序号筛选器
1. $("p") 			所有的p
2. $("p:first")  	第一个p
3. $("p:last")	最后一个p
4. $("p:eq(3)")	下标为3的p
5. $("p:lt(3)")	下标小于3的p
6. $("p:gt(3)")	下标大于3的p
7. $("p:odd")		下标是奇数的p
8. $("p:even")	下标是偶数的p

### 进阶
**强大的$()**
*四种调用方式*
1. css选择器，两个参数，第一个参数为选择器，第二个参数为祖先元素或元素集
$('p',$('.box'))//返回.box中的p

2. 转换原生对象为jQuery对象,也可以传入对象数组
$(document)\$(window)\$(this)，或者别的原生对象

3. 将html文本转为相应的HTML元素
- 这种调用，可传入第二个参数，可以是一个json用于设置该html元素的属性
- 传入的文本应该至少包含一个尖括号的HTML标签<>
```
var img=$('<img/>',
{
    src:url,
    css:{
        border-width:5px,
    },
    click:function(){
        console.log(img);
    }

});
```
4. 传入函数并在文档加载完毕时调用
```
$(function(){
    alert();
});
//等价于
$(document).ready(f)
```
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

# 通用方法
1. each()
2. map() 类似each()，但返回值是回调函数返回值的集合
3. index() 也可以当作css选择器使用，但返回值是一个数字，表示索引值
4. is() 选择器判定，返回值是Boolean值

# 选择器
## 简单选择器
- #id 
- .class
- [attr]\[attr=val]\[attr!=val]\[attr^=val]\[attr$=val]\[attr*=val]\[attr~=val]\[attr|=val]
- :animated
- :button <(button)>\<*input type="button">
- :checkbox <*input type="checkbox">
- :checked
- :contains(text) 此处的text由textContent或者innerText决定
- :disabled 
- :empty 无子节点,无文本
- :enabled 
- :eq(n) :nth(n)
- :odd :even
- :file <*input type="file">
- :first :last
- :first-child :last-child
- :gt(n) :lt(n)
- :has(sel) :not(sel)
- :header h1\h2\h3\h4\h5\h6
- :visible :hidden
- :image <*input type="image">,不匹配img
- :input <*input> <*textarea> <*select> <*button>
- :nth-child(n) n可以是数字\even\odd\公式,序号从1开始
- :only-child 是唯一子元素的元素
- :parent 作为父元素的元素
- :password <*input type="password">
- :radio <*input type="radio">
- :reset <*input type="reset">或者<button type="reset">
- :selected 选中的<*option>
- :submit <*input type="submit">或者<button type="submit">
- :text <*input type="text">

*注意:除了id之外,其他选择器加上类型前缀会更高效,如input:radio*

## 组合选择器
- A B
- A>B
- A+B
- A~B
- A,B 组选择器

## 选择器方法
- first()
- last()
- filter() 1. 选择器过滤 2. 求两个对象的交集 3. 传入函数返回Boolean用于过滤
- not() filter反之
- has()
- add()
- end() 最重要的还原方法,可以重新链接链式调用 pushStack()
- andSelf() 前面所有匹配到的元素,去重之后形成的元素集

# jQuery的访问器 accessor
## getter  获取
只有一个参数，查询元素集的第一个元素并返回，如果要遍历所有元素并返回元素集则用map()
由于返回的是查询结果，所以往往作为链式调用的结尾
## setter  设置
1. 一个参数，传入JSON用于设置键值对，并返回调用对象
2. 两个参数，给调用对象中每一个元素的传入的键设置传入的值，并返回调用对象
## 典型的一些访问器
- attr() 访问HTML属性
- css() 访问css属性
- addClass()\removeClass\toggleClass()\hasClass() 访问class属性
- val() 访问表单元素的值
- text()\html() 访问元素的文本或者HTML内容
- offset() 访问位置信息，具体参见犀牛书P526或者其他文档
- data()\removeData() 访问数据

## **总结：当作getter使用，则不能继续链式调用，当作setter可以组成链式调用**

# 尺寸
- $("div").width();  //计算后的内容宽度
- $("div").innerWidth();  //计算后的算上padding的宽度
- $("div").outerWidth();  //算上padding和border
- $("div").outerWidth(true);//算上padding和border和margin


# css样式 css()典型的访问器方法
介绍：
可读 可写
css属性名支持连字符（background-color）或者驼峰（backgroundColor）
css属性值支持 +=

# 动画 animate(json[,time || options-json][,tweenFunction][,callback])
## Argument 1:json
1. json是css样式目标键值对,特别的,可以给每个属性设置特殊的属性值"show"\"hide"\"toggle",用于在动画完成后为指定属性调用show()\hide()\toggle()
2. 属性值如果是数字,可以带有单位\+=\-=前缀
## Argument 2:options-json
1. json是动画执行的选项键值对,其中两个重要的属性
- duration表示动画时间,可以是数字或者"fast"\"slow"或者是jQuery.fx.speeds里面定义的值;
- complete表示动画完成时的回调函数
- 进一步的一个属性是step,可以设定每一步每一帧结束调用的回调函数,这个回调函数的第一个参数是正在改变的当前值
2. 更多的属性
- queue 指定动画是否进入序列,默认值为true,表示进入序列
- easing 指定缓冲函数名,默认值"swing"正弦曲线,另一个选项"linear"线性
- 进一步,可以自定义缓冲函数
```
//自定义一个squareroot缓冲函数到jQuery.easing对象上,指的是开方曲线
jQuery.easing["squareroot"]=Math.sqrt;
...
//然后就可以使用它
easing:"squareroot"
```
## Argument 3: tweenFunction
## Argument 4: callback


## 9种简单动画
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
## 动画控制 取消\延迟\队列 
1. stop() stop([false],[false]) 第一个参数：是否清除队列 第二个参数：是否瞬间完成
2. finish() 瞬间完成所有队列
3. delay() 延迟开始动画
**注意：$("div").delay(1000).hide(1); 必须加1，说明是动画**

## 动画序列
例子:动画的队列 fx 所以可以jQuery.fx.off=true;//关闭所有动画的队列,实际是把所有动画的duration设为0
- queue() next()
- dequeue()
- clearOueue()
- jQuery.queue()
- jQuery.dequeue()

# 序列
- eq() get()
- index()
- size() === length
- each()

# 节点
## 节点结构
- children()
- parent()
- parents()
- find()
- siblings()
- prev()\next()\prevAll()\nextAll()

## 节点操作 参见犀牛书P528
*插入与替换*
- append()\appendTo()
- prepend()\prependTo()
- after()\insertAfter()
- before()\insertBefore()
- replaceWith()\replaceAll()

*复制*
- clone()\clone(true)//浅克隆与深克隆

*包装*
- warp()\warpAll()\warpInner()

*删除*
- remove()\detach()
- unwarp()
- empty()

# 事件
## 简单注册，类似DOM 2级事件
- 特殊的有：
- error() //比如可以用于图片加载失败后的操作
- load() //用于加载成功后的操作
- hover(f,g) //等价于mouseenter(f)和mouseleave(g),如果只传一个参数，则两个事件都添加事件处理
- toggle(f,g,h) //单击轮换f,g,h

## 事件处理函数返回值的意义
- return false;//取消默认事件以及接下来的冒泡
- return [任意一个非undefined];//该返回值会保存在Event对象的result属性中

## Event对象
- 该对象是事件处理函数默认传入的第一个参数。
### 属性：
- 无论何种事件类型，jQuery都将所有的事件信息（总计40多项信息，和哪种事件类型无关）保存到Event对象的属性中
- 具体参看犀牛书P533
### 方法：(这些方法都写在原型里)
- preventDefault()\isDefaultPrevented()
- stopPropagation()\isPropagationStopped()
- stopImmediatePropagation()\isImmediatePropagationStopped()

### jQuery兼容处理过的属性:
- metaKey
- pageX,pageY
- target,currentTarget,relatedTarget
- timeStamp
- which
- data
- handler
- result
- originalEvent

### 手动触发事件
- trigger()\triggerHandler() 后者触发事件时，不会冒泡，不会执行默认事件
- 这两个方法都可以传第二个参数作为额外数据，作为触发后的事件处理函数的第二个参数

### 实时事件：
- delegate(),undelegate()取代bind(),unbind()
由于bind()处理的是已经存在的静态文档，所以需要使用delegate()来处理动态添加的新元素
- live()\die()

### 进阶 事件绑定的实质:反复调用单一、但更复杂的方法bind()进行绑定
- bind(type[,data],function) 直接绑定事件，*并且可以在可选的data参数中为function传递数据*
- bind的第一个参数可以是多个事件，相互之间用空格分开，如 $('p').bind('mouseenter mouseover',f)
- 还可以，传入json一次赋值多个事件，就如同设置css样式一样
- 极为高级的特性-命名空间：如 $('p').bind('mouseover.myMod',f)
- 也很实用的类似方法：one(),用法与bind一模一样，但是这个事件触发之后就会被注销，如同方法名一样-one,只作用一次
- unbind()，注销事件；特别的，如果传入Event对象，即unbind(event)等价于unbind(event.type,event.handler)
```
//举命名空间为例
//注册事件，命名空间为myMod
$('p').bind('mouseover.myMod',f)
...
//注销上述事件
$('p').bind('.myMod')//可以直接把所有myMod命名空间里的事件都注销掉
```

### 扩展 - 自定义事件
用bind()注册自定义事件，用trigger()来触发它

# Ajax
## Ajax回调函数的第一个参数-json：responseText
## Ajax回调函数的第二个参数-字符串：Ajax状态码
- success\notmodified\error\timeout\parsererror
## Ajax回文数据处理类型 dataType 或者工具函数的默认数据处理类型
- text
- html
- xml
- script
- json
- jsonp

## 最复杂的Ajax方法$.ajax()
$.ajax()，传入json进行各种配置选项
1. 通用选项：
- type 默认"GET"
- url
- data
- dataType 无默认值
- contentType 默认："application/x-www-form-urlencoded"
- timeout 默认：0，表示除非请求完成，否则永远不会取消请求
- cache 
- ifModified
- global 默认值：true，表示不禁用Ajax相关的所有事件
2. Ajax事件-设置回调
- context  也就是this
- beforeSend
- success
- error
- complete

- *扩展：Ajax事件注册*
- 回调选项-Ajax事件类型-回调注册方法
1. beforeSend-"ajaxSend"- ajaxSend()
2. success-"ajaxSuccess"-ajaxSuccess()
3. error-"ajaxError"-ajaxError()
4. complete-"ajaxComplete"-ajaxComplete()
5. -"ajaxStart"-ajaxStart()
6. -"ajaxStop"-ajaxStop()
        
上述事件注册可以使用bind()方式来注册 

3. 不常用的选项
- async
- dataFilter
- dataType:"jsonp"
- jsonpCallback 设置回调函数，会阻止触发正常事件调用success或者complete
- processData 如果想跳过data中对象转为字符串，则设置为false
- scriptCharset 设置跨域请求中script的charset
- tranditional 
- username,password
- xhr 自定义XMLHttpRequest对象

## jQuery定义了一个高级工具方法(对象的函数)和四个高级工具函数(jQuery本身的函数)
## 1. 一个工具方法 load()
- 除了事件注册时,作为页面加载结束时的绑定方法
- load()用于加载url内容，默认get，如有数据对象则post

## 2. 四个工具函数
- jQuery.getScript()
- jQuery.getJSON()
- jQuery.get()
- jQuery.post()

### JSONP的实现：
```
$.ajax("test.txt",{
	//JSON跨域的时候要写一个dataType，注意不是type而是dataType
	"dataType" : "jsonp",
	//要定义的函数名字，因为JSONP不缺执行，缺定义
	"jsonpCallback" : "fun",
	//信息回来之后执行的事情
	"success" : function(data){
		alert(data);
	}
});
```

## jQuery.get()\jQuery.post()
默认处理encodingURIComponent

## serialize(),表单序列化

## jQuery.param()，json序列化

# jQ工具函数
- jQuery.browser()
- jQuery.contains()
- jQuery.each()
- jQuery.extend()
- jQuery.globalEval()
- jQuery.grep()
- jQuery.inArray()
- jQuery.isArray()
- jQuery.isEmptyObject() 是否有可枚举属性
- jQuery.isFunction()
- jQuery.isPlainObject()
- jQuery.makeArray()
- jQuery.map()
- jQuery.merge()
- jQuery.parseJSON()
- jQuery.proxy()
- jQuery.support()
- jQuery.trim()

# 插件
## 两种形式的插件
1. $.fn.extend()
2. $.extend()

## 一些注意点
1. 不要依赖于$标识符，如果插件内容很长，则放在一个IIFE中，将jQuery作为参数传进去，并且以$作为形参，如下
```
(function($){
    //在这里用$来写插件代码
})(jQuery);

```
2. 注意你的插件尽力返回jQuery对象，以确保链式调用。通常，这个操作指的是return this;或者，还可以是return this.each(function(){...});
3. 如果参数数量有两个或以上，则要提供用json传参的方式，如同css()\animate()一样
4. 不要污染jQuery的命名空间，即不要自定义太多jQuery的直接属性，而应该把要用的属性都定义在插件里面
5. 如果插件要绑定事件，则为将事件处理程序放入命名空间中（参见事件进阶）
6. 如果插件要使用data()，则应把所有数据放在单一对象里，用与插件名相同的键来保存这个对象
7. 用jquery.plugin.js形式命名你的插件包
```
//一个很好的例子是，自定义选择器
jQuery.expr[':'].draggable=function(element){
    return element.draggable===true;
}
//实际上，这个自定义选择器可以有四个参数：
1. element
2. 当前element在元素集数组中的index
3. 一个数组，其第四个元素保存了自定义选择器后面的参数字符串，如:input h1，这里就保存了h1
4. 元素集数组本身
```

## jquery-ui.js
Draggable ： 拖拽
Droppable ： 拖放
Resizable ：改变尺寸
Selectable ： 可选择
Sortable ：可排序

## jquery-mousewheel.js 鼠标滚轮


## jquery-eaise.js 缓冲

