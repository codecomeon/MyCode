function Queue(){
  let items=[]
  
  //进入队列
  this.enqueue=function (element) {
    items.push(element)
  }
  
  //推出队列
  this.dequeue=function () {
    return items.shift()
  }
  
  //队头
  this.front=function () {
    return items[0]
  }
  
  //断言：空
  this.isEmpty=function () {
    return items.length===0
  }
  
  //队列大小
  this.size=function () {
    return items.length
  }
  
  //打印队列
  this.print=function () {
    console.log(items.toString())
  }
}

//ES6最佳实践

let Queue=(function () {
  const items=new WeakMap()
  
  class Queue2{
    constructor(){
      items.set(this,[])
    }
    enqueue(element){
      let q=items.get(this)
      q.push(element)
    }
    dequeue(){
      let q=items.get(this)
      let r=q.shift;
      return r
    }
  }
  
  return Queue2
})();