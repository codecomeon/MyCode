// var cars = ["不是", "是的", "不是", "可以是", "真不可以是", "真的可以的"];


// document.write("数组cars开始!<br>");
// document.write(cars[0] + "<br>");
// document.write(cars[1] + "<br>");
// document.write(cars[2] + "<br>");
// document.write(cars[3] + "<br>");
// document.write(cars[4] + "<br>");
// document.write(cars[5] + "<br>");
//var sum;
// for (var sum = 0, i = 0; sum < 10; sum += 2) {
//     console.log(i);
//     i++;
// }
// var sum;
// console.log(i);
// console.log(sum);


// var n=parseInt(prompt("请输入一个数，代码将为你判断是水仙花数，谢谢！"));
// for()

//
// for(var i=2;i<=100;i++){
//     var flag=true;//用一个boolean作为标记，是否为素数
//     for(var j=2;j<i;j++){
//         if(i%j==0) {
//             flag=false;//一旦有一个数可以整除它，设置它不是素数
//         }
//     }
//     //if是或者不是
//     if(flag) console.log(i);
// }

// var sum = 0;
// for (var i = 2; i <= 100; i++) {
//     var count = 0;
//     for (var j = 2; j < i; j++) {
//         if (i % j == 0) {
//             count = 1;
//         }
//         if (count == 0) {
//             sum++;
//             console.log(i);
//         }
//     }
// }
// console.log(sum);

// for(var i=6;i<1000;i++){
//     if(i%5==0||i%6==0){
//         console.log(i);
//     }
// }

// var n=parseInt(prompt("请输入一个数"));
// for(var i=1;i<=n;i++){
//     if(n%i==0) console.log(i);
// }

//踩地雷1-100
var h=parseInt(Math.random()*100)+1;
var max=100,min=1;
do{
    var a=parseInt(prompt("请输入一个数，当前地雷所在数下限是"+min+"上限是"+max));
    if(a!=h){
        if(a>h) max=a
        else min=a;
        h=parseInt(Math.random()*(max-min+1))+min;
        console.log(h);
    }
    else{
        alert("你踩雷了,游戏结束！");
        break;
    }
}while(true)
