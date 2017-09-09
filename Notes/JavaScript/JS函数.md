#JS函数
[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions)

##1. 函数是一个代码集合

##2. 函数声明
### 预解析
变量声明、函数声明的提升都是预解析与读取的规则
**注意：预解析阶段，函数声明与变量声明冲突时，函数优先代替变量声明**

预解析过程：
1. 预读取并保存默认作用域下各个声明标识符的类型并给予默认值，并且删除所有声明关键字
2. 执行代码
**在每一个作用域解析代码时，会确定其中每一个变量或者对象所在的作用域链**

### 常用形式
function myFunction([args1],[args2]){
    statement
}

### 函数表达式 Function expression，*不适用函数声明提升*！
- 匿名函数形式：
var myFunction = function() {
    statements
}
- 命名函数形式：
var myFunction = function namedFunction(){
    statements
}

#### 立即调用的函数表达式 （IIFE） Immediately Invokable Function Expressions
**用处之一：将一段代码闭包**

匿名函数声明+函数调用，在声明的同时调用
```javascript
    var a=1;

//    1. 闭包形式
//  传说中的最佳实践~
    (function (i) {console.log(i);}(a));
//  另一种形式
    (function (i) {console.log(i);})(a);

//    2.一元运算符
    +function (i) {
      console.log(i);
    }(a);
    -function (i) {
        console.log(i);
    }(a);
    !function (i) {
        console.log(i)
    }(a);
    ~function (i) {
        console.log(i)
    }(a);

//    3. function形式
    new function(){console.log(a);};//无参数
    new function(i){console.log(i);}(a);//有参数
```

##3. 参数
### 参数类型-动态参数类型

### 参数传递
- 实际参数是调用函数时传入的参数，实际上是调用函数时确定那个的值，即使是一个变量，传入的也是该变量的引用
- 形式参数是函数内部接收值的临时参数，实际上是一个变量

### return，返回一个值作为函数调用的结果
- 有截断后续代码的作用

##4. 引用类型--函数的本质
- object
- function
- array
- RegExp
- Math
- Date

##5. 函数的重载--JS无重载，只有覆盖
- 模拟重载:arguments[index]

##6. 全局变量、局部变量、作用域
###全局变量的作用
1. 通信
被多个函数共同调用，可以用于函数之间的通信
2. 累加
作为累加器，保存每一个函数调用的结果

###作用域==运行环境，所有的操作都在作用域确定了之后执行
**更深的说，计算机的一切都是赋值，所有操作也都是赋值，我们讲作用域确定，也是赋值，在计算机中给作用域这个属性进行赋值**
域：空间 范围 区域
作用： 读 写
全局作用域和局部作用域的区别在于**运行的顺序**，特别是多个JS文件的作用域也是分隔开的

**闭包的理解:函数的运行只在被定义的作用域，而不是被执行的作用域。**
*或者* 给予子级函数访问父级函数的寻址权限

通俗：当函数在其他地方使用的时候能**保存**这个函数所需要的运行环境，也即是函数能保存下函数诞生时的环境，而不至于每一次运行都忘记了自己所在的环境中的信息
~~技术解释：作用域也是一个对象，出现闭包时，~~会导致该作用域对象不被回收~~，因为内部产生一个新的作用域对象，直到这个新的作用域对象被回收~~

闭包就是一种作用域

##7. 闭包方式-函数工厂

###和闭包(closures)的区别
闭包是函数的作用域(scoping)的一种，类似的作用域还有Global、local

最简单的理解：将n个变量和1个函数封装在同一个函数里面
~~闭包的定义：固化所在作用域，使其不要被回收~~
不是固化，而是复制这个作用域，跟随我这个函数

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
[文档1](http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html)
[文档2](http://www.cnblogs.com/xiaohuochai/p/5731016.html)
- 作用1：在所有可以使用只有一个方法的对象之时，都可以同样用闭包来完成

- 作用2：用于模拟私有方法

- 作用3：这个作用更加实际，使用闭包来防止隐患，而较少
