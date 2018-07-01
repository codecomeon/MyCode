function Dictionary() {
  let items={}

  //字典项定义
  this.set = function (key,value) {
    items[key]=value
  }

  //删除
  this.delete=function (key) {
    if(this.has(key)){
      delete items[key]
      return true
    }
    return false
  }

  //断言：含有
  this.has=function (key) {
    return key in items
  }

  //获得指定键的值
  this.get=function (key) {
    return this.has(key)?items[key]:undefined
  }

  //清空
  this.clear=function () {
    items={}
  }

  //大小
  this.size=function () {
    let count

    for(let k in items){
      if(items.hasOwnProperty(k))
        ++count
    }
    return count
  }

  //键数组
  this.keys=function () {
    return Object.keys(items)
  }

  //值数组
  this.values=function () {
    let values=[]
    for(let key in items){
      if(this.has(key)){
        values.push(items[key])
      }
    }
    return values
  }

  //获取数据实体
  this.getItems=function () {
    return items
  }
}

export default Dictionary;