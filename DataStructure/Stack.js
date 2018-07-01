function Stack() {
  let items=[];
  //入栈
  this.push=function (element) {
    items.push(element);
  };
  //出栈
  this.pop=function () {
    return items.pop();
  };
  //取得栈顶
  this.peek=function () {
    return items[items.length-1];
  };
  //断言：空
  this.isEmpty=function () {
    return items.length === 0;
  };
  //栈大小
  this.size = function () {
    return items.length;
  };
  //清空栈
  this.clear=function () {
    items=[];
  };
  //打印栈
  this.print=function () {
    console.log(items.toString());
  }
}

//  最佳实践
//  let Stack=(function () {
//    const items=new WeakMap();
//    class Stack{
//      constructor(){
//        set(this,[]);
//      }
//    }
//    return Stack;
//  })

//  @应用
//  @进制转换
//  1. 十进制到二进制
function divideBy2(decNumber) {
  var remStack=new Stack(),
      rem,
      binaryString='';

  while(decNumber>0){
    rem=Math.floor(decNumber%2);
    remStack.push(rem);
    decNumber=Math.floor(decNumber/2);
  }

  while(!remStack.isEmpty()){
    binaryString+=remStack.pop().toString();
  }

  return binaryString;
}

//  2. 进制转换
function baseConverter(decNumber,base) {
  var remStack=new Stack(),
      rem,
      baseString='',
      digits='0123456789ABCDEF';
  while(decNumber>0){
    rem=Math.floor(decNumber%base);
    remStack.push(rem);
    decNumber=Math.floor(decNumber%base);
  }
  while(!remStack.isEmpty){
    baseString+=digits[remStack.pop()];
  }
  return baseString;
}

export default Stack;