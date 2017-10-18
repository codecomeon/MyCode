const Test=function () {
  this.name=1;
  this.say=()=>{
    console.log(this.name);
  };
};

let test = new Test();

console.log(new Test());