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

## 解构 Destructuring  本质：对象的解构
- 只要等号右边的值不是对象或数组，就先将其转为对象
- 用途：
- 两数交换、函数传参、提取json、函数返回值、设置函数参数默认值

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
```
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