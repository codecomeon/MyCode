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

### 一个transition的问题
```
	//创建了一个div标签，追加到了body元素身上
	$("<div></div>").appendTo("body");
	
	//改变css，我们预想的是，用过渡实现这个东西，但是是干蹦。
	//因为浏览器没有反应过来，你可以认为transition需要准备时间。
	setTimeout(function(){
		$("div").css("width",1000);
	},1);
```

## 多列（针对行内）
- column-count
- column-gap
- column-rule
- column-fill
- column-span
- column-width

## 动画 animation
- 第1个参数： 动画的名字 @keyframes name 此处的name就是绑定的动画
- 第2个参数： 动画的总时长
- 第3个参数： 缓冲,默认ease
- 第4个参数： 延迟时间，注意如果动画进行很多次，只有第一次开始前有延迟
- 第5个参数： 运动次数，要无限次写infinite
- 第6个参数： 是否来回运动，如果写alternate那么第偶数次将是时间轴的逆向
- 第7个参数： forwards表示当运动结束之后让这个元素保留在原地




