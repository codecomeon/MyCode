// //这个函数返回a的平方加b的平方
// function pingfanghe(a, b) {
//     return pingfang(a) + pingfang(b);
//     //返回m的平方
//     function pingfang(m) {
//         return Math.pow(m, 2)
//     }
//     return pingfang;
// }

// var a=pingfanghe(1,2);//函数表达式,使得pingfang()变为匿名函数
// a(3);

// var inner;

// function outer(){
//     var a=3;
//     var b=4;
//     inner=function(){
//         console.log(a);
//         console.log(b);
//     }
// }
// outer();
// inner();

//这个示例展示了闭包保存被定义作用域的效果
// function outer() {
//     var count = 0;
//     function inner() {
//         count++;
//         console.log(count);
//     } return inner;
// }
// var inn1 = outer();//

// 错误：回收机制，不是让父函数固化，将函数对象的引用属性设为null，即Function.name=null;
// 正确：将父函数的内容全部复制到子函数的scope里面
// var inn2 = outer();

// inn1();	//1
// inn1();	//2
// inn1(); //3
// inn1(); //4
// inn2(); //1
// inn2(); //2
// inn1(); //5

// //怎么做到刷新父级作用域呢？一种办法是重新赋一个新的作用域，原来的作用域失去了标识符就退出内存
// var inn1 = outer();
// inn1();

//是不是每次用完闭包都要手动回收父级呢？


//不是固化作用域
function outer() {
    var count = 0;
    function inner() {
        count++;
        console.log(count);
        inner2();
    } 
    function inner2(){
        count++;
    }
    return inner;
}
var inn1 = outer();//

inn1();//1
inn1();//3
inn1();//5
inn1();//7