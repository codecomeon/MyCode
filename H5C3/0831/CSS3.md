# CSS3

##选择器

### 新增：
- ul~li 前置ul的li
- :not(div) 非

### 属性选择器,有引号的地方不可省略
- [title]   包含
- div[title]    包含
- div[title="第三页"]  全等
- div[title^="第"]   开头
- div[title$="页"]   结尾
- div[title~="页码"]    含有（空格 ' '分隔）
- div[title|="页码"]  开头（连字符 '-'分隔）
- div[title*="三"]   任意位置含有

### 伪类
### 序列伪类
- :first-child
- :last-child
- :only-child
- :nth-child(n)
- :nth-last-child(n)

*注：type可以支持标签和类选择器，如div:first-of-type   .content:first-of-type*
- :first-of-type
- :last-of-type
- :only-of-type
- :nth-of-type()
- :nth-last-of-type()

### 状态伪类
#### 动态
- :link
- :visited
- :active
- :hover
- :focus
- :target

#### 静态
- :root
- :empty
- :enabled
- :disabled
- :checked

### 伪元素
- :first-letter
- :first-line
- :before
- :after
- ::selection


## 变换 transform
- 旋转基点:transform-origin:50% 50% 0;//默认是中心50% 50% 0,分别是x、y、z

- **四种基本变换：位移\旋转\缩放\斜切**
- transform:translate(20px,10px);
- transform:rotate(30deg);
- transform:scale(.1,.5); //scaleX(.1) scaleY(.5);
- transform:skew(30deg,50deg);//skewX(30deg) skewY(50deg);
- 无序简写 transform:skew(50deg,20deg) scale(2,0.2) rotate(40deg);

- **3D**
- 除斜切外均支持3D，即类似格式scale3D(x,y,z)
- perspective 景深
- 如果是组合3D效果，应该给自己加上transform-style:preserve-3d;避免继承
- backface-visibility:visible

- 自定义变换：matrix()\matrix3D()

## 过渡 transition [浅析过渡的底层实现](http://www.jianshu.com/p/b5c1ecb8f8b5)
- [W3C标准支持](https://www.w3.org/TR/css3-transitions/#properties-from-css-)
- 简写 transition: all .2s ease-in-out 1s;
- 多个属性作为列表 transition:color .2s ease-in-out 1s, font-size .2s ease-in-out 1s;

## 多列（针对行内）
- column-count
- column-gap
- column-rule
- column-fill
- column-span
- column-width



