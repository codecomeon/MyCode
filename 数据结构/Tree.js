//树

//BST 二叉搜索树 BinarySearchTree 左节点小于父节点 右节点大于等于父节点
function BinarySearchTree() {
  let Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null
  
  //插入节点内部函数
  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
  
  //插入
  this.insert = function (key) {
    let newNode = new Node(key)
    
    if (root = null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
  
  //中序遍历：可以应用于树排序
  var inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }
  
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }
  //可以调用一下:tree.inOrderTraverse(val=>console.log(val))
  
  //先序遍历：可以应用于打印结构化文档
  var preOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }
  
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }
  
  //后序遍历：可以应用于计算目录中所有文件的大小
  var postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }
  
  //搜索最小值和最大值
  var minNode=function (node) {
    if(node){
      while(node && node.left!==null){
        node=node.left
      }
      
      return node.key
    }
    return null
  }
  var maxNode=function (node) {
    if(node){
      while(node && node.right !==null){
        node=node.right
      }
      return node.key
    }
    return null
  }
  
  this.min=function () {
    return minNode(root)
  }
  this.max=function () {
    return maxNode(root)
  }
  
  //搜索特定值
  var searchNode=function (node,key) {
    if(node===null){
      return false
    }
    if(key<node.key){
      return searchNode(node.left,key)
    }else if(key>node.key){
      return searchNode(node.right,key)
    }else{
      return true
    }
  }
  
  this.search=function (key) {
    return searchNode(root, key)
  }
  
  //移除特定节点
  var removeNode=function (node,key) {
    if(node===null){
      return null
    }
    if(key<node.key){
      node.left=removeNode(node.left,key)
      return node
    }else if(key>node.key){
      node.right=removeNode(node.right,key)
      return node
    }else{
      //如果是一个叶节点
      if(node.left===null && node.right===null){
        node = null
        return node
      }
      
      //单子节点的节点
      if(node.left===null){
        node=node.right
        return node
      }else if(node.right===null){
        node=node.left
        return node
      }
      
      //双子节点的节点
      var aux=findMinNode(node.right)
      node.key=aux.key
      node.right=removeNode(node.right,aux.key)
      return node
    }
    
    var findMinNode=function (node) {
      while(node && node.left !== null){
        node=node.left
      }
      return node
    }
  }
  
  this.remove=function (key) {
    root=removeNode(root,key)
  }
}

//AVL 自平衡树 Adelson-Velskii-Landi树
//计算平衡因子=左高与右高的绝对插值，如果大于1，则应该进行平衡
var heightNode=function (node) {
  if(node===null){
    return -1
  }else{
    return Math.max(heightNode(node.left),heightNode(node.right))
  }
}

//TODO：如何实现平衡？
//思路：旋转，具体见http://goo.gl

//更高效的树：红黑树