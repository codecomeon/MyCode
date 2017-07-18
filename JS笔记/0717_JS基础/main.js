// alert("Hello World!");

// console.log(8);
// console.log(036);
// console.log(0036);
// console.log(0o36);
// console.log(0O36);
// console.log(0x36);
// console.log(0xf);
// console.log('('+0xff+','+0xff+','+0xff+')');
// console.log('('+0xaf+','+0xcf+','+0xaf+')');
// console.log('('+0xbb+','+0xdf+','+0xff+')');
// console.log('('+0xcc+','+0xdd+','+0xee+')');

// console.log(30);
// console.log(50);
// console.log(0o36);
// console.log(0o62);
// console.log(0x1e);
// console.log(0x32);

// console.log(5e5);
// console.log(.2e-1);
// console.log(2e123124214421);//Infinity
// console.log(Infinity);//Infinity
// console.log(0/0);//NaN

console.log(a);

// a=100;

var a=100;

console.log( typeof a);

var b="Thanks！";
console.log(typeof b);


console.log(1+"2");//结果都是12
console.log("1"+2);//12

//从左到右的顺序判定"+"的意义
console.log("1"+2+3);//123
console.log(1+2+"3");//33

// var b=prompt("是的写数字","12");
// console.log(b);

//仍然是从左进行解释，先计算出一个十进制值然后转成字符串，作为一个字符串进行转换成十进制
//简单记法：8进制的111转成10进制，从后往前读

console.log(parseInt("123abc"));//123
console.log(parseInt("abc123"));//NaN
console.log(parseInt(111,8));//73
console.log(parseInt(0xf,16));//21
console.log(parseInt("0xf",16));//15
console.log(parseInt("0uf",16));//0
console.log(parseInt("15e6",10));//15
console.log(parseInt(15e6,10));//15000000

console.log(parseFloat("123.333333333333333333333333abdcdsafdsaf"));
//123.33333333333333 有上限

console.log(Math.sqrt(-1)); // NaN，中间负值返回NaN

console.log(Infinity*0);//NaN

console.log(2**3);//幂

console.log(typeof NaN);//number
console.log(typeof null);//object

console.log("10"-"4");//6
console.log("10"/"4");//2.5
console.log("10"*"4");//40
console.log("10"%"4");//2

// console.log(-);//报错
console.log("%");//2


var b=prompt("请输入六边形边长","边长");
alert("这是它的面积"+(3*Math.sqrt(3)/2*Math.pow(b,2)));

var d=prompt("星期天请输入7，显示时为0","星期数");
alert("今天的1000天后是星期"+(6+parseInt(d))%7);

alert(Math.pow(((23+Math.pow(5,7))/45),2));

var c=prompt("请输入摄氏度","单位");
alert(9/5*c+32);

var n=prompt("请输入一个三位数","数字");
alert(n%10+(n%100-n%10)/10+(n-n%100)/100);



