
# 两个DOM伪数组的区别和用处

## getElementsByTagName => HTMLCollections类
```javascript
// 如果有一个ID为'test'的元素，可以直接取得
document.getElementsByTagName('div').test
```
- 如上，ID元素会被直接列在HTMLCollections对象里的同名键中
- item(),length,namedItem()

## querySelector => NodeList类
```javascript
document.querySelectorAll('div').forEach((a,b,c)=>{
	console.log('第一个参数:' + a + '值');
	console.log('第二个参数:' + b + '键');
   console.log('第三个参数:' + c + '自身');
});
```
- forEach()
- item(),length
- 典型ES6对象特性，entries,keys,values

## 共性
```javascript
for(let i=0;i<list.length;i++){
	// 通过item方法获取值
	console.log(list.item(i))
}
```
- 实际上，通过控制台观察发现，两者都具备iterator接口，都可以支持for ... of语法

## 相比来讲，querySelector内置forEach更方便

## 引入Arguments来说事
```javascript
const {
	callee,
   length,
   ['所有传入的参数']
}=arguments;
```
- arguments也具备iterator接口

## 更多还需抽时间摸索
