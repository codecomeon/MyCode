//散列的思想就是：
//用散值来存取数据
//实现有下面的散列表以及散列集合（HashSet）

function HashTable() {
  let table=[]
  
  //计算散值，但是有可能生成冲突值，解决方案在底部
  let loseloseHashCode=function (key) {
    let hash=0
    for(let i=0;i<key.length;i++){
      hash+=key.charCodeAt(i)
    }
    return hash % 37
  }
  
  //增加项
  this.put=function (key,value) {
    let position=loseloseHashCode(key)
    console.log(position+' - '+key)
    table[position]=value
  }
  
  //获得项
  this.get=function (key) {
    return table[loseloseHashCode(key)]
  }
  
  //删除项
  //不能删除指定的元素以及它的位置，否则会影响其他的元素的读取
  this.remove=function (key) {
    table[loseloseHashCode(key)] = undefined
  }
}

//散值冲突
//1. 最简单的：分离链接，通过把每一个位置的数据结构转为链表来存储
//这里思路比较重要：相同的位置按照顺序加入到链表中

//2. 线性探查：如果产生冲突，就向后寻找空位置存放或者可用位置读取

//更好的散列
var djb2HashCode=function (key) {
  var hash=5381
  for(var i=0;i<key.length;i++){
    hash=hash*33+key.charCodeAt(i)
  }
  return hash % 1013
}