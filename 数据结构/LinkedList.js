function LinkedList() {
  
  //节点
  let Node = function (element) {
    this.element = element;
    this.next = null;
  }
  
  //表大小
  let length = 0
  
  //全局头部变量
  let head = null;
  
  //尾插
  this.append = function (element) {
    let node = new Node(element),
        current
    
    if (head === null) {
      head = node
    } else {
      current = head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    length++
  }
  //指定位置插入
  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element),
          current = head,
          previous,
          index = 0
      
      if (position === 0) {
        node.next = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      
      length++
      
      return true
    } else {
      return false
    }
  }
  //指定位置删除，并返回删除的节点
  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head,
          previous,
          index = 0
      
      if (position === 0) {
        head = current.next
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      
      length--
      
      return current.element
    } else {
      return null
    }
  }
  //指定节点删除
  this.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
  }
  //查询节点位置
  this.indexOf = function (element) {
    let current = head,
        index = -1
    
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
  //断言：空
  this.isEmpty = function () {
    return length === 0
  }
  //表大小
  this.size = function () {
    return length
  }
  //返回表头
  this.getHead = function () {
    return head
  }
  //拼接字符串
  this.toString = function () {
    let current = head,
        string = ""
    
    while (current) {
      string += current.element + (current.next ? 'n' : '');
      current = current.next
    }
    return string
  }
  //打印
  this.print = function () {
  }
}