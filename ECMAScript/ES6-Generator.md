# Generator

## Generator函数
- 异步编程解决方案
- 理解方式:语法
```javascript
//语法：状态机，封装多个内部状态
//**重要：执行Generator函数会返回一个遍历器对象**
function* helloWorldGenerator(){
    //这里写第一段代码
    yield 'hello';//状态hello
    //第二段代码
    yield 'world';//状态world
    //第三段代码
    return 'ending';//结束执行
}
//使用方法：
//先生成一个指针对象
var ge=helloWorldGenerator();
//next方法执行代码，在yield处停止并返回value
ge.next();// { value:'hello', done:false }
ge.next();// { value:'world', done:false }
ge.next();// { value:'ending', done:true }
//直到结束；再执行下去就是undefined
ge.next();// { value:undefined, done:true }
```
- 写法：最佳-function* foo(x, y) { ... }
```javascript
//四种写法都可以
function * foo(x, y) { ... };
function *foo(x, y) { ... };
function* foo(x, y) { ... };
function*foo(x, y) { ... };
```

## next()
- 由于yield表达式的执行没有返回值，所以可以向next()传入一个参数，当作函数内部执行yield表达式后的返回值
```javascript
//流程控制
//下面的例子表示为next()传参可以影响Generator内部的一种写法
function* foo() {
  for(var i=0;true;i++){
      var reset=yield i;
      if(reset) i=-1;
      return 1;
  }
}
var g=foo();
g.next();// { value: 0, done: false }
g.next();// { value: 1, done: false }
//上面没有传入参数，接下来传一个参数进去
g.next(true);// { value: 0, done: false }
//会发现，流程被外部注入的数据更改了，这样
```

## 配合Iterator接口
- 理解：遍历器生成函数
```javascript
var myIterable={};
//使对象获得iterator接口
myIterable[Symbol.iterator]=function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable];//[1,2,3]
```
