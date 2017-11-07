# 寻址方式 URL

如果寻址方式，是按照当前位置进行计算，则叫**相对地址**

如果寻址方式，跟当前位置没关系，则叫**绝对地址**

/
./
../
./文件夹名字
./文件夹名字/文件名字.文件后缀

# iframe

引入网页文件,可以引入其它，但是不建议

# 列表ul/ol

ul 无序列表（容器） 

```
type disc(默认，实心圆点)  circle（空心圆圈） square(实心方点)
```

ol 有序列表（容器）
```
type 1 a A i I
start 6  f  F vi VI
```

li 列表项

适用场景： 横着，形成一行 、 竖着，形成一列 的并列元素

dl 自定义列表(容器)
    dt 列表项
    dd 对于相邻（上）列表项的描述

# 链接a
```html
<a href="./image.png"></a>
<a href="./test.zip">图片</a>
href 属性，为url地址，一般为网页，图片。其实，可以放任意文件，如果该文件浏览器可以直接打开，则打开。如果浏览器无法打开，即下载

<a href="mailto:xu@unnuo.com">邮件</a>
<a href="javascript:alert('123')">点击我</a>
```

# 锚点

第一种写法
```html
    <a href="#anchor">点我</a>
    <a href="" name="anchor">点我</a>
```

第二种写法
```html
    <a href="#anchor">点我</a>
    <div id="anchor">锚点</div>
```


# HTML原则

用正确的标签做正确的事

如果网页css文件完全去掉，也能实现良好的阅读体验


# 表格

## 基本标签

table 表格
 
tr 表格行

th 表头单元格

td 普通单元格

单元格，必须在行里面，行必须写在table里面

caption 标题标签 caption不占据table的高度

thead 表头分组
tbody 表主体分组 table的高度，减去thead和tfoot的高度，剩下的有tbody根据行数平分
tfoot 表脚注分组

## 基本属性

table:

    width,height,border,cellpadding,cellspacing
    bgcolor

tr:

    align(left center right) valign(top middle bottom)

td:

    width height align valign
    colspan 向右合并单元格
    rowspan 向下合并单元格

# Div 和 Span

div Division

    块级元素 block
    display:block

    默认自成一块区域，独占一行，可设置高宽

span 用来组合行内元素的

    行内元素 inline
    display:inline

    默认，相当于文字，从左到右，组成一行，不可设置高宽

img 行内块元素

    行内块元素  inline-block
    display: inline-block / inline
    与行内元素显示规则一致，但是可以设置高宽

一般，用来排版的元素，都是块级元素
一般，用来修饰文字的元素，都是行内元素

块级元素和行内元素可以相互转换，通过display属性

# H5语义化标签

大部分语义化标签 本身跟div一样

table 布局麻烦

div 简单，但是阅读性不好

所以，才出现语义化标签，但是我们不推荐使用语义化标签

为了阅读性良好，保持代码风格，良好的ID和Class命名就足够了

语义化：不等于语义化标签，具有良好的语义命名，就是良好的语义化

## 罗列
结构 nav\article\header\section\footer\caption
语义 time


# 表单 - 常见表单控件
## form
表单容器

属性:
    action
    method

        GET 发送数据量小,明文
        POST 发送数据量大,加密

表单控件，必须写在form容器里面，这样，在submit的时候，才会提交form里面的所有数据

### input
输入框元素

属性:

    name            数据提交时的名字

    value           输入框的默认值

    placeholder     占位符

    maxlength       允许输入的字符长度，注意与max区分

    readonly        只读

    required        必须,非空。对于单选框，下拉列表，滚动列表比较常见

    type    text(default)  文本输入框
            password       密码输入框
            number         数字输入框    max min step
            email          邮箱输入框    不能全信
            date           日期输入框

            color          取色器
            range          滚动条

            checkbox 复选框
            radio 单选框
                同name属性的radio，只能选中一个
                一般必有一个radio具有checked属性

            button 默认按钮
            submit 提交按钮
            reset  重置按钮
            image  图片提交按钮

            file    文件提交

### textarea

属性

    cols 按英文字符计算,默认显示的列数+2,也是textarea的最小宽度
    rows 默认显示行数，也是textarea的最小高度

    name            数据提交时的名字

    value           输入框的默认值

    placeholder     占位符

    maxlength       允许输入的字符长度，注意与max区分

    readonly        只读

    required        必须,非空

### label

标签

    常用于修饰radio,checkbox等

    点击label 相当于点击了label for属性的目标
    
    其中，for属性的值，必须是目标的id
    
### select
选择列表

通用属性

    required

特殊属性

    size        默认为1，也就是下拉列表；否则，为滚动列表

    multiple    多选

#### option

属性

    selected    设置为默认选中项

    disabled    设置为不可选中项

规范

    无论对于下拉里列表，还是滚动列表，最好设置一个selected

### datalist

datalist vs select

datalist 必须与input结合使用,input的list属性值，需要是datalist的id

```html
datalist
<input list="data" name="city1" type="text">
<datalist id="data">
    <option value="beijing">
    <option value="shanghai">
    <option value="guangzhou">
    <option value="shenzhen">
    <option value="hangzhou">
    <option value="nanjing">
</datalist>

select
<select name="city2">
    <option value="bj">北京</option>
    <option value="sh">上海</option>
    <option value="gz">广州</option>
    <option value="sz">深圳</option>
    <option value="hz">杭州</option>
    <option value="nj">南京</option>
</select>
```
#### option

此外，datalist中，option的写法与select有差异

### fieldset

分组，对表单空间进行分组

#### legend

与fieldset搭配使用，作为分组的标题

# 自学内容

转义字符

    &nbsp;
    &lt;
    %gt;
    %copy;

button标签