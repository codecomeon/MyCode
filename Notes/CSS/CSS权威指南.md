#CSS Cascading Style Sheet

## 1.选择器
- specificity  0,0,0,0
- 伪类：LVHA 即:link\:visited\:hover\:active

## 2. 层叠\继承\排序

## 3. 值与单位
- 颜色：web安全颜色，颜色是20%\51\0x33的倍数可以在256色计算机显示屏上避免抖动
- 长度：
1. 绝对单位 in 英寸 cm 厘米 pt 点 pc 派卡
2. 相对单位 em 字体倍数 ex英文小写x的高度

- 像素：见原书
- URL：相对URL一定是相对自身所处目录
- 关键字：inherit，可以使继承值优先于自定义值
- URI：Uniform Resource Identifier === URL: Uniform Resource Locator

## 4. 字体
- 五种通用字体系列：可以指定一个系列的字体
1. Serif    比例衬线，字体起笔结束都有额外装饰，粗细不同
2. Sans-serif   比例无衬线，字体粗细一致
3. Monospace    等宽
4. Cursive  手写
5. Fantasy  混合
- 加粗：normal、bold、bolder、lighter,400==normal\700==bold,具体见原文
- 大小：实际是给定一个em框，文本的呈现跟具体字体有关
- 变形font-variant
- 拉伸font-stretch
- font简写：font-style font-variant font-weight font-size/line-height font-family,后两个是必选
- font可以设置系统字体，如一些控件的默认字体
- 字体匹配，见原书
- 自定义字体引入 @font-face{font-family:"";src:url();}

## 5. 文本
- 首行缩进text-indent，如果设置负值，则可能导致悬挂缩进
- 水平对齐 特别的，justify
- 垂直对齐 1. line-height，行内框 
- 2.vertical-align :baseline sub super top text-top middle bottom text-bottom
- 基线对齐原则：如果有子元素有基线，则该元素基线与父元素基线平齐；没有基线，则行内框和基线对齐
- 单词间隔：word-spacing 字符间隔：letter-spacing
- 大小写转换text-transform:uppercase lowercase capitalize none
- 文本修饰 text-decoration:underline overline line-through blink,可以多个值
- 文本阴影 text-shadow
- 空白符处理 white-space:nowrap pre pre-wrap pre-line
- 文本方向 direction:ltr rtl
- Unicode支持 unicode-bidi:embed bidi-override