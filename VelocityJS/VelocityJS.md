# Velocity.js   [官方中文文档](http://www.mrfront.com/docs/velocity.js/index.html)

## 基本使用方式
- js库
- 类jQuery
- 链式调用
- 单函数，指令式调用
- css属性必须使用驼峰式，不支持连字符

## Basics
- Bugs
- Dependencies
- Arguments
- Properties Map
- Chaining

## Option 选项
- duration: slow, normal, fast
- queue
- begin\complete
- display\visibility
- loop：1\true
- delay
- mobileHA 默认true

### progress
- 回调传出五个参数
1. elements：当前执行动画的元素，可以用$(elements)来获取
2. complete：整个动画过程执行到百分之多少，该值是递增的，注意：该值为一个十进制数值 并不带单位 (%)
3. remaining：整个动画过程还剩下多少毫秒，该值是递减的
4. start：动画开始时的绝对时间 (Unix time)
5. tweenValue：动画执行过程中 两个动画属性之间的补间值

### easing
- 五种参数形式
1. jQuery关键字:所有jQuery预定义的Tween函数关键字
2. CSS3关键字:ease\ease-in\ease-out\ease-in-out
3. CSS3 贝塞尔曲线 [0.17, 0.67, 0.83, 0.67]//bezierCubic的四个参数
4. Spring Physics [ 1000, 40 ]//两个参数，第一个是tension势能，第二个是friction摩擦系数
5. Step easing [2] 表示步长为2，具体效果根据属性类型不一样
- 单属性单独设置easing    borderBottomWidth: [ "2px", "spring" ]
- 自定义easing
```
$.Velocity.Easings.myCustomEasing = function (p, opts, tweenDelta) {
    return 0.5 - Math.cos( p * Math.PI ) / 2;
};
```

## Command 指令
- fadeIn\fadeOut
- slideUp\slideDown
- stop
- finish

### scroll   Page Scrolling
- 该指令可使滚动条滚动到当前调用velocity的对象上
-- 回顶：$('body').velocity("scroll", { duration: 500, easing: "easeOutQuart" });
- 还可以加上container属性用于指定滚动的元素的目标位置容器
- offset属性用于设置偏移量
- 移动端卡顿需要关闭手机硬件加速：$("html").velocity("scroll", { offset: "750px", mobileHA: false });

### reverse  Animation Reversal
- 该指令用于在动画后恢复到动画开始值
- 可以传入一个{}，重新设置倒播的属性

## Feature 特性
- transforms
- colors:color,backgroundColor,borderColor,outlineColor
```
$element.velocity({
    /* Animate a color property to a hex value of red... */
    backgroundColor: "#ff0000",
    /* ... with a 50% opacity. */
    backgroundColorAlpha: 0.5,
    /* Animate the red RGB component to 50% (0.5 * 255). */
    colorRed: "50%",
    /* Concurrently animate to a stronger blue. */
    colorBlue: "+=50",
    /* Fade the text down to 85% opacity. */
    colorAlpha: 0.85
});
```
- hook 作为工具函数，访问器。
1. $.Velocity.hook($element, "translateX", "500px"); // 值必须写上单位
2. $.Velocity.hook($element, "translateX"); // 获取元素的translateX值

### SVG
```
$svgRectangle.velocity({
    /* 坐标动画 */
    x: 200,
    r: 25,
    /* 2D 变换动画 */
    translateX: "200px",
    /* 3D 变换动画（非IE浏览器） */
    translateZ: "200px",
    /* 颜色填充动画 "Fill" */
    fill: "#ff0000",
    strokeRed: 255,
    strokeGreen: 0,
    strokeBlue: 0,
    /* 一些标准的 CSS 属性动画 */
    opacity: 1,
    width: "50%"
});
```

### Promises ES6标准的支持

### Mock 控制所有velocity的动画时长
- $.Velocity.mock = true;

### Utility Function 公有方法
```
var divs = document.getElementsByTagName("div");
$.Velocity(divs, { opacity: 0 }, { duration: 1500 });
//简写形式
var divs = document.getElementsByTagName("div");
//e是element的缩写,p是properties的缩写，o是option的缩写
$.Velocity({ e: divs, p: { opacity: 0 }, o: { duration: 1500 });

```

## Advanced 高级

### Value Function 函数式
```
$element.velocity({
    translateX: function(i, total) {
        /* 生成 translateX' 的结束值 */
        return i * 10;
    }
});
```

### Forcefeeding
```$xslt
$element.velocity({
    /* translateX 初始值永远为0 动画结束值为500px */
    translateX: [ 500, 0 ],
    /* opacity 初始值永远为1 动画结束值为0 缓动效果为"easeInSine" */
    opacity: [ 0, "easeInSine", 1 ]
});

//进一步，在链式调用中，会很方便
$element
    /* 对于这个链式动画，在每次动画开始前 元素的 translateX 初始值还是0 */
    .velocity({ translateX: [ 500, 0 ] })
    .velocity({ translateX: 1000 });
```

## 延伸出去的Plugins
- velocity.ui.js
- VMD
- Ember & Misc