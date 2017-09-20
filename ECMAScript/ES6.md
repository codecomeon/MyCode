# ECMAScripit6

## 声明
### let
- 块级作用域
*特别的，应用了let之后，for循环中，循环控制部分是父作用域，循环体是子作用域*
- 没有声明提升
- 不允许重复声明
- TDZ Temporal dead zone 暂时性死区，即let声明前的块级作用域都属于“死区”
- 明确允许在块级作用域之中声明函数

### const
*变量不得改变引用*

### import
### class

## 解构赋值 Destructuring  本质：对象的解构
- 只要等号右边的值不是对象或数组，就先将其转为对象
- 用途：两数交换、函数传参、提取json、函数返回值、设置函数参数默认值

## 字符串扩展
- 大括号表示法,可以把非4位的码点识别成功'\u{7A}'=='\z'=='\172'=='\x7A'=='\u007A'='z'
- charPointAt(),返回32位即两个字符点的字符的码点，相反的过程则是String.fromCodePoint()
- normalize() 默认NFC\NFD\NFKC\NFKD
- includes()\startsWith()\endsWith()
- repeat()
- padStart()\padEnd()
```
'12'.padStart(10, 'YYYY-MM-DD');// "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD');// "YYYY-09-12"
```
- 模板字符串 ` ${ variety } `
```javascript
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

console.log(tmpl(data));
```
- *标签模板*
- *String.raw()*

## 正则扩展
- RegExp()构造函数传参处理
- 4个字符串对象方法，match()\replace()\search()\split()
- u修饰符（Unicode模式）、*y修饰符（sticky粘连）*
- source\flags属性
- 支持后行断言
- 


## 函数扩展
### 参数默认值：
- 默认值是惰性求值的，即如果默认值是一个表达式，则在运行时每次都会计算表达式
- 默认值传入undefined则取默认值，传入null，则取null
- 函数的length属性，表达了预期传参数，不计算默认值和rest参数

### rest参数 ...rest
- rest是一个真正的数组，纯数组
- rest是参数列表的最后一项

### name属性
- 表示函数的名字

### 箭头函数 =>
- this是定义时所在的作用域，不是使用时的作用域；因为箭头函数没有this，直接使用所在作用域的this
- 不可以当作构造函数、不可以使用arguments、不可以使用yield命令
- 嵌套箭头函数，和一般函数的逻辑顺序是一样的
```javascript
const pipeline = (...funcs) =>val => funcs.reduce((a, b) => b(a), val);

const plus1 = a => a + 1;
const mult2 = a => a * 2;
const addThenMult = pipeline(plus1, mult2);
addThenMult(5)//12
```
### (暂不需要)绑定运算符 ::
### [尾调用及优化](http://es6.ruanyifeng.com/#docs/function#尾调用优化)
### 支持函数参数尾逗号=》减少项目变更
### 支持try...catch无参=》可以在不需要错误实例的时候使用

## 数组扩展
### 强大的扩展运算符... 相当于rest参数的逆运算，把数组转为参数序列；也可以把所有具有Iterator接口的对象转化出来
```javascript
//可以灵活实现不定长的数组
const arr = [
  ...(x > 0 ? ['a'] : []),
  'b',
];

//代替apply给函数传入数组参数
function fun(a,b,c){};
var arr=[1,23,4]; 
fun(...arr);//不再需要fun.apply(null,arr)

//给数组变式调用数学库
Math.max(...[1,2,3,66]);

//将数组push入数组
[].push(...[1,2,3]);

//日期的使用
// ES5
new (Date.bind.apply(Date, [null, 2015, 1, 1]));
// ES6
new Date(...[2015, 1, 1]);
```

### Array.from() 转为纯数组,将类数组和Iterator对象
```javascript
//传两个参数的情况类似map
Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]
```

### Array.of() 新建数组
- 可以代替Array()构造函数（因为构造函数是重载的，但Array.of()的行为则是一致的）

### Array.prototype.copyWithin()  数组内拷贝
- 注意：此方法会修改数组本身
### Array.prototype.find()\.findIndex() 遍历

## 对象扩展


## Promise

### 对象状态
- pending->fulfilled\rejected
- resolved

### Promise.prototype.then(callback_resolved[,callback_rejected])
- 可以在回调中返回Promise对象，以此达到链式执行

### Promise.prototype.catch(callback_rejected)===then(null,callback_rejected)
- 可以和then链式调用，用于获取所有错误
- Promise错误具有“冒泡”性质,会一直在链式调用中传递下去
- 由于返回值还是Promise对象，所以catch本身也可以链式调用，如then().catch().catch().then().then().catch()

### Promise.all([p1,p2,p3])
- 处理多个Promise的交集，即同时fulfilled才resolve，一旦一个rejectd，立即reject

### Promise.race([p1,p2,p3])
- 处理多个Promise的并集，即一旦一个状态变化，马上取该状态为最终状态

### Promise.resolve()
- Promise.resolve('foo')===new Promise(resolve=>resolve('foo')
- 根据参数不同，有不同返回值
1. Promise实例 => Promise实例
2. thenable对象（具有名为“then”的函数） => 立即执行thenable对象中的then
3. 不具有then或者不是对象 => 返回一个resolved的Promise对象
4. 无参数 => 返回resolved的Promise对象
*注意：无参数的时候，event loop是在下轮的*
```javascript
setTimeout(function () {
  console.log('three');
}, 0);

Promise.resolve().then(function () {
  console.log('two');
});

console.log('one');
// one two undefined three
// TODO: 依据console.log在event loop中的顺序，解释undefined
```

### Promise.reject
- 返回rejected的Promise对象
- 传参会原封不动直接作为其返回值

### 有用的附加方法（自行封装）
#### done()
- 用于结束回调链，并正确获取可能抛出的错误
- 封装如下
```javascript
Promise.prototype.done=function(onFulfilled, onRejected){
    this.then(onFulfilled, onRejected)
        .catch(function(reason){
          setTimeout(()=>{throw reason},0);
        });
};
```
#### finally()
- 用于结束回调链，并且无论如何都调用callback
- 封装如下
```javascript
Promise.prototype.finally=function(callback){
  let P=this.constructor;
  return this.then(
    value=>P.resolve(callback()).then(()=>value),
    reason=>P.resolve(callback()).then(()=>{throw reason})
  );
};
```

## 应用
### 图片加载
```javascript
const preloadImage=function(path){
    return new Promise(function(resolve,reject){
      var image=new Image();
      image.onload=resolve;
      image.onerror=reject;
      image.src=path;
    })
}
```