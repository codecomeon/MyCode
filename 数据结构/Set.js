function Set() {
  //数据结构
  let items = {}
  
  //增加
  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }
  
  //删除
  this.delete = function (value) {
    if (this.has(value)) {
      delete items[value]
      return true
    }
    return false
  }
  
  //断言：是否含有
  this.has = function (value) {
    // return value in items
    return items.hasOwnProperty(value)
  }
  
  //清空
  this.clear = function () {
    items={}
  }
  
  //大小
  this.size = function () {
    // return Object.keys(items).length
    let count = 0
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        ++count;
      }
    }
    return count
  }
  
  //取得所有值
  this.values = function () {
    let values = []
    // for(let i =0,keys=Object.keys(items);i<keys.length;i++){
    //   values.push(items[keys[i]])
    // }
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        values.push(items[key])
      }
    }
    return values
  }
  
  //并集
  this.union=function (otherSet) {
    let unionSet=new Set()
    
    let values=this.values()
    for(let i=0;i<values.length;i++){
      unionSet.add(values[i])
    }
    
    values=otherSet.values()
    for(let i=0;i<values.length;i++){
      unionSet.add(values[i])
    }
    
    return unionSet
  }
  
  //交集
  this.intersection=function (otherSet) {
    let intersectionSet = new Set()
    
    let values=this.values()
    for(let i =0;i<values.length;i++){
      if(otherSet.has(values[i])){
        intersectionSet.add(values[i])
      }
    }
    return intersectionSet
  }
  
  //差集
  this.difference=function (otherSet) {
    let differenceSet=new Set()
    
    let values=this.values()
    for (let i=0; i<values.length;i++){
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i])
      }
    }
    
    return differenceSet
  }
  
  //子集
  this.subset=function (otherSet) {
    if(this.size()>otherSet.size()){
      return false
    }else{
      let values=this.values()
      for(let i=0;i<values.length;i++){
        if(!otherSet.has(values[i])){
          return false
        }
      }
    }
    return true
  }
}