# css选择器

## 1.四类重要选择器
    element 标签选择器
    .class 类选择器
    #id id选择器
    * 通配符(选中所有)

## 2.简单选择器
    element,element 多选
    element1 element2 1的内部选择2
    element1>element2 1为父元素的2元素
    element1+element2 紧跟在1后面的2元素

## 3.[attribute]选择器
   css2: 
    [attribute] 含有该属性
    [attribute=""] 等于该值
    [attribute~=""] 含有单词值
    [attribute|=""] 连字符中开头值
   css3: 
    [attribute^=""]开头
    [attribute$=""]结尾
    [attribute*=""]包含

## 4.伪类选择器(冒号：)
    同一父元素的子元素序列(只会选择第一个，如果不是则不选中)
    :first-child 需要指明父容器，如不指明则优先选择第一个，最终结果选择一个
    :last-child 

    同类型序列
    :first-of-type 每个容器中该类型并列元素的第一个元素都选中，最终结果视容器数而定
    :last-of-type 

    注意：first和last强调的第一个最后一个都是在同级比较的

    n可以是具体数字，也可以是2n，2n+1，3n等，分别代表偶数奇数3的倍数
    nth-child(n) 第n个子元素
    nth


    用于链接的交集选择器
    :link 未被访问的链接
    :visited 已被访问的链接
    :active 活动链接
    :hover 鼠标移上去
    :focus 获得焦点（光标）


## 边框
    border-radius 可以用px或者百分比，从左上顺时针分为四个方向
    box-shadow x-offset y-offset blur spread color 阴影位置、透明度，扩展，颜色
    border-image 用小图片构成边框   

# 背景
    background-size   直接设置大小或者contain填充可留白 cover填满可超出（可以适应移动端的需求）
    background-origin 背景图起点默认padding-box，border-box,content-box（盒模型起点）
    background-clip 背景图多余部分的裁剪border-box,padding-box,content-box选取的值对应了要留下的内容
    background-blend-mode 设置多个背景或背景和颜色两者混合模式
