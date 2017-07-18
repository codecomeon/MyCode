var a = false + true && 13;
console.log(a);

var i = 9;
console.log(++i % 5);
console.log(i);

var a = -15;
console.log(false + a++ + true > 8 && 13 || 6);


// if(true) alert("可以");
// else alert("事实证明不行");

// if(undefined){

// }
// else if(-1){

// }
// else if(""){

// }
// else;


// var w=parseFloat(prompt("这是一个BMI诊断器：\n请首先输入您的体重","单位:kg"));
// var h=parseFloat(prompt("这是一个BMI诊断器：\n请接着输入您的身高","单位:m"));
// var bmi=parseInt((w/Math.pow(h,2))*10)/10;
// if(bmi<=0){
//     alert("输入错误，请重新输入");
// }else if(bmi>0 && bmi<18.5){
//     alert("您的BMI指数为"+bmi+",根据BMI，初步诊断您的体重过轻了\n建议：可不能再减肥了哦~");
// }else if(bmi<25){
//     alert("您的BMI指数为"+bmi+",根据BMI，初步诊断您的体重很正常\n建议：只要继续保持就可以了");
// }else if(bmi<28){
//     alert("您的BMI指数为"+bmi+",根据BMI，初步诊断您的体重过重了\n建议：需要控制一下饮食，加强锻炼哦~");
// }else if(bmi<32){
//     alert("您的BMI指数为"+bmi+",根据BMI，初步诊断您比较肥胖\n建议：这可不是好事，得治~~");
// }else if(bmi>=32){
//     alert("您的BMI指数为"+bmi+",根据BMI，初步诊断您已经非常肥胖了\n建议：建议及早住院治疗~");
// }else{
//     alert("您的BMI指数为"+bmi+"很明显，这不符合常识\n不好意思，也许您的输入有误请重新输入~");
// }



// document.querySelector('div.button').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

var b=5;

console.log(b>3?b+=2:b+=4); 
//console.log(if(b>3){b+=2;}else{b+=4}); 这两条代码不一样，但
if(b>3){b+=2;}else{b+=4}
console.log(b);

switch(b){
    case 1:
        {b+=1;}
        break;
    default:
        b--;
}

var foo = 2;
switch (foo) {
    case 0:case 1:case 2:case 3:
        alert('yes');
        break;
    default:
        alert('not');
}
