# 1. JS基础

## 1.1. 历史
Brendan Eich创始者

1995 LiveScript
后来随Java的火热而改为JavaScript

1997 ECMAScript 1.0
1999 ECMAScript 3.0
2009.12 ECMAScript 5.0
2015.6 ECMAScript 6.0

## 1.2. 三种引入方式
内嵌 head部分放入所有js代码
内联 在相应元素属性部分加入事件
外联 head部分写id文件地址

引入的地方无论在文档何处都起作用
**但是作用效果视引入的具体位置而定，基本规则是从上到下逐条运行**

### 1.2.1. 简单输出
网页弹窗 alert();
提示输入框 prompt(text,value);
//上述两个输出为模态输出，会截止所在语句后面代码的运行
控制台输出 console.log();

### 1.2.2 代码语法
- 每行代码都以分号结尾
- 分号的作用分隔代码，编译时相当于换行
- 各种代码用的符号要英文，注意检查中英文区别

## 1.3 [字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#字面量)-也叫直接量

### 1.3.1 数字
- 10进制，16进制，8进制
- 只有10进制有小数字面量，其他进制没有小数字面量

### 1.3.2 字符串
- 双引号、单引号嵌套时要交替使用

## 1.4. 变量 Variables  标识符 identifier

### 1.4.1. 声明
变量声明 var

### 1.4.2. 变量类型
- 5种基本类型：number,string,undefined,boolean,null
[数据类型](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)

#### ASCII码
- 数字0 48 大写字母A 65 大写字母a 98
- 
#### typeof

#### 引用类型：instanceOf

### 1.4.3. 变量名

- 数据的类型分为简单数据类型和引用数据类型,简单数据类型存储于栈中，复杂数据类型存储于堆中

- 变量的名字是一个字符串，它存储在哪里呢？应是一个用于存储变量名的栈中，其内容是一个地址
- 变量名就是内存地址，变量名本身的数据类型是引用数据类型
**变量声明的提升Variable hoisting--会提升到所有语句之前**
这与后面的函数声明提升Function hoisting是同样的
[直接找到变量声明的提升](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)

#### 1.4.3.1. 变量名
- 四种：字母、下划线、美元符、数字（数字不能作为开头）
- 字母其实可以是各种字符，具体见文档标题-变量
#### 1.4.3.2. 这个链接很重要 [ mdn文档 ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)

#### 1.4.3.3. 变量命名方法
1.匈牙利命名：数据类型+对象描述（小写+首字母大写） 如sName

> *数据类型*
- s: 表示字符串String
- i: 表示整型Int(它是Number中的整数类型)
- fl: 表示浮点Float(它是Number中的小数类型)
- b: 表示布尔Boolean
- a: 表示数组Array
- o: 表示对象Object
- fn: 表示函数Function
- re: 表示正则Regular Expression

2.驼峰命名
* 小驼峰式命名法（lower camel case）：第一个单字以小写字母开始；第二个单字的首字母大写，例如：firstName、lastName。
* 大驼峰式命名法（upper camel case）：每一个单字的首字母都采用大写字母，例如：FirstName、LastName、CamelCase，也被称为Pascal命名法。

3.帕斯卡命名
即大驼峰命名

#### 变量出现零值的情况
* is not defined 一种JS报错，变量未定义
* undefined      变量值未定义，是变量数据类型的一种
* null           object类型的一种特殊值
* NaN            number类型的一种特殊值

### 1.5. 数字类型转换：
- 将一个字符串转为数字：parseInt()、parseFloat()

1. 尽可能转换为整数 parseInt();//parseInt(string, radix);
    [永远都要明确给出radix参数的值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
    如radix参数为16 将会把第一个参数看作是一个数的十六进制表示，该参数不符合十六进制的内容及之后内容全部放弃
   以下均是15
   、、、
            parseInt(15,10)
			parseInt(17,8)
			parseInt(1111,2)
			parseInt(“0xf”,16)
			parseInt(“f”,16)
			parseInt(16,9)
			parseInt(“15e6”,10)
			parseInt(“15*6”,10)

//          10进制 100 10个10
//          8进制  100 8个8
    、、、

2. 转换为浮点数 parseFlost();
尽可能的将一个字符串转为浮点数，浮点数之后如果有乱七八糟的内容，直接舍弃。

3. 运算符转换
* 一元正号 +
```javascript
+3     // 3
+"3"   // 3
+true  // 1
+false // 0
+null  // 0
"1.1" + "1.1" // "1.11.1"
(+"1.1") + (+"1.1") // 2.2 
+"1.1"+(+"1.1")// 2.2
```

- 隐式转换: 纯字符串、布尔、null会隐式转换, 除加号外数学运算符都优先解释两边为number类型
```javascript
10-4//6
10-"4"//6
10/"4"//2.5
10*"4"//40
10%"4"//2
"10"-"4"//6
"10"-"4"//6
"10"/"4"//2.5
"10"*"4"//40
"10"%"4"//2
```

- 特殊规则
1. 有NaN参与的数学运算都是NaN
2. Infinity相互无法运算时，为NaN
3. 字符串运算总是先把所有参数改为字符串再运算，会用到toString()、String()
//TODO：每个特殊情况都要在严格模式下运行通过，然后加入笔记

- undefined 
1. 数值类型环境中->NaN 
2. 布尔类型环境中->false
- null 
1. 数值类型环境中->0 
2. 布尔类型环境中->false

# 运算符
[MDN运算符罗列](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators)

## 1. 数学运算符
\+ - * / % ()
####最重要的是整数和浮点数的相互转换

## 2. 关系运算符
\> < >= <= == != === !==
**在判断的时候尽力使用全等===而非等==**

## 3. 逻辑运算符
- ! && ||
- **运算顺序 ! && ||**

- **&&、||的短路性**

## 4.赋值运算符 特点：均可以用逗号隔开连续赋值。
= += -= *= /= %= ++ --
```javascript
//连续声明赋值
var a=1,b=1,c=1;

//以下是错的，
var a=b=1;
//这等同于
var a=(b=1);
```

## 5.各类运算符优先级顺序
[优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
++ -- !贴身的  →→→ 数学 →→→ 比较 →→→ 逻辑  →→→ 赋值

## 6. 三目运算符
条件 ? value1：value2；//value1和value2代表整个表达式的值

## 7. 扩展运算符
- * 自增自减 a++/++a/a--/--a
- * *幂 2 ** 3//8*
- 一元正号 +

# 语句
- 语句的含义：控制。用于生成最终执行代码，比如if，for，最终都是为了整理出需要的代码，不需要的代码都被删除，控制语句本身也会没掉。

##1. if语句
**if条件：
- 所有可能导致false的情况：
1. undefined
2. null
3. 0
4. NaN
5. 空字符串 ("")
- true: 任意对象，包括值为false的Boolean对象

##2. switch...case
```javascript
switch (expression) {
  case value1:
    // 当 expression 的结果与 value1 匹配时，从此处开始执行
    statements1；
    [break;]
  case value2:
    // 当 expression 的结果与 value2 匹配时，从此处开始执行
    statements2;
    [break;]
  ...
  case valueN:
    // 当 expression 的结果与 valueN 匹配时，从此处开始执行
    statementsN;
    [break;]
  default:
    // 如果 expression 与上面的 value 值都不匹配时，执行此处的语句
    statements_def;
    [break;]
}
```
**如果出现多个值同样执行代码时，推荐以下方式:**
```javascript
var foo = 1;
switch (foo) {
    case 0:
    case 1:
    case 2:
    case 3:
        alert('yes');
        break;
    default:
        alert('not');
}
//这里特别是，匹配类型为字符串时会比较方便，case可写为一行
```

## 3. for循环
for ([initialization]; [condition]; [final-expression])
   statement

???在这个结构里面，所有代码scoping都与for所在同级。???
[for的语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for)

### lable语法:for的循环控制
```javascript
there:
    for(;;){
        break there;//there后面的循环会被终止，执行for语句后面的语句
    }
here123:
     for(;;){
         contine here123;
     }
```
### 循环变体：
- do...while
- while