#DOM

##得到元素
document.getElementById("");
document.getElementsByTagName("");

###创建元素

###删除元素

##更改属性
更改标签属性，更改css样式

###1. 点语法，返回对象

####连续点语法
配合标识符，组合标识符形成特定含义

###2. get、set方法,返回字符串
getAttribute(attribute)
setAttribute(attribute,value)

##事件监听
###DOM-0级事件
onclick 		单击
ondblclick		双击
onfocus			得到焦点
onblur			失去焦点
onmousedown		鼠标按下
onmouseup		鼠标按键抬起
onmouseover	    鼠标进入
onmouseout		鼠标离开

onload          加载完毕

##循环批量绑定事件
1. IIFE方式
循环内部每一次都立即调用，用传参值传递方式保存变量的过程值，利用了形参的特性
for(var i=0;i<oPs.length;i++){
    (function(temp){
        oPs[temp].onclick=function(){
            alert("正在保存"+temp);
        }
    })(i);
}

2. 添加对象自定义属性保存变量

###事件关联模型
##对应
两组元素对应，其中一组可以通过闭包来直接读取的另一组下标，实现一一对应
##排他

#DOM应用
不同事件绑定同一方法，可以采取连续赋值

##轮播图的实现方式
改变图片src

改变display,直接改类名

设为背景，改变div大小

改变z-index

改变图片opacity

##计算后样式
高级低级互不兼容,全兼容要先测试再选择高低级写法
高级：
	window.getComputedStyle(oDiv).getPropertyValue("padding-left");
	getComputedStyle(oDiv).getPropertyValue("padding-left");//不能用驼峰
	getComputedStyle(oDiv)["padding-left"];//可以用驼峰
	
IE6、7、8：
	oDiv.currentStyle.paddingLeft;
	oDiv.currentStyle["paddingLeft"];

*返回的颜色值都是rgb()*

*opacity小数如果省略0，高级浏览器自动补全，低级浏览器原样打印*

##运动
###1. 快速获得位置
####offsetParent：
高级:
自己祖先元素中，离自己最近的已经定位的元素

IE6\7

1. 后代元素没有定位
最近的有高宽并且已经定位的元素优先作为后代元素的offsetParent

2. 后代元素有定位
最近的已经定位的元素优先作为offsetParent

####offsetWidth\offsetHeight
**单位全部是px**

####clientWidth\clientHeight
**单位全部是px**
**如果没有高度,被撑开，在IE6下，返回0，其他返回撑开数值**

###2. 定时器，毫秒为单位
setInterval(function,time)，定时器返回一个定时器数字ID
clearInterval(number)根据定时器数字ID删除它

也有setTimeout()

# DOM
“W3C 文档对象模型 （DOM） 是中立于平台和语言的接口，它允许程序和脚本动态地访问和更新文档的内容、结构和样式。”
W3C DOM 标准被分为 3 个不同的部分：
核心 DOM - 针对任何结构化文档的标准模型
XML DOM - 针对 XML 文档的标准模型
HTML DOM - 针对 HTML 文档的标准模型
## 什么是 HTML DOM？
HTML DOM 是：HTML 的标准对象模型、HTML 的标准编程接口、W3C 标准
HTML DOM 定义了所有 HTML 元素的对象和属性，以及访问它们的方法。
换言之，HTML DOM 是关于如何获取、修改、添加或删除 HTML 元素的标准。

## 补缺

### Date对象

### var oDate=new Date();//调用构造函数创建时间对象
可用方法如下：
getHours()
getMinutes()
getSeconds()

### 取整：按照规则取一个整数
Math.ceil() 向上取整
Math.floor() 向下取整
Math.round() 四舍五入取整

### document.write();
*直接清空所有内容，包括标签属性，然后复写body*

## 元素通用属性
innerHTML
innerText

## HTML DOM节点
### 什么是节点
- 整个文档是一个文档节点
- 每个 HTML 元素是元素节点
- HTML 元素内的文本是文本节点
- 每个 HTML 属性是属性节点
- 注释是注释节点

### 方法
一些常用的 HTML DOM 节点方法：
appendChild(node) - 插入新的子节点（元素）,如果应用在一个已有的元素，则剪切
removeChild(node) - 删除子节点（元素）

W3C中详细说明的一些DOM方法
appendChild()	把新的子节点添加到指定节点。
removeChild()	删除子节点。
replaceChild()	替换子节点。
insertBefore()	在指定的子节点前面插入新的子节点。
createAttribute()	创建属性节点。
createElement()	创建元素节点。
createTextNode()	创建文本节点。
getAttribute()	返回指定的属性值。
setAttribute()	把指定属性设置或修改为指定的值。

node.cloneNode(boolean) 克隆该节点，参数表示为克隆方式


### 属性
一些常用的 HTML DOM 节点属性：
innerHTML - 节点（元素）的文本值
parentNode - 节点（元素）的父节点
childNodes - 节点（元素）的子节点    firstChild、lastChild
nextSibling、previousSibling - 节点（元素）的兄弟节点
attributes - 节点（元素）的属性节点



####还有下面一些
- nodetype：返回值是节点级数， 元素节点1 属性节点2 文本节点3 注释8 文档9
NodeType	Named Constant
1	ELEMENT_NODE
2	ATTRIBUTE_NODE
3	TEXT_NODE
4	CDATA_SECTION_NODE
5	ENTITY_REFERENCE_NODE
6	ENTITY_NODE
7	PROCESSING_INSTRUCTION_NODE
8	COMMENT_NODE
9	DOCUMENT_NODE
10	DOCUMENT_TYPE_NODE
11	DOCUMENT_FRAGMENT_NODE
12	NOTATION_NODE

- childNodes: 返回值是所有子节点数组

- children: 不是标准属性，但都支持 
返回值是所有元素节点的数组

- nodeName 属性规定节点的名称。
nodeName 是只读的
元素节点的 nodeName 与标签名相同
属性节点的 nodeName 与属性名相同
文本节点的 nodeName 始终是 #text
文档节点的 nodeName 始终是 #document

- nodeValue 属性规定节点的值
元素节点的 nodeValue 是 undefined 或 null
文本节点的 nodeValue 是文本本身
属性节点的 nodeValue 是属性值


## 修改HTML元素
修改 HTML DOM 意味着许多不同的方面：
改变 HTML 内容
改变 CSS 样式
改变 HTML 属性
创建新的 HTML 元素
删除已有的 HTML 元素
改变事件（处理程序）

### DOM事件
onchange 当值改变之后

## [DOM实例的原理,自己整理了一下不熟悉的](http://www.w3school.com.cn/example/hdom_examples.asp)

### Anchor对象
- 改变链接 设置a的innerHTML、href、target(_self、_blank)
- 设置链接的焦点状态 添加focus()、blur()
- 绑定快捷键 设置accessKey

### document对象
- 锚 document.anchors.length
- 表单 document.forms.length
- 图片 document.images.length

### event对象
- 鼠标左右键 event.button （数字0左键 1中键）
- 鼠标位置 event.clientX、event.clientY、event.screenX、event.screenY
- 键盘按键的unicode值 event.keyCode
- 监听shift键 event.shiftKey（boolean值，是否按下）
- 点击获取其标签名 window.event.target.tagName
- 返回触发事件的类型 event.type

### Form对象
- 重置表单 reset()
- 提交表单 submit()
- 验证表单 逐个值验证，不通过设置flag=false
- 下拉菜单 options[obj.selectedIndex]
- 内容达到长度自动跳到下一个元素内继续 elements[index].focus()

### location对象
- 跳转新地址 window.location="url"
- 重新加载 window.location.reload()

### navigator对象
- 浏览器名称\版本号\代码\平台\cookies启用\用户代理报头\在线\系统语言\用户语言 navigator.appName\appVersion\appCodeName\platform\cookieEnabled\userAgent\onLine\systemLanguage\userLanguage

### Option\Select对象
- 禁用下拉 disabled
- 获取所属form的id form.id
- 获取下拉选项个数 length
- 菜单可见大小 size
- 多选 multiple
- 获取option的文字 text
- 选中 selected
- 删除 remove()

### Screen对象
- 大小\可见大小\色深 screen.width\height\availWidth\availHeight\colorDepth
- 其他显示屏相关信息bufferDepth\deviceXDPI\deviceYDPI\logicalXDPI\logicalYDPI\fontSmoothingEnabled\pixelDepth\updateInterval

### Window对象
- 弹窗 alert()
- 弹窗确认 confirm()
- 弹窗提示 prompt()
- 展开新窗口 window.open()
- 状态栏文本 window.status
- 打印 window.print()
- 调整大小 resizeBy(x,y)\resizeTo(x,y)
- 滚动条滚动 scrollBy(x,y)\scrollTo(x,y)

# 事件

## 事件流
事件捕获capture pahse  addEventListener()

事件冒泡bubbling phase (没有必要去设置)

## 总结
- DOM0级的方式，只能监听冒泡阶段，并且绑定上的事件处理程序在所属元素的作用域内运行。不能有同名的事件，会覆盖。this是触发事件的这个元素。高版本浏览器会冒泡到window，低版本浏览器冒泡到document。
- DOM2级的方法，addEventListener()，可以自由设置冒泡、捕获。第三个参数是use capture ，true就是捕获，false就是冒泡。事件名不加on，可以有同名事件，会顺序执行，不覆盖。this是触发事件的这个元素。会冒泡到window。
- IE6、7、8是自己的方法，attachEvent()，只能监听冒泡阶段。没有第三个参数。事件名写on。可以有同名事件，会反着执行（事件栈）。this很蛋疼，是window而不是触发事件的这个元素。事件仅仅冒泡到document。

##一些应用
参见W3C对象参考手册
document.oncontextmenu 鼠标右键弹出菜单
onmousewheel 鼠标滚动
onkeydown 键盘按下

event.keyCode 键盘内码


#同步异步

##现象

##语法
fun.call(thisArg[, arg1[, arg2[, ...]]])

##call、apply
**两种方法的作用类似，只有一个区别，就是call()方法接受的是若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组。**

###描述
可以让call()中的对象调用当前对象所拥有的function。你可以使用call()来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。 