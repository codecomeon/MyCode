// 优先队列
// 在队列的基础上，为每一个节点增加一个优先级
// 实现方式: 把节点包装成对象，加上优先级属性，然后存入数组，也就是对象数组

function PriorityQueue() {
  let items=[]
  
  function QueueElement(element,priority) {
    this.element=element
    //优先级定义
    this.priority=priority
  }
  
  this.enqueue=function (element,priority) {
    let queueElement=new QueueElement(element,priority)
    
    let added=false
    for(let i=0;i<items.length;i++){
      if(queueElement.priority<items[i].priority){
        items.splice(i,0,queueElement)
        added=true
        break
      }
    }
    if(!added){
      items.push(queueElement)
    }
  }
  
  this.print=function () {
    for(let i=0;i<items.length;i++){
      console.log(`${items[i].element} - ${items[i].priority}`)
    }
  }
  
  //其余一致
}