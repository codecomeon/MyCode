Emmet语法

> 子元素

+ 兄弟元素

^ 跳到上一级元素

() 分组

[] 属性

{} 内容

. 类名

# id

* 乘法，一次多个

$ 自增符号，代替数字，默认从1开始自增，自定义起点直接连@，递减-
如：ul>li.item$@-*5，从5开始递减
    ul>li.item$@3*5，从3开始递增到7
    ul>li.item$@-5*5,从9开始递减到5

连写
form#search.wide id和class同时在form里面

p.a.a1.a2.a3 多类名a,a1,a2,a3的p元素

td[rowspan=2 colspan=3 title] 多属性

隐式元素
.class 默认class类名的div元素
em>.class 默认em中span子元素
ul>.class 默认ul中li子元素
table>.class>.class 默认table中的tr中的td子元素