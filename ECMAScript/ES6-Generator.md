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
function * foo(x, y) {  };
function *foo(x, y) {  };
function* foo(x, y) {  };
function*foo(x, y) { };
```

## yield

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
### for...of
- 只要注意一点，遍历yield时，一旦done属性为true，终止遍历取值，所以return后面的名字不会被取到
```javascript
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return console.log('yes');//这里console的返回值应该是undefined，这个undefined不会被遍历到
}
for(let v of foo()){
    console.log(v);
}
//1 2 3 4 yes 这里的yes是console.log输出的
```
```javascript
//为对象添加遍历属性接口
// 1. 直接创建临时Generator对象进行遍历
function* objectEntries(obj){
	let propKeys=Reflect.ownKeys(obj);
	for(let propKey of propKeys){
		yield [propKey,obj[propKey]]
	}
}
let jane={first:'Jane',last:'Doe'}
for(let [key,value] of objectEntries(jane)){
	console.log(`${key}属性：${value}`);
}

//2. 显式添加iterator接口
function* objectEntries(){
	let propKeys=Object.keys(this);
	for(let propKey of propKeys){
		yield [propKey,this[propKey]]
	}
}
let jane={first:'Jane',last:'Doe'}

jane[Symbol.iterator]=objectEntries;
for(let [key,value] of jane){
    console.log(`${key}属性：${value}`);
}
```

## throw()方法 使得函数内外都可以捕获错误
- 传入的参数就是一个错误信息
```javascript
function* g() {
  try{
      yield 1;
  }catch(e){
      console.log(e);
  }
}
var i=g();
i.next();
try{
    i.throw('这是方法抛出的错误');
    i.throw('这还是方法抛出的错误');
}catch (e){
    console.log(e);
}
```
- 和try、catch、throw的关系 见[阮-ES6](http://es6.ruanyifeng.com/#docs/generator#Generator-prototype-throw)

## return()方法，手动结束
- 传入一个参数放在{value:${ 这里是参数 },done:true}里面
- 特殊情况：如果Generator内部有try...finally存在，一旦进入try...finally模块则会延迟return，先把finally运行完
```javascript
function* numbers () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.return(7); // { value: 4, done: false }
//return会延迟到
g.next(); // { value: 5, done: false }
g.next(); // { value: 7, done: true }
```
## yield*
- 嵌套Generator
- 执行遍历
```javascript
// 下面是二叉树的构造函数，
// 三个参数分别是左树、当前节点和右树
function Tree(left, label, right) {
  this.left = left;
  this.label = label;
  this.right = right;
}

// 下面是中序（inorder）遍历函数。
// 由于返回的是一个遍历器，所以要用generator函数。
// 函数体内采用递归算法，所以左树和右树要用yield*遍历
function* inorder(t) {
  if (t) {
    yield* inorder(t.left);
    yield t.label;
    yield* inorder(t.right);
  }
}

// 下面生成二叉树
function make(array) {
  // 判断是否为叶节点
  if (array.length == 1) return new Tree(null, array[0], null);
  return new Tree(make(array[0]), array[1], make(array[2]));
}
let tree = make([[['a'], 'b', ['c']], 'd', [['e'], 'f', ['g']]]);

// 遍历二叉树
var result = [];
for (let node of inorder(tree)) {
  result.push(node);
}

result
// ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```
