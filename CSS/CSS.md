# CSS

## table
- border-collapse:collapse

## 居中
### 水平居中
```css
{
    /* 文本水平居中 */
    text-align: center;
    
    /* 块居中 */
    margin: 0;
}
```

### 垂直居中
```css
.temp{
    /* 文本垂直居中：表格 */
    display:table-cell;
    vertical-align:middle;
    
    /* 块级垂直居中：绝对定位+transform补足 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* 注意：由于全百分比，可能会出现元素模糊，此时加一个hack */
    transform-style: preserve-3d;
    
    /* 视口居中vw、vh：仅适用于视口居中场景 */
    
    /* 最佳实践：flex */
    .parent{ display: flex; }
    .child{ margin:auto; }
}
```

## 文本溢出隐藏
### 单行
```css
{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
```
### 多行
```css
{
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient:vertical;
    width:100px;
}
```
# CSS准备

## 废弃标签

    b
    i
    u
    del

    html 只负责语义、内容和解构。不做样式化

## 常见标签

    容器 div ul ol dl table
    文字类 h1-6 p span a
    其它 img form input

# CSS

    cascading style sheet


    html    结构层

    **css** 样式层

    js      行为层

## 基本语法

    大写不敏感，换行不敏感，缩进不敏感
    但是，我们要求，不要出现大写，一定要换行，一定要缩进

    另外，一定要加分号

    ```
    选择器{
        属性名:属性值;
    }
    ```
    ```css
    h1{
        font-size:32px;
        color:#f00;
    }
    ```

## 书写位置

1. 内联样式

在标签的style属性里面写css

2. 内部样式

在head的style标签里面写css

3. 外部样式

在css文件中写css，需在html中用link标签引入

### 优先级

就近优先

## css基本属性

    color                   字体颜色
    background-color        背景颜色
    font-size               字体大小
    font-weight             bold
    border                  边框


        border 默认width 3px，默认的颜色为color，字体颜色
        所以，至少需要一条style属性

        常见缩写

        ```css
        h1{
            border:3px solid #f00;
        }
        ```
## css选择器
### 2.4.1. 通配符选择器
```css
代表所有元素
*{
    
}
```

### 标签选择器
```css
代表选中网页上所有的h1标签
h1{
    
}
```
### class选择器
```css
代表，选中网页上的一类，拥有相同class属性的元素
class属性可以有多个，在html中，以空格隔开
.ele{
    
}
```
### id选择器
```css
代表，选中网页上唯一的那个id为main的元素
#main{
    
}
```
### 优先级

    1000   100     10   1
    id > class > tag > *

## 选择器的组合使用

    1. #id.class

        交集选择器，分类选择器

        找到某一个元素，同时拥有该id和class

    2. #id .class

        后代选择器

    3. #id>.class

        子代选择器

    4. #id + .class / #id+.class

        兄弟选择器，只能选择同一级别，并且紧紧相邻的后一个元素

    5. #id,.class

        分组选择器

## 伪类
lv ha
a:link      链接的默认样式 
a:visited   链接被访问过的样式
a:hover     鼠标经过的样式，适用面比较广泛
a:active    鼠标按下的样式，适用于按钮

# 1. css font

## 1.1. 字体
### 1.1.1. 标签默认样式

p chrome 默认段前段后距离 1em,段前段后距离可以叠加

### 1.1.2. font

css原则1: css属性的展开写法，一定要写在缩写后面

```css
p{

    font-family:BiauKai,Microsoft YaHei,Arial;
    /*字体*/

    font-size:24px;
    /*文字大小*/

    line-height: 32px;
    /*行高*/

    font-weight:bold;
    /*b*/
    /*粗体*/
    /*400-900*/
    /*normal < 500 < bold*/

    font-style:italic;
    /*i*/
    /*斜体*/

    font: italic bold 16px/32px "微软雅黑";
    /*
        font-style
        font-weight
        font-size/line-height
        font-family
    */

    font:16px/32px "微软雅黑",Arial;
    font-style:italic;

    color:#f00;

    text-align: center;

    vertical-align: bottom;
    /*行内元素之间的垂直对齐方式
    top
    middle
    bottom
    */

    line-height: 32px;
    /*行高*/

    text-indent:32px;

    text-shadow: 3px 5px 1px #888;
    /*
        x-offset
        y-offset
        blur
        color
    */

    /*对于文字过长，显示省略号效果，必须先设置容器高宽*/
    white-space:nowrap;
    /*
        文本过长，是否换行
        normal 默认换行
        nowrap 不换行
    */

    overflow: hidden;
    /*
        超出隐藏
    */
    text-overflow: ellipsis;
    /*
        文字超出隐藏
        clip 默认，裁剪
        ellipsis 省略号显示
    */

}
```
# 2. box 盒模型
content(width,height) + padding + border + margin

padding: 上 右 下 左;
如果在缩写中，缺失某个值，用对称方位的值代替

border: 1px solid #f00;
该种缩写，不支持上右下左的缩写方式

border-width
border-style
border-color
这三种缩写，支持上右下左分别设置
```css
.son{
    border-width: 3px 5px 2px;
    border-style: solid dashed;
    border-color: #f00 #00f;
}
```

margin:30px;
写法类似padding

# 3. :before 和 :after伪类
## 3.1. margin-top bug 外边距坍塌

* (1) 父容器增加::before选择器，content:" ";display:block;overflow:hidden;

    由于::before并不算真正的标签，不会影响到:nth-child、:first-child之类的选择器  

* (2) 在首部增加一个空div，overflow:hidden

    出现了无意义的div

* (3) 给父容器增加 overflow:hidden

    局限性，在需要overflow做其他用途的时候，不能使用这个方法

* 给父容器增加一个小的padding值

    不容易计算，产生了无意义代码

* 把子元素的margin-top 用父元素的padding-top实现

    每次修改padding，都要重新修改height

::before ::after IE9+
:before :after IE8

# float
float 浮动

* 一旦元素浮动，就不会占据默认的margin区域，比如div
* 浮动元素后方，不要直接跟随非浮动元素
* 浮动元素相互之间，才能产生排版影响
* 浮动元素，无法正常的撑开父容器

float left 从左到右排列，类似inline-block
float right 从右到左排列，区别于inline-block，元素顺序会变化

# 清除浮动

只要用到了float，必须清除float

原因：一旦元素float了，就不能占据原来的物理空间，会导致父容器无法正常撑开。但是某些场合，父容器不能给固定高度

    1. 父容器overflow:auto

        因为偶尔需要overflow做其它用途，所以该方法不适用

    2. (2)空div clear:both

        在浮动元素的最后方，增加，并列的空div

    3. (1)利用父容器::after，模仿方法2

        最佳方案

如果不需要兼容IE9以下浏览器，推荐方案3 ::after方法
反之，用空div

# position 定位

    position本身是一个css属性
    另外要搭配，四个属性使用

    top right bottom left 是四个css属性
    
    优先级：
    top>bottom
    left>right

## static

    静止定位（默认状态），top right bottom left 对元素不会产生作用

## relative

    * 相对定位，相对原来的位置进行**偏移**，
    * top right bottom left 四个属性，代表  从这4个方向，向对立方向的偏移量
    * 偏移量可以是负值
    * 元素原来的位置，继续保留

## absolute

    * 绝对定位，依次从内往外找，相对外层，第一个有position属性，且属性值不为static的元素定位。如果外层都没有position属性，则相对**浏览器页面窗口**（window）定位,但是，不能像fixed一样固定在窗口上
    * top right bottom left， 代表，距离参照物边界的距离
    * 元素原来的位置，不再保留   

    可以配套使用z-index属性
    使用position:absolute的时候，一定要有一个外层参照物

## fixed

    * 固定定位，相对**浏览器页面窗口**（window）定位
    * top right bottom left， 代表，距离body、html边界的距离
    * 元素原来的位置，不再保留  

## 左右居中
行内元素左右居中，父容器：text-align:center;
块级元素左右居中，自身: margin: 0 auto;

## 上下居中
行内元素  line-height

块级元素怎么办

1. 父容器和子容器，都有固定高宽

    就可以直接设置固定margin值，实现上下左右居中效果

2. 父容器，高宽不知道，子容器高宽固定
```css
.father{
    position:relative;
}
.box{
    width: 100px;
    height: 100px;
    background-color: #f00;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-50px;
    margin-left:-50px;
}
```

3. 适用于各种情况(?)
```css
.father{
    position:relative;
}
.box{
    width: 100px;
    height: 100px;
    background-color: #f00;
    position: absolute;
    margin:auto;
    top:0;
    bottom:0;
    right:0;
    left:0;
}


body{
    text-align: center;
}
.father::before,.father::after,.son{
    display: inline-block;
    vertical-align: middle;
}
.father::before,.father::after{
    content:"";
    height:100%;
}
```

# cursor
```css
.box{
    cursor:default; 
    /*
    默认鼠标箭头
    */

    cursor:pointer;
    /*
    手势符号
    常见于按钮、超链接
    */

    cursor:auto;
    /*
    自动，例如，放到文字上，会变成竖线符号
    */
}
```

# background

## background-color 

    颜色英文名：red

    #ff0000
    rgb(255,0,0)
    rgba(255,0,0,0.5)

    #ff00ff

    hsl
    hsla 色相、饱和度、亮度、透明度

## backgournd-image

    backgournd-image:url()

    url("./images/background.jpg")
    url('./images/background.jpg')

    url(./images/background.jpg) 不推荐
    

## background-position

    两个参数，第一位，x轴的偏移量，第二位，y轴的偏移两

    100px   100px

    50%     50%     相对 **容器尺寸 - 图片尺寸** 的差值

                    当background-attachment:fixed 的时候
                    相对窗口尺寸计算 \*\*\*

    left    top
    center  center  默认值
    right   bottom

## background-repeat

    repeat
    no-repeat
    repeat-x
    repeat-y
    round       拉伸  但是超出一定图片比例的时候repeat
    space             容器空间足够的时候进行repeat

## background-attachment    附着

    fixed       背景图片，固定，不随内容滚动
    scroll      默认，滚动，随内容滚动
    
## 缩写

background: color image repeat attachment position;