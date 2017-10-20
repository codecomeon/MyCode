const Test=function () {
  this.name=1;
  this.say=()=>{
    console.log(this.name);
  };
  this.prototype={
    say:function () {
      console.log(this);
    }
  };
};

const newTest=function () {
  this.id=1;
};
newTest.prototype=new Test();

let test = new Test();

console.log(new newTest());
new newTest().say();