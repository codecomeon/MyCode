// function fun(a){
//     console.log("这"+a+"不是");
// }

// fun(4);
// fun("我");

function sum(a,b){
    console.log(a + b);	
}
sum(2);//NaN,过程是2+Undefined=NaN



// foo();//此时去调用函数foo()
// var foo;

// function foo(){
//     console.log(1);  
// }

// foo=function(){console.log(2)};
// foo();//此时的foo引用的是匿名函数

//递归死循环
// foo(2);

// function foo(a){
//     console.log(foo(2));
//     return a;
    
// }

// function factorial(n){
//     if(n==1) return 1
//     else  return n*factorial(n-1);
// }
// var sum=0;
// for(var i=1;i<=10;i++){
//     sum+=factorial(i);
// }
// console.log(sum);

// //语法错误，临时产生函数
// sayHi();

// if(false){
//     function sayHi(){
//         alert("Hi!");
//     }
// }else{
//     function sayHi(){
//         alert("Yo");
//     }
// }

// //第二种方法...目的在于函数分支定义可以在代码的任意位置
// sayHi();
// var sayHi;
// if (true) {
//     sayHi = function () {
//         alert("Hi!");
//     };
// } else {
//     sayHi = function () {
//         alert("Yo!");
//     };
// }

// //返回值问题
// function returnplus(a){
//         return alert(a);
//     }
//     var a=returnplus(2);
//     console.log(a);


// var a=6;
// var b=a;
// a+=2;
// console.log(b);

// +function() {
//     console.log(1);
// }();
// -function() {
//     console.log(2);
// }();
// (function() {
//     console.log(3);
// })();

//闭包
// function outer() {
//     var a = 333;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }
// console.log(outer());
// var inn = outer();//此时outer还没有结束，将局部变量固化
// inn(); //弹出333
// inn();
// console.log(outer.prototype);
// var inn;

// function fn() {
//     a = 2;		//这个a第一次赋值的时候，并没有var过，
//     //所以就自动的在全局的范围帮你var了一次
// }

// fn();
// console.log(a);
// console.log(fn.prototype);
