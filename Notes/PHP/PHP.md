# PHP Hypertext PreProcessor
超文本预处理器
## 注释3种
\# 单行注释
// 单行注释
/**/ 块注释

## 内置标识符或关键字大小写不敏感，变量敏感

## 变量：$开头，字母数字下划线
### 特有运算符
- 串接 .  .=
- 逻辑 and or xor
- 数组运算符 + 联合

## 几个特性：
- 弱类型
- 变量作用域：变量能够被引用/使用的那部分脚本，三种类型：local（局部）global（全局）static（静态），全局变量$GLOBALS[index]
- static，可以阻止默认删除掉的变量

## 数据类型
- 字符串，双引号或者单引号
- 数组
- 整数int
- 浮点数float
- 逻辑Boolean
- 空值 null
- 对象class
- 常量define()首个参数定义常量的名称,第二个参数定义常量的值,可选的第三个参数规定常量名是否对大小写不敏感。默认是 false。

## 内置方法
- 输出：echo或echo()
- 输出：print()\print_r()\var_dump()
- 原生报头header()

## 内置变量(超全局)[http://www.w3school.com.cn/php/php_superglobals.asp]
- $GLOBALS
- $_SERVER
- $_REQUEST
- $_POST
- $_GET
- $_FILES
- $_ENV
- $_COOKIE
- $_SESSION

## 数组
- 数组类型：索引数组（带有数字索引）、关联数组（带有指定键）、多维数组（包含数组的数组）
- (1)创建索引数组：1. array('0') 2.$arr[0]='0'
- (1.1)遍历索引数组，for()
- (2)创建关联数组：1. array("Peter"=>"35","Ben"=>"37","Joe"=>"43") 2. $age['Peter']="35";$age['Ben']="37";$age['Joe']="43";
- (2.1)遍历关联数组：foreach($arr as $key=>$value)
- (3)多维数组是数组的嵌套
- 数组长度 count()
- 输出数组，可以结合<pre></pre>来自动识别换行，达到数组竖排显示的效果

## 字符串
- 字符串中直接插入变量{$a},必须使用双引号，而不能使用单引号（原样输出）
- <<< a /*这里面直接放置字符串*/  a
- 长度strlen()
- 检索字符串strpos()

## 文件处理
- file_put_contents()