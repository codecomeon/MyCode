//循环队列
//击鼓传花：指定数字的倍数被淘汰

function hotPotato(nameList,num) {
  let queue=new Queue()
  
  for(let i=0;i<nameList.length;i++){
    queue.enqueue(nameList[i])
  }
  
  let eliminated=''
  
  //TODO：天才想法
  while(queue.size()>1){
    for(let i = 0;i<num;i++){
      queue.enqueue(queue.dequeue())
    }
    eliminated=queue.dequeue()
    console.log(eliminated+'在击鼓传花游戏中被淘汰')
  }
  
  return queue.dequeue()
}

let names=['John','Jack','Camila','Ingrid','Carl'],
    winner=hotPotato(names,7)

console.log('The winner is: '+ winner)