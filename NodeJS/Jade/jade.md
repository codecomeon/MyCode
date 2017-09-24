# [Jade](https://naltatis.github.io/jade-syntax-docs/)
[较近版本](http://www.jianshu.com/p/e2a9cd3b7e56)
- Jade Template Syntax

## 安装
- npm i -g pug-cli

## 框架
```jade
doctype html
html
    head
        title my jade template
    body
        h1 hello #{name}
```
## ID、类
```jade
#content
    .block
        input#bar.foo1.foo2
```
## 嵌套
```jade
ul#books
    li: a(href="javascript:") Book A
```
## 文本
```jade
h1= book.name

p
    | foo bar
    | hello jade

p.
    | foo bar
    | 这也是一样的
```
## 转义
```jade
li Hello <em>World</em>

li= name
li!= name
{"name": "Hello <em>World</em>"}

li Say #{name}
li Say !{name}
```
## 属性
```jade
input(type="text", placeholder="your name")
input(type=type, value='Hello #{name}')
input(checked=true, disable=true)
```
## 注释
```jade
// single line comment
//- invisible 不可见single line comment
// block comment
  h1 hello world
//- invisible 不可见block comment
  h2 how are you?
  <!--[if IE 8]>
  script(src='/ie.js')
  <![endif]-->
```
## 变量
```jade
- var foo = "hello world"
h1= foo
- var foo = book.name + " world"
h1= foo
```
## 选择语句
```jade
if name == "Bob"
  h1 Hello Bob
else
  h1 My name is #{name}
{"name": "Bob"}

unless errors
  p no errors
{"errors": false}
```
## 循环语句
```jade
select
  each book, i in books
    option(value=i) Book #{book}
{"books": ["A", "B", "C"]}
    
<select>
  <option value="0">Book A</option>
  <option value="1">Book B</option>
  <option value="2">Book C</option>
</select>


ul
  for book in books
    li= book
  else
    li sorry, no books!
```
## 分支
```jade
case name
  when "Bob"
    p Hi Bob!
  when "Alice"
    p Howdy Alice!
  default
    p Hello #{name}!
```
## 混杂
```jade
mixin book(name, price)
  li #{name} for #{price} €
  
ul#books
  +book("Book A", 12.99)
  +book("Book B", 5.99)
  
mixin book(name)
div&attributes(attributes)= name

+book("Book A")#first
+book("Book B")(title="book b")
+book("Book C").last
```
